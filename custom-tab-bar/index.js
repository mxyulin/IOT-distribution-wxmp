// custom-tab-bar/index.js
const appInst = getApp();

Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        isIphoneX: appInst.globalData.systemInfo.model.indexOf('iPhone X') >= 0 ? true : false,
        tabbar: null
    },

    /**
     * 组件的方法列表
     */
    methods: {
        switchTabbar(e) {
            var url = e.target.dataset.url;
            // debugger;

            /* 
            必须在 switchTab 前更新 tabbar 状态。因为 switchTab 成功的回调是异步任务，
            会在 tabbar 页面切换成功（attached钩子）之后执行。
            */
            this.setTabbarStatus(url);

            wx.switchTab({
                url,
                success: () => {
                    // 这会导致页面切换成功了，但 tabbar 图标状态未切换成功。
                    //// this.setTabbarStatus(url)
                }
            })
        },

        setTabbarStatus(url) {
            var tabbar = this.data.tabbar;

            tabbar.list.forEach(item => {
                item.selected = false;
                (item.pagePath == url) && (item.selected = true);
            });
        },

        scanCode() {
            wx.scanCode({
                onlyFromCamera: true,
                scanType: ['qrCode'],
                success(res) {
                    let code = res.result;

                    if (code) {
                        wx.navigateTo({
                            url: `/packgeProfit/profitSancode/profitSancode?code=${code}`,
                        })
                    }

                    else {
                        this.showMessage('扫码失败~')
                    }
                }
            })
        }
    },

    lifetimes: {
        // created 阶段无法对 data 里的数据进行写入，需要用 attached 阶段完成数据写入。
        attached() {
            // debugger;
            // ! tabbar 数据是动态的更新的，所以每次切换页面时在此写入新的数据
            this.setData({
                tabbar: appInst.globalData.tabbar,
            })
        }
    }
})
