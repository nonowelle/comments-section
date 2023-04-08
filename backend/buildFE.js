const fse = require('fs-extra');

const srcDir = `../frontend/dist/`;
const destDir = `./views`;

// To copy a folder or file, select overwrite accordingly
try {
  fse.copySync(srcDir, destDir, { overwrite: true });
  console.log('success!');
} catch (err) {
  console.error(err);
}
