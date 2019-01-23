const chalk = require('chalk')
const gap = '       '

let options = {
  // fit: 'center',
}
const prettyPrint = function(res) {
  console.log('')
  console.log('')
  console.log(gap + chalk.yellow('---------------'))
  if (res.closest.names) {
    console.log(chalk.blue(`${gap}Closest aspect-ratio is: `) + chalk.yellow(res.closest.names[0]))
  }
  console.log('')
  if (res.width < res.original.width) {
    let diff = res.original.width - res.width
    console.log(chalk.blue(`${gap}   this crops width by `) + chalk.red(diff + 'px'))
  }
  if (res.height < res.original.height) {
    let diff = res.original.height - res.height
    console.log(chalk.blue(`${gap}   this crops height by `) + chalk.red(diff + 'px'))
  }
  console.log('')
  console.log(gap + '      from:  ' + chalk.yellow(res.original.width + ' x ' + res.original.height))
  console.log(gap + '        to:  ' + chalk.green(res.width + ' x ' + res.height))

}

//
const crop = function(obj, img) {
  prettyPrint(obj)
  let file = img.options.input.file || ''
  let suff = obj.width + 'x' + obj.height
  let outFile = file.replace(/(\..*)/, '-' + suff + '$1')
  return img.resize(obj.width, obj.height, options).toFile(outFile)
}
module.exports = crop
