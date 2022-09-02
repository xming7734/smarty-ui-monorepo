import { defineComponent, createVNode, createTextVNode } from "vue";
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
const _sfc_main = {};
const JSXButton = defineComponent({
  name: "JSXButton",
  render() {
    return createVNode("button", null, [createTextVNode("JSX Button")]);
  }
});
const entry = {
  install(app) {
    app.component(Button.name, Button);
    app.component(_sfc_main.name, _sfc_main);
    app.component(JSXButton.name, JSXButton);
  }
};
export {
  Button,
  JSXButton,
  _sfc_main as SFCButton,
  entry as default
};
//# sourceMappingURL=smarty-ui.esm.js.map
