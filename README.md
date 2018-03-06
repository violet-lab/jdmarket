# 前言

学习 vue.js  用vuecli.js编写的项目, 由于vue是比较新的js框架, 阿里, 京东电商网站是大众熟悉的网站,由于本人比较喜欢京东,认为其页面更加简洁, 漂亮, 此demo以京东为模版建造.


__✨✨✨✨🎉🎉🎉__
## 技术栈

vue2 + vuex + vue-router + webpack + ES6/7 + axios + scss + jade


## 项目运行

#### 注意：由于涉及大量的 ES6/7 等新属性，本项目采用node  8.9 版本
``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```
this
For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).



## 项目布局
```
.
├── build                                       // webpack配置文件
├── config                                      // 项目打包路径
├── dist                                        // 上线项目文件
├── screenshots                                 // 项目截图
├── src                                         // 源码目录
|   |── assets                                  // 相关静态文件
|   |   |── css                                 // 公共样式文件
|   |   |   |── css                             // 基本样式文件
|   |   |── images                              // 图片文件
|   |   |── js                                  // 相关配置文件
|   |   |   |── libs                            // 工具
│   │   │   │   ├── env.js                      // 环境切换配置
│   │   │   │   ├── fetch.js                    // fetch && ajax获取数据
│   │   │   │   ├── mUtils.js                   // 常用的js方法
│   │   │   │   └── rem.js                      // px转换rem
|   |   |   |── plugins                         // 相关插件
|   |   |   |── service                         // 数据交互统一配置
│   │   │   |   ├── getData.js                  // 获取数据的统一调配文件，对接口进行统一管理
|   |── components                              // 页面vue组件
|   |   |── common                              // 公共组件
|   |   |   |── NavBottom.vue                   // 导航
|   |   |── admin                               //
|   |   |   |── mine                            //
│   │   │   |   ├── Mine.vue                    // 用户主页
|   |   |   |── Login.vue                       // 登录页
|   |   |   |── reg.vue                         // 注册页
|   |   |── cart                                //
|   |   |   |── Cart.vue                        // 购物车主页
|   |   |── category                            //
|   |   |   |── Category.vue                    // 分类主页
|   |   |── find                                //
|   |   |   |── Find.vue                        // 发现主页
|   |   |── goodsDetail                         //
|   |   |   |── GoodsDetail.vue                 // 商品主页
|   |   |── home                                //
|   |   |   |── Home.vue                        // 首页
|   |   |── search                              //
|   |   |   |── SearchPage.vue                  // 搜索主页
|   |── router                                  // vue-router路由管理
|   |── store                                   // vuex状态管理
│   ├── App.vue                                 // 页面入口文件
│   ├── main.js                                 // 程序入口文件，加载各种公共组件
├── index.html                                  // 入口html文件
.


```
## 目标功能



## 最终目标
1、用node.js构建一个模拟京东的前台系统
1、用vue.js构建一个模拟京东后台系统
## 部分截图

# License
