var chalk = require('chalk')
var gap = '       '

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
module.exports = prettyPrint
