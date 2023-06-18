// packgeUser/address/address.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        data: []
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

    // 编辑地址
    editAddr(e) {
        let addrId = e.target.dataset.id;

        wx.navigateTo({
            url: `/packgeUser/editAddress/editAddress?id=${addrId}&type=edit`,
            success: (result) => {

            },
            fail: () => { },
            complete: () => { }
        });

    },

    // 添加地址
    addAddr() {
        wx.navigateTo({
            url: `/packgeUser/editAddress/editAddress?type=add`,
            success: res => {

            },
            fail: () => { },
            complete: () => { }
        })
    }
})