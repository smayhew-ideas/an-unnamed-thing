import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
    // Resolve Figma asset imports (figma:asset/<hash>.ext → src/assets/<hash>.ext)
    {
      name: 'figma-asset-resolver',
      resolveId(id: string) {
        if (id.startsWith('figma:asset/')) {
          const filename = id.replace('figma:asset/', '')
          return path.resolve(__dirname, `./src/assets/${filename}`)
        }
      },
    },
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
