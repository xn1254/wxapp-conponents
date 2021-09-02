# SwipeAction 滑动操作

## 规则

1. 一次只可滑动一行列表
2. 点击任意按钮之外处或往回滑动该列表可隐藏操作。

### props

| 属性 | 说明 | 类型 | 默认值 | 备注 |

| ---- | ---- | --- | ------- | --- |

| left | 左侧按钮组 | Array | [] | - |

| right | 右侧按钮组 | Array | [] | - |

| autoClose | 点击按钮是否自动关闭 | Boolean | false | - |

| disabled | 是否禁用 | Boolean | false | - |

| onOpen | 打开时回调函数 | Function | - | 暂未实现，小程序不支持传递Function类型的参数 |

| onClose | 关闭时回调函数 | Function | - | 暂未实现，小程序不支持传递Function类型的参数 |

### Button

| 参数 | 说明 | 类型 | 默认值 | 备注 |

| ---- | ---- | --- | ------- | --- |

| text | 按钮文案 | String | Click | - |

| style | 按钮样式 | Object | {} | 暂未实现，小程序不支持以对象的形式绑定style |

| onPress | 按钮点击事件 | Function | - | 暂未实现，小程序不支持传递Function类型的参数 |

| className(web only) | 按钮样式类 | String | - | web only属性暂未实现 |
