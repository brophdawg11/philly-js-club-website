import { vitePlugin as remix } from "@react-router/dev";
import { installGlobals } from "@react-router/node";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

installGlobals();

export default defineConfig({
	plugins: [
		remix({
			ignoredRouteFiles: ["**/.*"],
			prerender: [
				"/",
				"/about",
				"/ad",
				"/code-of-conduct",
				"/events",
				// Found a bug in our pre-rendering!  We don't handle pre-rendering
				// resource routes right now - so we'll need to keep doing that via
				// wget until I can get that fixed in RR
				// "ics-feed.ics",
				"/join-us",
				"/sponsors",
			],
		}),
		tsconfigPaths(),
	],
});
