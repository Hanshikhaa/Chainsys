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

// Split by object closure to isolate each product
// This is more reliable than complex regex
const products = productsStr.split(/},\s*{/);

const cleanedProducts = products.map((p, index) => {
    let clean = p;
    // 1. Remove all rating lines
    clean = clean.replace(/,?\s*"rating":\s*\d\.\d/g, '');
    
    // 2. Add one fresh rating back before the final closure
    const r = (4 + Math.random()).toFixed(1);
    
    // We need to be careful with the first and last elements
    if (index === 0) {
        // Starts with [ { ...
        clean = clean.replace(/(\n\s*)}$/, `,\n        "rating": ${r}\n    }`);
    } else if (index === products.length - 1) {
        // Ends with ... } ];
        clean = clean.replace(/(\n\s*)}\s*\];?$/, `,\n        "rating": ${r}\n    }\n];`);
    } else {
        // Regular middle element
        clean = clean.replace(/(\n\s*)}$/, `,\n        "rating": ${r}\n    }`);
    }
    
    // Remove any accidental double commas
    clean = clean.replace(/,\s*,/g, ',');
    
    return clean;
});

const finalProductsStr = cleanedProducts.join('},\n    {');

// Reconstruct file
const finalContent = content.substring(0, pStart) + finalProductsStr + content.substring(pEnd + 2);

// FINAL FIX: Ensure no leading [ { redundancy if join added it
const doubleBracketFix = finalContent.replace(/export const INITIAL_PRODUCTS = \[\s*\[/, 'export const INITIAL_PRODUCTS = [');

fs.writeFileSync(dataPath, doubleBracketFix);
console.log('Successfully deduplicated and cleaned data.js');
