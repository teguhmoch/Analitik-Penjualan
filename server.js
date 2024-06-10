const jsonServer = require('json-server');  // This should work if json-server is installed locally
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

console.log('aaa');

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Enable CORS for all routes
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

server.get('/data', (req, res) => {
  const { start_date, end_date, product } = req.query;
  let filteredData = router.db.get('data').value();
  console.log('wwww',product);

  if (start_date && end_date) {
    filteredData = filteredData.filter(item => {
      const itemDate = new Date(item.date);
      return itemDate >= new Date(start_date) && itemDate <= new Date(end_date);
    });
  }

  if (product) {
    console.log('sss',product);
    filteredData = filteredData.filter(item => item.product.toString().includes(product));
  }

  res.json(filteredData);
});

server.use(router);
server.listen(8000, () => {
  console.log('JSON Server is running');
});