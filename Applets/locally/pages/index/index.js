const fetch = require('../../utils/util.js')
Page({
  data: {
    slides: [],
    categories: []
  },
  onLoad: function () {
    fetch('slides').then(res => {
      this.setData({'slides': res.data})
    })
    fetch('categories').then(res => {
      this.setData({'categories': res.data})
    })
  }
})
