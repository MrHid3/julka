// vite.config.js
export default({
    optimizeDeps: {
        esbuildOptions: {
            target: 'esnext'
        }
    },
    build: {
        target: 'esnext'
    },
    env: {
        browser: true,
        node: true
    },
})