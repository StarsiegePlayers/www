import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import {terser} from 'rollup-plugin-terser';
import preprocess from 'svelte-preprocess';
import copy from 'rollup-plugin-copy-watch';
import prodbuild from "./prodbuild";

// MD Parsing and extensions
import {mdsvex} from "mdsvex";
import remark_github from "remark-github";
import remark_a11yEmoji from '@fec/remark-a11y-emoji';
import remark_containers from "remark-containers";
import remark_jargon from "remark-jargon"
import remark_jargonfile from "./content/jargonfile"
import rehype_slug from "rehype-slug";
import rehype_meta from "rehype-meta"; //https://github.com/rehypejs/rehype-meta#config
import rehype_meta_default from "./content/defaultMetaConfig";

const PROD = !process.env.ROLLUP_WATCH;
const OUT_DIR = "public";
const SOURCE_STATIC_DIR = "static";
const SOURCE_DIR = "src";

export default {
	input: `${SOURCE_DIR}/main.js`,
	output: {
		sourcemap: !PROD,
		format: 'iife',
		name: 'app',
		file: `${OUT_DIR}/static/app.[hash].js`
	},
	plugins: [
		copy({
			watch: SOURCE_STATIC_DIR,
			targets: [
				{ src: SOURCE_STATIC_DIR, dest: `${OUT_DIR}/` },
				{ src: `${SOURCE_STATIC_DIR}/index.html`, dest: `${OUT_DIR}/` }
			],
			verbose: true
		}),
		svelte({
			extensions: [".svelte", ".md"],

			preprocess: [
				preprocess(),
				mdsvex({
					extensions: [".md"],
					layout:{
						_: "./src/views/MDDefaultLayout.svelte",
					},
					remarkPlugins: [
						remark_github,
						remark_a11yEmoji,
						remark_containers,
						[ remark_jargon, { jargon:  remark_jargonfile}]
					],
					rehypePlugins: [
						rehype_slug,
						[rehype_meta, rehype_meta_default ]
					]
				})
			],

			// enable run-time checks when not in production
			dev: !PROD,
			css: css => {
				css.write('app.[hash].css', !PROD);
			},
		}),

		// If you have external dependencies installed from
		// npm, you'll most likely need these plugins. In
		// some cases you'll need additional configuration -
		// consult the documentation for details:
		// https://github.com/rollup/plugins/tree/master/packages/commonjs
		resolve({
			browser: true,
			dedupe: ['svelte']
		}),
		commonjs(),

		// In dev mode, call `npm run start` once
		// the bundle has been generated
		!PROD && serve(),

		// Watch the `public` directory and refresh the
		// browser on changes when not in production
		!PROD && livereload(OUT_DIR),

		// If we're building for production (npm run build
		// instead of npm run dev), minify
		PROD && terser(),
		PROD && prodbuild(),
	],
	watch: {
		clearScreen: false
	}
};

function serve() {
	let started = false;

	return {
		writeBundle() {
			if (!started) {
				started = true;

				require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
					stdio: ['ignore', 'inherit', 'inherit'],
					shell: true
				});
			}
		}
	};
}
