const fetch = require('../../utils/util')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    shops: [],
    category: null,
    pageIndex: 0,
    pageSize: 20,
    totalCount: 80,
    hasMore: true,
    searchText: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    fetch(`/categories/${options.cat}`)
      .then(res => {
        //这儿不一定在onReady后执行，如果接口响应快也有可能先执行。
        this.setData({ category: res.data })
        wx.setNavigationBarTitle({ title: res.data.name })
        this.loadMore();
    })
  },
  searchHandl(e){
    this.setData({shops: [], searchText: e.detail.value, pageIndex: 0, hasMore: true})
    this.loadMore()
  },
  loadMore(){
    if(!this.data.hasMore){return false;}
    let { pageIndex, pageSize, searchText } = this.data;
    const params = { _page: ++pageIndex, _limit: pageSize }
    if (searchText) params.q = searchText

    return fetch(`/categories/${this.data.category.id}/shops`, params)
      .then(res => {
        console.log(res)
        const totalCount = 80
        const hasMore = this.data.pageIndex * this.data.pageSize < 80
        console.log(hasMore)
        const shops = this.data.shops.concat(res.data)
        this.setData({ shops, totalCount, pageIndex, hasMore })
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    if(!!this.data.category) {
      wx.setNavigationBarTitle({ title: res.data.category.name })
    }
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.setData({shops: [], pageIndex: 0, hasMore: true})
    this.loadMore().then(() => wx.stopPullDownRefresh())
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.loadMore()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})