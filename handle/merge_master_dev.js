var github = require('../githubClient.js');
var conf = require('../conf.js');
var owner = conf.owner;
var develops = require('../develops.js');


function autoMerge(payload,branch){
    github.pullRequests.create({
        owner:owner,
        user:owner,
        repo:payload.repository.name,
        title:payload.pull_request.url + ' to ' + branch + ' branch',
        base:branch,
        head:'master',
        body:'Qiniu github bot auto create pull request.'
    }, function(err, res) {
        if(err){
            console.log('Qiniu github bot auto create pull request failed.');
        }else{
            console.log('Qiniu github bot auto create pull request.');
        }
        
        github.pullRequests.merge({
            owner:owner,
            repo:payload.repository.name,
            number:res.number,
            commit_message:'Qiniu github bot auto merge pull request.'
        }, function(err, res) {
            if(err){
                console.log('Qiniu github bot auto merge pull request failed.');
            }else{
                console.log('Qiniu github bot auto merge pull request.');
            }
            
        });

    });
}


module.exports = function(payload){

    console.log('handle ' + payload.pull_request.url);

    // github.issues.create({
    //     owner:'buhe',
    //     user:'buhe',
    //     repo:payload.repository.name,
    //     title:payload.pull_request.url,
    // }, function(err, res) {
    //     console.log(err, res);
    // });

    for(var i = 0 ; i < develops.length ; i++){
        if(payload.pull_request.head.ref === develops[i]){
            //skip self
        }else{
            autoMerge(payload,develops[i]);
        }
    }

}