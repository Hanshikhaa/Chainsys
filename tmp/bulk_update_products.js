import fs from 'fs';
import path from 'path';

const dataPath = path.join(process.cwd(), 'src', 'context', 'data.js');
let content = fs.readFileSync(dataPath, 'utf8');

// target INITIAL_PRODUCTS array
const pStart = content.indexOf('export const INITIAL_PRODUCTS = [');
const pEnd = content.lastIndexOf('];');

if (pStart === -1 || pEnd === -1) {
    console.error('Could not find INITIAL_PRODUCTS array');
    process.exit(1);
}

let productsStr = content.substring(pStart, pEnd + 2);

// 1. Reduce prices by 20%
// We iterate carefully. 
productsStr = productsStr.replace(/"price":\s*(\d+)/g, (match, p) => {
    return `"price": ${Math.floor(parseInt(p) * 0.8)}`;
});

// 2. Add ratings
// This is a more robust way to handle the replacement
const products = productsStr.split(/},\s*{/);
const updatedProducts = products.map(p => {
    if (p.includes('"rating":')) return p;
    const rating = (4 + Math.random()).toFixed(1);
    // Find where to insert. Before the last }
    if (p.trim().endsWith('}')) {
        return p.replace(/}\s*$/, `    "rating": ${rating}\n    }`);
    } else if (p.trim().endsWith('},')) {
         return p.replace(/},\s*$/, `    "rating": ${rating}\n    },`);
    } else {
        // Fallback for the last element which might end with ]
        return p.replace(/(\n\s*)$/, `,\n        "rating": ${rating}$1`);
    }
});

const finalProductsStr = updatedProducts.join('},\n    {');
// Special handling for first and last
// But wait, the simple replace was better if we just target the structure.

// Let's try a simpler regex for ratings
let res = productsStr.replace(/}(\s*,|\s*\])/g, (match, end) => {
     // Check if this object block already has a rating
     // We look back to the previous {
     const lastBrace = productsStr.lastIndexOf('{', productsStr.lastIndexOf(match));
     const block = productsStr.substring(lastBrace, productsStr.lastIndexOf(match));
     if (block.includes('"rating":')) return match;
     const r = (4 + Math.random()).toFixed(1);
     return `    "rating": ${r}\n    }${end}`;
});

const finalContent = content.substring(0, pStart) + res + content.substring(pEnd + 2);
fs.writeFileSync(dataPath, finalContent);
console.log('Successfully updated product data.');
