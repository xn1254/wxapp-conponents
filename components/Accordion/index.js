Component({
    externalClasses: ['ci-class'],

    relations: {
        '../Panel/index': {
            type: 'child'
        }
    },
    properties: {
        value: Array,
        defaultActiveKey: String || Array,
        accordion: {
            type: Boolean,
            value: false
        }
    },
    methods: {
        clickfn(e) {
            const params = e.detail;
            const allList = this.getRelationNodes('../Panel/index');
            allList.forEach((item) => {
                if (params.name === item.data.name) {
                    item.setData({
                        showContent: 'ci-collapse-item-show-content'
                    });
                } else {
                    item.setData({
                        showContent: ''
                    });
                }
            });
        },
        change(e) {
            this.triggerEvent('onChange', e)
        }
    }
});

