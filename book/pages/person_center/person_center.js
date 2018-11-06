Page({

  /**
   * 页面的初始数据
   */
  data: {
    order_type_list: [{
        type_img: '../../images/type_one.png',
        type_name: '待付款'
      },
      {
        type_img: '../../images/type_two.png',
        type_name: '待接单'
      },
      {
        type_img: '../../images/type_three.png',
        type_name: '待发货'
      },
      {
        type_img: '../../images/type_four.png',
        type_name: '已发货'
      },
      {
        type_img: '../../images/type_five.png',
        type_name: '已完成'
      }

    ],
    person_other_list: [
      {
        iconfont: 'icon-youhuima',
        other_name: '优惠码'
      },
      {
        iconfont:'icon-gouwuche',
        other_name: '购物车'
      }, 
      {
        iconfont: 'icon-renyuan',
        other_name: '分销员中心'
      },
      {
        iconfont: 'icon-daifukuan',
        other_name: '返现'
      },
      {
        iconfont:'icon-Ankerwebicon-',
        other_name: '收到的礼物'
      },
      {
        iconfont: 'icon-daizi',
        other_name: '赠品'
      },
      {
        iconfont: 'icon-shoucang',
        other_name: '心愿单'
      },
      {
        iconfont: 'icon-shuben',
        other_name: '知识付费课程'
      }

    ]
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