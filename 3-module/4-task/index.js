/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(users, age) {
  let arr = [];
    for (let key in users){
      let user = users[key]
      //console.log (user)
      if (user.age <= age){
        arr.push(`${user.name}, ${user.balance}`)
      }
    }
    // console.log(arr)
    let result = arr.join('\n')
    return result
}

// let user1 = {
//   "balance": "$1,825.65",
//   "picture": "https://placehold.it/32x32",
//   "age": 25,
//   "name": "Golden Branch",
//   "gender": "male",
//   "greeting": "Hello, Golden Branch! You have 7 unread messages.",
//   "favouriteFruit": "banana"
// };

// let user2 = {
//   "balance": "$2,228.31",
//   "picture": "https://placehold.it/32x32",
//   "age": 35,
//   "name": "Jimenez Hayes",
//   "gender": "male",
//   "greeting": "Hello, Jimenez Hayes! You have 7 unread messages.",
//   "favouriteFruit": "banana"
// };
// let users = [user1,user2]
// console.log(showSalary(users, 40))