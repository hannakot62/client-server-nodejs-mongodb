const path = require("path");

const createPath = (page) => path.resolve(__dirname, "../views", `${page}.pug`);

module.exports = createPath;
