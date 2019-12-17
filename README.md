# 垃圾分类小程序
## 小程序使用到的云开发内容

云函数，云数据库：

- 数据库：存储四种垃圾分类的相关垃圾数据， 数据分别为sort，product。把sort.json 和product.csv 导入云数据库即可
- 云函数：获取百度识别库的accessToken

## 需要修改为自己的key 
1. 小程序key 在文件project.config.json->appid 记住创建小程序的时候选择云开发
2. 百度key 主要做拍照识别的cloudfunctions->baiduAccessToken->index->clientId和clientSecret
3. 智能询问采用ai.qq 的智能闲聊接口 key在pages->android->qa->app_id 还需要app-key pages->utils->util->signTengxunAI的app_key

## 直接扫码体验
![垃圾分类智能工具](https://6465-dev-oto5o-1257020492.tcb.qcloud.la/wxacode_default_openapi_page.jpeg?sign=901c407c1e0b4efeffc610e5689c2866&t=1575638854)


 


