// components/yulin-submit-bar/yulin-submit-bar.

import { formatPrice } from "@/utils/tools";

Component({
    /**
     * 组件的属性列表
     */
    properties: {
        amount: {
            type: String || Number,
            value: '0.00'
        },
        label: {
            type: String,
            value: '合计：'
        },
        suffixLabel: {
            type: String,
            value: '',
        },
        submitText: {
            type: String,
            value: ''
        },
        cancelText: {
            type: String,
            value: ''
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
        data_amount: ''
    },

    /**
     * 组件属性监听器
    */
    observers: {
        'amount': function(amount) {
            // debugger;
            this.setData({
                data_amount: formatPrice(amount)
            })
        }
    },

    /**
     * 组件的方法列表
     */
    methods: {
        onSubmit() {
            let form = {
                price: this.data_amount,
                status: true,
                msg: '提交操作~',
            };

            // this._mix_showMessage('提交操作~');
            this.triggerEvent('submit', form);
        },

        onCancel() {
            let form = {
                price: this.data_amount,
                status: false,
                msg: '取消操作~',
            };

            // this._mix_showMessage('取消操作~');
            this.triggerEvent('cancel', form);
        }
    }
})
