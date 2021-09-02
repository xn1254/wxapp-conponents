const close = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAEAYAAAD6+a2dAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAyFJREFUeNrt3D9oE1EcB/D3ri2JdSp1kEKlhHTRyVGkuHSQRIQsLaXo0KHkD3RSRMWpk+iikKR06KBIbaEExASHbkV0c1GXSmgKFoeWIkJtUrnn0t8NKeHSNO/u/fl+tpKD/N7v9+1dyLscYwAAAAAAAAAAAAAAYDIu+w0OH2TSo2/Gx9kiHxCLS0veGw+JCX4rk4l8K17dvF8uh92IsNSvZL6MPksmxQ5fFe+LRe+FWbHPZ2dmok+LC5vT6+uy3l9+AAayD+M3trfFDvvNfg4Pey98ZxfEu6MjUeEHYm9ysv9J/nl1rFSSXY8qDuZz92IbqRRPiH4+uLLCLrNdfruvzzsgyqpsrlY7xwsffsyNjMiqwwmtA8cLpgZQQ0KrJyC+g/cOZI9ErxCy65EeADrV03/8iQMsCULbgz/uk3OJPxZOLie7LukBoGu8c1eknHIqxT6yX+xfvX7iQEODQNd4fk1UnTvLy36Dp0tiZC+/UU1XKrLrk/4ZoFVD3Bd8XuTX1th1dpH1RiJ+DdHtM4Iu6ww8ALo1yPR1hRYAXRtm2jpCDwDRtYG61k2UCQDRpaG61OlHuQAQVRusal2dUjYARJWGq1JHtykfABLWAEwdPNEmACSogZg+eKJdAIisAdkyeKJtAEi3Bmbb4In2ASCdDrDnrTvd87nRsG3wxJgAkNPuunl/t7lJY8rgiXEBIG2fEVoxfPAkvBtCJKNtaPGJx9zXU1Mt70doZsngibEBIHSNZ/vsK0+4btj1qAaXgFYsORMYFwB8CDwdYy4Bnd56ZeutakT7MwC+CDobbQOAr4K7Q7sAYDOou7QJALaD5VA+AKoMQJU6uk3ZAKjacFXr6pRyAdClwbrU6UeZAOjaUF3rJqEHQPcG6r4O/DTM8nXhx6GWrzOwAOjSENvWLX0zyGvAK15yk6WSag2Qre0bU5o2neqDubHYQiIhuz7pAfAefmTpdiuhddE6/YLg7orzTqNQkF1XeNvBlgy+WdtBCOgZQdLRY+IOo9k/8XSt9ldkb8Zfbm0FdYpTHfWhuT/e4/UAAAAAAAAAAAAAAADO4D9cvzD+Ik3LBAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wNy0yOFQyMjo1MjoyMiswODowMMq1zi4AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDctMjhUMjI6NTI6MjIrMDg6MDC76HaSAAAASHRFWHRzdmc6YmFzZS11cmkAZmlsZTovLy9ob21lL2FkbWluL2ljb24tZm9udC90bXAvaWNvbl83NW1saHp1bGx3NS9jbG9zZS5zdmcxNhK3AAAAAElFTkSuQmCC'

Component({
    externalClasses: ['ci-class'],
    options: {
        multipleSlots: true,
    },
    properties: {
        icon: {
            type: String,
        },
        content: {
            type: String,
            value: '',
        },
        mode: {
            type: String,
            value: '',
        },
        action: {
            type: String,
            value: close,
        },
        marqueeProps: {
            type: Object,
            value: {
                loop: false,
                leading: 500,
                trailing: 800,
                fps: 40,
            }
        }
    },
    data: {
        animatedWidth: 0,
        overflowWidth: 0,
        visible: true,
    },
    methods: {
        clearMarqueeTimer() {
            if (this.marqueeTimer) {
                clearTimeout(this.marqueeTimer)
                this.marqueeTimer = null
            }
        },
        startAnimation() {
            this.clearMarqueeTimer()
            // marqueeProps参数不全时赋默认值
            const { overflowWidth = this.data.overflowWidth, loop = false, leading = 500, trailing = 800, fps = 40 } = this.data.marqueeProps
            const isLeading = this.data.animatedWidth === 0
            const timeout = isLeading ? leading : fps
            const animate = () => {
                let animatedWidth = this.data.animatedWidth + 1
                const isRoundOver = animatedWidth > overflowWidth

                // 判断是否完成一次滚动
                if (isRoundOver) {
                    if (!loop) {
                        return false
                    }
                    // 重置初始位置
                    animatedWidth = 0
                }

                // 判断是否等待一段时间后进行下一次滚动
                if (isRoundOver && trailing) {
                    setTimeout(() => {
                        this.setData({
                            animatedWidth,
                        })

                        this.marqueeTimer = setTimeout(animate, fps)
                    }, trailing)
                } else {
                    this.setData({
                        animatedWidth,
                    })
                    this.marqueeTimer = setTimeout(animate, fps)
                }
            }

            if (this.data.overflowWidth !== 0) {
                this.marqueeTimer = setTimeout(animate, timeout)
            }
        },
        initAnimation() {
            const query = wx.createSelectorQuery().in(this)
            query.select('.ci-notice-bar__marquee-container').boundingClientRect()
            query.select('.ci-notice-bar__marquee').boundingClientRect()
            query.exec((rects) => {
                if (rects.filter((n) => !n).length) {
                    return false
                }

                const [container, text] = rects
                const overflowWidth = text.width - container.width

                if (overflowWidth !== this.data.overflowWidth) {
                    this.setData({ overflowWidth }, this.startAnimation)
                }
            })
        },
        onAction() {
            if (this.data.mode === 'closable') {
                this.clearMarqueeTimer()
                this.setData({
                    visible: false
                })
            }
            this.triggerEvent('click')
        },
        onClick() {
            this.triggerEvent('click')
        },
    },
    ready() {
        this.initAnimation()
    },
    detached() {
        this.clearMarqueeTimer()
    },
})