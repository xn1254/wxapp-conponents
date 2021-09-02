Component({
    externalClasses: ['ci-class'],
    properties: {
        current: {
            type: Number,
            value: 0,
            observer: 'updateCurrent',
        },
        size: {
            type: String,
            value: 'large',
        },
        direction: {
            type: String,
            value: 'vertical',
        }
    },
    relations: {
        '../Step/index': {
            type: 'child',
            linked() {
                this.updateCurrent()
            },
            // linkChanged() {
            //     this.updateCurrent()
            // },
            // unlinked() {
            //     this.updateCurrent()
            // },
        },
    },
    methods: {
        updateCurrent() {
            const elements = this.getRelationNodes('../Step/index')
            const { current, direction, size } = this.data
            if (elements.length > 0) {
                elements.forEach((element, index) => {
                    element.updateCurrentStep({
                        length: elements.length,
                        index,
                        size,
                        current,
                        direction,
                    })
                })
            }
        }
    }
})