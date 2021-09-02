Component({
    externalClasses: ['ci-class'],
    properties : {
        text: {
            type: String
        },
        small : {
            type : Boolean,
            value : false
        },
        disabled : {
            type : Boolean,
            value : false
        },
        closable : {
            type : Boolean,
            value : false
        },
        selected : {
            type : Boolean,
            value : false
        },
    },
    data: {
        isShow: true
    },
    methods : {
        tapTag(){
            this.setData({
                isShow: false
            })
        }
    }
})