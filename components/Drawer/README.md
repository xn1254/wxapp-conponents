# Drawer 抽屉

导航控件

# 规则

是 Android 推荐的导航方式，常见于该平台应用。

## props

| 属性 | 说明 | 类型 | 默认值 | 备注 |

| ---- | ---- | --- | ------- | --- |

| sidebar | 抽屉里的内容 | Slot name="sidebar" | - | - |

| visible | 开关状态 | Boolean | false | 替代v-model的双向绑定 |

| position | 抽屉所在位置 | String 'left' 'right' 'top' 'bottom' | 'left' | - |

| customStyle | 自定义抽屉样式 | String | - | 当position为top或bottom时用于限定抽屉的高度, 将类似于"height: 200px"这样的字符串传入 |

| sidebarStyle (web only) | 抽屉的样式 | Object | - | web only属性未实现 |

| overlayStyle (web only) | 遮罩样式 | Object | - | web only属性未实现 |

| dragHandleStyle (web only) | 拖动条样式 | Object | - | web only属性未实现 |

| touch 暂不支持 (web only) | 是否开启触摸手势 | Boolean | true | web only属性未实现 |

| transitions 暂不支持 (web only) | 是否开启动画 | Boolean | true | web only属性未实现 |

| docked (web only) | 是否嵌入到正常文档流里 | Boolean | false | web only属性未实现 |

| enableDragHandle (web only) | 是否禁止 dragHandle | Boolean | false | web only属性未实现 |

| dragToggleDistance (web only) | 打开关闭抽屉时距 sidebar 的拖动距离 | Number | 30 | web only属性未实现 |

## events

| 事件名 | 说明 | 返回值 |

| ---- | ---- | --- |

| onOpenChange | open 状态切换时 | open |
