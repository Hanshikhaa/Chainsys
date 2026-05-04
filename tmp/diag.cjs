const fs = require('fs');

const dataPath = 'src/context/data.js';
const content = fs.readFileSync(dataPath, 'utf-8');
const lines = content.split('\n');

const products = [];
let currentProduct = null;

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.trim().startsWith('{') && !line.includes('};') && !line.includes(':')) {
        currentProduct = {};
    }

    if (currentProduct) {
        let nameMatch = line.match(/"name":\s*"([^"]+)"/);
        if (nameMatch) currentProduct.name = nameMatch[1];

        let catMatch = line.match(/"category":\s*"([^"]+)"/);
        if (catMatch) currentProduct.category = catMatch[1];

        let imgMatch = line.match(/"image":\s*"([^"]+)"/);
        if (imgMatch) currentProduct.image = imgMatch[1];

        if (line.includes('},') || line.trim() === '}') {
            if (currentProduct.name && currentProduct.image) {
                products.push(currentProduct);
            }
            currentProduct = null;
        }
    }
}

const imageCounts = {};
products.forEach(p => {
    imageCounts[p.image] = (imageCounts[p.image] || 0) + 1;
});

console.log("--- REPEATING IMAGES ---");
let repeatsFound = false;
for (const [img, count] of Object.entries(imageCounts)) {
    if (count > 1) {
        repeatsFound = true;
        console.log(`\nURL: ${img} (Used ${count} times)`);
        products.filter(p => p.image === img).forEach(p => console.log(`  - [${p.category}] ${p.name}`));
    }
}

if (!repeatsFound) {
    console.log("No repeating images found.");
}
