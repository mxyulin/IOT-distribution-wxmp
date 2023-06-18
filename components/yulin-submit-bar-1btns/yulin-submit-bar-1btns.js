// components/yulin-submit-bar-1btns/yulin-submit-bar-1btns.js


Component({
    /**
     * 组件的属性列表
     */
    properties: {
        submitText: {
            type: String,
            value: ''
        },
        icon: {
            type: String,
            value: ''
        },
        classPrefix: {
            type: String,
            value: 'van-icon'
        },
        disabled: {
            type: Boolean,
            value: false
        },
        loading: {
            type: Boolean,
            value: false
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
    },

    /**
     * 组件属性监听器
    */
    observers: {
    },

    /**
     * 组件的方法列表
     */
    methods: {
        onSubmit() {
            // this._mix_showMessage('提交操作~');
            this.triggerEvent('submit');
        },
    }
})
