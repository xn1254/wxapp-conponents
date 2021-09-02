Component({
    externalClasses: ['ci-class'],
    options: {
        multipleSlots: true,
    },
    properties: {
        content: {
            type: String,
            value: ''
        },
        extra: {
            type: String,
            value: ''
        }
    },
})