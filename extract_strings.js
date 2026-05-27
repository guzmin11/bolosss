const fs = require('fs');
const js = fs.readFileSync('kitparafestas_js.txt', 'utf8');

// Find all strings in quotes. A bit noisy but should give the copy.
const strings = js.match(/"([^"\\]*(\\.[^"\\]*)*)"/g) || [];
const uniqueStrings = [...new Set(strings.map(s => s.replace(/^"|"$/g, '').trim()))]
  .filter(s => s.length > 20 && !s.includes('{') && !s.includes('function') && !s.includes('return') && !s.match(/^[a-z_A-Z0-9-]+$/) && !s.includes('http') && !s.includes('xmlns') && !s.includes('svg'));

fs.writeFileSync('kitparafestas_strings.txt', uniqueStrings.join('\n'));
console.log('Extracted ' + uniqueStrings.length + ' strings.');
