// components/goodsCard/goodsCard.js

const appInst = getApp();

Component({
    /**
     * 组件的属性列表
     */
    properties: {
        goodsId: {
            type: String,
            value: null,
            observer: function (n, o, c) {
            }
        },
        title: {
            type: String,
            value: '暂无商品名~',
            observer: function (n, o, c) {
            }
        },
        brandName: {
            type: String,
            value: '',
            observer: function (n, o, c) {
            }
        },
        stock: {
            type: Number,
            value: 0,
            observer: function (n, o, c) {
            }
        },
        price: {
            type: String,
            value: '0.00',
            observer: function (n, o, c) {
                // debugger;
                let price = String(n);
                let [int, dec] = price.split('.');
                ////let isDec = price.indexOf('.') > 0;
                let isDec = Boolean(dec);// 是否有小数

                // 如果有小数
                if (isDec) {
                    ////let priceArr = price.split('.');// 分整数和小数组成的数组
                    ////let int = priceArr[0];// 整数
                    ////let dec = priceArr[1];// 小数
                    let isBeyoundTowNum = dec.length >= 2;
                    dec = isBeyoundTowNum ? dec.slice(0, 2) : (dec + '0');

                    //// 错误代码，保留2位小数写成了保留3位
                    ////(isBeyoundTowNum) && (dec = dec.slice(0, 3));// 保留两位数
                    ////(!isBeyoundTowNum) && (dec += '0');// 补 0 凑成两位数

                    this.setData({
                        _priceInteger: int,
                        _priceDecimals: dec
                    })
                }

                // 如果没有小数
                else {
                    this.setData({
                        _priceInteger: price,
                    })
                }
            }
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        _priceInteger: '0',
        _priceDecimals: '00'
    },

    /**
     * 组件的方法列表
     */
    methods: {
        // jumpToGoodsDetail(e) {
        //     let goodsId = this.properties.goodsId;

        //     wx.navigateTo({
        //         url: `/packgeGoods/goodsDetail/goodsDetail?goodsId=${goodsId}`
        //     })
        // },

        jumpToGoodsDetail(e) {
            wx.showLoading({
                mask: true
            })

            let goodsId = this.properties.goodsId;

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
    }
})
