# SearchBar 搜索栏

一般可位于 NavBar 下方，通过『取消按钮』退出激活状态。

## 规则

- 应该在 placeholder 里提供提示文字，提醒用户输入相关内容，比如：双11特卖。
- 在搜索栏下方，可提供有用的标签文案，帮助用户通过点击直接完成输入，比如：列出一些最近搜索的关键词。

## props

| 属性 | 说明 | 类型 | 默认值 | 备注 |

| ---- | ---- | --- | ------- | --- |

| defaultValue | 搜索框的默认值 | String | - | - |

| value | 搜索框的当前值 | String | - | - |

| placeholder | placeholder | String | - | - |

| onSubmit | submit事件 | Function | - | 暂未实现，小程序暂不接受Function类型作为参数 |

| onChange | change事件的回调 | Function | - | 暂未实现，小程序暂不接受Function类型作为参数 |

| onFocus | focus事件的回调 | Function | - | 暂未实现，小程序暂不接受Function类型作为参数 |

| onBlur | blur事件的回调 | Function | - | 暂未实现，小程序暂不接受Function类型作为参数 |

| onCancel | 点击取消按钮触发的事件（不再自动清除输入框文字） | Function | - | 暂未实现，小程序暂不接受Function类型作为参数 |

| showCancelButton | 是否一值显示取消按钮 | Boolean | false | - |

| cancelText | 定制取消按钮的文字 | String | 取消 | - |

| disabled | 设置禁用 | Boolean | false | - |

| onClear | 点击clear图标触发的事件 | Function | - | 暂未实现，小程序暂不接受Function类型作为参数 |

| maxLength | 最多允许输入的字符个数 | Number | - | - |

| autofocus | 是否自动获取焦点 | Boolean | false | - |
