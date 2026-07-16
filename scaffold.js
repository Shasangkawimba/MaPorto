const fs = require('fs');
const path = require('path');

const routes = [
  'about', 
  'work', 'work/[slug]', 
  'services', 'services/[slug]', 
  'blogs', 'blogs/[slug]', 
  'pricing', 'contact'
];

for (const route of routes) {
  const dir = path.join('src/app', route);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(
    path.join(dir, 'page.js'), 
    `export default function Page() { return (<div style={{paddingTop:'150px', textAlign:'center'}}><h1>${route}</h1></div>); }`
  );
}

fs.mkdirSync('src/data', { recursive: true });
fs.writeFileSync('src/data/cms.json', JSON.stringify({
  works: [
    { slug: 'brand-identity', title: 'Brand Identity', tag: 'Web Design' },
    { slug: 'motion-3d', title: 'Motion & 3D', tag: 'Creative Direction' }
  ],
  services: [
    { slug: 'web-design', title: 'Web Design', desc: 'Crafting pixel perfect experiences' }
  ],
  blogs: [
    { slug: 'hello-world', title: 'Hello World', date: '2026-07-11' }
  ]
}, null, 2));

console.log("Scaffold complete.");
