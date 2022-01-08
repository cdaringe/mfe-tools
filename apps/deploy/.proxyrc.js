const { createProxyMiddleware } = require("http-proxy-middleware");
process.exit(2);
module.exports = function (app) {
  console.log(`installing reverse proxy`);
  app.use(
    createProxyMiddleware("/api/graphql", {
      target: "http://localhost:4000/",
      pathRewrite: {
        "^/api": "",
      },
    })
  );
};
