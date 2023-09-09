const users = {};

for (let i = 1; i <= 10; i++) {

  const name = prompt(`type name of user ${i}:`);
  const age = prompt(`type age of user ${i}:`);

  const user = {
    name: name,
    age: age,
  };

  users[i] = user;

  console.log(`Пользователь ${i}`);
  console.log(`Имя - ${name}`);
  console.log(`Возраст - ${age}`);
}

console.log(users);