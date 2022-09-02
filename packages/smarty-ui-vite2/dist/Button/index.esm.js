import { defineComponent, createVNode } from "vue";
const __uno = "";
const props = {
  color: {
    type: String,
    default: "blue"
  },
  icon: {
    type: String,
    default: ""
  }
};
const Button = defineComponent({
  name: "SButton",
  props,
  setup(props2, {
    slots
  }) {
    return () => createVNode("button", {
      "class": `
      py-2
      px-4
      font-semibold
      rounded-lg
      shadow-md
      text-white
      bg-${props2.color}-500 
      hover:bg-${props2.color}-700
      border-none
      cursor-pointer
      m-1
      `
    }, [props2.icon ? createVNode("i", {
      "class": `i-ic-baseline-${props2.icon} p-3`
    }, null) : "", slots.default ? slots.default() : ""]);
  }
});
const index = {
  install(app) {
    app.component(Button.name, Button);
  }
};
export {
  Button,
  index as default
};
//# sourceMappingURL=index.esm.js.map
