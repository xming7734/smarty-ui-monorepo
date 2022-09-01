import { App } from "vue"
import { Button } from "./Button/index.ts"
import SFCButton from "./SFCButton.vue"
import JSXButton from "./JSXButton"

export { Button, SFCButton, JSXButton }

export default {
  install (app: App): void {
    app.component(Button.name, Button)
    app.component(SFCButton.name, SFCButton)
    app.component(JSXButton.name, JSXButton)
  },
}
