const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'pages');
const files = [
  'WeatherApp.jsx', 'ThemeDemo.jsx', 'Stopwatch.jsx', 
  'Registration.jsx', 'Palindrome.jsx', 'MapApp.jsx', 
  'Login.jsx', 'Counter.jsx', 'Calculator.jsx'
];

files.forEach(file => {
  const filePath = path.join(dir, file);
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Replace import
  if (!content.includes('useNavigate')) {
    content = content.replace(/import\s*\{\s*Link\s*\}\s*from\s*'react-router-dom';/, "import { Link, useNavigate } from 'react-router-dom';");
  }

  // 2. Inject useNavigate() just inside the function body
  const compMatch = file.replace('.jsx', '');
  const funcRegex = new RegExp(`(const ${compMatch}\\s*=\\s*\\(\\)\\s*=>\\s*\\{\\n?)(?!\\s*const navigate)`);
  content = content.replace(funcRegex, "$1  const navigate = useNavigate();\n");

  // 3. Replace the Link element with a native unstyled button that uses navigate(-1)
  const linkRegex = /<Link to="#" onClick=\{\(e\) => \{ e\.preventDefault\(\); window\.history\.back\(\); \}\} style=\{\{([^}]*)\}\}>← RETURN TO MATRIX<\/Link>/;
  if(linkRegex.test(content)){
    content = content.replace(linkRegex, `<button onClick={() => navigate(-1)} style={{ background: 'transparent', border: 'none', cursor: 'pointer', $1 }}>← RETURN TO MATRIX</button>`);
  }

  // Fallback if they still had the older to="/portfolio" somehow
  const oldLinkRegex = /<Link to="\/portfolio" style=\{\{([^}]*)\}\}>← RETURN TO MATRIX<\/Link>/;
  if (oldLinkRegex.test(content)) {
     content = content.replace(oldLinkRegex, `<button onClick={() => navigate(-1)} style={{ background: 'transparent', border: 'none', cursor: 'pointer', $1 }}>← RETURN TO MATRIX</button>`);
  }

  fs.writeFileSync(filePath, content);
});
console.log('Links successfully updated to use React Router useNavigate.');
