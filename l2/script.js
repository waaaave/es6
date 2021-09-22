// if (true) {
//     var fruit = 'apple';
//     let furit1 = 'orange';
//     const fruit2 = 'lemon';
// }
// console.log(fruit);
// console.log(fruit1);
// fruit2 = 'peach';
// console.log(fruit2);

// function breakfast() {
//     return ['cake', 'tea', 'apple'];
// }

// let [dessert, dirnk, fruit] = breakfast();

// console.log(dessert, dirnk, fruit);

// function breakfast1() {
//     return {
//         dessert1: 'cake',
//         drink1: 'tea',
//         fruit1: 'apple'
//     };
// }

// let { dessert1: dessert1,
//     drink1: drink1,
//     fruit1: fruit1 } = breakfast1();

// console.log(dessert1, drink1, fruit1);

// let dessert = 'cake',
//     drink = 'tea';

// let breakfast = kitchen`今天的早餐是
//  ${dessert} 与 ${drink} ！`

// function kitchen(strings, ...values) {
//     // console.log(strings);
//     // console.log(values);
//     let result = '';
//     for (var i = 0; i < values.length; i++) {
//         result += strings[i];
//         result += values[i];
//     }
//     result += strings[strings.length - 1];

//     return result;
// }

// console.log(breakfast);


// let dessert = 'cake',
//     drink = 'tea';

// let breakfast = `今天的早餐是
//  ${dessert} 与 ${drink} ！`

// console.log(
//     breakfast.startsWith('今'),
//     breakfast.endsWith('!'),
//     breakfast.includes('今')
// );

// function breakfast(dessert = 'cake', drink = 'tea') {

//     return `${dessert} ${drink}`
// }

// console.log(breakfast());
// console.log(breakfast('ice-cream', 'bear'));

// let fruits = ['apple', 'orange', 'lemon'],
//     foods = ['cake', ...fruits]

// console.log(fruits);
// console.log(...fruits);
// console.log(foods);


// function breakfast(dessert, drink, ...foods) {
//     console.log(dessert, drink, ...foods);
// }
// breakfast('cake', 'tea', 'apple', 'peach')

// function breakfast(dessert, drink, { location, restaurant } = {}) {
//     console.log(dessert, drink, location, restaurant);
// }
// breakfast('cake', 'bear', { location: '南昌', restaurant: '赣饭' })

// let breakfast = function superBreakfast(argument) {

// }
// console.log(
//     breakfast.name
// );

// let breakfast = (dessert,drink) => {dessert+drink};

// let dessert = 'cake', drink = 'bear';

// let food = {
//     dessert,
//     drink,
//     breakfast() { }
// };

// console.log(food);

// let food = {};
// let drink = 'hot drink'

// food.dessert = 'cake';
// food[drink] = 'tea';
// console.log(food);

let breakfast = {};

Object.assign(
    breakfast,
    { drink: 'bear' }
);
console.log(breakfast);