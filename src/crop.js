const chalk = require('chalk')
const gap = '       '

let options = {
  // fit: 'center',
}
const prettyPrint = function(res) {
  console.log('')
  console.log('')
  console.log(gap + chalk.yellow('---------------'))
  console.log(chalk.blue(`${gap}Closest aspect-ratio is: `) + chalk.yellow(res.aspect.names[0]))
  console.log('')
  console.log(chalk.blue(`${gap}   this crops image by `) + chalk.red(Math.abs(res.percent_change) + '%'))
  console.log('')
  console.log(gap + '      from:  ' + chalk.yellow(res.original.width + ' x ' + res.original.height))
  console.log(gap + '        to:  ' + chalk.green(res.width + ' x ' + res.height))

}

//
const crop = function(obj, img) {
  prettyPrint(obj)

  // resize
  // let outFile = img.input.file.replace(/(\..*)/, '-out$1')
  // console.log(outFile)
  return img.resize(obj.width, obj.height, options).toFile('./tmp.jpg')
}
module.exports = crop
