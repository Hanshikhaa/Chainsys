const fs = require('fs');

const dummyCatalog = JSON.parse(fs.readFileSync('dummy_catalog.json', 'utf8')).products;

const validUrls = new Set();
dummyCatalog.forEach(p => {
    if (p.images && p.images.length > 0) {
        p.images.forEach(img => validUrls.add(img));
    }
    if (p.thumbnail) {
        validUrls.add(p.thumbnail);
    }
});

const dataPath = 'src/context/data.js';
let content = fs.readFileSync(dataPath, 'utf-8');
const lines = content.split('\n');

const brokenItems = [];

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const imgMatch = line.match(/"image":\s*"([^"]+)"/);
    if (imgMatch) {
        const url = imgMatch[1];
        if (url.includes('cdn.dummyjson.com') && !validUrls.has(url)) {
            // Find the name of the product this belongs to (look back a few lines)
            let name = "Unknown";
            for (let j = i; j >= Math.max(0, i - 10); j--) {
                const nameMatch = lines[j].match(/"name":\s*"([^"]+)"/);
                if (nameMatch) {
                    name = nameMatch[1];
                    break;
                }
            }
            brokenItems.push({ name, url, lineIndex: i });
        }
    }
}

console.log(`Found ${brokenItems.length} broken DummyJSON URLs in data.js`);
brokenItems.forEach(item => {
    console.log(`[BROKEN] ${item.name} -> ${item.url}`);
});

// Now let's assign *guaranteed valid* unused DummyJSON URLs to these broken items.
// Get a list of valid URLs that are NOT currently used in data.js to avoid repeats.
const currentlyUsedUrls = new Set();
lines.forEach(line => {
    const imgMatch = line.match(/"image":\s*"([^"]+)"/);
    if (imgMatch) currentlyUsedUrls.add(imgMatch[1]);
});

const availableUrls = [...validUrls].filter(url => !currentlyUsedUrls.has(url));

let replacedCount = 0;
brokenItems.forEach((item, index) => {
    if (index < availableUrls.length) {
        const newUrl = availableUrls[index];
        lines[item.lineIndex] = lines[item.lineIndex].replace(item.url, newUrl);
        console.log(`[FIXED] ${item.name} -> ${newUrl}`);
        replacedCount++;
    } else {
        console.log(`[ERROR] Ran out of unique valid URLs for ${item.name}`);
    }
});

if (replacedCount > 0) {
    fs.writeFileSync(dataPath, lines.join('\n'));
    console.log(`Successfully repaired ${replacedCount} broken images with guaranteed valid URLs.`);
}
