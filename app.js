const express = require("express");
const http = require("http");
const cors = require("cors");
const {routesInit} = require("./routes/config_routes")
require("./db/mongooseconnect");

const app = express();

app.use(cors())
app.use(express.json());
app.use('/public', express.static('public'));

routesInit(app);

const server = http.createServer(app);

let port = process.env.PORT || 3003
server.listen(port);