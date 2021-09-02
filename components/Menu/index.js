Component({
    properties: {
        data: {
            type: Array,
            value: [],
        },
        level: {
            type: Number,
            value: 1
        },
        value: {
            type: Array,
        },
        height: {
            type: Number,
            value: 360
        },
        multiSelect: {
            type: Boolean,
            value: false
        }
    },
    attached: function () {
        const that = this;
        if(that.data.data[0].children && !that.data.data[0].isLeaf) {
            that.setData({
                multiselect_data: that.data.data[0].children
            })
        }
    },
    data: {
        multiselect_data: [],
        current: String,
        multiSelectCurrent: []
    },
    methods: {
        handleFruitChange({ detail = {} }) {
            this.setData({
                current: detail.value
            });
        },
        handleMultiSelectCurrent({ detail = {} }) {
            console.log(this.data.multiselect_data)
            const index = this.data.multiSelectCurrent.indexOf(detail.value);
            index === -1 ? this.data.multiSelectCurrent.push(detail.value) : this.data.multiSelectCurrent.splice(index, 1);
            this.setData({
                multiSelectCurrent: this.data.multiSelectCurrent
            });
        },
        changeItem(e) {
            if(JSON.stringify(e.target.dataset.data.children.sort()) === JSON.stringify(this.data.multiselect_data.sort())) {
                return;
            }
            if (!this.data.multiSelect) {
                if(e.target.dataset.data.children && e.target.dataset.data.children.length !== 0 && !e.target.dataset.data.isLeaf) {
                    e.target.dataset.data.children.map(val => {
                        if (this.data.current === val.label) {
                            val.checked = true
                        }
                        return val
                    })
                    this.setData({
                        multiselect_data: e.target.dataset.data.children,
                    })
                } else {
                    this.setData({
                        multiselect_data: [],
                    })
                }
            } else {
                if(e.target.dataset.data.children && e.target.dataset.data.children.length !== 0 && !e.target.dataset.data.isLeaf) {
                    this.data.multiSelectCurrent.forEach(value => {
                        e.target.dataset.data.children.map(val => {
                            if (value === val.label) {
                                val.checked = true
                            }
                            return val
                        })
                    })
                    this.setData({
                        multiselect_data: e.target.dataset.data.children,
                    })
                } else {
                    this.setData({
                        multiselect_data: [],
                    })
                }
            }
        },
        cancel() {
            const that = this
            this.setData({
                multiSelectCurrent: []
            }, () => {
                that.triggerEvent('onCancel')
            })
        },
        confirm() {
            this.triggerEvent('onOk', this.data.multiSelectCurrent)
        }
    }
});