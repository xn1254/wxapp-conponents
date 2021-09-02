Component({
    options: {
        multipleSlots: true
    },
    properties: {
        mode: {
            type: String,
            value: 'dark',
        },
        leftContent: {
            type: String,
            value: '',
        },
        icon: {
            type: Boolean,
            value: false
        }
    },
    methods: {
        clickLeft: function () {
            this.triggerEvent('onLeftClick')
        }
    }
});