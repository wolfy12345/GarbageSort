var t = require("../../utils/module"), 
s = t(require("../../mainInfo.js")), 
n = require("../../tipInfo.js");

getApp();

Page({

  data: {
    SHOW_TOP: true,
    images: {
      magnifier: "/images/tab_bar_icon_magnifier.png",
      qrB: "/images/qr_b.png",
      wsgQr: "/images/zsm.jpg",
      location: "/images/location.png",
      broadcast: "/images/broadcast.png"
    },
    tipInfo: n.tipInfo,
    city: "shanghai",
  },

  onLoad: function(options) {
    this.initData(), wx.showShareMenu({
      withShareTicket: !0
    });

    var myDate = new Date();
    var isShowed=wx.getStorageSync("tip")
    if(isShowed!=1){
      setTimeout(() => {
        this.setData({
          SHOW_TOP: false
        })
        wx.setStorageSync("tip", 1)
      }, 2 * 1000)
    }else{
      this.setData({
        SHOW_TOP: false
      })
    }
  },

  initData: function () {
    void 0 === wx.getStorageSync("city") || 0 === wx.getStorageSync("city").length ? (wx.setStorageSync("city", this.data.city)) : this.setData({
      city: wx.getStorageSync("city")
    });
    var e = [];
    for (var a in s.default.cities) e.push(s.default.cities[a]);
    this.setData({
      tipInfo: n.tipInfo,
      config: s.default,
      cities: e
    });
  },
  onShow: function () {
    (this.setData({
      tipInfo: n.tipInfo
    }))
    
    wx.getStorageSync("city") !== this.data.city && this.setData({
      city: wx.getStorageSync("city"),
    });
    this.setFakeSearchLeft()
  },
  startSearch: function (t) {
    wx.navigateTo({
      url: "../ai/search"
    });
  },
  chooseCity: function (t) {
    var e = t.currentTarget.dataset.itemKey;
    e !== this.data.city && (wx.setStorageSync("city", e), this.setData({
      city: e,
      showChooseCity: !1,
      enableScroll: !0
    }), this.setFakeSearchLeft());
  },
  closeOverlay: function () {
    this.setData({
      showChooseCity: !1,
      enableScroll: !0
    });
  },
  showChooseCity: function () {
    this.setData({
      showChooseCity: !0,
      enableScroll: !1
    });
  },
  switchToTest: function () {
    wx.switchTab({
      url: "/pages/test/test"
    });
  },
  setFakeSearchLeft: function () {
    var t = this;
    wx.createSelectorQuery().select("#currentCity").boundingClientRect(function (e) {
      t.setData({
        fakeSearchLeft: "left: calc(25rpx + 21rpx + " + e.width + "px);"
      });
    }).exec();
  },
  goSearch: function() {
    wx.navigateTo({
      url: 'search',
    })
  },
  onBindCamera: function() {
    wx.getSetting({
      success(res) {
        console.log(res);
        if (!res.authSetting['scope.camera']) {
          wx.authorize({
            scope: 'scope.camera',
            success() {
              // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
              wx.navigateTo({
                url: 'camera/camera',
              })
            }
          })
        } else {
          wx.navigateTo({
            url: 'camera/camera',
          })
        }
      }
    })
  },
  onAikefu: function() {
    wx.navigateTo({
      url: '/pages/android/qa',
    })
  },
  onShareAppMessage: function() {
    return {
      title: "智能分类垃圾",
      imageUrl: "../../images/no-result.png",
      path: "pages/ai/index"
    }
  },
  showZsm: function (t) {
    wx.previewImage({
      current: "https://6465-dev-oto5o-1257020492.tcb.qcloud.la/zsm.jpg?sign=630ef20ce52101ba29f99c6bc1934835&t=1576025106",
      urls: ["https://6465-dev-oto5o-1257020492.tcb.qcloud.la/zsm.jpg?sign=630ef20ce52101ba29f99c6bc1934835&t=1576025106"],
    })
  }
})