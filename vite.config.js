import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
    build: {
        lib: {
            entry: {
                RYBitten: resolve(__dirname, "src/entryForUMD.ts"),
            },
            name: "RYBitten",
            formats: ["umd"],
        },
        rollupOptions: {
            // output: {
            //     name: "window",
            //     extend: true,
            // },
        },
    },
    plugins: [dts()],
});
