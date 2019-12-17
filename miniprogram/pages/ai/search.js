const db = wx.cloud.database()

var t = require("../../utils/module"),
s = t(require("../../mainInfo.js"));

Page({

  
  data: {
    MAX_LIMIT:20,
    page:0,
    dataCount:0,
    datas:[],
    searchTxt:"",
    logo:"",
    isSHow:false,
    isHasData: true,
    map: ["", 2, 3, 0, 1],
    city: "shanghai"
  },

 
  onLoad: function (options) {
    this.data.dataCount = db.collection('product').count(),
    this.setData({
      config: s.default,
      map: this.data.map,
      city: wx.getStorageSync("city")
    })
  },
  searchIcon:function(e){
    this.data.searchTxt= e.detail.value
    this.data.datas=[]
    this.data.page==0
    this.onGetData()
  },
  onGetData:function(){
    this.data.page = 0;
    wx.showLoading({
      title: '正在加载数据中.....',
    })
    if (this.data.dataCount < this.data.page * this.data.MAX_LIMIT){
      wx.showToast({
        title: '数据已经加载完',
        icon: "none"
      })
      wx.hideLoading()
      return
    }
    var that=this
    if(this.data.page==0){
      this.data.datas=[]
    }
    var datas = db.collection('product').skip(this.data.page * this.data.MAX_LIMIT).limit(this.data.MAX_LIMIT).where({
      name: db.RegExp({
        regexp: that.data.searchTxt,
      })
    }).get({
      success: function (res) {
        wx.hideLoading()

        if (res.data.length == 0 && that.data.page == 0) {
          that.setData({
            isHasData: false
          })
        } else {
          that.data.page = that.data.page + 1
          for (var i = 0; i < res.data.length; i++) {
            that.data.datas.push(res.data[i])
          }
          that.setData({
            datas: that.data.datas,
            isHasData: true
          })
        }
      },fail:res=>{
        wx.hideLoading()
        if (that.data.datas.length == 0) {
          that.setData({
            isHasData: false
          })
        }
        wx.showToast({
          title: '数据加载失败',
          icon:"none"
        })
      }
    })
  },
  onGoHome: function () {
    wx.switchTab({
      url: '/pages/ai/index',
    })
  },
  commit: function () {
    wx.navigateTo({
      url: '/pages/result/commit?keyword=' + this.data.searchTxt,
    })
  },
  onItemClick:function(event){
    var index =event.currentTarget.dataset.index
    var config = s.default
    var logoImg = config.cats[config.cities[this.data.city].cats[this.data.map[index]]].imageSrc
    this.setData({
      logo:logoImg,
      isShow:!this.data.isShow
    })
  },
  hideModal:function(){
    this.setData({
      isShow: !this.data.isShow
    })
  },
  cancelSearch: function (t) {
    wx.navigateBack({
      delta: 1
    });
  },
  onPullDownRefresh: function () {
    this.data.page=0
    this.data.datas=[]
    this.onGetData()
  },

  onReachBottom: function () {
    this.onGetData()
  },
  
})