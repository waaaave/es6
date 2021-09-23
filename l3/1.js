//设置对象的 prototype - Object.setPrototypeOf()
// let breakfast = {
//     getDrink() {
//         return 'milk';
//     }
// };
// let dinner = {
//     getDrink() {
//         return 'bear';
//     }
// };
// let sunday = Object.create(breakfast);
// console.log(sunday.gerDrink());
// console.log(Object.getPrototypeOf() === breakfast);
// Object.setPrototypeOf(sunday, dinner);
// console.log(sunday.getDrink());
// console.log(Object.getPrototypeOf() === dinner);

//__proto__
// let breakfast = {
//     getDrink() {
//         return 'milk';
//     }
// };
// let dinner = {
//     getDrink() {
//         return 'bear';
//     }
// };
// let sunday = {
//     __proto__: breakfast
// };
// console.log(sunday.getDrink());
// sunday.__proto__ = dinner;
// console.log(sunday.getDrink());

//super
// let breakfast = {
//     getDrink() {
//         return 'milk';
//     }
// };
// let dinner = {
//     getDrink() {
//         return 'bear';
//     }
// };
// let sunday = {
//     __proto__: breakfast,
//     getDrink() {
//         return super.getDrink() + 'tea';
//     }
// };
// console.log(sunday.getDrink());

//迭代器 Iterators
// function chef(foods) {
//     let i = 0;
//     return {
//         next() {
//             let done = (i >= foods.length);
//             let value = !done ? foods[i++] : undefined;

//             return {
//                 value: value,
//                 done: done
//             }
//         }
//     }
// }
// let wave = chef(['tomato', 'egg']);
// console.log(wave.next());
// console.log(wave.next());
// console.log(wave.next());

//生成器 Generators
// let chef = function* chef(foods) {
//     for (let i = 0; i < foods.length; i++) {
//         yield foods[i];
//     }
// }
// let wave = chef(['tomato', 'egg']);
// console.log(wave.next());
// console.log(wave.next());
// console.log(wave.next());


//class类
// class Chef {
//     constructor(food) {
//         this.food = food;
//         this.dish = [];
//     }
//     get menu() {
//         return this.dish;
//     }
//     set menu(dish) {
//         this.dish.push(dish);
//     }
//     cook() {
//         console.log(this.food);
//     }
// }
// let wave = new Chef();
// console.log(wave.menu = 'cabbage');
// console.log(wave.menu = 'rice');
// console.log(wave.menu);

//get与set  静态方法 static
// class Chef {
//     constructor(food) {
//         this.food = food;
//         this.dish = [];
//     }
//     get menu() {
//         return this.dish;
//     }
//     set menu(dish) {
//         this.dish.push(dish);
//     }
//     static cook(food) {
//         console.log(food);
//     }
// }
// Chef.cook('tomato');

//继承
// class Person {
//     constructor(name, birthday) {
//         this.name = name;
//         this.birthday = birthday;
//     }
//     intro() {
//         return `${this.name},${this.birthday}`
//     }
// }
// class Chef extends Person {
//     constructor(name, birthday) {
//         super(name, birthday);
//     }
// }
// let wave = new Chef('wave', '19990409');
// console.log(wave.intro());

//set集合
// let dessert = new Set('一二三');
// dessert.add('四');
// dessert.add('四');
// console.log(dessert.has('一'));
// console.log(dessert);
// dessert.delete('二');
// console.log(dessert.size);
// console.log(dessert);
// dessert.forEach(dessert => {
//     console.log(dessert);
// });
// dessert.clear();
// console.log(dessert);

//map集合
// let food = new Map();
// let fruit = {}, cook = function () { }, dessert = '甜点';
// food.set(fruit, 'lemon');
// food.set(cook, 'wave');
// food.set(dessert, 'ice--cream');
// console.log(food.size);
// console.log(food);
// console.log(food.get(fruit));
// console.log(food.get(cook));
// food.delete(dessert);
// console.log(food);
// food.forEach((value, key) => {
//     console.log(`${key}${value}`);
// })
// food.clear();
// console.log(food);

