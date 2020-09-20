const getUsersWithAge = (array, min, max) =>
  array
    .filter(({ age }) => age > min && age < max)
    .map(({ name, email }) => ({ name, email }));

const users = [
  { name: 'Ross Vazquez', email: 'rossvazquez@xinware.com' },
  { name: 'Elma Head', email: 'elmahead@omatom.com' },
  { name: 'Carey Barr', email: 'careybarr@nurali.com' },
];
console.log(getUsersWithAge(users, 20, 30));

/* [
    { name: 'Moore Hensley', email: 'moorehensley@indexia.com' },
    { name: 'Sharlene Bush', email: 'sharlenebush@tubesys.com' },
    { name: 'Blackburn Dotson', email: 'blackburndotson@furnigeer.com' },
    { name: 'Sheree Anthony', email: 'shereeanthony@kog.com' }
] */
//console.log(getUsersWithAge(users, 30, 40));

/**
 * filter, map и создание анонимных объектов
Получи массив из объектов, которые состоят только из свойств name и email тех пользователей, которые попадают в возрастную категорию от min до max лет (значение свойства age).

Сравнение, пример

const x = 13;

// num больше 10 ?
const larger = num > 10; // true

// num меньше 100 ?
const smaller = 100 > num; // true

// num находитя между 10 и 100 ?
const between = smaller && larger; // true
Создание анонимных объектов:

const arr = Array(3)
  .fill('')
  .map((e,i) => ({['index']: i }));
/* [ { index: 0 }, { index: 1 }, { index: 2 } ] 
 */
