Component({
    externalClasses: ['ci-class'],
    options: {
        multipleSlots: true
    },
    properties: {
        imgUrl: {
            type: String
        },
        title: {
            type: String,
        },
        message: {
            type: String
        },
        buttonText: {
            type: String
        },
        buttonType: {
            type: String
        }
    },
    methods: {
        onClick() {
            this.triggerEvent('click')
        },
    },
})