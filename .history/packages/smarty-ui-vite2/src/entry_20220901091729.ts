import { App } from "vue";
import { Button } from "./button/index.ts";
import SFCButton from "./SFCButton.vue";
import JSXButton from "./JSXButton";

export { MyButton, SFCButton, JSXButton };

export default {
  install(app: App): void {
    app.component(Button.name, Button);
    app.component(SFCButton.name, SFCButton);
    app.component(JSXButton.name, JSXButton);
  },
};
