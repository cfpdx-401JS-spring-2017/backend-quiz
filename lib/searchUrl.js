const parseUrl = require('url').parse;

function notFound(req, res) {
  res.statusCode(400);
  res.statusMessage('Category not in defined categories');
  res.send();
}

function searchUrl(req, res) {
  const url = parseUrl(req.url, true);
  req.query = url.query;

  res.setHeader('Content-Type', 'text/html');
  const route = [url.pathname] || notFound;
  route(req, res);
}

module.exports = searchUrl;