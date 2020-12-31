
module.exports = (url, data, method = 'GET', header = {}) => {
  wx.showLoading({ title: 'Loading...' })
  return new Promise((resolve, reject) => {
    wx.request({
      url: "https://locally.uieee.com/" + url,
      data,
      header,
      method,
      dataType: 'json',
      success: resolve,
      fail: reject,
      complete: wx.hideLoading
    })
  })
}