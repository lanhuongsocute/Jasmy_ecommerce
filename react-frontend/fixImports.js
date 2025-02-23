const fs = require('fs');
const path = require('path');
const glob = require('glob');

const files = glob.sync('src/**/*.jsx');

files.forEach((file) => {
  let content = fs.readFileSync(file, 'utf-8');
  const correctedContent = content
    .replace(/components\/Common/g, 'components/common')
    .replace(/components\/Home/g, 'components/home');

  if (content !== correctedContent) {
    fs.writeFileSync(file, correctedContent, 'utf-8');
    console.log(`Fixed imports in ${file}`);
  }
});

console.log('Import paths have been corrected.');
