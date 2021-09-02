Component({
    externalClasses: ['ci-class'],
    options: {
        multipleSlots: true
    },
    properties: {
        tabs: {
            type: Array,
        },
        tabBarPosition: {
            type: String,
            value: 'top'
        },
        initialPage: {
            type: Number,
            value: 0,
        },
        animated: {
            type: Boolean,
            value: true,
            observer: function(newVal) {
                if(!newVal) {
                    this.setData({
                        isAnimated: 0
                    })
                }
            }
        },
    },
    attached: function() {
        const _this = this
        wx.getSystemInfo({
            success: function(res) {
                _this.setData({
                    systemInfoWidth: res.windowWidth,
                    wrapperWidth: res.windowWidth,
                    containerWidth: 100*_this.data.tabs.length,
                    itemWidth: res.windowWidth
                })
            }
        })
    },
    data: {
        selectedIndex: 0,
        isAnimated: 500,
        isScroll: true,
        scrollLeft: 0,
        systemInfoWidth: 0,
        wrapperWidth: 0,
        containerWidth: 0,
        itemWidth: 0,
        containerLeft: 0,
    },
    methods: {
        handleClickItem (e) {
            const _this = this
            this.setData({
                initialPage: e.target.dataset.data,
                selectedIndex: e.target.dataset.data,
                containerLeft: -e.target.dataset.data * _this.data.wrapperWidth
            }, function() {
                console.log(_this.data.leftIndex)
                this.triggerEvent('onTabClick', e.target)
            })
        },
        swiperChange (e) {
            this.setData({
                initialPage: e.detail.current
            }, function() {
                if(this.data.initialPage > 4) {
                    this.setData({
                      scrollLeft: this.data.systemInfoWidth * parseInt(this.data.initialPage / 5)
                    })
                } else {
                    this.setData({
                        scrollLeft: 0
                    })
                }
            })
        }
    }
});
