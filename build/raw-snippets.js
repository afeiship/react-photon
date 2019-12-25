const fs = require('fs');
const glob = require('glob');

const files = glob.sync('./public/components/**/index.js');

// generate
files.forEach((item) => {
  fs.writeFileSync(`${item}.snippet`, fs.readFileSync(item));
});
