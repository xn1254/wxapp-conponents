# Menu 菜单

在一个临时的面板上显示一组操作

## 规则

- 至少包含 2 个以上的菜单项
- 不应该被当做主要导航方式

## props

| 属性 | 说明 | 类型 | 默认值 | 备注 |

| ---- | ---- | --- | ------- | --- |

| data | 数据（isLeaf设置后children无效） | Array | [] | - |

| level | 菜单级数，可选1/2 | Number | 2 | - |

| value | 初始值，一级和二级筛选数据的value组成的数组，可使用v-model双向绑定。多选状态下，如果为二级菜单，则数组的第一个元素为一级菜单的选项，数组的第二个元素是一个数组，里面包含了二级菜单的多选项；如果为一级菜单，则数组所有元素都是多选项 | Array | - | - |

| onChange | 选择后的回调函数 | Function | - | 未实现，小程序暂不支持传入Function类型的参数 |

| onOk | 多选状态下确认按钮的回调函数 | Function | - | 未实现，小程序暂不支持传入Function类型的参数 |

| onCancel | 多选状态下取消按钮的回调函数 | Function | - | 未实现，小程序暂不支持传入Function类型的参数 |

| height | 筛选组件的高度 | Number | 360 | - |

| multiSelect | 是否支持菜单多选 | Boolean | false | - |

# events

| 事件名 | 说明 | 返回值 |

| ---- | ---- | --- |

| onChange | change 事件触发 | value |

| onOk | 多选状态下确认按钮的回调函数 | - |

| onCancel | 多选状态下取消按钮的回调函数 | - |
