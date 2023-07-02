// // src/main/frontend/src/setProxy.js
//
// const { createProxyMiddleware } = require('http-proxy-middleware');
//
// module.exports = function(app) {
//   app.use(
//     // '/ws',
//     createProxyMiddleware({
//       target: 'http://127.0.0.1:8080',
//       changeOrigin: true,
//       // ws: true,
//     })
//   );
// };