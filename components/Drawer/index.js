Component({
    properties: {
        position: {
            type: String,
            value: 'left',
        },
        visible: {
            type: Boolean,
            value: false
        },
        customStyle: {
            type: String,
            value: ''
        }
    },
    methods: {
        handleMaskClick() {
            this.setData({
                visible: false
            }, function () {
                this.triggerEvent('onOpenChange', 'open')
            })
        }
    }
});