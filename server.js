const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(`${__dirname}/dist/ng-cnews`));

app.listen(process.env.PORT || 8080);

app.get("/*", (req, res) => res.sendFile(path.join(`${__dirname}/dist/ng-cnews/index.html`)));
