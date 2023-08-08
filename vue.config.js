const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      /// in that case, we can target the `scss` syntax separately using the `scss` option
      scss: {
        additionalData: `@import "@/assets/sass/_global.scss";`
      },
    }
  }
      
})
