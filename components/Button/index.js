//Component Object
Component({
  properties: {
    type: {
      type: String
    },
    size: {
      type: String,
      value: "large"
    },
    disabled: {
      type: Boolean,
      value: false
    }
  },
  data: {},
  methods: {
    click: function() {
      this.triggerEvent("onClick");
    }
  }
});
