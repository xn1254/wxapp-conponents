//Component Object
Component({
  options: {
    multipleSlots: true
  },
  properties: {
    left: {
      type: Array,
      value: []
    },
    right: {
      type: Array,
      value: []
    },
    autoClose: {
      type: Boolean,
      value: false
    },
    disabled: {
      type: Boolean,
      value: false
    }
  },
  data: {
    rightBtnWidth: 174, //右侧按钮的宽度
    leftBtnWidth: 120, //左侧按钮的宽度
    txtStyle: String
  },
  methods: {
    // 节流函数 
    throttle: function (fn, gapTime) {
        console.log(gapTime)
        let _lastTime = null;
        return function () {
            let _nowTime = + new Date()
            if (_nowTime - _lastTime > gapTime || !_lastTime) {
                fn();
                _lastTime = _nowTime
            }
        }
    },
    //手指刚放到屏幕触发
    touchS: function(e) {
      if (this.data.disabled) {
        return;
      }
      //判断是否只有一个触摸点
      if (e.touches.length == 1) {
        this.setData({
          //记录触摸起始位置的X坐标
          startX: e.touches[0].clientX
        });
      }
    },
    //触摸时触发，手指在屏幕上每移动一次，触发一次
    touchM: function(e) {
      var that = this;
      if (this.data.disabled) {
        return;
      }
      if (e.touches.length == 1) {
        //记录触摸点位置的X坐标
        var moveX = e.touches[0].clientX;
        //计算手指起始点的X坐标与当前触摸点的X坐标的差值
        var disX = that.data.startX - moveX;
        var txtStyle = "";
        if (disX == 0) {
          txtStyle = "left:0rpx";
        } else if (disX > 0) {
          txtStyle = "left:-" + disX + "rpx";
          const totalRightLength =
            that.data.rightBtnWidth * that.data.right.length;
          if (disX >= totalRightLength) {
            //控制手指移动距离最大值为删除按钮的宽度
            txtStyle = "left:-" + totalRightLength + "rpx";
          }
        } else {
          txtStyle = "right:" + disX + "rpx";
          const totalLeftLength =
            that.data.leftBtnWidth * that.data.left.length;
          if (disX <= -totalLeftLength) {
            //控制手指移动距离最大值为删除按钮的宽度
            txtStyle = "right:-" + totalLeftLength + "rpx";
          }
        }
        that.setData({
          txtStyle: txtStyle
        });
      }
    },
    touchE: function(e) {
      var that = this;
      if (this.data.disabled) {
        return;
      }
      if (e.changedTouches.length == 1) {
        //手指移动结束后触摸点位置的X坐标
        var endX = e.changedTouches[0].clientX;
        //触摸开始与结束，手指移动的距离
        var disX = that.data.startX - endX;
        var txtStyle = "";
        //如果距离小于删除按钮的1/2，不显示删除按钮
        if (
          Math.abs(disX) >
          (disX > 0 ? that.data.rightBtnWidth / 2 : that.data.leftBtnWidth / 2)
        ) {
          txtStyle =
            disX > 0
              ? "left:-" +
                that.data.rightBtnWidth * that.data.right.length +
                "rpx"
              : "right:-" +
                that.data.leftBtnWidth * that.data.left.length +
                "rpx";
        }
        that.setData({
          txtStyle: txtStyle
        });
      }
    },
    closeSwipeLeft: function () {
        if (this.data.autoClose) {
            this.setData({
                txtStyle: "right: 0"
            })
        }
    },
    closeSwipeRight: function () {
        if (this.data.autoClose) {
            this.setData({
                txtStyle: "left: 0"
            })
        }
    }
  }
});
