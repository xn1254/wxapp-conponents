Component({
    properties: {
        min: {
            type: Number,
            value: -Infinity,
        },
        max: {
            type: Number,
            value: Infinity,
        },
        currentValue: {
            type: Number,
            observer: function(newVal) {
                this.triggerEvent('onChange', newVal)
            }
        },
        defaultValue: {
            type: Number,
        },
        disabled: {
            type: Boolean,
            value: false,
        },
        readOnly: {
            type: Boolean,
            value: false
        }
    },
    methods: {
        deleteCount: function() {
            if ((this.data.min && this.data.currentValue <= this.data.min) || this.data.disabled) {
                return
            }
            let value = this.data.currentValue
            value--
            this.setData({
                currentValue: value
            })
        },
        changeValue: function(e) {
            if(e.detail.value < this.data.min) {
                this.setData({
                    currentValue: this.data.min
                })
            } else if(e.detail.value > this.data.max) {
                this.setData({
                    currentValue: this.data.max
                })
            } else {
                this.setData({
                    currentValue: e.detail.value
                })
            }
        },
        addCount: function() {
            if ((this.data.max && this.data.currentValue >= this.data.max) || this.data.disabled) {
                return
            }
            let value = this.data.currentValue
            value++
            this.setData({
                currentValue: value
            })
        }
    }
});