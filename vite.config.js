import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx', // или ваш входной файл
            refresh: true,
        }),
        react(),
    ],
    server: {
        host: '127.0.0.2', // Явно указываем localhost
        port: 5173,        // Оставляем порт Vite
        strictPort: true,   // Запрещаем автоматический выбор порта
    },
});