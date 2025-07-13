import { defineConfig } from 'vite';
import path from 'path';
import fg from 'fast-glob';
import { fileURLToPath } from 'url';
import tailwindcss from '@tailwindcss/vite';

// Simulate __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Collect inputs
const contentElementEntries = fg.sync(
  path.resolve(__dirname, '../../../ContentBlocks/ContentElements/**/*.ts')
);

const input: Record<string, string> = {
  'main-tailwind': path.resolve(__dirname, './src/main.ts'),
};

contentElementEntries.forEach(file => {
  const elementName = path.basename(path.dirname(file));
  input[elementName] = file;
});

export default defineConfig({
  build: {
    rollupOptions: {
      input,
      output: {
        entryFileNames: 'ContentElements/[name]/main.js',
        assetFileNames: 'ContentElements/[name]/[name].[ext]',
      },
    },
    outDir: path.resolve(__dirname, '../../Public/Build'),
    emptyOutDir: true,
  },
  plugins: [
    tailwindcss(),
  ]

});
