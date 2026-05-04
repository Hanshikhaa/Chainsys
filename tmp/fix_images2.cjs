const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'src', 'context', 'data.js');
let content = fs.readFileSync(dataPath, 'utf-8');
let matchCount = 0;

content = content.replace(/\{([^}]+)\}/g, (match) => {
    if (match.includes('id:') && match.includes('name:') && match.includes('image:')) {
        const nameMatch = match.match(/name:\s*"([^"]+)"/);
        const idMatch = match.match(/id:\s*"([^"]+)"/);
        const catMatch = match.match(/category:\s*"([^"]+)"/);

        if (nameMatch && idMatch) {
            const name = nameMatch[1];
            const id = idMatch[1];

            let prompt = name;
            if (catMatch) {
                prompt = `${name}, ${catMatch[1]}, product photography, high quality, plain background`;
            } else {
                prompt = `${name}, product photography, high quality, plain background`;
            }

            const encodedPrompt = encodeURIComponent(prompt);

            let numericSeed = 0;
            for (let j = 0; j < id.length; j++) {
                numericSeed += id.charCodeAt(j);
            }

            const newImage = `https://image.pollinations.ai/prompt/${encodedPrompt}?seed=${numericSeed}&width=500&height=500&nologo=true`;
            matchCount++;
            return match.replace(/image:\s*"[^"]+"/, `image: "${newImage}"`);
        }
    }
    return match;
});

fs.writeFileSync(dataPath, content);
console.log(`Successfully updated ${matchCount} images in data.js to use pollinations.ai!`);
