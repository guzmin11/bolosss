const https = require('https');
const fs = require('fs');

https.get('https://kitparafestas.netlify.app/', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    fs.writeFileSync('kitparafestas.html', data);
    console.log('Downloaded');
  });
}).on('error', (err) => {
  console.log('Error: ' + err.message);
});
