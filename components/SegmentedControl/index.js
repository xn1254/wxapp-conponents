Component({
    properties: {
        customStyle: {
            type: String,
            value: '',
        },
        tintColor: {
            type: String,
            value: '#108ee9',
        },
        disabled: {
            type: Boolean,
            value: false,
        },
        selectedIndex: {
            type: Number,
            value: 0,
        },
        values: {
            type: Array,
            value: [],
        },
    },
    data: {
        wrapperStyle: {}
    },
    methods: {
        checkedItem: function(e) {
            if (this.data.disabled) {
                return
            };
            this.setData({
                selectedIndex: e.target.id
            })
        }
    }
});