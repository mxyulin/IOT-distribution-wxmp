// ! 全局禁止使用 lifetimes
export default [
  {
    /**
     * 组件的属性列表
     */
    properties: {},

    /**
     * 组件的初始数据
     */
    data: {
      _mix_author: 'yulin',
      _mix_themeColor: '#4591ef',
      _mix_isIphoneX: false,
    },

    /**
     * 组件的方法列表
     */
    methods: {
      // 提示信息
      _mix_showMessage(msg) {
        wx.showToast({
          title: msg,
          icon: 'none',
          duration: 1000,
          mask: true
        })
      },
    },

    // 在组件实例进入页面节点树时执行
    attached: function () {
      // console.log('mix-组件', this.properties)
      const appInst = getApp();

      let isIphoneX = appInst.globalData.systemInfo.model.indexOf('iPhone X') >= 0 ? true : false;

      // debugger;
      this.setData({
        _mix_isIphoneX: isIphoneX,
      })
    },

    // 在组件实例被从页面节点树移除时执行
    detached: function () {
    },
  }
]
