# Popover 气泡

在点击控件或者某个区域后，浮出一个气泡菜单来做更多的操作。 如果设置了遮罩层，建议通过点击遮罩层的任一位置，进行退出。

## props

| 属性 | 说明 | 类型 | 默认值 | 备注 |

| ---- | ---- | --- | ------- | --- |

| visible | 当前显隐状态 | Boolean | false | - |

| onVisibleChange | 当显隐状态变化时回调函数 | Function | - | 暂未实现，小程序暂不支持传递Function类型的参数 |

| placement | 气泡的位置，可选值有{'left','right','top','bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight'} | String | 'bottomRight' | - |

| mask | 是否显示遮罩背景层 | Boolean | false | - |

## slots

| 名字 | 说明 | 作用域参数 | 备注 |

| ---- | ---- | --- | --- |

| overlay | 显示的菜单内容 | 无 | 小程序不支持作用域插槽 |

## events

| 事件名 | 说明 | 返回值 | 备注 |

| ---- | ---- | --- | --- |

| close | 点击遮罩层关闭后的触发 | - | - |

| select | 选中某选项时的触发 | 某一项的特殊标记（自定义） | 暂未实现 |

# Popover.Item

## props

| 属性 | 说明 | 类型 | 默认值 | 备注 |

| ---- | ---- | --- | ------- | --- |

| disabled | 是否禁用 | Boolean | false | - |

| icon | icon图标类型 | String | - | - |

## events

| 事件名 | 说明 | 返回值 |

| ---- | ---- | --- |

| click | 选中某选项时的回调函数 | - |