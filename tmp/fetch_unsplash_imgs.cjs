const https = require('https');
const fs = require('fs');
const path = require('path');

async function getUnsplashImage(query) {
    const url = `https://unsplash.com/s/photos/${encodeURIComponent(query)}`;
    return new Promise((resolve) => {
        const req = https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' } }, res => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                const match = data.match(/https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9_.-]+/);
                if (match) {
                    const imgUrl = `${match[0]}?w=600&h=400&fit=crop`;
                    resolve(imgUrl);
                } else {
                    resolve(null);
                }
            });
        }).on('error', () => resolve(null));

        req.setTimeout(5000, () => {
            req.abort();
            resolve(null);
        });
    });
}

const ITEMS = [
    { name: "Sona Masoori Rice", query: "white rice bowl grains" },
    { name: "Urad Dal (Split)", query: "white lentils bowl" },
    { name: "Moong Dal (Yellow)", query: "yellow lentils bowl" },
    { name: "Premium Poha (Thick)", query: "cereal bowl breakfast" },
    { name: "Rolled Oats (Steel Cut)", query: "raw oats bowl healthy" },

    { name: "Mustard Oil (Kachi Ghani)", query: "cooking oil bottle pouring" },
    { name: "Iodized Table Salt", query: "salt shaker pile" },
    { name: "Organic Crystal Sugar", query: "white sugar bowl glass" },
    { name: "Traditional Jaggery (Gud)", query: "brown sugar blocks raw" },

    { name: "Coriander Powder (Dhania)", query: "green coriander powder spice" },
    { name: "Whole Cumin Seeds (Jeera)", query: "cumin seeds spice bowl" },
    { name: "Mustard Seeds (Rai)", query: "mustard seeds yellow black" },
    { name: "Kitchen King Garam Masala", query: "indian spices powder colorful" },

    { name: "Fresh Whole Milk (1L)", query: "glass milk bottle fresh" },
    { name: "Traditional Thick Curd", query: "yogurt bowl creamy" },
    { name: "Amul Salted Butter", query: "block of butter slice" },
    { name: "Processed Cheddar Cheese", query: "sharp cheddar cheese block" },
    { name: "Fresh Paneer (Malai)", query: "tofu cubed white cheese" },

    { name: "Whole Wheat Bread (Large)", query: "sliced whole wheat bread loaf" },
    { name: "Digestive Wheat Biscuits", query: "plate of biscuits cookies" },
    { name: "Spicy Masala Namkeen", mixed: true, query: "spicy indian snack mix bowl" },
    { name: "Instant Masala Noodles", query: "bowl of instant ramen noodles" },
    { name: "Pure Natural Honey", query: "glass jar of pure honey wooden dipper" },

    { name: "Sandalwood Beauty Soap", query: "handmade soap bar natural" },
    { name: "Premium Detergent Powder", query: "washing laundry powder scoop macro" },
    { name: "Antimicrobial Dishwash Soap", query: "dishwashing liquid bottle sink" },
    { name: "Fluoride Protection Toothpaste", query: "toothpaste tube toothbrush foam" },
    { name: "Elite Toilet Cleaner", query: "bathroom cleaner spray bottle" }
];

async function run() {
    let dataPath = path.join(__dirname, 'src', 'context', 'data.js');
    let content = fs.readFileSync(dataPath, 'utf-8');
    let updatedCount = 0;

    for (let item of ITEMS) {
        process.stdout.write(`Fetching Unsplash for '${item.name}'... `);
        let img = await getUnsplashImage(item.query);
        // Fallback robust search if the long query misses
        if (!img) {
            let shortQuery = item.query.split(' ').slice(0, 2).join(' ');
            img = await getUnsplashImage(shortQuery);
        }

        if (img) {
            console.log(`Success`);

            // Re-encode to ensure no regex breakage
            let nameEscaped = item.name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            let regex = new RegExp(`("${nameEscaped}"[\\s\\S]*?"image":\\s*)"[^"]+"`, '');

            if (regex.test(content)) {
                content = content.replace(regex, `$1"${img}"`);
                updatedCount++;
            } else {
                console.log(`  -> Could not locate product in data.js`);
            }
        } else {
            console.log(`Failed (No results)`);
        }

        // Small delay to prevent rate limit
        await new Promise(r => setTimeout(r, 500));
    }

    fs.writeFileSync(dataPath, content);
    console.log(`\nOperation complete. Successfully updated ${updatedCount}/${ITEMS.length} products with unique Unsplash photography.`);
}

run();
