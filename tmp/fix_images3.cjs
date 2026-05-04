const fs = require('fs');
const path = require('path');

async function fixImages() {
    try {
        const res = await fetch('https://dummyjson.com/products?limit=250');
        const data = await res.json();
        const dummyProducts = data.products;

        if (!dummyProducts) {
            console.error("Failed to fetch dummy products:", data);
            return;
        }

        const dataPath = path.join(__dirname, 'src', 'context', 'data.js');
        const lines = fs.readFileSync(dataPath, 'utf-8').split('\n');
        let matchCount = 0;

        // Dummy JSON often has missing products, we can also query the search API or use existing ones
        // But for our script, we just iterate whatever we got.

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            if (line.includes('image: "') && line.includes('id: "')) {
                const nameMatch = line.match(/name:\s*"([^"]+)"/);
                const catMatch = line.match(/category:\s*"([^"]+)"/);
                const subCatMatch = line.match(/subCategory:\s*"([^"]+)"/);

                if (nameMatch) {
                    const name = nameMatch[1].toLowerCase();
                    const cat = catMatch ? catMatch[1].toLowerCase() : '';
                    const subCat = subCatMatch ? subCatMatch[1].toLowerCase() : '';

                    let bestImage = null;
                    let bestScore = -1;

                    for (const dp of dummyProducts) {
                        const dpTitle = dp.title.toLowerCase();
                        const dpCat = dp.category.toLowerCase();
                        let score = 0;

                        // Try to match tags/words from Bluvanta name to dummyjson title
                        const words = name.split(' ');
                        for (const w of words) {
                            if (w.length > 2 && dpTitle.includes(w)) score += 10;
                            if (w.length > 2 && dpCat.includes(w)) score += 5;
                        }

                        // Category level matching
                        if (cat === dpCat || dpCat.includes(cat)) score += 3;
                        if (subCat && dpCat.includes(subCat)) score += 3;

                        // Men/Women clothing
                        if (cat === 'fashion') {
                            if (subCat === 'women' && (dpCat === 'womens-dresses' || dpCat === 'womens-shoes' || dpCat === 'womens-bags' || dpCat === 'womens-jewellery')) score += 5;
                            if (subCat === 'men' && (dpCat === 'mens-shirts' || dpCat === 'mens-shoes' || dpCat === 'mens-watches')) score += 5;
                            if (name.includes('kurti') || name.includes('saree') || name.includes('suit') || name.includes('dress')) {
                                if (dpCat === 'womens-dresses') score += 10;
                            }
                        }

                        // Beauty
                        if (cat === 'beauty' && (dpCat === 'beauty' || dpCat === 'fragrances' || dpCat === 'skin-care')) score += 5;

                        // Electronics
                        if (cat === 'electronics' && (dpCat === 'smartphones' || dpCat === 'laptops' || dpCat === 'mobile-accessories')) score += 5;

                        // Home Living
                        if (cat === 'home living' && (dpCat === 'home-decoration' || dpCat === 'furniture' || dpCat === 'lighting')) score += 5;

                        // Grocery
                        if (cat === 'grocery' && dpCat === 'groceries') score += 5;

                        if (score > bestScore) {
                            bestScore = score;
                            bestImage = dp.thumbnail || (dp.images && dp.images.length > 0 ? dp.images[0] : null);
                        }
                    }

                    // Fallback to exactly Dummyjson if no score found, just use the first one sequentially? 
                    // No, best score handles it because bestScore starts at -1, so it will at least take the first product as worst case if everything is 0.

                    if (bestImage) {
                        lines[i] = line.replace(/image:\s*"[^"]+"/, `image: "${bestImage}"`);
                        matchCount++;
                    }
                }
            }
        }

        fs.writeFileSync(dataPath, lines.join('\n'));
        console.log(`Successfully mapped ${matchCount} dummyjson images to data.js!`);
    } catch (e) {
        console.error(e);
    }
}

fixImages();
