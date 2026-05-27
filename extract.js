const fs = require('fs');
const html = fs.readFileSync(String.raw`C:\Users\gunuu\.gemini\antigravity\brain\452e33c2-56b4-44ee-bce6-1e7d622a193a\.system_generated\steps\4\content.md`, 'utf8');
const text = html.replace(/<[^>]+>/g, '\n').replace(/\n\s*\n/g, '\n').split('\n').map(l => l.trim()).filter(l => l).join('\n');
fs.writeFileSync('copy.txt', text);
console.log('Done');
