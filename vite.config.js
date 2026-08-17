import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  root: '.',
  base: './',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        services: resolve(__dirname, 'services.html'),
        portfolio: resolve(__dirname, 'portfolio.html'),
        experience: resolve(__dirname, 'experience.html'),
        certifications: resolve(__dirname, 'certifications.html'),
        testimonials: resolve(__dirname, 'testimonials.html'),
        gallery: resolve(__dirname, 'gallery.html'),
        contact: resolve(__dirname, 'contact.html')
      }
    }
  }
})
