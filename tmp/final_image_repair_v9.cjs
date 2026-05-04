const fs = require('fs');
const path = require('path');

function repairData() {
    const dataPath = path.join(__dirname, 'src', 'context', 'data.js');
    const content = fs.readFileSync(dataPath, 'utf-8');
    const lines = content.split('\n');

    const REPLACEMENTS = {
        "Urad Dal (Split)": "https://cdn.dummyjson.com/product-images/groceries/rice/thumbnail.webp", // Generic pulse
        "Moong Dal (Yellow)": "https://cdn.dummyjson.com/product-images/groceries/rice/thumbnail.webp", // Generic pulse
        "Premium Poha (Thick)": "https://cdn.dummyjson.com/product-images/groceries/rice/thumbnail.webp",
        "Rolled Oats (Steel Cut)": "https://cdn.dummyjson.com/product-images/groceries/rice/thumbnail.webp",
        "Red Chilli Powder": "/products/red_chilli_powder.png",
        "Coriander Powder (Dhania)": "/products/turmeric_powder.png", // Similar appearance
        "Whole Cumin Seeds (Jeera)": "/products/turmeric_powder.png",
        "Mustard Seeds (Rai)": "/products/turmeric_powder.png",
        "Kitchen King Garam Masala": "/products/red_chilli_powder.png",
        "Traditional Thick Curd": "https://cdn.dummyjson.com/product-images/groceries/milk/thumbnail.webp",
        "Amul Salted Butter": "https://cdn.dummyjson.com/product-images/groceries/milk/thumbnail.webp",
        "Processed Cheddar Cheese": "https://cdn.dummyjson.com/product-images/groceries/milk/thumbnail.webp",
        "Fresh Paneer (Malai)": "https://cdn.dummyjson.com/product-images/groceries/milk/thumbnail.webp",
        "Whole Wheat Bread (Large)": "https://cdn.dummyjson.com/product-images/groceries/eggs/thumbnail.webp",
        "Digestive Wheat Biscuits": "https://cdn.dummyjson.com/product-images/groceries/eggs/thumbnail.webp",
        "Spicy Masala Namkeen": "https://cdn.dummyjson.com/product-images/groceries/eggs/thumbnail.webp",
        "Instant Masala Noodles": "https://cdn.dummyjson.com/product-images/groceries/eggs/thumbnail.webp",
        "Sandalwood Beauty Soap": "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
        "Premium Detergent Powder": "https://cdn.dummyjson.com/product-images/beauty/powder-canister/thumbnail.webp",
        "Antimicrobial Dishwash Soap": "https://cdn.dummyjson.com/product-images/beauty/powder-canister/thumbnail.webp",
        "Fluoride Protection Toothpaste": "https://cdn.dummyjson.com/product-images/beauty/powder-canister/thumbnail.webp",
        "Elite Toilet Cleaner": "https://cdn.dummyjson.com/product-images/beauty/powder-canister/thumbnail.webp"
    };

    let newLines = [];
    let currentProductLines = [];
    let inProduct = false;
    let productName = '';

    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];

        // Fix Electronics category image (Initial category)
        if (line.includes('name: "Electronics"') && line.includes('image:')) {
            line = line.replace(/image:\s*"[^"]+"/, 'image: "https://cdn.dummyjson.com/products/images/smartphones/iPhone%2013/thumbnail.png"');
        }

        if (line.trim().startsWith('{') && !line.includes('};') && !line.includes(':')) {
            inProduct = true;
            currentProductLines = [line];
            productName = '';
            continue;
        }

        if (inProduct) {
            currentProductLines.push(line);

            const nameMatch = line.match(/"name":\s*"([^"]+)"/);
            if (nameMatch) productName = nameMatch[1];

            if (line.trim().endsWith('},') || line.trim() === '}') {
                // End of product
                if (REPLACEMENTS[productName]) {
                    for (let j = 0; j < currentProductLines.length; j++) {
                        if (currentProductLines[j].includes('\"image\":')) {
                            currentProductLines[j] = `        "image": "${REPLACEMENTS[productName]}",`;
                        }
                    }
                }
                newLines.push(...currentProductLines);
                inProduct = false;
            }
            continue;
        }

        newLines.push(line);
    }

    fs.writeFileSync(dataPath, newLines.join('\n'));
    console.log("Final Image Repair (v9) applied to data.js");
}

repairData();
