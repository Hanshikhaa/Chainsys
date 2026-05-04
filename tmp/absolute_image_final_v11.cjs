const fs = require('fs');
const path = require('path');

function finalRepairV11() {
    const dataPath = path.join(__dirname, 'src', 'context', 'data.js');
    const content = fs.readFileSync(dataPath, 'utf-8');
    const lines = content.split('\n');

    const REPLACEMENTS = {
        // --- REMAINING PLACEHOLDERS ---
        "Mustard Oil (Kachi Ghani)": "/products/sunflower_oil.png",
        "Traditional Jaggery (Gud)": "https://cdn.dummyjson.com/product-images/groceries/honey-jar/thumbnail.webp",

        // --- INCORRECT MAPPINGS ---
        "Iodized Table Salt": "https://cdn.dummyjson.com/product-images/beauty/powder-canister/thumbnail.webp", // Better than makeup
        "Organic Crystal Sugar": "https://cdn.dummyjson.com/product-images/groceries/honey-jar/thumbnail.webp", // Replacing eggs

        // --- FIXING GENERIC PULSE THUMBNAILS WITH BETTER CDN ALTERNATIVES IF POSSIBLE ---
        "Urad Dal (Split)": "/products/toor_dal.png", // Using the premium Toor Dal instead of rice
        "Moong Dal (Yellow)": "/products/toor_dal.png",
        "Premium Poha (Thick)": "/products/basmati_rice.png",
        "Rolled Oats (Steel Cut)": "/products/basmati_rice.png"
    };

    let newLines = [];
    let currentProductLines = [];
    let inProduct = false;
    let productName = '';

    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];

        // Fix Electronics category image (INITIAL_CATEGORIES)
        // Previous attempt used thumbnail.webp which might be 404
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
    console.log("Exhaustive Image Repair (v11) applied successfully.");
}

finalRepairV11();
