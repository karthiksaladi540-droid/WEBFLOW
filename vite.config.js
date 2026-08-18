import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        websiteDesignServices: resolve(__dirname, 'website-design-services.html'),
        whatsappAutomationServices: resolve(__dirname, 'whatsapp-automation-services.html'),
        portfolio: resolve(__dirname, 'portfolio.html'),
        testimonials: resolve(__dirname, 'testimonials.html'),
        contact: resolve(__dirname, 'contact.html')
      }
    }
  }
});
