/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str){
  // debugger
  let arr = str.split( '-' );
  // console.log( arr );
  let result = arr.map(function (item,index){
    if ( index != 0){
      return item[0].toUpperCase() + item.slice(1)
    }
    return item
  })
  //console.log (result)
  return result.join('')
}

console.log (camelize('background-color') == 'backgroundColor');
console.log (camelize('list-style-image') == 'listStyleImage');
console.log (camelize('-webkit-transition') == 'WebkitTransition');