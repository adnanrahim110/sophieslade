
const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, 'src', 'assets');
const imagesDir = path.join(assetsDir, 'images');
const outputFile = path.join(assetsDir, 'index.js');

const validExtensions = ['.png', '.jpg', '.jpeg', '.svg', '.gif', '.webp', '.mp4'];

let exportLines = [];

/**
 * @param {string} dir
 */
function processDirectory(dir) {
  const items = fs.readdirSync(dir);
  items.forEach(item => {
    const fullPath = path.join(dir, item);
    const stats = fs.statSync(fullPath);
    if (stats.isDirectory()) {
      processDirectory(fullPath);
    } else if (stats.isFile() && validExtensions.includes(path.extname(item).toLowerCase())) {
      const relativePath = './' + path.relative(assetsDir, fullPath).replace(/\\/g, '/');
      let name = path.basename(item, path.extname(item));

      const relativeDir = path.relative(imagesDir, path.dirname(fullPath)).replace(/\\/g, '/');
      if (relativeDir) {
        name = relativeDir.split('/').join('_') + '_' + name;
      }

      name = name.replace(/[-\s]/g, '_');

      if (/^\d/.test(name)) {
        name = '_' + name;
      }

      exportLines.push(`export { default as ${name} } from '${relativePath}';`);
    }
  });
}

function generateExports() {
  exportLines = [];
  processDirectory(imagesDir);

  const fileContent = exportLines.join('\n') + '\n';

  fs.writeFileSync(outputFile, fileContent, 'utf8');

  console.log(`Generated ${outputFile} with ${exportLines.length} exports.`);
}

generateExports();

