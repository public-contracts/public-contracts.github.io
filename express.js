'use strict';

var Express = require("express");
var Server = Express();

Server.use(Express.static(__dirname));
Server.listen(8888, '127.0.0.1');
