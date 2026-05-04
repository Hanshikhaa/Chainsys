const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'src', 'context', 'data.js');
const lines = fs.readFileSync(dataPath, 'utf-8').split('\n');

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.includes('image: "') && line.includes('id: "')) {
        const nameMatch = line.match(/name:\s*"([^"]+)"/);
        const idMatch = line.match(/id:\s*"([^"]+)"/);

        // Also get category or subcategory to give better context to the image generator
        const catMatch = line.match(/category:\s*"([^"]+)"/);

        if (nameMatch && idMatch) {
            const name = nameMatch[1];
            const id = idMatch[1];

            let prompt = name;
            if (catMatch) {
                // E.g., "Vision 4K Smart TV, Electronics"
                prompt = `${name}, ${catMatch[1]}, product photography, high quality, plain background`;
            } else {
                prompt = `${name}, product photography, high quality, plain background`;
            }

            const encodedPrompt = encodeURIComponent(prompt);

            // Generate a numeric seed from the id string to ensure stable images
            let numericSeed = 0;
            for (let j = 0; j < id.length; j++) {
                numericSeed += id.charCodeAt(j);
            }

            const newImage = `https://image.pollinations.ai/prompt/${encodedPrompt}?seed=${numericSeed}&width=500&height=500&nologo=true`;
            lines[i] = line.replace(/image:\s*"[^"]+"/, `image: "${newImage}"`);
        }
    }
}

fs.writeFileSync(dataPath, lines.join('\n'));
console.log("Successfully updated all images in data.js to use pollinations.ai!");
