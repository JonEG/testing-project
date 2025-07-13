import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { globSync } from 'glob'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

// Automatically find all main.ts files in ContentBlocks and the main entry point
const entries = globSync([
  './src/main.ts',
  '../../../ContentBlocks/*/*/main.ts'
]).map(file => {
  // Create a unique key for each entry point
  const key = file.startsWith('../../../')
    // For ContentBlocks: 'contentelements-banner' from '../../ContentBlocks/ContentElements/banner/main.ts'
    ? path.relative('../../../ContentBlocks', file)
        .slice(0, -path.extname(file).length) // remove extension .ts
        .replace(/\/main$/, '') // remove /main suffix
        .replace(/\//g, '-') // replace slashes with dashes
        .toLowerCase()
    // For main entry: 'main' from './src/main.ts'
    : path.basename(file, path.extname(file));

  return [key, fileURLToPath(new URL(file, import.meta.url))];
});

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    outDir: '../../../Resources/Public/Vite',
    manifest: true,
    rollupOptions: {
      input: Object.fromEntries(entries)
    }
  }
})
