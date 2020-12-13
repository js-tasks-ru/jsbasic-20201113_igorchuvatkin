/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let result = {
    min: 0,
    max: 0
  };
  let arr = str.split (/[ ,]+/);
    let filterArr = arr.filter(function(item){
      return item == +item
  });
    filterArr = filterArr.map(function(item){
      return +item
    });
    result.max = (Math.max(...filterArr));
    result.min = (Math.min(...filterArr));
    return result;
    
}
const inputData = '1, -5.8 или 10, хотя 34 + -5.3 и 73';

getMinMax(inputData)