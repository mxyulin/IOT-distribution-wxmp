// index.js
// 获取应用实例

const appInst = getApp();

Page({
    data: {
        // canUseHeight: (appInst.getPageCanuseHeight() - 44 + 'px'),// 这里减的是标签选项卡高度 44
        goodsList: [],
        tabsSafeHeight: ''
    },

    /**
    * 生命周期函数--监听页面加载
    */
    onLoad(options) {
        let pageSafeHeight = (this.data._mix_pageSafeHeight - 44) + 'px';

        // debugger;
        this.setData({
            tabsSafeHeight: pageSafeHeight
        })

        this.clearGoodsList();
        this.getGoodsList();
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

    // 获取商品数据
    getGoodsList() {
        let preGoodsList = this.data.goodsList;

        wx.$http('goods.getGoodsList')
            .then(res => {

                // 正式接口处理
                // if (res.data.code === 200) {
                //     let curGoodsList = res.data.data;
                //     let goodsList = [...preGoodsList, ...curGoodsList];

                //     this.setData({
                //         goodsList: goodsList
                //     })
                // }

                // 处理飞舞后端的接口数据
                if (res.respCode == '200') {
                    let curGoodsList = res.list;
                    let goodsList = [...preGoodsList, ...curGoodsList];

                    // debugger;
                    this.setData({
                        goodsList: goodsList
                    })
                }
            })
    },

    // 清空商品数据
    clearGoodsList() {
        this.setData({
            goodsList: []
        })
    }
});
