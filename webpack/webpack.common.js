const path = require('path')

module.exports = {
  resolve: {
    alias: {
      '~': path.resolve(path.dirname(__dirname), 'src/')
    },
    extensions: ['.ts', '.js']
  },
  plugins: []
}
