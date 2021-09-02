# Accordion 手风琴

可以折叠/展开的内容区域。

# 规则

- 对复杂区域进行分组和隐藏。
- 通常，一次只允许单个内容区域展开；特殊情况，多个内容区域可以同时展开。

# Accordion

## props

| 属性 | 说明 | 类型 | 默认值 | 备注 |

| ---- | ---- | --- | ------- | --- |

| value | 当前激活tab面板中的key，可用v-model双向绑定 | Array | 默认无，accordion模式下默认为第一个元素 | 属性可用，未实现v-model的双向绑定 |

| defaultActiveKey | 初始化选中面板的key | String/Array(正常模式下，可以多选) | 无 | - |

| onChange | 切换面板的回调函数 | function(key){} | 无 | 暂未实现，小程序不支持Function类型作为属性传递 |

| accordion | 手风琴模式 | Boolean | false | - |

| openAnimation | 设置是否开启切换动画 | Boolean | true | 由于布局原因暂未实现 |

## events

| 事件名 | 说明 | 返回值 | 备注 |

| ---- | ---- | --- | --- |

| onChange | 切换面板的回调函数 | 选中的对象 | - |

# Accordion.Panel

## props

| 属性 | 说明 | 类型 | 默认值 | 备注 |

| ---- | ---- | --- | ------- | --- |

| key | 当前面板的name，与Accordion的activeKey对应，不填为索引值 | String | index | - |

| header | 面板头内容 | String | 无 | - |
