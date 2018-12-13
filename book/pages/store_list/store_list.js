Page({

  /**
   * 页面的初始数据
   */
  data: {
    all_store:[
      {
        store_img:'http://wmdx.vimi66.com:8010/img-video/upload/img//20181105162846023648.jpg',
        store_name:'【助力联考 全场五折】 《造型的高度-素描》',
        store_price:'64.00'   
      },
      {
        store_img: 'http://wmdx.vimi66.com:8010/img-video/upload/img//20181105162846013044.jpg',
        store_name: '【助力联考 全场五折】 《超越联考色彩》',
        store_price: '59.00'  
      },
      {
        store_img: 'http://wmdx.vimi66.com:8010/img-video/upload/img//20181105162846011313.jpg',
        store_name: '【助力联考 全场五折】 《精彩色调》',
        store_price: '48.00'  
      }
    ],
    count: 1,
    store_pop: false,
    inforHasMore: 1,
    inforPage: 1,
    zhuan: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中...',
    })
    console.log(options.my_distributor_id, 3333333)
    if (options.my_distributor_id) {
      getApp().globalData.distributor_id = options.my_distributor_id
    }
    if (options.scene) {
      let scene = decodeURIComponent(options.scene);
      //&是我们定义的参数链接方式
      let distributor_id = scene.split("&")[0];
      //console.log(distributor_id, 11111);
      distributor_id = distributor_id.split("=")[1];
      wx.request({
        url: getApp().globalData.baseUrl + '/wechat/qr/readQr',
        data: {
          dis_id: distributor_id
        },
        header: {},
        success: function (res) {
          //console.log(res.data.data,55555);
          var distributor = res.data.data;
          getApp().globalData.distributor_id = distributor.distributor_id
        }
      });
      //`${getApp().globalData.distributor_id}`
      //其他逻辑处理。。。。。
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },
  /**跳转商品详情 */
  store_details: function (e) {
    var aa = e.currentTarget.dataset.id
    console.log(aa,87868)
    wx.navigateTo({
      url: '../shop_details/shop_details?url=' + aa,
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that=this;
    that.setData({
      inforHasMore:1
    })
    wx.request({
      url: `${getApp().globalData.baseUrl}/wechat/commerce/getAllCommerce`,
      data:{
        page: 1,
        rows: 10
      },
      header:{},
      success:function(res){
        wx.hideLoading()
        if (res.data.code = 200) {
          var all_store = res.data.data;
          console.log(all_store, 8079)
          var my_distributor_id = getApp().globalData.my_distributor_id;
          //console.log(my_distributor_id, 8909);
          var zhuan = 0
          if (my_distributor_id) {
            zhuan = 1
          }
          that.setData({
            all_store: all_store,
            zhuan: zhuan
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
            all_store: [],
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
      var pa_all_store = that.data.all_store;
      var inforPage = that.data.inforPage;
      console.log(pa_all_store, 9999);
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
            var all_store = [];
            var new_all_store = pa_all_store.concat(res.data.data);
            for (var i = 0; i < new_all_store.length; i++) {
              all_store.push(new_all_store[i])
            }
            that.setData({
              all_store: all_store
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
              all_store: pa_all_store,
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
  /**弹出层 */
  gouwu_pop: function (e) {
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 200)
    this.setData({
      animationData: animation.export(),
      store_pop: true
    })
    var that = this;
    var index = e.currentTarget.dataset.index;
    var commerce_id = e.currentTarget.dataset.id;

    var all_store = that.data.all_store
    console.log(all_store, 87789);
    var store_pop = null;
    for (var i = 0; i < all_store.length; i++) {
      if (all_store[i].commerce_id == commerce_id) {
        store_pop = all_store[i]
      }
    }
    that.setData({
      store_pop: store_pop,
      count:1
    })

  },
  preventTouchMove: function () {

  },
  close_gouwu: function () {
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export(),
        store_pop: false
      })
    }.bind(this), 200)
    this.setData({
      animationData: animation.export(),
    })
  },
  /**立即购买 */
  buy_now: function (e) {
    var count = e.currentTarget.dataset.count;
    var id = e.currentTarget.dataset.id
    console.log(id, 322)
    wx.navigateTo({
      url: '../create_order/create_order?count=' + count + '&id=' + id,
    })
  },
  /**添加购物车 */
  my_add: function (e) {
    var that = this;
    var c_user_id = (wx.getStorageSync('c_user_id'));
    that.setData({
      c_user_id: c_user_id
    })

    var comm_num = e.currentTarget.dataset.count;
    var commodity_id = e.currentTarget.dataset.id
    console.log(commodity_id, 1111)
    wx.request({
      url: `${getApp().globalData.baseUrl}/wechat/commerce/addShopToCart`,
      data: {
        comm_num: comm_num,
        c_user_id: c_user_id,
        commodity_id: commodity_id

      },
      header: {},
      success: function (res) {
        wx.showToast({
          title: '加入购物车成功',
        })
      }
    })

  },
  /**加商品 */
  addtap: function () {
    var that = this;
    that.setData({
      count: ++that.data.count
    })
  },
  subtracttap: function () {
    var that = this;
    var count = that.data.count
    if (count > 1) {
      count--
    }
    that.setData({
      count: count
    })
  },
  /**我的分销员中心 */
  fenxiao: function (e) {
    wx.navigateTo({
      url: '../fenxiao/fenxiao',
    })
  },
  zhuan: function () {
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 200)
    this.setData({
      animationData: animation.export(),
      zhuan_info: true
    })
  },
  close_zhuan: function () {
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export(),
        zhuan_info: false
      })
    }.bind(this), 200)
    this.setData({
      animationData: animation.export(),
    })
  },
  my_code: function () {
    this.setData({
      zhuan_info: false,
      code_info: true
    })
    var that = this;
    wx.request({
      url: `${getApp().globalData.baseUrl}/wechat/qr/getEwm`,
      header: {
        'content-type': 'application/json'
      },
      data: {
        commer_id: 1,
        page: 'pages/store_list/store_list',
        distributor_id: getApp().globalData.my_distributor_id
      },
      success: function (res) {
        wx.hideLoading();
        var path = res.data.data;
        //console.log(res.data.data, 99999)
        that.setData({
          my_path: path
        })
      }
    })
  },
  close_code: function () {
    this.setData({
      code_info: false
    })
  },
  //点击开始的时间  
  timestart: function (e) {
    var _this = this;
    _this.setData({ timestart: e.timeStamp });
  },
  //点击结束的时间
  timeend: function (e) {
    var _this = this;
    _this.setData({ timeend: e.timeStamp });
  },

  //保存图片
  saveImg: function (e) {
    var that = this;
    var times = that.data.timeend - that.data.timestart;
    if (times > 300) {
      //console.log("长按");
      wx.getSetting({
        success: function (res) {
          wx.authorize({
            scope: 'scope.writePhotosAlbum',
            success: function (res) {
              //console.log("授权成功");
              var imgUrl = that.data.my_path.path;
              wx.downloadFile({//下载文件资源到本地，客户端直接发起一个 HTTP GET 请求，返回文件的本地临时路径
                url: imgUrl,
                success: function (res) {
                  // 下载成功后再保存到本地
                  wx.saveImageToPhotosAlbum({
                    filePath: res.tempFilePath,//返回的临时文件路径，下载后的文件会存储到一个临时文件
                    success: function (res) {
                      wx.showToast({
                        title: '成功保存到相册',
                        icon: 'success'
                      })
                    }
                  })
                }
              })
            }
          })
        }
      })
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
  onShareAppMessage: function (ops) {
    if (ops.from === 'button') {
      // 来自页面内转发按钮
      //console.log(ops.target)
    }
    var my_distributor_id = getApp().globalData.my_distributor_id
    //console.log(my_distributor_id,343434)
    return {
      title: 'GL好肌友皮肤管理',
      path: `pages/store_list/store_list?my_distributor_id=` + my_distributor_id, //点击分享的图片进到哪一个页面
      success: function (res) {
        // 转发成功
        //console.log("转发成功:" + JSON.stringify(res));
      },
      fail: function (res) {
        // 转发失败
        //console.log("转发失败:" + JSON.stringify(res));
      }
    }
  }
})