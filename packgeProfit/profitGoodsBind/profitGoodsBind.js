// packgeProfit/profitGoodsBind/profitGoodsBind.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        checked: false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    },

    // 提交表单
    onSubmit() {
        wx.showLoading({
            mask: true
        });

        let timer = setTimeout(() => {
            wx.hideLoading();
            wx.redirectTo({
                url: '/pages/index/index',
                success: res => {
                    this.showMessage('绑定成功~');
                    clearTimeout(timer);
                }
            })

        }, 3000)
    },

    // 同意协议
    onChange(e) {
        let value = e.detail;

        this.setData({
            checked: value
        })
    },

    // 提交
    onSubmit() {
        if (!this.data.checked) {
            return this.showMessage('请同意协议~')
        }

        wx.showLoading({
            mask: true
        })

        let timer = setTimeout(() => {
            wx.hideLoading();

            wx.showModal({
                title: '绑定结果',
                content: '您已成功绑定~',
                confirmText: '返回首页',
                // content: '支付未完成~',
                showCancel: false,
                success: (res) => {
                    if (res.confirm) {
                        clearTimeout(timer);

                        wx.switchTab({
                            url: '/pages/index/index'
                        })
                    }
                }
            })

        }, 3000)
    },

    // 返回
    onCancel() {
        wx.navigateBack({
          delta: 0,
        })
    }
})