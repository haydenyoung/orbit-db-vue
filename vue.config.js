const { defineConfig } = require('@vue/cli-service')
const webpack = require("webpack");
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
      plugins:[
  new webpack.DefinePlugin({
      process: {env: {}}
  }),
  new webpack.ProvidePlugin({
    Buffer: ['buffer', 'Buffer'],
}),
],
resolve: {
    fallback: {
        buffer: require.resolve('buffer/'),
        stream: require.resolve("stream-browserify")
    }
}

}
})
