const time = new Date();
const express = require("express");

var app = express();

app.get('/time', (request,response) => {
	
	response.send("<html>" + time.getHours() +":"+ time.getMinutes() + "</html>");
	
});

app.listen(80);

console.log("server ready");