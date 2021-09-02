# Pagination 分页器

导航控件

## props

| 属性 | 说明 | 类型 | 默认值 |

| ---- | ---- | --- | ------- |

| mode | 形态，可选 button,number,pointer | String | button |

| current | 当前页号 双向绑定 | Number | 1 |

| total | 数据总数 | Number | 10 |

| disabled | 禁用状态 | Boolean | false |

| simple | 是否隐藏数值 | Boolean | false |

| locale | 国际化, 可以覆盖全局LocaleProvider的配置 | Object: {prevText, nextText} | - |

| prevText | 分页器后退按钮 | Slot name="prevText" | - |

| nextText | 分页器前进按钮 | Slot name="nextText" | - |


## events

| 事件名 | 说明 | 返回值 |

| ---- | ---- | --- |

| onChange | change 事件触发 | value |
