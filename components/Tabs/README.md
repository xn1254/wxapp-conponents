# Tabs 标签页

用于让用户在不同的视图中进行切换。

## 规则

- 标签数量，一般 2-4 个；其中，标签中的文案需要精简，一般 2-4 个字。
- 在 iOS 端的次级页面中，不建议使用左右滑动来切换 Tab，这个和 iOS 的左滑返回存在冲突，eg：详情页中 Tabs。

## props

| 属性 | 说明 | 类型 | 默认值 | 备注 |

| ---- | ---- | --- | ------- | --- |

| tabs | tab数据 | Array | - | - |

| tabBarPosition | TabBar位置 | String  可选值：'top', 'bottom', 'left'(web only), 'right'(web only) | 'top' | web only属性未实现 |

| renderTabBar | 替换TabBar | Function (h) | - | 未实现,小程序不支持传递Function类型的参数 |

| initialPage | 初始化Tab, index | Number | 0 | - |

| swipeable | 是否可以滑动内容切换 | Boolean | true | 未实现，小程序组件不支持禁止触摸切换 |

| distanceToChangeTab | 滑动切换阈值(宽度比例) | Number | 0.3 | 未实现，小程序组件不支持切换滑动阈值 |

| animated | 是否开启切换动画 | Boolean | true | - |

| tabDirection | Tab方向 (web only) | String 可选值：'horizontal', 'vertical' | 'horizontal' | web only属性未实现 |

## props

| 属性 | 说明 | 备注 |

| ---- | ---- | ---- |

| title | 标签文字 | - |

| render | 自定义渲染标签中的内容 | 未实现,小程序不支持传递Function类型的参数 |

## events

| 事件名 | 说明 | 返回值 | 备注 |

| ---- | ---- | --- | --- |

| onChange | tab变化时触发 | index | 未实现 |

| onTabClick | tab被点击的回调 | obj | 当前被点击的tab |
