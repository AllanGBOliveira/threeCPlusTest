// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///C:/Users/user01/Documents/projects/FrontEnd/Javascript/VueJS/threeCPlusTest/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/user01/Documents/projects/FrontEnd/Javascript/VueJS/threeCPlusTest/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///C:/Users/user01/Documents/projects/FrontEnd/Javascript/VueJS/threeCPlusTest/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
var __vite_injected_original_import_meta_url = "file:///C:/Users/user01/Documents/projects/FrontEnd/Javascript/VueJS/threeCPlusTest/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/assets/styles/scss/_variables.scss";
          @import "./src/assets/styles/scss/_reset.scss";
          @import "./src/assets/styles/scss/_fonts.scss";
        `
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx1c2VyMDFcXFxcRG9jdW1lbnRzXFxcXHByb2plY3RzXFxcXEZyb250RW5kXFxcXEphdmFzY3JpcHRcXFxcVnVlSlNcXFxcdGhyZWVDUGx1c1Rlc3RcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXHVzZXIwMVxcXFxEb2N1bWVudHNcXFxccHJvamVjdHNcXFxcRnJvbnRFbmRcXFxcSmF2YXNjcmlwdFxcXFxWdWVKU1xcXFx0aHJlZUNQbHVzVGVzdFxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvdXNlcjAxL0RvY3VtZW50cy9wcm9qZWN0cy9Gcm9udEVuZC9KYXZhc2NyaXB0L1Z1ZUpTL3RocmVlQ1BsdXNUZXN0L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXG5cbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCB2dWVKc3ggZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlLWpzeCdcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFt2dWUoKSwgdnVlSnN4KCldLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYycsIGltcG9ydC5tZXRhLnVybCkpXG4gICAgfVxuICB9LFxuICBjc3M6IHtcbiAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7XG4gICAgICBzY3NzOiB7XG4gICAgICAgIGFkZGl0aW9uYWxEYXRhOiBgXG4gICAgICAgICAgQGltcG9ydCBcIi4vc3JjL2Fzc2V0cy9zdHlsZXMvc2Nzcy9fdmFyaWFibGVzLnNjc3NcIjtcbiAgICAgICAgICBAaW1wb3J0IFwiLi9zcmMvYXNzZXRzL3N0eWxlcy9zY3NzL19yZXNldC5zY3NzXCI7XG4gICAgICAgICAgQGltcG9ydCBcIi4vc3JjL2Fzc2V0cy9zdHlsZXMvc2Nzcy9fZm9udHMuc2Nzc1wiO1xuICAgICAgICBgXG4gICAgICB9XG4gICAgfVxuICB9XG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFxYSxTQUFTLGVBQWUsV0FBVztBQUV4YyxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFDaEIsT0FBTyxZQUFZO0FBSjRQLElBQU0sMkNBQTJDO0FBT2hVLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO0FBQUEsRUFDekIsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxjQUFjLElBQUksSUFBSSxTQUFTLHdDQUFlLENBQUM7QUFBQSxJQUN0RDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLEtBQUs7QUFBQSxJQUNILHFCQUFxQjtBQUFBLE1BQ25CLE1BQU07QUFBQSxRQUNKLGdCQUFnQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFLbEI7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
