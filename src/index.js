const sharp = require('sharp')
const crop = require('./crop')
const fit = require('fit-aspect-ratio')

let inputImg = process.argv[2]
let ratio = process.argv[3] || null

const img = sharp(inputImg);
img.metadata().then(function(data) {
  let obj = {
    width: data.width,
    height: data.height,
    ratio: ratio
  }
  let res = fit(obj)
  res.original = data
  return res
}).then((obj) => {
  return crop(obj, img)
})
