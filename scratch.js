var cropAspect = require('./src/index')

cropAspect('/Users/spencer/Desktop/toronto-1908-250.jpg', 'square').then(() => {
  console.log('done!')
})
