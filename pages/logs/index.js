// pages/logs/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: [{
      message: 'foo',
    }, {
      message: 'bar'
    }],
    datesArry:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var datasArr = [{
          date: '2018/2/3',
          title: '神盾局特工1',
          content: '神盾局特工这个礼拜六停播，说好的不冬歇的呢？',
          imgUrl:'../img/post/timg4.jpg',
          postId:1
        }, {
          date: '2018/2/3',
          title: '神盾局特工2',
          content: '神盾局特工科学组CP要结婚啦!',
          imgUrl:'../img/post/timg5.jpg',
          postId:'2'
        }]
        this.setData({ datesArry: datasArr })
      },
      onPostTap:function(event){
        console.log(event)
        var postId = event.currentTarget.dataset.postid
        wx.navigateTo({
          url: '../detail/detail?id='+postId,
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