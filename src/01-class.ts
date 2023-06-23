const date = new Date();
const date2 = new Date(1991, 11, 16); // 16 de diciembre 1991

console.log(date);
console.log(date2);

export class MyDate {
  year: number;
  month: number;
  day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }
}

const my_date = new MyDate(2023, 11, 16);
console.log(my_date);
