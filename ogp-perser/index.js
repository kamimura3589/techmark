var parser = require("ogp-parser");
var url = "https://github.com/";
parser(url, false).then(function(data) {
	console.log(data);
}).catch(function(error) {
	console.error(error);
});
