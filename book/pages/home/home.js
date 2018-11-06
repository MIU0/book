Page({

  /**
   * 页面的初始数据
   */
  data: {
    text: '欢迎浏览小程序，商品陆续上架中，敬请期待......',
    marqueePace: 1, //滚动速度
    marqueeDistance: 0, //初始滚动距离
    marqueeDistance2: 0,
    size: 14,
    orientation: 'left', //滚动方向
    interval: 15, // 时间间隔
    indicatorDots: true,
    autoplay: true,
    myinterval: 3000,
    duration: 1000,
    imgsUrl: [ //轮播
      'http://wmdx.vimi66.com:8010/img-video/upload/img//20181105162846023648.jpg',
      'http://wmdx.vimi66.com:8010/img-video/upload/img//20181105162846013044.jpg',
      'http://wmdx.vimi66.com:8010/img-video/upload/img//20181105162846011313.jpg'
    ],
    store_digest: [{
        img: '../../images/one.png',
        name: '教学视频',
      url:'../video_list/video_list'
      },
      {
        img: '../../images/two.png',
        name: '绘画教材',
        url: '../drawbook/drawbook'
      },
      {
        img: '../../images/three.png',
        name: '衍生品'
      },
      {
        img: '../../images/four.png',
        name: '绘画作品'
      },
      {
        img: '../../images/five.png',
        name: '艺术品'
      },
      {
        img: '../../images/six.png',
        name: '美术画材'
      },
      {
        img: '../../images/seven.png',
        name: '超值套餐'
      },
      {
        img: '../../images/eight.png',
        name: '线上1V1'
      }
    ],
    store_list: [{
      store_img: 'http://wmdx.vimi66.com:8010/img-video/upload/img//20181105162846023648.jpg',
        name: '【助力联考 全场五折】 《造型的高度-素描》',
        price: '64.00'
      },
      {
        store_img: 'http://wmdx.vimi66.com:8010/img-video/upload/img//20181105162846013044.jpg',
        name: '【助力联考 全场五折】 《超越联考色彩》',
        price: '59.00'
      },
      {
        store_img: 'http://wmdx.vimi66.com:8010/img-video/upload/img//20181105162846011313.jpg',
        name: '【助力联考 全场五折】 《精彩色调》',
        price: '48.00'
      },
    ],
    video_list: [{
      video_img: 'http://wmdx.vimi66.com:8010/img-video/upload/img//20181105162846033073.jpg',
        video_name: '女青年色彩头像示范',
        video_details: '黄埔艺术研究院导师教你画画',
        video_time: '07-13',
        video_num: '20',
        video_price: '0.50'
      },
      {
        video_img: 'http://wmdx.vimi66.com:8010/img-video/upload/img//20181105162846365409.png',
        video_name: '讲解素描直观造型',
        video_details: '黄埔艺术研究院导师教你画画',
        video_time: '07-13',
        video_num: '20',
        video_price: '0.50'
      },
      {
        video_img: 'http://wmdx.vimi66.com:8010/img-video/upload/img//20181105162846103897.jpg',
        video_name: '女青年3/4素描头像写生示范',
        video_details: '黄埔艺术研究院导师教你画画',
        video_time: '07-13',
        video_num: '20',
        video_price: '0.50'
      }

    ]
  },
/**跳转商品详情 */
  shop_details:function(e){
wx.navigateTo({
  url: '../shop_details/shop_details',
})
  },
  /**类型跳转 */
  store_type: function(e) {
    var url = e.currentTarget.dataset.url;
    wx.navigateTo({
      url: url
    })
  },
  /**视频列表 */
  all_video:function(){
    wx.navigateTo({
      url: '../video_list/video_list',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    // 页面显示
    var that = this;
    var length = that.data.text.length * that.data.size; //文字长度
    var windowWidth = wx.getSystemInfoSync().windowWidth; // 屏幕宽度
    that.setData({
      length: length,
      windowWidth: windowWidth,
    });
    that.run1(); // 水平一行字滚动完了再按照原来的方向滚动
  },
  run1: function() {
    var that = this;
    var interval = setInterval(function() {
      if (-that.data.marqueeDistance < that.data.length) {
        that.setData({
          marqueeDistance: that.data.marqueeDistance - that.data.marqueePace,
        });
      } else {
        clearInterval(interval);
        that.setData({
          marqueeDistance: that.data.windowWidth
        });
        that.run1();
      }
    }, that.data.interval);
  },

  /**视频详情 */
  video_details:function(e){
wx.navigateTo({
  url: '../video_details/video_details',
})
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})