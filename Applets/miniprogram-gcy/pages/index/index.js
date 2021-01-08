//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    src: "",

    userName: "admin",
    password: "123456",
  },
  inputChangeHandl(e){
    var prop = e.target.dataset.name
    var changed = {}
    changed[prop] = e.detail.value
    this.setData(changed)
  },
  loginHandl(){
    console.log(this.data.userName + " : " + this.data.password)
  },
  registerHandl(){

  },
  //事件处理函数
  onLoad: function () {
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        console.log(res)
        this.data.latitude = res.latitude // 纬度
        this.data.longitude = res.longitude // 经度
      }
    })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
