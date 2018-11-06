Page({

  /**
   * 页面的初始数据
   */
  data: {
    head: "../../images/img/head.png",
    search: "../../images/img/search.png",
    imgUrls: [
      'http://wmdx.vimi66.com:8010/img-video/upload/img//20181105162846023648.jpg'
    ],
    redheart: '../../images/xinxin.png',
    wall: "../../images/img/wall.png",
    corner: "../../images/img/corner.png",
    right: "../../images/img/right.png",
    msg: "../../images/img/msg.png",
    car: "../../images/img/car.png",
    gift: "../../images/img/gift.png",
    star: "../../images/img/star.png",
    dianzan: "../../images/img/dianzan.png",
    _num: 1,
    _praise: 1,
    productlist: [
      {
        postId: 1,
        url: 'http://wmdx.vimi66.com:8010/img-video/upload/img//20181105162846011313.jpg', 
        title: '【助力联考 全场5折】 《超越联考色彩》【助力联考 全场5折】 《超越联考色彩》',
        praise: '￥59.00'
      },
      {
        postId: 2,
        url: 'http://wmdx.vimi66.com:8010/img-video/upload/img//20181105162846013044.jpg',
        title: '【助力联考 全场5折】 《超越联考色彩》【助力联考 全场5折】 《超越联考色彩》',
        praise: '￥59.00'
      },
      {
        postId: 3,
        url: 'http://wmdx.vimi66.com:8010/img-video/upload/img//20181105162846023648.jpg',
        title: '【助力联考 全场5折】 《超越联考色彩》【助力联考 全场5折】 《超越联考色彩》',
        praise: '￥59.00'
      },
      {
        postId: 4,
        url: 'http://wmdx.vimi66.com:8010/img-video/upload/img//20181105162846056127.jpg',
        title: '【助力联考 全场5折】 《超越联考色彩》【助力联考 全场5折】 《超越联考色彩》',
        praise: '￥59.00'
      }
    ]
  },


  // 商品详情切换
  clickNum: function (e) {
    console.log(e.target.dataset.num)
    this.setData({
      _num: e.target.dataset.num
    })
  },

  clickPraise: function (e) {
    console.log(e.target.dataset.praise,99999)
    this.setData({
      _praise: e.target.dataset.praise
    })
  }, 

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
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
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})