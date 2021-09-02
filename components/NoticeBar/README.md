# NoticeBar 通告栏

在导航栏下方，一般用作系统提醒、活动提醒等通知。

## 规则

- 需要引起用户关注时使用，重要级别低于 Modal ，高于 Toast。

## props

| 属性 | 说明 | 类型 | 默认值 | 备注 |

| ---- | ---- | --- | ------- | --- |

| mode | 提示类型，可选 closable,link | String | '' | 与action不能同时存在 |

| icon | 在开始位置设置图标 | String 设置为'null'时不显示图标 | `<Icon type="systemprompt"></Icon>` | 只能传递icon类型而不能直接传递slot |

| onClick | 点击关闭或者操作区域的回调函数 | Function | - | 未实现，小程序不支持传递Function类型的参数 |

| marqueeProps | marquee 参数 | Object | `{loop: false, leading: 500, trailing: 800, fps: 40, style: {}}` | - |

| action | 用于替换操作 icon 的文案 | Slot | mode = 'closable' 时为 ×; mode = 'link' 时为 > | 与mode不能同时存在 |
