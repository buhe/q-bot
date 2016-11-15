var GitHubApi = require("github");

var userToken = 'd111d0bfa3ed7522188c5633258a6d25fb93293b';

var github = new GitHubApi({
    // optional
    debug: true,
    protocol: "https",
    // host: "github.my-GHE-enabled-company.com", // should be api.github.com for GitHub
    // pathPrefix: "/api/v3", // for some GHEs; none for GitHub
    headers: {
        "user-agent": "Qiniu-GitHub-App" // GitHub is happy with a unique user agent
    },
    // Promise: require('bluebird'),
    followRedirects: false, // default: true; there's currently an issue with non-get redirects, so allow ability to disable follow-redirects
    timeout: 5000
});

github.authenticate({
    type: "token",
    token: userToken,
});

// github.users.getFollowingForUser({
//     // optional
//     // headers: {
//     //     "cookie": "blahblah"
//     // },
//     username: "buhe"
// }, function(err, res) {
//     console.log(JSON.stringify(res));
// });

module.exports = github;