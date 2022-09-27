var request = require('request');

var options = {
    url: 'https://www.sejuku.net/blog/',
    method: 'GET'
}

request(options, function (error, response, body) {

    console.log(body);

})
