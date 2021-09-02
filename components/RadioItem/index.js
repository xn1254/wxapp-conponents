//Component Object
Component({
    properties: {
        currentValue: {
            type: String,
            observer: function(newVal) {
                if(newVal === this.data.Title) {
                    this.setData({
                        checked: true
                    })
                } else {
                    this.setData({
                        checked: false
                    })
                }
            }
        },
        Title: {
            type: String
        },
        name: {
            type: String
        },
        defaultChecked: {
            type: Boolean,
            value: false
        },
        checked: {
            type: Boolean,
            value: false
        },
        extra: {
            type: String
        },
        arrow: {
            type: String,
        },
        align: {
            type: String,
        },
        multipleLine: {
            type: Boolean,
            value: false
        },
        wrap: {
            type: Boolean,
            value: false
        },
        disabled: {
            type: Boolean,
            value: false
        },
        subtitle: {
            type: String
        },
    },
    data: {
    },
    methods: {
        checkedItem: function() {
            if(this.data.disabled) {
                return
            }
            this.triggerEvent('onChange', this.data.Title)
        }
    },
});