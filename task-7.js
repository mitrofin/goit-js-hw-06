const calculateTotalBalance = array =>
  array.reduce((acc, { balance }) => acc + balance, 0);

console.log(calculateTotalBalance(users));
// 20916
/**
 *reduce
Получи общую сумму баланса 
(сумму значений свойства balance) всех пользователей.

Используй деструктурирующее присваивание для параметра функции
 {balance} без пробелов и переносов на новую строку
 */
