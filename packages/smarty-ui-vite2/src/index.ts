import { createApp } from 'vue'
import SmartyUI from './entry'
// import JSXButton from './JSXButton.tsx'
// import SFCButton from './SFCButton.vue'
// import SButton from './button'
// createApp(JSXButton).mount('#app')
createApp({
  template: `
 <div>
  <SButton color="blue">蓝色按钮</SButton>
  <SButton color="green">绿色按钮</SButton>
  <SButton color="gray">灰色按钮</SButton>
  <SButton color="yellow">黄色按钮</SButton>
  <SButton color="red">红色按钮</SButton>
 </div> 
 <div>
  <SButton color="blue" icon="10k"></SButton>
  <SButton color="green" icon="10mp"></SButton>
  <SButton color="gray" icon="11mp"></SButton>
  <SButton color="yellow" icon="123"></SButton>
  <SButton color="red" icon="12mp"></SButton>
 </div> 
  `
}).use(SmartyUI).mount('#app')