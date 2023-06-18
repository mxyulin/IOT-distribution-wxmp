// packgeGoods/orderDetail/orderDetail.js

const appInst = getApp();

Page({

    /**
     * 页面的初始数据
     */
    data: {
        // themeColor: appInst.globalData.themeColor,
        show: false,
        active: 2,
        steps: [
            {
                text: '【上海】仓库出货',
                desc: '2023-06-08 11:34:45',
            },
            {
                text: '【江苏】仓库出货',
                desc: '2023-06-08 11:34:45',
            },
            {
                text: '【安徽】仓库出货',
                desc: '2023-06-08 11:34:45',
            },
            {
                text: '【成都】收货',
                desc: '2023-06-08 11:34:45',
            }
        ]
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

    // 
    showPopup() {
        this.setData({
            show: true
        })
    },

    // 
    onClose() {
        this.setData({
            show: false
        })
    }
})