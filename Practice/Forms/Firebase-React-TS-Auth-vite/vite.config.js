import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), reactRefresh()],
  build: {
    outDir: '/dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: '/src/main.jsx',
        login: '/src/components/Login.jsx',
        signup: '/src/components/Signup.jsx',
        dashboard: '/src/components/Dashboard.jsx',
        forgotPassword: '/src/components/ForgotPassword.jsx',
        updateProfile: '/src/components/UpdateProfile.jsx',
      },
    },
  }
})
