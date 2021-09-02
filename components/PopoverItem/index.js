//Component Object
Component({
    properties: {
        disabled:{
            type: Boolean,
            value: false,
        },
        icon: {
            type: String,
            observer: function (newVal) {
                if (newVal.indexOf('http') === -1) {
                    this.setData({
                        isIcon: true
                    })
                } else {
                    this.setData({
                        isIcon: false
                    })
                }
            }
        }
    },
    data: {
        isIcon: true
    },
    methods: {
        clickAction: function () {
            if (this.data.disabled) {
                return
            }
            this.triggerEvent('click')
        }
    },
});