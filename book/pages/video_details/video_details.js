Page({

  /**
   * 页面的初始数据
   */
  data: {
    playIndex: null,//用于记录当前播放的视频的索引值
    courseList: [{
      videoUrl: 'http://store.vimi66.com:8010/shop/upload/act_img//20181101204433873223.mp4',//视频路径
      coverUrl: 'http://wmdx.vimi66.com:8010/img-video/upload/img//20181105162846033073.jpg', //视频封面图
      duration: '你好年后', //视频时长
    }],
    cover_close: true, //弹出层
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  /**跳转留言页面 */
  leave_text:function(){
wx.navigateTo({
  url: '../video_leave/video_leave',
})
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
/**遮罩层 */
  preventTouchMove: function () {
  },
  cover_video: function () {
    
  },

  videoPlay: function (e) {
    var curIdx = e.currentTarget.dataset.index;
    // 没有播放时播放视频
    if (!this.data.playIndex) {
      this.setData({
        playIndex: curIdx
      })
      var videoContext = wx.createVideoContext('video' + curIdx) //这里对应的视频id
      videoContext.play()
    } else { // 有播放时先将prev暂停，再播放当前点击的current
      var videoContextPrev = wx.createVideoContext('video' + this.data.playIndex)
      if (this.data.playIndex != curIdx) {
        videoContextPrev.pause()
      }
      this.setData({
        playIndex: curIdx
      })
      var videoContextCurrent = wx.createVideoContext('video' + curIdx)
      videoContextCurrent.play()
    }
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