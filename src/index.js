var sharp = require('sharp')
var crop = require('./crop')
var fit = require('fit-aspect-ratio')


//
const cropAspect = function(inputImg, ratio) {
  var img = sharp(inputImg);
  return img.metadata().then(function(data) {
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
}
module.exports = cropAspect
