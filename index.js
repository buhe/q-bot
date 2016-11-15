var http = require('http')
var createHandler = require('github-webhook-handler')
var handler = createHandler({ path: '/webhook', secret: '123456' })
var merge_master_dev = require('./handle/merge_master_dev.js');

http.createServer(function (req, res) {
  handler(req, res, function (err) {
    res.statusCode = 404
    res.end('no such location')
  })
}).listen(7777)

handler.on('error', function (err) {
  console.error('Error:', err.message)
})

handler.on('push', function (event) {
  console.log('Received a push event for %s to %s',
    event.payload.repository.name,
    event.payload.ref)
})

handler.on('zen', function (event) {
  console.log('Received a zen event for %s to %s',
    event.payload.repository.name,
    event.payload.ref)
})

handler.on('issues', function (event) {
  console.log('Received an issue event for %s action=%s: #%d %s',
    event.payload.repository.name,
    event.payload.action,
    event.payload.issue.number,
    event.payload.issue.title)
})

handler.on('pull_request',function(event){
    console.log('Received an pull request');
    var payload = event.payload;
    // console.log(JSON.stringify(payload));
    var pull_request = payload.pull_request;
    if(payload.action === 'closed' 
        && pull_request.merged === true
        && pull_request.base.ref === 'master'
        ){
        merge_master_dev(payload);
    }
});

console.log('webhook ...');