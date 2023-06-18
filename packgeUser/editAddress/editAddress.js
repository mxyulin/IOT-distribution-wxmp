// packgeUser/editAddress/editAddress.js
import { areaList } from '@vant/area-data';

const appInst = getApp();

Page({

    /**
     * 页面的初始数据
     */
    data: {
        type: '',// 业务类型 edit/add
        addrId: null,
        addressee: '张三',// 收件人
        phone: '13486753465',
        area: "",
        // province: "江苏省",
        // city: '无锡市',
        // area: '新吴区',
        address: 'XXX路129号',
        isDefault: false,
        show: false,
        areaList
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        let addrId = options.id;
        let type = options.type;

        (type == 'edit') && wx.setNavigationBarTitle({
          title: '编辑地址',
        });

        (type == 'add') && wx.setNavigationBarTitle({
            title: '添加地址',
          });

        this.setData({
            addrId: addrId,
            type: type
        });
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

    // 设置默认地址
    onChange(e) {
        this.setData({
            isDefault: e.detail
        })
    },

    // 展示选择器
    showSelector() {
        this.setData({
            show: true
        })
    },

    // 关闭选择器
    closeSelector() {
        this.setData({
            show: false
        })
    },

    // 地区确认
    onConfirm(e) {
        let areaData = e.detail.values;
        let content = `${areaData[0].name}-${areaData[1].name}-${areaData[2].name}`;
        this.setData({
            area: content
        })

        this.closeSelector();
    },

    // 提交表单
    onSubmit() {
        wx.showLoading({
            mask: true
        })

        let timer = setTimeout(() => {
            wx.hideLoading();
            wx.navigateBack({
                delta: 1,
                success: res => {
                    this.showMessage('保存成功~');
                    clearTimeout(timer);
                }
            })

        }, 3000)
    },

    // 删除地址
    onDelete() {
        wx.showModal({
            title: '删除地址',
            content: '是否删除当前地址？',
            success: res => {
                if (res.confirm && !res.cancel) {
                    wx.showLoading({
                        mask: true
                    })

                    // todo 调用商品认主接口
                    let timer = setTimeout(() => {
                        wx.hideLoading();
                        wx.navigateBack({
                            delta: 1,
                            success: res => {
                                this.showMessage('删除成功~');
                                clearTimeout(timer);
                            }
                        })

                    }, 3000)
                }
            }
        })
    }
})
