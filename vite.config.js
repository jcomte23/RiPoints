import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        'coder/pages/index': 'src/pages/coder/index_coder.html',
        // Agrega más páginas según sea necesario
      },
    },
  },
});