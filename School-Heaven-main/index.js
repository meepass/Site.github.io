const port = "8080"
const Corrosion = require('./lib/server')
const express = require('express')
const app = express()

const proxy = new Corrosion({
  prefix: "/carrot/",
  codec: "xor",
  title: "Fallen Angel",
  forceHttps: true
})

app.use('/', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/public/index.html")
});

app.use('/', function(req, res) {
  proxy.request(req, res)
});

// If you want an error page
//app.use('/', function (req, res) {
//    if (req.url.startsWith(proxy.prefix)) {proxy.request(req,res)}
//    else {res.send('<pre>Cannot GET ' + req.url + '</pre>')}
//});

app.listen(process.env.PORT || port, () => {
  console.log(`Fallen Angel is running at localhost:${port}`)
});

