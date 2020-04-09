import http from '../utils/api'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    femaleList:[]
  },
  goToindex:function(){
    //跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
    wx.switchTab({
      url:'../index/index',
    })
    // wx.redirectTo({
    //   //关闭当前页面，跳转到应用内的某个页面,但是不允许跳到tabBar页面
    //   url: '../index/index',
    // })
    //保留当前页面，跳转到应用内的某个页面。但是不能跳到 tabbar 页面。使用 wx.navigateBack 可以返回到原页面。小程序中页面栈最多十层
    // wx.navigateTo({
    //   url: '../index/index'
    // }) 
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData()
  },
  getData:function(){
    http.femaleNameApi({ // 调用接口，传入参数
      data: {
        token: '470712FF0FE2392D6CB6D8A6560805CC'
      },
      success: res => {
        console.log('接口请求成功', res)
        this.setData({
          femaleList: res.data
        })
      },
      fail: err => {
        console.log(err)
      }
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