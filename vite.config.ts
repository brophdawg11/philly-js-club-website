import { vitePlugin as remix } from "@react-router/dev";
import { installGlobals } from "@react-router/node";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

installGlobals();

export default defineConfig({
	plugins: [
		remix({
			ignoredRouteFiles: ["**/.*"],
		}),
		tsconfigPaths(),
	],
});
