const fs = require('fs');
const path = require('path');

const folderIPFS = 'ipfs://QmRCHVBssXZQk6dqoFxaU1miLrogUZ6sPS6jzJdGL1upiR/';

const metadataPath = './build/metadata'
const jsonsInDir = fs.readdirSync(metadataPath).filter(file => path.extname(file) === '.json');

jsonsInDir.forEach(file => {
  const fileData = fs.readFileSync(path.join(metadataPath, file));
  const metadata = JSON.parse(fileData.toString());
  
  const image = file.replace('.json','.jpeg');
  metadata['image'] = folderIPFS + image
  
  fs.writeFile(path.join(metadataPath, file), JSON.stringify(metadata, null, 4), err => {
    if (err) console.log("Error writing file:", err);
  });

});
