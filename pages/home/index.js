//index.js
//获取应用实例
import { $stopciRefresher } from '../../components/index'
const app = getApp()
Page({
    onMyEvent: function (e) {
        console.log(e.detail)
    },
    showPopover: function() {
        this.setData({
            show_popover: true
        }, function () {
            console.log(this.data.show_popover)
        })
    },
    onBack: function () {
        this.setData({
            isShow: true
        })
    },
    changeValue: function(value) {
      this.setData({
        radioValue: value.detail
      })
    },
    onVisibleChange: function() {
        console.log('1')
    },
    tabClick: function(value) {
      console.log(value)
    },
    clickItem: function (value) {
      console.log('item', value)
    },
    data: {
        min: 0,
        max: 100,
        defaultValue: [30, 60],
        isDisabled: true,
        demo1Left: [
          {
            text: 'edit',
          },
          {
            text: 'hide',
          }
        ],
        demo1Right: [
          {
            text: 'remove',
          }
        ],
        indicator: {
          activate: '松开立即刷新',
          deactivate: '下拉可以刷新',
          release: 'loading',
          finish: '完成刷新'
        },
        square: false,
        marqueeProps: {
          loop: true,
        },
        items: [{
                title: new Date,
                content: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
            },
            {
                title: new Date,
                content: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
            }
        ],
        style: {
          width: '100px'
        },
        value: [1, 2, 3],
        accordionValue: ['1', '2'],
        isShow: false,
        show_popover: false,
        animated: true,
        date: '请选择预产期',
        radioValue: 'football',
        data1: [
          { value: 0, label: 'basketball', extra: 'details', isChecked: false, isDisabled: false },
          { value: 1, label: 'football', extra: 'details', isChecked: true, isDisabled: false },
          { value: 2, label: 'ball', extra: 'details', isChecked: false, isDisabled: true },
          { value: 3, label: 'baseball', extra: 'details', isChecked: false, isDisabled: false }
        ],
        gridData: [
          {
            icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
            text: 1
          },
          {
            icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
            text: 2
          },
          {
            icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
            text: 3
          },
          {
            icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
            text: 4
          },
          {
            icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
            text: 5
          },
          {
            icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
            text: 6
          },
          {
            icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
            text: 7
          },
          {
            icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
            text: 8
          },
          {
            icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
            text: 9
          },
          {
            icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
            text: 10
          },
          {
            icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
            text: 11
          },
          {
            icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
            text: 12
          },
          {
            icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
            text: 13
          },
          {
            icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
            text: 14
          },
        ],
        tabs2: [
          { title: '1st Tab', sub: '1'},
          { title: '2nd Tab', sub: '2'},
          { title: '3rd Tab', sub: '3'},
          { title: '4th Tab', sub: '4'},
          { title: '5th Tab', sub: '5'}
        ],
        data2: [
            {
                value: '1',
                label: 'Food',
                children: [
                  {
                    label: 'All Foods',
                    value: '1',
                    disabled: true,
                  },
                  {
                    label: 'Chinese Food',
                    value: '2',
                  }, {
                    label: 'Hot Pot',
                    value: '3'
                  }, {
                    label: 'Buffet',
                    value: '4'
                  }, {
                    label: 'Fast Food',
                    value: '5'
                  }, {
                    label: 'Snack',
                    value: '6'
                  }, {
                    label: 'Bread',
                    value: '7'
                  }, {
                    label: 'Fruit',
                    value: '8'
                  }, {
                    label: 'Noodle',
                    value: '9'
                  }, {
                    label: 'Leisure Food',
                    value: '10'
                  }]
              }, {
                value: '2',
                label: 'Supermarket',
                children: [
                  {
                    label: 'All Supermarket',
                    value: '1'
                  }, {
                    label: 'Supermarket',
                    value: '2',
                    disabled: true
                  }, {
                    label: 'C-Store',
                    value: '3'
                  }, {
                    label: 'Personal Care',
                    value: '4'
                  }]
              }, {
                value: '3',
                label: 'Extra',
                isLeaf: true,
                children: [
                  {
                    label: 'you can not see',
                    value: '1'
                  }]
              }
        ]
    },
    onRefresh() {
      setTimeout(() => {
          this.setData({
              items: [{
                  title: new Date,
                  content: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
              }, ...this.data.items],
          })
          //刷新完成之后，在组件外部调用组件内定义的停止刷新的方法
          $stopciRefresher()
      }, 2000)
    },
})