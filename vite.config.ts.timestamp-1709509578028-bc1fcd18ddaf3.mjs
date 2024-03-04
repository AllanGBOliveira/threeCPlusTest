// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///C:/Users/user01/Documents/projects/FrontEnd/Javascript/VueJS/threeCPlusTest/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/user01/Documents/projects/FrontEnd/Javascript/VueJS/threeCPlusTest/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///C:/Users/user01/Documents/projects/FrontEnd/Javascript/VueJS/threeCPlusTest/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
var __vite_injected_original_import_meta_url = "file:///C:/Users/user01/Documents/projects/FrontEnd/Javascript/VueJS/threeCPlusTest/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // treat all tags with a dash as custom elements
          isCustomElement: (tag) => ["swiper-slide", "swiper-container"].includes(tag)
        }
      }
    }),
    vueJsx()
  ],
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx1c2VyMDFcXFxcRG9jdW1lbnRzXFxcXHByb2plY3RzXFxcXEZyb250RW5kXFxcXEphdmFzY3JpcHRcXFxcVnVlSlNcXFxcdGhyZWVDUGx1c1Rlc3RcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXHVzZXIwMVxcXFxEb2N1bWVudHNcXFxccHJvamVjdHNcXFxcRnJvbnRFbmRcXFxcSmF2YXNjcmlwdFxcXFxWdWVKU1xcXFx0aHJlZUNQbHVzVGVzdFxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvdXNlcjAxL0RvY3VtZW50cy9wcm9qZWN0cy9Gcm9udEVuZC9KYXZhc2NyaXB0L1Z1ZUpTL3RocmVlQ1BsdXNUZXN0L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXHJcblxyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xyXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcclxuaW1wb3J0IHZ1ZUpzeCBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUtanN4J1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBwbHVnaW5zOiBbXHJcbiAgICB2dWUoe1xyXG4gICAgICB0ZW1wbGF0ZToge1xyXG4gICAgICAgIGNvbXBpbGVyT3B0aW9uczoge1xyXG4gICAgICAgICAgLy8gdHJlYXQgYWxsIHRhZ3Mgd2l0aCBhIGRhc2ggYXMgY3VzdG9tIGVsZW1lbnRzXHJcbiAgICAgICAgICBpc0N1c3RvbUVsZW1lbnQ6ICh0YWcpID0+IFsnc3dpcGVyLXNsaWRlJywgJ3N3aXBlci1jb250YWluZXInXS5pbmNsdWRlcyh0YWcpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KSxcclxuICAgIHZ1ZUpzeCgpXHJcbiAgXSxcclxuICByZXNvbHZlOiB7XHJcbiAgICBhbGlhczoge1xyXG4gICAgICAnQCc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMnLCBpbXBvcnQubWV0YS51cmwpKVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgY3NzOiB7XHJcbiAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7XHJcbiAgICAgIHNjc3M6IHtcclxuICAgICAgICBhZGRpdGlvbmFsRGF0YTogYFxyXG4gICAgICAgICAgQGltcG9ydCBcIi4vc3JjL2Fzc2V0cy9zdHlsZXMvc2Nzcy9fdmFyaWFibGVzLnNjc3NcIjtcclxuICAgICAgICAgIEBpbXBvcnQgXCIuL3NyYy9hc3NldHMvc3R5bGVzL3Njc3MvX3Jlc2V0LnNjc3NcIjtcclxuICAgICAgICAgIEBpbXBvcnQgXCIuL3NyYy9hc3NldHMvc3R5bGVzL3Njc3MvX2ZvbnRzLnNjc3NcIjtcclxuICAgICAgICBgXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0pXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBcWEsU0FBUyxlQUFlLFdBQVc7QUFFeGMsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sWUFBWTtBQUo0UCxJQUFNLDJDQUEyQztBQU9oVSxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsTUFDRixVQUFVO0FBQUEsUUFDUixpQkFBaUI7QUFBQTtBQUFBLFVBRWYsaUJBQWlCLENBQUMsUUFBUSxDQUFDLGdCQUFnQixrQkFBa0IsRUFBRSxTQUFTLEdBQUc7QUFBQSxRQUM3RTtBQUFBLE1BQ0Y7QUFBQSxJQUNGLENBQUM7QUFBQSxJQUNELE9BQU87QUFBQSxFQUNUO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLGNBQWMsSUFBSSxJQUFJLFNBQVMsd0NBQWUsQ0FBQztBQUFBLElBQ3REO0FBQUEsRUFDRjtBQUFBLEVBQ0EsS0FBSztBQUFBLElBQ0gscUJBQXFCO0FBQUEsTUFDbkIsTUFBTTtBQUFBLFFBQ0osZ0JBQWdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtsQjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
