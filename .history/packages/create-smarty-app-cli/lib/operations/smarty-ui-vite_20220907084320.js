import clone from "../utils/clone.js"
import inquirer from "inquirer"
import { resolve } from "path"
import fs from "fs"

import chalk from "chalk"
const log = (...args) => console.log(chalk.green(...args))

import handlebars from "handlebars"

export default async () => {
  const { name } = await inquirer.prompt([
    {
      type: "input" /* 选择框 */,
      message: "请输入项目的名称？",
      name: "name",
    },
  ])

  log("🚌 创建项目:" + name)

  log(`
👌 安装完成：
To get Start:
===========================
cd ${name}
npm i
npm run dev
===========================
            `)
}