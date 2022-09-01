import Unocss from "unocss/vite"
import { presetAttributify, presetUno, presetIcons } from 'unocss'

const colors = [
  "white",
  "black",
  "gray",
  "red",
  "yellow",
  "green",
  "blue",
  "indigo",
  "purple",
  "pink",
]

const safelist = [
  ...colors.map((v) => `bg-${v}-500`),
  ...colors.map((v) => `hover:bg-${v}-700`),
  ...[
    "10k",
    "10mp",
    "11mp",
    "123",
    "12mp",
  ].map(v => `i-ic-baseline-${v}`)
]

export default () =>
  Unocss({
    safelist,
    presets: [presetUno(), presetAttributify(), presetIcons()]
  })