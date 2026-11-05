import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/danat-quiz-app/',
  optimizeDeps: {
    // This forces Vite to skip pre-bundling dependencies with esbuild
    noDiscovery: true,
    include: ['react', 'react-dom', 'firebase/app', 'firebase/auth', 'firebase/firestore']
  },
  server: {
    port: 5000,
    host: true
  }
});
