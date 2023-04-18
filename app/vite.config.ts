import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import webfontDownload from 'vite-plugin-webfont-dl';
import lightningcss from 'vite-plugin-lightningcss';



export default defineConfig({
	plugins: [sveltekit(),webfontDownload(['https://fonts.googleapis.com/css2?family=Abel&family=Archivo+Narrow&display=swap']),lightningcss({minify:true})]
});
