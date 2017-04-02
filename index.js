var cheerio = require("cheerio");
var afterLoad=require('after-load');

// var options = {
//     host: 'www.reddit.com',
//     path: '/place'
// };

// options = {
//     host: 'www.google.com'
// };

// http.get(options, function (http_res) {
//     // initialize the container for our data
//     var data = "";

//     // this event fires many times, each time collecting another piece of the response
//     http_res.on("data", function (chunk) {
//         // append this chunk to our growing `data` var
//         data += chunk;
//         console.log(data);
//     });

//     // this event fires *one* time, after all the `data` events/chunks have been gathered
//     http_res.on("end", function () {
//         // you can use res.send instead of console.log to output via express
//         console.log(data);
//     });
// });

var html=afterLoad('https://www.reddit.com/place');

console.log(html);


const $ = cheerio.load(html);

var canvas = $('place-canvasse').get(0);
var dataUrl = canvas.toDataURL();
console.log(dataUrl);