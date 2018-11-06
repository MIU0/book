//app.js

App({
  onLaunch: function() {
    // var openId = (wx.getStorageSync('openId'));
    // var c_user_id = (wx.getStorageSync('c_user_id'));
    // console.log(openId, 11111);
    // console.log(c_user_id, 222);
    // var that = this;
    // if (!openId ||!c_user_id) {
    //   wx.login({
    //     success: function (res) {
    //       console.log(res.code)
    //       if (res.code) {

    //             wx.request({
    //               //后台接口地址
    //               url: 'https://store.vimi66.com/shop/wechat/home/index',
    //               data: {
    //                 code: res.code
    //               },
    //               method: 'GET',
    //               header: {
    //                 'content-type': 'application/json'
    //               },
    //               success: function (res) {
    //                 // this.globalData.userInfo = JSON.parse(res.data);
    //                 console.log(res.data,3333);
    //                 wx.setStorageSync('openId', res.data.openid);
    //                 wx.setStorageSync('c_user_id', res.data.c_user_id);
    //               }
    //             })


    //       }
    //     }
    //   })

    // }

  },
  globalData: {
    userInfo: null,
    baseUrl: 'https://store.vimi66.com'
  }
 
})