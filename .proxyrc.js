const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  console.log(`installing reverse proxy`);
  app.use(
    createProxyMiddleware("/api/graphql", {
      target: "http://localhost:3000/",
      pathRewrite: {
        "^/api/graphql": "/rpc/graphql",
      },
    })
  );
};
