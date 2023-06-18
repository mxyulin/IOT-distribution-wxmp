// packgeProfit/profitCash/profitCash.js

import { formatPrice } from '@/utils/tools';

Page({

    /**
     * 页面的初始数据
     */
    data: {
        checked: false,
        show: false,
        actions: [
            {
                name: '微信提现',
                subname: 'wechatPay',
                color: '#07c160',
                className: 'iconfont alicon-weixinzhifu v-block'
            },
            {
                name: '支付宝提现',
                subname: 'aliPay',
                className: 'iconfont alicon-pay_alipay v-block',
                color: '#1890ff'
            }
        ],
        CanCashAmount: '199.00',
        cashAmount: '',
        cashType: {
            name: '点击选择提现方式',
            value: ''
        },
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

    // 打开工作面板
    showAction() {
        this.setData({
            show: true
        })


    },

    // 关闭动作面板
    onClose() {
        this.setData({
            show: false
        })
    },

    // 选择提现方式
    onSelect(e) {
        let name = e.detail.name;
        let value = e.detail.subname;

        this.setData({
            cashType: {
                name: name,
                value: value,
            }
        })
    },

    // 提交申请
    onSubmit() {
        wx.showModal({
            title: '提现须知',
            content: '提现金额将在7个工作日内到账，如有问题请咨询相关工作人员~',
            success: res => {
                if (res.confirm && !res.cancel) {
                    wx.showLoading({
                        mask: true
                    })

                    let timer = setTimeout(() => {
                        wx.hideLoading();
                        wx.navigateBack({
                            delta: 1,
                            success: res => {
                                this.showMessage('提现成功~');
                                clearTimeout(timer);
                            }
                        })

                    }, 3000)
                }

            }
        })
    },

    // 全部提现
    onChange(e) {
        let isCashAllMoney = e.detail;
        let CanCashAmount = formatPrice(this.data.CanCashAmount);

        (isCashAllMoney) && this.setData({
            cashAmount: CanCashAmount,
            checked: true
        });

        (!isCashAllMoney) && this.setData({
            cashAmount: '',
            checked: false
        });
    }
})