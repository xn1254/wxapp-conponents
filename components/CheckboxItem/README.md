# Checkbox 复选框

复选框

## props

| 属性 | 说明 | 类型 | 默认值 | 备注 |

| ---- | ---- | --- | ------- | --- |

| name | name | String | 无 | - |

| defaultChecked | 初始是否选中 | Boolean | 无 | - |

| checked | 指定当前是否选中 | Boolean | 无 | - |

| disabled | 禁用 | Boolean | false | - |

| onChange | change 事件触发的回调函数 | Function | 无 | 未实现，小程序暂不接受Function类型的参数 |

## events

| 事件名 | 说明 | 返回值 | 备注 |

| ---- | ---- | --- | --- |

| change | 值切换时触发，与onChange二选一即可 | 选中的值 | - |

# CheckboxItem

基于ListItem对Checkbox进行封装,ListItem的thumb属性固定传入Checkbox,其他属性和ListItem一致。 其他 API和 Checkbox 相同。

# AgreeItem(暂未实现)

用于同意协议这种场景的复选框
