# vue-music

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
# music-player

# 笔记📒
> 2018.3.1
-------------
1.router-link 默认激活class类名是**.router-link-active**
2.stylus中mixin通过媒体查询选个不同背景图片
``` bash
bg-image($url)
background-image: url($url + "@2x.png")
@media (-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio: 3)
background-image: url($url + "@3x.png")
```
3.利用jsonp跨域
对原始jsonp用promise进行封装
