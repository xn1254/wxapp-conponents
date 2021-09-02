Component({
    options: {
        multipleSlots: true
    },
    properties: {
        mode: {
            type: String,
            value: 'button',
        },
        current: {
            type: Number,
            value: 1,
        },
        total: {
            type: Number,
            value: 0,
            observer: function (newVal) {
                this.setData({
                    pointer: new Array(newVal)
                })
            }
        },
        simple: {
            type: Boolean,
            value: false,
        },
        disabled: {
            type: Boolean,
            value: false,
            observer: function () {
                this.setData({
                    prevIsDisabled: true,
                    nextIsDisabled: true
                })
            }
        },
        locale: {
            type: Object
        }
    },
    data: {
        pointer: [],
        prevIsDisabled: false,
        nextIsDisabled: false
    },
     methods: {
         add: function () {
            if (this.data.current === this.data.total) {
                return;
            }
            this.setData({
                current: this.data.current+1
            }, function () {
                this.triggerEvent('onChange', this.data.current)
                if (this.data.current === this.data.total) {
                    this.setData({
                        nextIsDisabled: true
                    })
                }
                if (this.data.current > 1) {
                    this.setData({
                        prevIsDisabled: false
                    })
                }
            })
         },
         delete: function () {
            if (this.data.current === 1) {
                this.setData({
                    prevIsDisabled: true
                })
                return;
            }
            this.setData({
                current: this.data.current-1
            }, function () {
                this.triggerEvent('onChange', this.data.current)
                if (this.data.current < this.data.total) {
                    this.setData({
                        nextIsDisabled: false
                    })
                }
                if (this.data.current === 1) {
                    this.setData({
                        prevIsDisabled: true
                    })
                }
            })
         }
     }
});