# 垃圾分类小程序

## 扫码体验一下先
![QIeTf0.jpg](https://6465-dev-oto5o-1257020492.tcb.qcloud.la/wsg_qr_transcript.jpg?sign=80ca71e189ec3766a85017306b6e25ca&t=1576641377)

## 该项目是在一个大佬开源的小程序基础上进行的修改，原项目地址：https://github.com/qi19901212/Garbage
## 做了如下修改：
- 美化UI界面
- 增加答题模块
- 增加全国多城市功能
- 将垃圾数据增加到了6000+条
- 去掉了智能询问功能

## 小程序使用到的云开发内容

云函数，云数据库：

- 数据库：存储四种垃圾分类的相关垃圾数据， 在云数据库中创建三个集合sort（分类）、product（垃圾）、commit（用户提交的未找到的数据）。把sort.json 和product.csv 导入对应的集合库即可
- 云函数：获取百度识别库的accessToken

## 需要修改为自己的key 
1. 小程序key 在文件project.config.json->appid 记住创建小程序的时候选择云开发
2. 百度key 主要做拍照识别的cloudfunctions->baiduAccessToken->index->clientId和clientSecret

### 百度key获取方法：
1. 打开 https://cloud.baidu.com/， 登录后进入控制台
2. 在左侧导航栏找到：产品服务-人工智能-图像识别
3. 创建自己的应用，即可拿到clientId和clientSecret

## 如果对你有帮助，给个star再走呗，谢谢~


 


