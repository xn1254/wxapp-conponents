Component({
    externalClasses: ['ci-class'],
    options: {
        multipleSlots: true,
    },
    properties: {
        full: {
            type: Boolean,
            value: false,
        },
        title: {
            type: String,
            value: '',
        },
        thumb: {
            type: String,
            value: '',
        },
        extra: {
            type: String,
            value: '',
        },
    },
})