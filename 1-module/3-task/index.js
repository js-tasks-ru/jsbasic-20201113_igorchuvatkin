/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
  if ( str.length != 0 ){
    let result = str[0].toUpperCase() + str.slice(1)
    // console.log(result)
    return result
    } else{
        return ""
    }
}
