const path = require('path')

console.log("Path to main module:", require.main.filename);

module.exports = path.dirname(require.main.filename)