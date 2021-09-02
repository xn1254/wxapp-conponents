# TabBar 标签栏

位于 APP 底部，方便用户在不同功能模块之间进行快速切换。

## 规则

- 用作 APP 的一级分类，数量控制在 3-5 个之间。
- 即使某个 Tab 不可用，也不要禁用或者移除该 Tab。
- 使用 Badge 进行提示，足不出户也能知道有内容更新。

## props

| 属性 | 说明 | 类型 | 默认值 | 备注 |

| ---- | ---- | --- | ------- | --- |

| barTintColor | tabbar 背景色 | String | 'white' | - |

| tintColor | 选中的字体颜色 | String | '#108ee9' | - |

| unselectedTintColor | 未选中的字体颜色 | String | '#888' | - |

| hidden ( web only ) | 是否隐藏 | Boolean | false | web only属性未实现 |

| prefixCls ( 不支持 ) | 样式前缀 | String | 'um-tab-bar' | 未实现，UI Nuclear不支持 |

| noRenderContent ( 未实现 ) | 不渲染内容部分 | Boolean | false | 未实现，UI Nuclear未实现 |

## props

| 属性 | 说明 | 备注 |

| ---- | ---- | ---- |

| title | 标签文字 | - |

| render | 自定义渲染标签中的内容 | 未实现,小程序不支持渲染函数 |

## events

| 事件名 | 说明 | 返回值 | 备注 |

| ---- | ---- | --- | --- |

| onChange | tab变化时触发 | index | 未实现 |

| onTabClick | tab 被点击的回调 | obj | 当前被点击的tab |
