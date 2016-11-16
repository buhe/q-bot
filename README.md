# q-bot

##中文
同时使用了 github 的 webhook 和 Open API，解决一个很简单的需求，当多个产品线共用一个 repo 迭代，每个产品线有一个开发分支，开发后合并到 master 分支等待发布。其他开发分支怎么自动同步这个更改？Just it.

这是例子项目 ：https://github.com/buhe/dev-fork ，当合并一个到 master 的 pull request 后，会自动创建若干逆向分支到每个开发分支。

例如：接受了这个 pr :https://github.com/buhe/dev-fork/pull/10 ，自动创建并合并了 https://github.com/buhe/dev-fork/pull/11

##怎么使用？
安装依赖
```
npm install
```
##配置下面的配置

###conf.js
```
{
    owner:'Your Name', \\ 操作人的 github 用户名
    token:'Your personal token', \\ 创建一个 personal token ,参考 github 文档
    secret:'Webhook secret' \\ 创建 webhook 时候会要求提供一个 secret ,就是这个
}
```
###develops.js
```
['dev-branch1','dev-branch2'] \\所有你需要自动 merge 的开发分支
```
Just run.
```
node index.js
```

##EN

