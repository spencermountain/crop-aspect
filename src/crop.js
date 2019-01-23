var chalk = require('chalk')
var prettyPrint = require('./prettyPrint')
var addSuffix = require('./suffix')
var options = {}
var gap = '       '

//
const crop = function(obj, img) {
  //does it already match an aspect ratio?
  if (obj.width === obj.original.width && obj.height === obj.original.height) {
    console.log(chalk.green('This image already fits this aspect ratio:'))
    console.log(gap + '      from:  ' + chalk.yellow(obj.original.width + ' x ' + obj.original.height))
    console.log(gap + chalk.yellow(' - not resizing -'))
    return null
  }
  prettyPrint(obj)
  var file = img.options.input.file || ''
  var suffix = obj.width + 'x' + obj.height
  var outFile = addSuffix(file, suffix)
  return img.resize(obj.width, obj.height, options).toFile(outFile)
}
module.exports = crop
