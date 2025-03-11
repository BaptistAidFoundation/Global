import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// https://vitejs.dev/config/
export default defineConfig({
base: '/Global/',
plugins: [
    react(),
    {
    name: 'generate-spa-fallbacks',
    closeBundle() {
        const __dirname = path.dirname(fileURLToPath(import.meta.url));
        const indexPath = path.resolve(__dirname, 'dist/index.html');
        
        if (fs.existsSync(indexPath)) {
        const indexContent = fs.readFileSync(indexPath, 'utf8');
        
        // Create 404.html for GitHub Pages SPA routing
        fs.writeFileSync(path.resolve(__dirname, 'dist/404.html'), indexContent);
        }
    }
    }
],
optimizeDeps: {
    exclude: ['lucide-react'],
},
build: {
    rollupOptions: {
    output: {
        manualChunks: undefined,
    },
    },
    outDir: 'dist',
},
server: {
    historyApiFallback: true,
},
});
