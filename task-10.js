const getSortedUniqueSkills = array =>
  array
    .reduce((acc, user) => [...acc, ...user.skills], [])
    .filter((current, index, arr) => arr.indexOf(current) === index)
    .sort();

console.log(getSortedUniqueSkills(users));
/* [ 'adipisicing', 'amet',
/* [ 'adipisicing', 'amet',
 'anim', 'commodo',
 'culpa', 'elit',
 'ex', 'ipsum',
 'irure', 'laborum',
 'lorem', 'mollit',
 'non', 'nostrud',
 'nulla', 'proident',
 'tempor', 'velit',
 'veniam' ]; */

/**
 *reduce, filter, sort
Получи массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

Слияние массивов:

const odd = [1, 3, 5];
const even = [2, 4, 6];

// 1
[...odd, ...even];
//  [1, 3, 5, 2, 4, 6]

// 2
odd.concat(even)
//  [1, 3, 5, 2, 4, 6]
 */
