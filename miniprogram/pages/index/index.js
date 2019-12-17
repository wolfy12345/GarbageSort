const db = wx.cloud.database()
var t = require("../../utils/module"),
s = t(require("../../mainInfo.js")), 
n = require("../../tipInfo.js");

getApp();

Page({
    data: {
      secId: 0,
      images: {
          magnifier: "/images/tab_bar_icon_magnifier.png",
          qrB: "/images/qr_b.png",
          wsgQr: "/images/zsm.jpg",
          location: "/images/location.png",
          broadcast: "/images/broadcast.png"
      },
      tipInfo: n.tipInfo,
      city: "shanghai",
      MAX_LIMIT: 20,
      page: 0,
      dataCount: 0,
      datas: [],
      type: 3,
      enableScroll: !0,
      scrollTop: 0
    },
    onLoad: function() {
      this.initData(), wx.showShareMenu({
          withShareTicket: !0
      });
    },
    initData: function() {
        void 0 === wx.getStorageSync("city") || 0 === wx.getStorageSync("city").length ? (wx.setStorageSync("city", this.data.city)) : this.setData({
            city: wx.getStorageSync("city")
        });
        var e = [];
        for (var a in s.default.cities) e.push(s.default.cities[a]);
        this.setData({
            tipInfo: n.tipInfo,
            config: s.default,
            cities: e
        }), 
        this.updateData();
    },
    onShow: function() {
        ((this.setData({
          tipInfo: n.tipInfo
        })),
        (this.updateData())
        )
        wx.getStorageSync("city") !== this.data.city && this.setData({
            city: wx.getStorageSync("city"),
        });
    },
    onShareAppMessage: function(t) {
        return {
            title: "垃圾分类指南",
            path: "/pages/index/index"
        };
    },
    switchSection: function(t) {
      this.data.secId = t.currentTarget.id.slice(3)
      this.setData({
        secId: t.currentTarget.id.slice(3),
        scrollTop: 0
      });
      var map = [
        3, 4, 1, 2
      ]
      this.data.type = map[t.currentTarget.id.slice(3)];
      this.data.page = 0;
      this.updateData();
    },
    showZsm: function(t) {
      wx.previewImage({
        current: "https://6465-dev-oto5o-1257020492.tcb.qcloud.la/zsm.jpg?sign=630ef20ce52101ba29f99c6bc1934835&t=1576025106",
        urls: ["https://6465-dev-oto5o-1257020492.tcb.qcloud.la/zsm.jpg?sign=630ef20ce52101ba29f99c6bc1934835&t=1576025106"],
      })
    },
    updateData: function() {
      this.data.dataCount = db.collection('product').where({
        sortId: this.data.type
      }).count()

      wx.showLoading({
        title: '正在加载数据中.....',
      })
      if (this.data.dataCount < this.data.page * this.data.MAX_LIMIT) {
        wx.showToast({
          title: '数据已经加载完',
          icon: "none"
        })
        wx.hideLoading()
        return
      }
      var that = this
      if (this.data.page == 0) {
        this.data.datas = []
        var localData = wx.getStorageSync("localData_" + this.data.type);
        if(localData == "") {
          var datas = db.collection('product').skip(this.data.page * this.data.MAX_LIMIT).limit(this.data.MAX_LIMIT).where({
            sortId: parseInt(that.data.type)
          }).get({
            success: function (res) {
              // console.log(res.data)
              wx.hideLoading()
              that.data.page = that.data.page + 1
              for (var i = 0; i < res.data.length; i++) {
                that.data.datas.push(res.data[i])
              }
              console.log(that.data.datas)
              wx.setStorageSync("localData_" + that.data.type, that.data.datas);
              that.setData({
                data: that.data.datas
              })
            },
            fail: res => {
              wx.hideLoading()
              wx.showToast({
                title: '数据加载失败',
                icon: "none"
              })
            }
          })
        } else {
          wx.hideLoading()
          that.data.page = that.data.page + 1
          this.data.datas = localData;
          this.setData({
            data: this.data.datas
          })
        }
      } else {
        var datas = db.collection('product').skip(this.data.page * this.data.MAX_LIMIT).limit(this.data.MAX_LIMIT).where({
          sortId: parseInt(that.data.type)
        }).get({
          success: function (res) {
            // console.log(res.data)
            wx.hideLoading()
            that.data.page = that.data.page + 1
            for (var i = 0; i < res.data.length; i++) {
              that.data.datas.push(res.data[i])
            }
            // console.log(that.data.datas)
            that.setData({
              data: that.data.datas
            })
          },
          fail: res => {
            wx.hideLoading()
            wx.showToast({
              title: '数据加载失败',
              icon: "none"
            })
          }
        })
      }
    },
    loadMoreItems: function() {
      this.updateData()
    },
    switchToTest: function() {
        wx.switchTab({
            url: "/pages/test/test"
        });
    }
});