export class MyDate {
  year: number;
  month: number;
  day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  printFormat(): string {
    return `${this.day}/ ${this.month}/ ${this.year}`;
  }

  add(amount: number, type: "days" | "months" | "years") {
    if (type === "days") {
      this.day += amount;
    } else if (type === "months") {
      this.month += amount;
    } else {
      this.year += amount;
    }
  }
}

const my_date = new MyDate(1991, 12, 24);
console.log(my_date.printFormat());
my_date.add(3, "days");
console.log(my_date.printFormat());
console.log(my_date.year);
console.log(my_date.month);
console.log(my_date.day);
