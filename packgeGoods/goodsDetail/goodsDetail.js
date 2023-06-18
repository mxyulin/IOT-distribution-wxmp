// pages/goods-detail/goods-detail.js
import { formatPrice } from '@/utils/tools';

const appInst = getApp();

Page({

    /**
     * 页面的初始数据
     */
    data: {
        loading: true,
        disabled: false,

        // 
        images: [],
        id: '',
        title: '',
        brandName: '',
        models: '',
        skuName: '',
        summary: '',

        // 
        stock: '',
        price: '',
        num: 1,

        // 
        amount: ''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        // debugger;
        const eventChannel = this.getOpenerEventChannel();
        eventChannel.on('jumpToGoodsDetail', res => {
            this.setAllData(res);
        })
        // this.getGoodsDetail(options.goodsId);
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
        const eventChannel = this.getOpenerEventChannel();
        eventChannel.off('jumpToGoodsDetail');
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
    // getGoodsDetail(goodsId) {
    //     (goodsId) && wx.$http('goods.getGoodsDetail', { pk: goodsId })
    //         .then(res => {
    //             // todo 获取商品详情-标准处理
    //             // if (res.code === 200) {
    //             //     let goodsDetail = res.data;

    //             //     this.setData({
    //             //         images: goodsDetail.images,
    //             //         title: goodsDetail.title,
    //             //         brandName: goodsDetail.brandName,
    //             //         models: goodsDetail.models,
    //             //         skuName: goodsDetail.skuName,
    //             //         summary: goodsDetail.summary,
    //             //         stock: goodsDetail.stock,
    //             //         price: goodsDetail.price,
    //             //     })
    //             // }

    //             // else {
    //             //     this.setData({
    //             //         loading: true
    //             //     })
    //             // }

    //             // 飞舞接口处理
    //             if (res.respCode == '200') {
    //                 let goodsDetail = res.list[0];

    //                 this.setData({
    //                     images: ['/static/images/goods/goods1.png', '/static/images/goods/goods2.png', '/static/images/goods/goods3.png'],
    //                     title: goodsDetail.goods_name,
    //                     id: goodsDetail.id,
    //                     brandName: goodsDetail.firm[0].firm,
    //                     models: '测试-A001',
    //                     skuName: '',
    //                     summary: '这款 AI 下棋机器人经过中象协授权，内置专业象棋课程，支持语音、屏显、机械臂三合一互动教学，可以在家考取中象协认可的棋士等级证书；支持通过电磁触点抓取棋子，搭载工业级机械臂，精准落子，支持刷脸登录。这款 AI 下棋机器人经过中象协授权，内置专业象棋课程，支持语音、屏显、机械臂三合一互动教学，可以在家考取中象协认可的棋士等级证书；支持通过电磁触点抓取棋子，搭载工业级机械臂，精准落子，支持刷脸登录。',
    //                     stock: '998(江苏仓500，上海仓498)',
    //                     price: formatPrice(goodsDetail.selling_price),
    //                     amount: formatPrice(goodsDetail.selling_price)
    //                 })

    //                 this.setData({
    //                     loading: false
    //                 })
    //             }

    //             else {
    //                 this.setData({
    //                     loading: true
    //                 })
    //             }
    //         })
    // },

    // 加购数量
    onChange(e) {
        // debugger;
        let num = e.detail;
        let stock = this.data.stock;
        let price = Number(this.data.price);
        let amount = formatPrice(price * num);

        if (num >= stock) {
            this.setData({
                disabled: true
            })

            return this.showMessage('加购数超出库存~')
        };

        if (num && amount) {
            this.setData({
                disabled: false,
                num: num,
                amount: amount
            })
        }
    },

    // 
    setAllData(goodsData) {
        // todo 关键数据类型验证，防止飞舞后端乱传数据
        // debugger;
        this.setData({
            images: ['/static/images/goods/goods1.png', '/static/images/goods/goods2.png', '/static/images/goods/goods3.png'],
            title: goodsData.goods_name,
            id: goodsData.id,
            brandName: goodsData.firm[0].firm,
            models: '测试-A001',
            skuName: '',
            summary: '这款 AI 下棋机器人经过中象协授权，内置专业象棋课程，支持语音、屏显、机械臂三合一互动教学，可以在家考取中象协认可的棋士等级证书；支持通过电磁触点抓取棋子，搭载工业级机械臂，精准落子，支持刷脸登录。',
            stock: 899,
            price: formatPrice(goodsData.selling_price),
            amount: formatPrice(goodsData.selling_price)
        })
    },

    // 生成预备订单
    subPreOrder() {
        wx.showLoading({
            mask: true
        })

        let num = this.data.num;
        let goodsId = this.data.id;

        // 模拟预备订单
        let title = this.data.title;
        let brandName = this.data.brandName;
        let summary = this.data.summary;
        let price = this.data.price;
        let amount = this.data.amount;

        let timer = setTimeout(() => {
            wx.navigateTo({
                url: '/packgeGoods/order/order',
                success: res => {
                    wx.hideLoading();
                    res.eventChannel.emit('onSubPreOrder', { num, goodsId, title, brandName, summary, price, amount });
                }
            })

            clearTimeout(timer);
        }, 1500)



        // wx.$http('order.goodsPreOrder', { goodsId, num })
        //     .then(res => {
        //         // todo 得到预备订单数据

        //         // todo 将预备订单数据通过 eventchannel 传递给订单页

        //         // todo 跳转到订单页
        //     })
    }
})