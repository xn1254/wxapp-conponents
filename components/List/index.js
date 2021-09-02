//Component Object
Component({
    relations: {
        './ListItem': {
          type: 'child', // 关联的目标节点应为子节点
        }
    },
    properties: {
        renderHeader:{
            type:String,
        },
        renderFooter:{
            type:String,
        },
    },
    data: {

    },
    methods: {
        
    },
});