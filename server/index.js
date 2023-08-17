const app = require("./app");
const config = require("./utils/config");
const { info } = require("./utils/logger");

app.listen(() => {
  info(`server running at - http://localhost:/${config.PORT}/api`);
});
