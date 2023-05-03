const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: '5wpk2e',

  e2e: {
    baseUrl: 'http://localhost:3000',
    video: false,
    viewportHeight: 1080,
    viewportWidth: 1920,
    multiple: true
  }
})
