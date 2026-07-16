import { defineConfig } from 'tsup';

const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
    entry: ['src/index.ts'],
    format: ['esm'],
    outDir: 'dist',
    dts: true,
    external: [/^@mizuuix\/(.*)$/, /^@modelcontextprotocol\/(.*)$/],
    minify: isProduction,
    sourcemap: isProduction,
    splitting: false,
    clean: isProduction
});
