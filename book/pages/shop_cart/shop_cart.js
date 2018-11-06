// pages/shop_cart/shop_cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectAllStatus: true ,   // 全选状态，默认全选
    shop_cart_list:[
{
        shop_cart_img:'http://wmdx.vimi66.com:8010/img-video/upload/img//20181105162846023648.jpg',
        name:'【助力联考 全场五折】 《造型的高度-素描》',
        price:'64.00',
        num:'1',
        count:'1',
        selected: false
},
      {
        shop_cart_img: 'http://wmdx.vimi66.com:8010/img-video/upload/img//20181105162846013044.jpg',
        name: '【助力联考 全场五折】 《造型的高度-素描》',
        price: '48.00',
        num: '1',
        count: '1',
        selected: false
      }
    ],
    hiddenName: true,
    hiddenDe:false,
    selectAllStatus:false,
     totalPrice: '0.00',           // 总价，初始为0
  },
/**单选事件 */
  selectList(e) {
    const index = e.currentTarget.dataset.index;    // 获取data- 传进来的index
    let shop_cart_list = this.data.shop_cart_list;           // 获取购物车列表
    const selected = shop_cart_list[index].selected;         // 获取当前商品的选中状态
    shop_cart_list[index].selected = !selected; 
    var count=0;             // 改变状态
    for (var i = 0; i < shop_cart_list.length;i++){
      var f=shop_cart_list[i].selected
      console.log(f,88888)
      if(f){
        count++;
        console.log(count);
      }
    }
    var selectAllStatus = false;
    if (shop_cart_list.length==count){
      selectAllStatus=!this.data.selectAllStatus;
      console.log("11111");
    }
    var cart_bottom=0;
    if(count!=0){
      cart_bottom=1
    }
    this.setData({
      shop_cart_list: shop_cart_list,
      selectAllStatus: selectAllStatus,
      cart_bottom: cart_bottom     
    });
    this.getTotalPrice();                           // 重新获取总价
  },
  /**全选事件 */
  selectAll(e) {
    let selectAllStatus = this.data.selectAllStatus;    // 是否全选状态
    selectAllStatus = !selectAllStatus;
    let shop_cart_list = this.data.shop_cart_list;
    var count = 0;
    for (let i = 0; i < shop_cart_list.length; i++) {
      shop_cart_list[i].selected = selectAllStatus; // 改变所有商品状态
      if (selectAllStatus) {
        count++;
        console.log(count);
      }            
    }
    var cart_bottom = 0;
    if (count != 0) {
      cart_bottom = 1
    }
    this.setData({
      selectAllStatus: selectAllStatus,
      shop_cart_list: shop_cart_list,
      cart_bottom: cart_bottom
    });
    this.getTotalPrice();                               // 重新获取总价
  },
  /**点击“编辑”显示隐藏 */
  clickMe: function (e) {
    var value = e.detail.value;
    console.log(value,33333)
    this.setData({
      hiddenName: !this.data.hiddenName,
      hiddenDe: !this.data.hiddenDe
    })
  },
  /**
 * 用户点击商品减1
 */
  subtracttap: function (e) {
    var index = e.target.dataset.index;
    var shop_cart_list = this.data.shop_cart_list;
    var count = shop_cart_list[index].count;
    if (count <= 1) {
      return;
    } else {
      shop_cart_list[index].count--;
      this.setData({
        'shop_cart_list': shop_cart_list
      });
      this.getTotalPrice();
    }
  },
  /**
   * 用户点击商品加1
   */
  addtap: function (e) {
    var index = e.target.dataset.index;
    var shop_cart_list = this.data.shop_cart_list;
    var count = shop_cart_list[index].count;
    shop_cart_list[index].count++;
    this.setData({
      'shop_cart_list': shop_cart_list
    });
    this.getTotalPrice();
  },
/**计算总价 */
  getTotalPrice() {
    let shop_cart_list = this.data.shop_cart_list;                  // 获取购物车列表
    let total = 0;
    var totalNum=0;
    
    for (let i = 0; i < shop_cart_list.length; i++) { 
      var num = parseInt(shop_cart_list[i].num)        // 循环列表得到每个数据
      if (shop_cart_list[i].selected) {                   // 判断选中才会计算价格
        totalNum += num 
        total += shop_cart_list[i].num * shop_cart_list[i].price;     // 所有价格加起来
      }
    }
    this.setData({                                // 最后赋值到data中渲染到页面
      shop_cart_list: shop_cart_list,
      totalPrice: total.toFixed(2),
      totalNum: totalNum

    });
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