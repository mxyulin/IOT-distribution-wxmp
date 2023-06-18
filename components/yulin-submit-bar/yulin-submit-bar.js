// components/yulin-submit-bar/yulin-submit-bar.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        multiple: {
            type: Boolean,
            value: false
        },
        safeArea: {
            type: Boolean,
            value: false
        },
    },

    /**
     * 数据监听器
    */
    observers: {},

    /**
     * 组件的初始数据
     */
    data: {},

    /**
     * 组件的方法列表
     */
    methods: { },

    /**
     * 组件配置
    */
    options: {
        multipleSlots: true,// 启用命名插槽
    }
})
