const getUsersWithFriend = (array, friendName) =>
  array
    .filter(({ friends }) => friends.includes(friendName))
    .map(({ name }) => name);

console.log(getUsersWithFriend(users, 'Briana Decker'));
// [ 'Sharlene Bush', 'Sheree Anthony' ]

console.log(getUsersWithFriend(users, 'Goldie Gentry'));
// [ 'Elma Head', 'Sheree Anthony' ]
/**
 *filter, includes и map
Получи массив имен всех пользователей у которых есть друг с заданным именем.

Используй деструктурирующее присваивание для параметра функции {friends}и
 ({name}) без пробелов и переносов на новую строку
 */
