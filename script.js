// Реалізувати рекурсивну функцію, яка зводить число в ступінь.

// Число, яке треба піднести до ступеню, передається як перший аргумент у функції;
// Ступінь передається як другий аргумент у функцію pow (num, degree).

const num = parseInt(prompt("Введіть число"));
const degree = parseInt(prompt("Введіть ступінь"));

// TODO: Реалізація за допомогою function

// function pow(num, degree){

//   if (degree === 1){
//     return num
//   }
//   if(degree === 0){
//     return 1
//   }else {
//     return num * pow(num, degree - 1)
//   }
// }

// TODO: Реалізація за допомогою ()=>{}

const power = (num, degree) => {
  if (degree === 1) {
    return num;
  }
  if (degree === 0) {
    return 1;
  } else {
    return num * power(num, degree - 1);
  }
};

console.log(power(num, degree));
