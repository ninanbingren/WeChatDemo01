//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imagesUrl: [
      "/images/haibao/1.jpg",
      "/images/haibao/2.jpg",
      "/images/haibao/3.jpg",
      "/images/haibao/4.jpg",
    ],
    autoplay: "true",
    vertical: "true",
    interval: 2000,
    indicatorDots: "true",
    circular: "true",
    indicatorActiveColor: "#f40"
      // 
      ,
    currentTab: 0
  },
  //事件处理函数
  swichNav(e) {
    var index = e.target.dataset.current;
    if (this.data.currentTab === parseInt(index)) {
      return false
    } else {
      this.setData({
        currentTab: parseInt(index)
      })
    }
  },
  bindChange(e){
    var swiperIndex= e.detail.current;
    if(swiperIndex!==this.data.currentTab) this.setData({currentTab:swiperIndex})
  },
  onLoad: function () {

  },
  getUserInfo: function () {

  }
})