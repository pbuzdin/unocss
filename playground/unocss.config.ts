import { defineConfig, presetAttributify, presetUno } from 'unocss'
import presetIcons from '@unocss/preset-icons'

export default defineConfig({
  theme: {
    fontFamily: {
      sans: '\'Inter\', sans-serif',
      mono: '\'Fira Code\', monospace',
    },
  },
  presets: [
    presetAttributify({ strict: false }),
    presetIcons(),
    presetUno(),
  ],
})