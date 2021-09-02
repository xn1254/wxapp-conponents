Component({
    externalClasses: ['ci-class'],
    options: {
        multipleSlots: true,
        addGlobalClass: true
    },
    properties: {
        data: {
            type: Array,
            value: []
        },
        columnNum: {
            type: Number,
            value: 4,
            observer: function (newVal) {
                this.setData({
                    gridWidth: (100 / newVal) + '%'
                })
            }
        },
        hasLine: {
            type: Boolean,
            value: true
        },
        isCarousel: {
            type: Boolean,
            value: false
        },
        carouselMaxRow: {
            type: Number,
            value: 2
        },
        square: {
            type: Boolean,
            value: true
        }
    },
    attached: function () {
        const data = []
        const _this = this
        if (this.data.isCarousel) {
            let pageCount = Math.ceil(this.data.data.length / (this.data.carouselMaxRow * this.data.columnNum))
            let perPage = this.data.carouselMaxRow * this.data.columnNum
            for (let page = 1; page <= pageCount; page++) {
                let pageData = []
                for (let i = 0; i < perPage; i++) {
                    let dataIndex = i + (page - 1) * perPage
                    pageData.push(dataIndex < this.data.data.length ? this.data.data[dataIndex] : false)
                }
                data.push(pageData)
            }
            this.setData({
                pageArr: data
            }, () => {
                const query = wx.createSelectorQuery().in(this)
                query.select('.ci-grid__inner').boundingClientRect(function(res){
                    _this.setData({
                        swiperHeight: (_this.data.carouselMaxRow * res.width) + 'px',
                        gridHeight: res.width + 'px'
                    })
                }).exec()
            })
        }
    },
    data: {
        gridWidth: '25%',
        gridHeight: 0,
        square: true,
        indicatorDots: true,
        pageArr: [],
        swiperHeight: 0
    },
    methods: {
        onTap(e) {
            this.triggerEvent('onClick', e.target)
        },
    },
})