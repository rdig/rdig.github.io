const { generateConfig } = require('gatsby-plugin-ts-config');

module.exports = generateConfig({
  projectRoot: __dirname,
  configDir: '.gatsby'
});
