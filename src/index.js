var sharp = require('sharp')
var crop = require('./crop')
var fit = require('fit-aspect-ratio')

var inputImg = process.argv[2]
var ratio = process.argv[3] || null

var img = sharp(inputImg);
img.metadata().then(function(data) {
  var obj = {
    width: data.width,
    height: data.height,
    ratio: ratio
  }
  var res = fit(obj)
  res.original = data
  return res
}).then((obj) => {
  return crop(obj, img)
})
