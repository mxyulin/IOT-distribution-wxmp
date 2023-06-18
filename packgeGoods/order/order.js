// pages/order/order.js
import { formatPrice } from '@/utils/tools';

const appInst = getApp();

Page({

    /**
     * 页面的初始数据
     */
    data: {
        show: false,
        // 订单
        PreOrderId: '',
        num: 1,
        orderNotes: '',// 订单金额
        goodsAmount: '',// 商品金额
        freight: '',// 运费
        totalAmount: '',// 总金额
        // 商品
        image: '',
        goodsId: '',
        price: '',
        title: '',
        summary: '',
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        const eventChannel = this.getOpenerEventChannel();
        eventChannel.on('onSubPreOrder', res => {
            this.setData({
                PreOrderId: '001',
                num: res.num,
                goodsId: res.goodsId,
                image: '/static/images/goods/goods1.png',
                title: res.title,
                summary: res.summary,
                price: formatPrice(res.price),
                goodsAmount: formatPrice(res.amount),
                freight: '18',
                totalAmount: formatPrice(Number(res.amount) + 18)
            })
        })
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
    showPopup(e) {
        this.setData({
            show: true
        })
    },

    // 
    onPopClose() {
        this.setData({
            show: false
        })
    },

    // 提交订单
    onSubmit() {
        // debugger;
        wx.showLoading({
            title: "支付中...",
            mask: true,
        })

        // todo 提交正式商品订单

        // todo 得到正式订单id，调用 wx 支付接口发起支付

        // todo 支付成功跳转到成功，支付失败提醒用户

        let timer = setTimeout(function () {
            wx.hideLoading();
            wx.showModal({
                title: '支付结果',
                content: '稍后进入订单管理页核实订单状态，不要重复发起支付~',
                // content: '支付未完成~',
                showCancel: false,
                success: (res) => {
                    if (res.confirm) {
                        clearTimeout(timer);
                        
                        wx.redirectTo({
                            url: '/pages/index/index'
                        })
                    }
                }
            })
        }, 2000)
    },

    // 发起支付
    goPay() {

    },

    // 跳转选择地址
    jumpToAddrList() {
        wx.navigateTo({
            url: '/packgeUser/selectAddress/selectAddress',
        })
    }
})