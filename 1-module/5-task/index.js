/**
 * truncate
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */
function truncate(str, maxlength) {
  let result = str.slice(0, maxlength-1)
  if( str.length > maxlength ){
      return result += "…" 
} else {
  return result
}
}
