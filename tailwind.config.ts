import { join } from 'path'
import type { Config } from 'tailwindcss'
import { skeleton } from '@skeletonlabs/tw-plugin'
import typography from '@tailwindcss/typography'

export default {
  darkMode: 'class',
  content: [
    './src/**/*.{html,js,svelte,ts}',
    join(require.resolve('@skeletonlabs/skeleton'),
      '../**/*.{html,js,svelte,ts}'),
  ],
  theme: {
    extend: {},
  },
  plugins: [
    typography,
    skeleton({
      themes: {
        preset: [
          { name: 'modern', enhancements: true },
        ],
      },
    }),
  ],
} satisfies Config
