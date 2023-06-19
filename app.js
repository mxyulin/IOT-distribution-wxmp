import wx$http from '/libs/request/wxhttp';
import mixins from '/mixins/mixins';

// app.js
App({
    onLaunch() {
        // Page 和 Component API 赋能 mixins
        Page = mixins(Page);
        Component = mixins(Component);

        ////this.wx$http = wx$http;// 挂载请求库 wx$http 到 app 实例
        // this.getAuthCode();
        this.getSystemInfo();// 获取设备信息

        wx.$http = wx$http;// 挂载请求库到 wx 对象
        ////wx.hideTabBar();//隐藏系统 tabbar
    },
    onShow() {
        ////wx.hideTabBar();//隐藏系统tabbar
    },

    getSystemInfo() {
        wx.getSystemInfo({
            success: (res) => {
                this.globalData.systemInfo = res;
            }
        });
    },

    globalData: {
        systemInfo: null,//客户端设备信息
        userInfo: null,// 用户信息
        tabbar: {
            backgroundColor: "#ffffff",
            color: "#979795",
            selectedColor: "#303133",
            list: [
                {
                    pagePath: "/pages/index/index",
                    iconPath: "/static/images/custom-tabbar/home_un.png",
                    selectedIconPath: "/static/images/custom-tabbar/home_ac.png",
                    text: "首页",
                    selected: true,
                },
                // {
                //     pagePath: "/pages/codeProfit/codeProfit",
                //     iconPath: "/static/images/custom-tabbar/qrcode_un.png",
                //     selectedIconPath: "/static/images/custom-tabbar/qrcode_ac.png",
                //     text: "码利润",
                //     isSpecial: true,
                //     selected: false,
                // },
                {
                    iconPath: "/static/images/custom-tabbar/sancode.png",
                    text: "扫一扫",
                    isSpecial: true,
                },
                {
                    pagePath: "/pages/user/user",
                    iconPath: "/static/images/custom-tabbar/usr_un.png",
                    selectedIconPath: "/static/images/custom-tabbar/usr_ac.png",
                    text: "我的",
                    selected: false,
                }
            ]
        }
    },
});
