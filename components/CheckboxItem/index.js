//Component Object
Component({
    properties: {
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
        }
    },
    data: {
    },
    methods: {
        checkedItem: function() {
            if(this.data.disabled) {
                return
            }
            if(!this.data.checked) {
                const defaultValue = this.data.defaultChecked;
                this.setData({
                    defaultChecked: !defaultValue
                })
            } else {
                const value = this.data.checked;
                this.setData({
                    checked: !value,
                })
            }
        }
    },
});