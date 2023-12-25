import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:5500",
        changeOrigin: process.env.NODE_ENV !== 'production', // changeOrigin: true,
        secure: process.env.NODE_ENV === 'production', // secure: true
        ws: true,
        configure: (proxy, _options) =>
        {
          proxy.on('error', (err, _req, _res) =>
          {
            console.log('proxy error', err);
          });
          // proxy.on('proxyReq', (proxyReq, req, _res) =>
          // {
          //   console.log('Sending Request to the Target:', req.method, req.url);
          // });
          // proxy.on('proxyRes', (proxyRes, req, _res) =>
          // {
          //   console.log('Received Response from the Target:', proxyRes.statusCode, req.url);
          // });
        }
      },
    }
  }
})
