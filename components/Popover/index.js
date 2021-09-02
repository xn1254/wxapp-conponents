const getPlacements = ([a, s, b] = rects, placement = 'top') => {
    switch (placement) {
        case 'topLeft':
            return {
                top: s.scrollTop + a.top - b.height - 4,
                left: s.scrollLeft + a.left,
            }
        case 'top':
            return {
                top: s.scrollTop + a.top - b.height - 4,
                left: s.scrollLeft + a.left + (a.width - b.width) / 2,
            }
        case 'topRight':
            return {
                top: s.scrollTop + a.top - b.height - 4,
                left: s.scrollLeft + a.left + a.width - b.width,
            }
        case 'rightTop':
            return {
                top: s.scrollTop + a.top,
                left: s.scrollLeft + a.left + a.width + 4,
            }
        case 'right':
            return {
                top: s.scrollTop + a.top + (a.height - b.height) / 2,
                left: s.scrollLeft + a.left + a.width + 4,
            }
        case 'rightBottom':
            return {
                top: s.scrollTop + a.top + a.height - b.height,
                left: s.scrollLeft + a.left + a.width + 4,
            }
        case 'bottomRight':
            return {
                top: s.scrollTop + a.top + a.height + 4,
                left: s.scrollLeft + a.left + a.width - b.width,
            }
        case 'bottom':
            return {
                top: s.scrollTop + a.top + a.height + 4,
                left: s.scrollLeft + a.left + (a.width - b.width) / 2,
            }
        case 'bottomLeft':
            return {
                top: s.scrollTop + a.top + a.height + 4,
                left: s.scrollLeft + a.left,
            }
        case 'leftBottom':
            return {
                top: s.scrollTop + a.top + a.height - b.height,
                left: s.scrollLeft + a.left - b.width - 4,
            }
        case 'left':
            return {
                top: s.scrollTop + a.top + (a.height - b.height) / 2,
                left: s.scrollLeft + a.left - b.width - 4,
            }
        case 'leftTop':
            return {
                top: s.scrollTop + a.top,
                left: s.scrollLeft + a.left - b.width - 4,
            }
        default:
            return {
                left: 0,
                top: 0,
            }
    }
}

Component({
    externalClasses: ['ci-class'],
    options: {
        multipleSlots: true,
    },
    properties: {
        mask: {
            type: Boolean,
            value: false
        },
        placement: {
            type: String,
            value: 'bottomRight',
        },
        visible: {
            type: Boolean,
            value: false,
            observer(newVal) {
                this.setData({
                    popoverVisible: newVal,
                })
            },
        },
        trigger: {
            type: String,
            value: 'click',
        },
    },
    data: {
        popoverStyle: '',
        popoverBodyStyle: '',
        popoverVisible: false,
        showMask: false
    },
    methods: {
        getPopoverStyle() {
            const query = wx.createSelectorQuery().in(this)
            query.select('.ci-popover__element').boundingClientRect()
            query.selectViewport().scrollOffset()
            query.select('.ci-popover').boundingClientRect()
            query.exec((rects) => {
                if (rects.filter((n) => !n).length) {
                    return false
                }
                const popoverStyle = this.data.popoverBodyStyle ? this.data.popoverBodyStyle.split(';') : []
                const placements = getPlacements(rects, this.data.placement)

                for (const key in placements) {
                    popoverStyle.push(`${key}: ${placements[key]}px`)
                }

                this.setData({
                    popoverStyle: popoverStyle.join(';'),
                })
            })
        },
        /**
         * 当组件进入过渡的开始状态时，设置气泡框位置信息
         */
        onEnter() {
            this.getPopoverStyle()
        },
        fireEvents() {
            const { popoverVisible } = this.data
            const nextVisible = !popoverVisible
            this.setData({
                popoverVisible: nextVisible,
            })
            this.triggerEvent('change', { visible: nextVisible })
        },
        onClick() {
            if (this.data.trigger === 'click') {
                this.setData({
                    showMask: true
                })
                this.fireEvents()
            }
        },
        hideMask() {
            this.fireEvents()
            this.setData({
                showMask: false
            }, () => {
                this.triggerEvent('close')
            })
        }
    },
    attached() {
        const { popoverBodyStyle, visible} = this.data
        const popoverVisible = visible

        this.setData({
            popoverVisible,
            popoverStyle: popoverBodyStyle,
        })
    },
})