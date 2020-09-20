const getUserWithEmail = (array, mail) =>
  array.find(({ email }) => email === mail);

const users = {
  id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
  name: 'Ross Vazquez',
  email: 'rossvazquez@xinware.com',
  eyeColor: 'green',
  friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
  isActive: false,
  balance: 3793,
  skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
  gender: 'male',
  age: 24,
};

console.log(getUserWithEmail(users, 'rossvazquez@xinware.com'));

/*
*find
Получи объект пользователя (не массив) 
по уникальному значению свойства email.

Используй деструктурирующее присваивание 
для параметра функции ({email}) без пробелов и переносов на новую строку.
 */
