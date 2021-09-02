//Component Object
Component({
    properties: {
        animating: {
            type: Boolean,
            value: true,
        },
        size: {
            type: String,
            value: 'small'
        },
        text: {
            type: String,
            value: 'loading...'
        },
        toast: {
            type: Boolean,
            value: false
        }
    },
});