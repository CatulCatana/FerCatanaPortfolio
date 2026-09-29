const https = require('https');
const fs = require('fs');

https.get('https://raw.githubusercontent.com/CatulCatana/FerCatanaPortfolio/main/socials.html', (resp) => {
  let data = '';
  resp.on('data', (chunk) => { data += chunk; });
  resp.on('end', () => { fs.writeFileSync('original_socials.html', data); console.log('Done!'); });
}).on("error", (err) => {
  console.log("Error: " + err.message);
});
