/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */
let arr = [5, 3, 8, 1];

function filterRange(arr, a, b) {
  return  arr.filter (function(item){
      if ( a <= item && b >= item ){
        // console.log(item)
        return item
      }
    })
}

let filtered = filterRange(arr, 5, 9); 

console.log( filtered ); // [3,1] (совпадающие значения)
console.log( arr ); // [5,3,8,1] (без изменений)
