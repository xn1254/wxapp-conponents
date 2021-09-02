//Component Object
Component({
    options: {
        multipleSlots: true // 在组件定义时的选项中启用多slot支持
    },
    relations: {
        './List': {
          type: 'parent', // 关联的目标节点应为子节点
        },
        './ListItemBrief': {
            type: 'child', // 关联的目标节点应为子节点
        }
    },
    properties: {
        thumb: {
            type: String,
        },
        extra: {
            type: String
        },
        arrow: {
            type: String,
            observer: function(newVal) {
                switch(newVal)
                {
                    case 'horizontal':
                        this.setData({
                            arrowDrection: 'return'
                        })
                        break;
                    case 'up':
                        this.setData({
                            arrowDrection: 'packup'
                        })
                        break;
                    case 'down':
                        this.setData({
                            arrowDrection: 'unfold'
                        })
                        break;
                    case 'empty':
                        this.setData({
                            hideArrow: true
                        })
                        break;
                }
            }
        },
        align: {
            type: String,
            observer: function(newVal) {
                switch(newVal)
                {
                    case 'top':
                        this.setData({
                            alignDrection: 'top'
                        })
                        break;
                    case 'middle':
                        this.setData({
                            alignDrection: 'middle'
                        })
                        break;
                    case 'bottom':
                        this.setData({
                            alignDrection: 'bottom'
                        })
                        break;
                }
            }
        },
        multipleLine: {
            type: Boolean,
            value: false
        },
        wrap: {
            type: Boolean,
            value: false
        },
        hideActive: {
            type: Boolean
        }
    },
    data: {
        arrowDrection: '',
        hideArrow: false,
        alignDrection: ''
    },
    methods: {
        click: function() {
            this.triggerEvent('onClick')
        }
    },
});