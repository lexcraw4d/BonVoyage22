
const express = require('express');

const config = require('../config.js');
const { createProxyMiddleware } = require('http-proxy-middleware');

/*
  Rewrite the request by injecting the API key
*/
function pathRewriter(path, req) {
  console.log("Old:", path);
  const result = path.replace('?', `?key=${config.api.key}&`);
  console.log("New:", result);

  return result;
}

const map_proxy = createProxyMiddleware({
  target: 'https://maps.googleapis.com',
  pathRewrite: pathRewriter,
  changeOrigin: true,
});

module.exports = map_proxy;
