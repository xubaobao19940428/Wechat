App({
  onLaunch(options) {
    // Do something initial when launch.
  },
  onShow(options) {
    // Do something when show.
  },
  onHide() {
    // Do something when hide.
  },
  onError(msg) {
    console.log(msg)
  },
  globalData:{
    g_isPlaying: false,
    //  记录当前页面是否播放
    g_currentMusicPost: null,
    //  电影api地址
    doubanBase: 'https://api.douban.com'
  }
})