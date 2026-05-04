const fs = require('fs');
const path = require('path');

async function fixImages() {
    try {
        console.log("Fetching DummyJSON products...");
        const res = await fetch('https://dummyjson.com/products?limit=250');
        const data = await res.json();
        const dummyProducts = data.products;

        if (!dummyProducts) {
            console.error("Failed to fetch dummy products:", data);
            return;
        }

        // Create a map of categories to DummyJSON products
        const catMap = {};
        for (const dp of dummyProducts) {
            const cat = dp.category;
            if (!catMap[cat]) catMap[cat] = [];
            catMap[cat].push(dp.thumbnail);
        }

        // Mapping from our categories to DummyJSON categories
        const ourToDummy = {
            'electronics': ['smartphones', 'laptops'],
            'fashion': ['mens-shirts', 'womens-dresses', 'tops', 'mens-shoes', 'womens-shoes', 'mens-watches', 'womens-watches', 'womens-bags', 'womens-jewellery'],
            'beauty': ['beauty', 'fragrances', 'skin-care'],
            'home living': ['furniture', 'home-decoration', 'kitchen-accessories'],
            'gadgets': ['mobile-accessories', 'smartphones', 'laptops', 'tablets'],
            'grocery': ['groceries'],
            'sports': ['sports-accessories'],
            'automotive': ['motorcycles', 'vehicle']
        };

        const dataPath = path.join(__dirname, 'src', 'context', 'data.js');
        const lines = fs.readFileSync(dataPath, 'utf-8').split('\n');

        let matchCount = 0;
        let updateCount = 0;

        let currentProduct = null;

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];

            if (line.includes('{') && !line.includes('};')) {
                let foundId = false;
                for (let j = 0; j < 5 && (i + j) < lines.length; j++) {
                    if (lines[i + j].includes('"id":') || lines[i + j].includes('id:')) {
                        foundId = true;
                        break;
                    }
                }
                if (foundId) {
                    currentProduct = {};
                }
            }

            if (currentProduct) {
                const nameMatch = line.match(/"?name"?:\s*"([^"]+)"/);
                const idMatch = line.match(/"?id"?:\s*"([^"]+)"/);
                const categoryMatch = line.match(/"?category"?:\s*"([^"]+)"/);
                const subCategoryMatch = line.match(/"?subCategory"?:\s*"([^"]+)"/);
                const imageMatch = line.match(/"?image"?:\s*"([^"]+)"/);

                if (nameMatch) currentProduct.name = nameMatch[1];
                if (idMatch) currentProduct.id = idMatch[1];
                if (categoryMatch) currentProduct.category = categoryMatch[1];
                if (subCategoryMatch) currentProduct.subCategory = subCategoryMatch[1];
                if (imageMatch) {
                    currentProduct.image = imageMatch[1];
                    currentProduct.imageLine = i;
                }

                if (line.includes('}') || i === lines.length - 1) {
                    if (currentProduct.name && currentProduct.image) {
                        matchCount++;

                        let bestImage = null;
                        let bestScore = -1;

                        const name = currentProduct.name;
                        const lowerName = name.toLowerCase();
                        const lowerCat = currentProduct.category ? currentProduct.category.toLowerCase() : '';

                        // 1. Try Specific Match
                        for (const dp of dummyProducts) {
                            const dpTitle = dp.title.toLowerCase();
                            const dpCat = dp.category.toLowerCase();
                            let score = 0;

                            const words = lowerName.split(' ');
                            for (const w of words) {
                                if (w.length > 2 && dpTitle.includes(w)) score += 10;
                            }

                            if (lowerCat === dpCat || dpCat.includes(lowerCat)) score += 5;

                            if (score > bestScore) {
                                bestScore = score;
                                bestImage = dp.thumbnail;
                            }
                        }

                        let finalImage = currentProduct.image;

                        if (bestScore > 10 && bestImage) {
                            finalImage = bestImage;
                        }
                        else {
                            // 2. Try Category Match fallback
                            const dummyCats = ourToDummy[lowerCat] || [];
                            let fallbackImages = [];
                            for (const dc of dummyCats) {
                                if (catMap[dc]) fallbackImages = fallbackImages.concat(catMap[dc]);
                            }

                            if (fallbackImages.length > 0) {
                                // Use a deterministic "random" image based on product ID
                                const index = Math.abs(currentProduct.id.split('').reduce((a, b) => a + b.charCodeAt(0), 0)) % fallbackImages.length;
                                finalImage = fallbackImages[index];
                            } else {
                                // 3. Global random from DummyJSON if category mapping fails
                                const index = Math.abs(currentProduct.id.split('').reduce((a, b) => a + b.charCodeAt(0), 0)) % dummyProducts.length;
                                finalImage = dummyProducts[index].thumbnail;
                            }
                        }

                        if (finalImage !== currentProduct.image) {
                            updateCount++;
                            lines[currentProduct.imageLine] = lines[currentProduct.imageLine].replace(`"${currentProduct.image}"`, `"${finalImage}"`);
                        }
                    }
                    currentProduct = null;
                }
            }
        }

        fs.writeFileSync(dataPath, lines.join('\n'));
        console.log(`Total products scanned: ${matchCount}`);
        console.log(`Total images updated: ${updateCount}`);
        console.log("Image mapping complete!");

    } catch (e) {
        console.error("Error in fixImages:", e);
    }
}

fixImages();
