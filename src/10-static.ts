console.log(Math.PI);
console.log(Math.max(1, 2, 3, 4, 5, 7, 9, 5, 6, 2));
class MyMath {
  //   PI = 3.14;
  static readonly PI = 3.14;

  static max(...numbers: number[]) {
    console.log(numbers);
    // return numbers.reduce((max, item) => (max >= item ? max : item), 0);
    return numbers.reduce((accumulator, currentValue) =>
      accumulator >= currentValue ? accumulator : currentValue
    );
  }
}

// const my_math = new MyMath();
// console.log(my_math.PI);

console.log(MyMath.PI);
console.log(MyMath.max(11, 12, 13, 12, 10, 15, 17, 19));
// Pasando un arrays como argumentos
const n = [2, 3, 4, 5, 1, 2, 7, 8, 6, 9];
console.log(MyMath.max(...n));
console.log(MyMath.max(-11, -5, -9));
