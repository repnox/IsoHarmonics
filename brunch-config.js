module.exports = {
  files: {
    javascripts: {
      joinTo: {
        'vendor.js': /^node_modules/,
        'app.js': /^app|^webworker.common/,
        'webworker.js': /^webworker/
      }
    },
    stylesheets: {
      joinTo: {
        'styles.css': /^app|^node_modules/,
      }
    },
    templates: {
      joinTo: 'app.js'
    }
  },
  plugins: {
    babel: {
      presets: ['es2015']
    },
    sass: {
      includePaths: ["node_modules/bootstrap/scss", "node_modules/bootstrap-vue/src", "node_modules/font-awesome/scss"],
    }
  }
}
