
export default [
  {
    data: {
      _author: 'yulin',
      _mix_themeColor: '#4591ef',//主题色
      _mix_pageSafeHeight: '',// 单位 px
      _mix_isIphoneX: false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
      const appInst = getApp();

      let isIphoneX = appInst.globalData.systemInfo.model.indexOf('iPhone X') >= 0 ? true : false;
      let h = appInst.globalData.systemInfo.windowHeight;
      // debugger;

      this.setData({
        _mix_isIphoneX: isIphoneX,
        _mix_pageSafeHeight: h
      })
    },

    // 提示信息
    showMessage(msg) {
      wx.showToast({
        title: msg,
        icon: 'none',
        duration: 1500,
        mask: true
      })
    },

    // 获取页面可用高度
    // _getCanusePageHeight(appInst) {
    //   // debugger;
    //   // let safeHeight = appInst.globalData.systemInfo.safeArea.height;
    //   let safeHeight = appInst.globalData.systemInfo.windowHeight;

    //   return safeHeight;
    //   // debugger;

    //   if (isTabbar()) {
    //   debugger;
    //   let tabbarHeight = this.data._mix_isIphoneX ? 80 : 70;// 
    //     return (safeHeight - tabbarHeight);
    //   }

    //   else {
    //     return safeHeight;
    //   }
    // }
  }
]
