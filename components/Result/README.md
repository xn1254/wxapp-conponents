# Result 结果页

在整张页面中组织插画、图标、文字等内容，向用户反馈操作结果。

## 规则

- 用作非常重要的操作反馈，如支付成功，无网络状态
- 个性化且优美的插画，可以提升品牌形象。
- 对于错误类型的结果页，页面中需要提供明确的行动点，eg：重新加载。

## props

| 属性 | 说明 | 类型 | 默认值 | 备注 |

| ---- | ---- | --- | ------- | --- |

| img | 插图 | Slot name="img" | - | - |

| imgUrl | 插图 url | String | - | - |

| title | title 文案 | String / Slot name="title" | - | - |

| message | message 文案 | String / Slot name="message" | - | - |

| buttonText | 按钮文案 | String | - | - |

| buttonType | 按钮的类型 | String('default', 'primary', 'warn') | 'default' | - |

| onButtonClick | 按钮回调函数 | Function | - | 暂未实现，小程序不支持传递Function类型的参数 |

## events

| 事件名 | 说明 | 返回值 |

| ---- | ---- | --- |

| click | 按钮被单击时触发 | - |