const fs = require('fs');
const glob = require('glob');

const files = glob.sync('./public/components/**/index.js');
const excludes = ['installation'];

// generate
files.forEach((item) => {
  if (!excludes.includes(item)) {
    fs.writeFileSync(`${item}.snippet`, fs.readFileSync(item));
  }
});
