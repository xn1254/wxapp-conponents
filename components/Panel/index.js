Component({
    externalClasses: ['ci-class-content', 'ci-class-title', 'ci-class'],

    relations: {
        '../Accordion/index': {
            type: 'parent',
            linked: function (target) {
                const options = {
                    accordion: target.data.accordion,
                }
                if (target.data.value && target.data.value.includes(this.data.key)) {
                    options.showContent = 'ci-collapse-item-show-content';
                } else {
                    if(target.data.accordion) {
                        if (target.data.defaultActiveKey === this.data.key) {
                            options.showContent = 'ci-collapse-item-show-content';
                        }
                    } else {
                        if (target.data.defaultActiveKey.includes(this.data.key)) {
                            options.showContent = 'ci-collapse-item-show-content';
                        }
                    }
                }
                this.setData(options);
            }
        }
    },

    properties: {
        header: String,
        key: String
    },

    data: {
        showContent: '',
        accordion: false,
    },

    options: {
        multipleSlots: true
    },

    methods: {
        trigger(e) {
            const data = this.data;
            if (data.accordion) {
                this.triggerEvent('collapse', {name: data.key}, {composed: true, bubbles: true});
            } else {
                this.setData({
                    showContent: data.showContent ? '' : 'ci-collapse-item-show-content'
                });
            }
            this.triggerEvent('Change', e, {composed: true, bubbles: true})
        },
    }
});

