const fs = require('fs');
const path = require('path');

function convertDir(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            convertDir(filePath);
        } else if (file.endsWith('.ts') && !file.includes('Context')) {
            console.log(`Converting ${filePath}...`);
            let content = fs.readFileSync(filePath, 'utf8');

            // Extract the object part
            // Match from the first '{' to the last '}'
            const startIdx = content.indexOf('{');
            const endIdx = content.lastIndexOf('}');

            if (startIdx === -1 || endIdx === -1) {
                console.warn(`No object found in ${filePath}`);
                return;
            }

            const objStr = content.substring(startIdx, endIdx + 1);

            try {
                // Use Function instead of eval for slightly better safety/scoping
                const obj = new Function(`return ${objStr}`)();
                const jsonPath = filePath.replace('.ts', '.json');
                fs.writeFileSync(jsonPath, JSON.stringify(obj, null, 2));
                console.log(`Successfully converted to ${jsonPath}`);
                fs.unlinkSync(filePath);
            } catch (e) {
                console.error(`Failed to convert ${filePath}:`, e.message);
            }
        }
    });
}

convertDir('./locales');
