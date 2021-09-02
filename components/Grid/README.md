# Grid 宫格

在水平和垂直方向，将布局切分成若干等大的区块。

## props

| 属性 | 说明 | 类型 | 默认值 | 备注 |

| ---- | ---- | --- | ------- | --- |

| data | 传入的菜单数据 | Array<{icon, text}> | [] | - |

| onClick | 点击每个菜单的回调函数 | Function (el: Object, index: Number) | - | 暂未实现，小程序不支持Function类型的参数 |

| columnNum | 列数 | Number | 4 | - |

| hasLine | 是否有边框 | Boolean | true | - |

| isCarousel | 是否跑马灯 | Boolean | false | - |

| carouselMaxRow | 如果是跑马灯, 一页跑马灯需要展示的行数 | Number | 2 | - |

| renderItem | 自定义每个 grid 条目的创建函数 | Function (h, dataItem) | - | 暂未实现，小程序不支持Function类型的参数 |

| square (Web Only) | 每个格子里的图片是否固定为正方形 | Boolean | true | 属性配合外部样式类'not-square-grid'用来修改传入的image图片的大小 |

| activeStyle (Web Only) 暂不支持 | 点击反馈的自定义样式 (设为 false 时表示禁止点击反馈) | {}/false | {} | Web Only属性暂未实现 |

| activeClassName (Web Only) 暂不支持 | 点击反馈的自定义类名 | String | - | Web Only属性暂未实现 |

| itemStyle | 每个格子自定义样式 | Object | - | 暂未实现，小程序不支持以对象的形式绑定style |
