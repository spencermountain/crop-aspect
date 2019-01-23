//append text to the filename
function addSuffix(filename, string) {
  if (!string) {
    return filename
  }
  string = '-' + string
  var dotIndex = filename.lastIndexOf(".");
  if (dotIndex === -1) return filename + string;
  else return filename.substring(0, dotIndex) + string + filename.substring(dotIndex);
}
module.exports = addSuffix
