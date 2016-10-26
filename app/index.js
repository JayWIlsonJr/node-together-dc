const express = require('express');
const app = express();

app.get('/', function(request, response) {
	response.send('Yo!! You are the man!');
});

module.exports = app;