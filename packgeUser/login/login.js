const appInst = getApp();

Page({
    data: {
        isAgree: false,// 是否同一协议
        openType: '',// 动态 open-type
    },

    /* 生命周期函数--监听页面加载*/
    onLoad() {  },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() { },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() { },

    // 微信登陆
    wechatLogin() {
        // debugger;
        if (!this.data.isAgree) {
            // 用户没同意协议，终止登陆
            return this.showMessage('请阅读并勾选用户协议');
        }

        wx.showLoading({
            mask: true,
        })

        // wx.login({
        //     success: res => {
        //         let authCode = res.code;

        //         wx.$http('user.wxLogin', { code: authCode }, '登陆中...')
        //             .then(res => {
        //                 // debugger;
        //                 // todo 待后端接口标准化
        //                 if (res.data.code === 200) {
        //                     wx.hideLoading();
                            
        //                     let token = res.data.token;
        //                     // todo 获取所有用户信息
        //                     let name = res.data.name;

        //                     wx.setStorageSync('token', token);
        //                     wx.setStorageSync('name', name);
        //                     wx.navigateBack({
        //                         delta: 1,
        //                     })
        //                 }
        //             })
        //     }
        // })


        // 假登陆
        wx.setStorageSync('token', "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwiZXhwIjoxNjg2ODk2NjkwLCJlbWFpbCI6Ijg0NjA2MDU1QHFxLmNvbSJ9.g8ycDWb4f86eWr4I3kzvqFk29pD183gdrcc34YPS5oI");
        wx.switchTab({
            url: '/pages/index/index',
        })
    },

    // 用户协议
    onAgreeChange(e) {
        let status = e.detail;

        this.setData({
            isAgree: status
        })

        // 同意协议恢复登陆按钮微信开放能力
        if (status) {
            this.setData({
                openType: 'getPhoneNumber'
            })
        }

        // 未同意协议消除登陆按钮微信开放能力
        else {
            this.setData({
                openType: ''
            })
        }
    }

});