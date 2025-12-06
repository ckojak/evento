import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  plugins: [
    react(),
    visualizer({ filename: 'dist/stats.html', gzipSize: true })
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (!id) return
          if (id.includes('node_modules')) {
            // React + React DOM
            if (id.match(/node_modules\/(react|react-dom)(\/|$)/)) return 'vendor_react'
            // Router
            if (id.match(/node_modules\/react-router(-dom)?(\/|$)/)) return 'vendor_router'
            // State / data fetching libs
            if (id.match(/node_modules\/(@tanstack\/react-query|react-query|redux|@reduxjs\/toolkit|zustand)(\/|$)/)) return 'vendor_state'
            // Date libraries
            if (id.match(/node_modules\/(date-fns|dayjs|luxon)(\/|$)/)) return 'vendor_date'
            // Charts / visualization
            if (id.match(/node_modules\/(chart.js|recharts|victory|d3)(\/|$)/)) return 'vendor_charts'
            // Calendar / heavy components
            if (id.match(/node_modules\/(fullcalendar|react-datepicker|react-big-calendar)(\/|$)/)) return 'vendor_calendar'
            // Icon libraries
            if (id.match(/node_modules\/(react-icons|@heroicons|lucide-react|@tabler\/icons)(\/|$)/)) return 'vendor_icons'
            // Radix / shadcn / UI toolkits
            if (id.match(/node_modules\/(@radix-ui|@shadcn|shadcn|lucide-react)(\/|$)/)) return 'vendor_ui'
            // lodash / utils
            if (id.match(/node_modules\/(lodash|lodash-es)(\/|$)/)) return 'vendor_lodash'
            // everything else in node_modules
            return 'vendor_other'
          }
        }
      }
    },
    // opcional: aumentar para suprimir aviso temporariamente
    // chunkSizeWarningLimit: 1000
  }
})
