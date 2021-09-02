//Component Object
Component({
    properties: {
        defaultValue: {
            type:String,
        },
        value: {
            type:String,
        },
        placeholder: {
            type:String,
        },
        showCancelButton: {
            type: Boolean,
            value: false
        },
        cancelText: {
            type: String,
            value: '取消'
        },
        disabled: {
            type: Boolean,
            value: false
        },
        maxLength: {
            type: Number
        },
        autofocus: {
            type: Boolean,
            value: false
        }
    },
    data: {
        showText: false,
    },
    methods: {
        changeFocus: function() {
            this.setData({
                showText: true
            })
        },
        changeBlur: function() {
            if (this.data.value) {
                return
            }
            this.setData({
                showText: false
            })
        },
        hideText: function() {
            this.setData({
                showText: false,
                value: '',
                autofocus: false
            })
        },
        changeText: function(e) {
            console.log(e.detail.value)
            this.setData({
                value: e.detail.value
            })
        },
        deleteText: function() {
            console.log('delete')
            this.setData({
                value: '',
                autofocus: true
            })
        },
    },
});