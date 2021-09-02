Component({
    externalClasses: ['i-class', 'i-class-alone'],

    properties: {
        size: {
            type: String,
            value: 'small'
        },
        text: {
            type: String,
            observer: 'finalCount'
        },
        dot: {
            type: Boolean,
            value: false
        },
        overflowCount: {
            type: Number,
            value: 99
        },
        hot: {
            type: Boolean,
            value: false
        }
    },
    data: {
        finalCount: 0
    },
    methods: {
        finalCount() {
            if (typeof +this.data.text === 'number') {
                this.setData({
                    finalCount: parseInt(+this.data.text) >= parseInt(+this.data.overflowCount) ? `${this.data.overflowCount}+` : this.data.text
                });
            }
        },
    }
});
