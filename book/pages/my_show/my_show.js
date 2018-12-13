// pages/my_show/my_show.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    store_list:[
      {
        img_src:'../../images/img/bj.png',
        commerce_name:'小猪佩奇'
      },
       {
        img_src: '../../images/img/bj.png',
        commerce_name: '小猪乔治'
      },
       {
        img_src: '../../images/img/bj.png',
        commerce_name: '萌萌哒'
      }
    ],
    inforHasMore: 1,
    inforPage: 1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
this.setData({
  id: options.url
})
    wx.showLoading({
      title: '加载中...',
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
var that=this;
    that.setData({
      inforHasMore: 1
    })
wx.request({
  url: `${getApp().globalData.baseUrl}/wechat/art/getArtList`,
  data:{
    art_type:that.data.id,
    page: 1,
    rows: 10
  },
  header:{},
  success:function(res){

    wx.hideLoading()
    if (res.data.code = 200) {
      var my_show = res.data.data;
      console.log(my_show, 8079)
      var shopNull = 0
      if (!my_show || my_show.length == 0) {
        shopNull = 1
      }
      that.setData({
        my_show: my_show,
        shopNull: shopNull
      })
      if (res.data.data.length < 10) {
        that.setData({
          inforHasMore: 0
        })
      } else {
        that.setData({
          inforPage: 2
        })
      }
    } else {
      that.setData({
        my_show: [],
        inforHasMore: 0,
      });
    }

  },
  fail: function (res) {
    console.log('查询失败');
  }
})
  },
  /**分页加载 */
  loadingMore: function () {
    //console.log(88888888)
    var that = this;
    var inforHasMore = that.data.inforHasMore;
    if (inforHasMore == 1) {
      wx.showLoading({
        title: '正在加载',
      })
      var pa_my_show = that.data.my_show;
      var inforPage = that.data.inforPage;
      console.log(pa_my_show, 9999);
      wx.request({
        url: `${getApp().globalData.baseUrl}/wechat/commerce/getAllCommerce`,
        data: {
          c_user_id: that.data.c_user_id,
          page: inforPage,
          rows: 10
        },
        header: {
          'content-type': 'application/json'  // 默认值
        },
        success: function (res) {
          wx.hideLoading();
          if (res.data.code = 200) {
            var my_show = [];
            var new_my_show = pa_my_show.concat(res.data.data);
            for (var i = 0; i < new_my_show.length; i++) {
              my_show.push(new_my_show[i])
            }
            that.setData({
              my_show: my_show
            });
            //console.log(res.data.data.recordList, 555);
            if (res.data.data.length < 10) {
              that.setData({
                inforHasMore: 0
              })
            } else {
              that.setData({
                inforPage: ++inforPage
              })
            }

          } else {
            that.setData({
              my_show: pa_my_show,
              inforHasMore: 0,
            });
          }

        },
        fail: function (res) {
          console.log("加载失败")
        },
        complete: function (res) {
          console.log("加载完成")
        }

      })
    }

  },
  /**点击图片放大 */
  shop_details: function (e) {
    var that = this;
    var current = e.target.dataset.src;
    var imgList = [];
    console.log(current, 666)
    for (let i = 0; i < that.data.my_show.length; i++) {
      imgList.push(that.data.my_show[i].img_url);
    }
    wx.previewImage({
      current: current,     //当前图片地址
      urls: imgList,
    })
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