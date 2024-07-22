import { vitePlugin as reactRouter } from "@react-router/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
	plugins: [
		reactRouter({
			ignoredRouteFiles: ["**/.*"],
			prerender: [
				"/",
				"/about",
				"/banner",
				"/code-of-conduct",
				"/events",
				// Found a bug in our pre-rendering!  We don't handle pre-rendering
				// resource routes right now - so we'll need to keep doing that via
				// wget until I can get that fixed in RR
				"ics-feed.ics",
				"/join-us",
				"/sponsors",
			],
		}),
		tsconfigPaths(),
	],
});
