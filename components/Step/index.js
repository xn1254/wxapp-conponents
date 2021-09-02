const defaultStatus = ['wait', 'process', 'finish', 'error']

Component({
    externalClasses: ['ci-class'],
    options: {
        multipleSlots: true,
    },
    relations: {
        '../Steps/index': {
            type: 'parent',
        },
    },
    properties: {
        status: {
            type: String,
            value: '',
        },
        title: {
            type: String,
            value: '',
        },
        description: {
            type: String,
            value: '',
        },
        icon: {
            type: String,
            value: '',
        },
    },
    data: {
        width: '100%',
        length: 1,
        index: 0,
        current: 0,
        size: 'large',
        direction: 'horizontal',
    },
    methods: {
        updateCurrentStep(opts = {}) {
            const width = opts.direction === 'horizontal' ? 100 / opts.length + '%' : '100%'
            const index = defaultStatus.indexOf(this.data.status)
            const suffix = index !== -1 ? defaultStatus[index] : opts.index < opts.current ? 'finish' : opts.index === opts.current ? 'process' : opts.index > opts.current ? 'wait' : ''
            const status = suffix
            const className = `ci-step--${suffix}`
            const options = Object.assign({
                width,
                className,
                status
            }, opts)
            this.setData(options)
        },
    },
    attached() {
        this.updateCurrentStep(this.data)
    },
})