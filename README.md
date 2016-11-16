# q-bot

##中文
同时使用了 github 的 webhook 和 Open API，解决一个很简单的需求，当多个产品线共用一个 repo 迭代，每个产品线有一个开发分支，开发后合并到 master 分支等待发布。其他开发分支怎么自动同步这个更改？Just it.

##EN

##conf.js
```
{
    owner:'Your Name',
    token:'Your personal token',
    secret:'Webhook secret'
}
```
##develops.js
```
['dev-branch1','dev-branch2']
```
