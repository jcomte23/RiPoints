import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        'admin_index': 'src/pages/admin/index.html',
        'trainer_index': 'src/pages/trainer/index.html',
        'coder_index': 'src/pages/coder/index.html',
        // Agrega más páginas según sea necesario
      },
    },
  },
});




