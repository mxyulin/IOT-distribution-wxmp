// packgeProfit/profitSancode/profitSancode.js

const appInst = getApp();

Page({

    /**
     * 页面的初始数据
     */
    data: {
        qrcode: null,
        type: '贵重',// 贵重 & 普通
        isBind: false,// 测试数据
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        (options.code) && (this.setData({
            qrcode: options.code
        }))
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

    /* handlers */
    buyAgain() {
        wx.showLoading({
            mask: true
        })

        let goodsId = '1';

        (goodsId) && wx.$http('goods.getGoodsDetail', { pk: goodsId })
            .then(res => {
                // 飞舞接口处理
                if (res.respCode == '200') {
                    // debugger;
                    let result = res.list[0];

                    wx.navigateTo({
                        url: `/packgeGoods/goodsDetail/goodsDetail`,
                        success: res => {
                            // debugger;
                            wx.hideLoading();
                            res.eventChannel.emit('jumpToGoodsDetail', result);
                        }
                    })
                }
            })
    },

    qrcodeBind() {
        let qrcode = this.data.qrcode;

        // ! 含测试演示代码
        let type = this.data.type;
        if (type == '普通') {
            wx.showModal({
                title: '商品认主',
                content: '是否绑定当前账户？',
                success: res => {
                    if (res.confirm && !res.cancel) {
                        wx.showLoading({
                            title: '确认中...',
                            mask: true
                        })

                        // todo 调用商品认主接口
                        let timer = setTimeout(() => {
                            wx.hideLoading();
                            wx.redirectTo({
                                url: '/pages/index/index',
                                success: res => {
                                    this.showMessage('认主成功~');
                                    clearTimeout(timer);
                                }
                            })

                        }, 3000)
                    }
                }
            })
        }

        else {
            wx.navigateTo({
                url: '/packgeProfit/profitGoodsBind/profitGoodsBind',
                success: res => {
                }
            })
        }


    }
})