import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import dotenv from "dotenv";
dotenv.config({ path: "../.env" });
export default defineConfig({
    plugins: [react(), tailwindcss()],
    base: "/",
    resolve: {
        alias: {
            "@components": "/src/components",
            "@pages": "/src/pages",
            "@routes": "/src/routes",
            "@styles": "/src/styles",
            "@types": "/src/types",
            "@utils": "/src/utils",
            "@stores": "/src/stores"
        },
        extensions: [".js", ".ts", ".jsx", ".tsx"]
    },
    server: {
        port: Number(process.env.VITE_FRONTEND_PORT),
        proxy: {
            "/api": {
                target: "http://localhost:".concat(process.env.VITE_BACKEND_PORT),
                changeOrigin: true,
                rewrite: function (path) { return path.replace(/^\/api/, ""); }
            }
        }
    }
});
