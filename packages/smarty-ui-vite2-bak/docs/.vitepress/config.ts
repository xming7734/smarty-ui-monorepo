const sidebar = {
  '/': [
    { text: '快速开始', link: '/', items: [] },
    {
      text: '通用',
      items: [
        { text: 'Button 按钮', link: '/components/button/', items: [] },
      ]
    },
    { text: '导航', items: [] },
    { text: '反馈', items: [] },
    { text: '数据录入', items: [] },
    { text: '数据展示', items: [] },
    { text: '布局', items: [] },
  ]
}
const config = {
  title: "🔨  Smarty-UI",
  description: "组件库搭建的教学模型",
  themeConfig: {
    sidebar,
  },
  markdown: {
    config: (md) => {
      // 添加DemoBlock插槽
      const { demoBlockPlugin } = require('vitepress-theme-demoblock')
      md.use(demoBlockPlugin)
    }
  }
}
export default config