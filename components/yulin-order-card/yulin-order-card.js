// components/order-card/order-card.js

const appInst = getApp();

Component({
    /**
     * 组件的属性列表
     */
    properties: {
        orderType: {
            type: String,
            value: 'goods',
            observer: (n, o, c) => {
                // console.log('监听数据', n, o, c)
            }
        },
        orderId: {
            type: String,
            value: '',
            observer: (n, o, c) => {
                // console.log('监听数据', n, o, c)
            }
        },
        buyerName: {
            type: String,
            value: '***',
            observer: (n, o, c) => {
                // console.log('监听数据', n, o, c)
            }
        },
        phone: {
            type: String,
            value: '',
            observer: (n, o, c) => {
                // console.log('监听数据', n, o, c)
            }
        },
        goodsImg: {
            type: String,
            value: '',
            observer: (n, o, c) => {
                // console.log('监听数据', n, o, c)
            }
        },
        goodsTag: {
            type: String,
            value: '测试',
            observer: (n, o, c) => {
                // console.log('监听数据', n, o, c)
            }
        },
        goodsTitle: {
            type: String,
            value: '暂无商品名~',
            observer: (n, o, c) => {
                // console.log('监听数据', n, o, c)
            }
        },
        goodsDetail: {
            type: String,
            value: '暂无商品详情~',
            observer: (n, o, c) => {
                // console.log('监听数据', n, o, c)
            }
        },
        goodsNum: {
            type: Number,
            value: 0,
            observer: (n, o, c) => {
                // console.log('监听数据', n, o, c)
            }
        },
        goodsPrice: {
            type: String,
            value: '0.00',
            observer: (n, o, c) => {
                // console.log('监听数据', n, o, c)
            }
        },
        orderNum: {
            type: String,
            value: '0000000000000000',
            observer: (n, o, c) => {
                // console.log('监听数据', n, o, c)
            }
        },
        orderTime: {
            type: String,
            value: '2023年06月07日 14:34:04',
            observer: (n, o, c) => {
                // console.log('监听数据', n, o, c)
            }
        },
        profitAmount: {
            type: String,
            value: '0.00',
            observer: (n, o, c) => {
                // console.log('监听数据', n, o, c)
            }
        },
        goodsAmount: {
            type: String,
            value: '0.00',
            observer: (n, o, c) => {
                // console.log('监听数据', n, o, c)
            }
        },
        url: {
            type: String,
            value: '',
            observer: (n, o, c) => {
                // console.log('监听数据', n, o, c)
            }
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        // themeColor: appInst.globalData.themeColor,
        cardHeight: '220rpx',
    },

    /**
     * 组件的方法列表
     */
    methods: {
        jumpToOrderDetail(e) {
            let orderType = this.properties.orderType;
            let orderId = this.properties.orderId;
            let url = '';

            switch (orderType) {
                case 'goods':
                    url = `/packgeGoods/orderDetail/orderDetail?orderId=${orderId}`;
                    break;

                case 'profit':
                    url = `/packgeProfit/profitDetail/profitDetail?orderId=${orderId}`;
                    break;
            }

            wx.navigateTo({
                url
            })
        }
    },

    /**
     * 组件生命周期
    */
    lifetimes: {
        attached() {
            // debugger;
            let orderType = this.properties.orderType;

            switch (orderType) {
                case 'goods':
                    this.setData({
                        cardHeight: '220rpx'
                    })
                    break;

                case 'profit':
                    this.setData({
                        cardHeight: '300rpx'
                    })
                    break;

                default:
                    break;
            }
        }
    },

    /**
     * 页面生命周期
    */
    pageLifetimes: {
        show() {

        }
    }
})
