/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
    let age
    let gender
    let aval
    for ( let i = 1; i < table.rows.length; i++){
        for (let j = 1; j < table.rows[i].cells.length; j++){
            if (j == 1){
                age = table.rows[i].cells[j].innerHTML
                if ( age < 18 ){
                   table.rows[i].style.textDecoration = 'line-through'
                }
            }
            if (j == 2){
                gender = table.rows[i].cells[j].innerHTML
                if (gender == 'm'){
                    table.rows[i].classList.add('male') 
                }
                else table.rows[i].classList.add('female') 
            }
            if (j == 3){
                aval = table.rows[i].cells[j].dataset.available
                if (aval =='true'){
                    table.rows[i].classList.add('available')
                } else if (aval === 'false'){
                    table.rows[i].classList.add('unavailable')
                }
                else table.rows[i].hidden = true
            }
        }
    }
}
