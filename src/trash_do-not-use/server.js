const express = require('express');
const app = express();

app.use(express.static('./public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
  res.sendFile(path.join(__dirname, './public/index.html'));  // activated when you use express.static
//  res.sendFile(__dirname + '/public/index.html');
});

app.get('/jsonrpi', (req, res) => {
  console.log(req.query.name);
  try {
    eval(req.query.name);
  } catch (e) {
    console.log(e);
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
