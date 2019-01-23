var chalk = require('chalk')
var gap = '       '
var options = {}

var prettyPrint = function(res) {
  console.log('')
  console.log('')
  console.log(gap + chalk.yellow('---------------'))
  if (res.closest.names) {
    console.log(chalk.blue(`${gap}Closest aspect-ratio is: `) + chalk.yellow(res.closest.names[0]))
  }
  console.log('')
  if (res.width !== res.original.width) {
    var diffW = res.original.width - res.width
    console.log(chalk.blue(`${gap}   this crops width by `) + chalk.red(diffW + 'px'))
  }
  if (res.height !== res.original.height) {
    var diffH = res.original.height - res.height
    console.log(chalk.blue(`${gap}   this crops height by `) + chalk.red(diffH + 'px'))
  }
  console.log('')
  console.log(gap + '      from:  ' + chalk.yellow(res.original.width + ' x ' + res.original.height))
  console.log(gap + '        to:  ' + chalk.green(res.width + ' x ' + res.height))
}

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
  var suff = obj.width + 'x' + obj.height
  var outFile = file.replace(/(\..*)/, '-' + suff + '$1')
  return img.resize(obj.width, obj.height, options).toFile(outFile)
}
module.exports = crop
