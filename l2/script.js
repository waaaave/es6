//三种数据定义的方法
//1.块作用域-let
//2.恒量-const
//3.var
// if (true) {
//     var fruit = 'apple';
//     let furit1 = 'orange';
//     const fruit2 = 'lemon';
// }
// console.log(fruit);
// console.log(fruit1);
// fruit2 = 'peach';
// console.log(fruit2);

//解构数组
// function breakfast() {
//     return ['cake', 'tea', 'apple'];
// }
// let [dessert, 、 fruit] = breakfast();
// console.log(dessert, fruit);

//解构对象
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

//模板字符串
// let dessert = 'cake',
//     drink = 'tea';
// let breakfast = kitchen`今天的早餐是
//  ${dessert} 与 ${drink} ！`

//判断是否包含值
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

//模板字符串
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


//展开操作符
// let fruits = ['apple', 'orange', 'lemon'],
//     foods = ['cake', ...fruits]

// console.log(fruits);
// console.log(...fruits);
// console.log(foods);

//剩余操作符
// function breakfast(dessert, drink, ...foods) {
//     console.log(dessert, drink, ...foods);
// }
// breakfast('cake', 'tea', 'apple', 'peach')

//解构参数
// function breakfast(dessert, drink, { location, restaurant } = {}) {
//     console.log(dessert, drink, location, restaurant);
// }
// breakfast('cake', 'bear', { location: '南昌', restaurant: '赣饭' })

// let breakfast = function superBreakfast(argument) {

// }
// console.log(
//     breakfast.name
// );

//箭头函数
// let breakfast = (dessert,drink) => {dessert+drink};
// let dessert = 'cake', drink = 'bear';

//对象表达式
// let food = {
//     dessert,
//     drink,
//     breakfast() { }
// };
// console.log(food);

//对象属性名
// let food = {};
// let drink = 'hot drink'

// food.dessert = 'cake';
// food[drink] = 'tea';
// console.log(food);

//吧一个对象的值复制给另外一个
let breakfast = {};

Object.assign(
    breakfast,
    { drink: 'bear' }
);
console.log(breakfast);