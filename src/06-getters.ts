export class MyDate {
  constructor(
    public year: number = 1990,
    public month: number = 1,
    private _day: number = 1
  ) {}

  public printFormat(): string {
    return `${this.addPadding(this._day)}/ ${this.addPadding(this.month)}/ ${
      this.year
    }`;
  }

  private addPadding(value: number) {
    if (value < 10) {
      return `0${value}`;
    }
    return `${value}`;
  }

  public add(amount: number, type: "days" | "months" | "years") {
    if (type === "days") {
      this._day += amount;
    } else if (type === "months") {
      this.month += amount;
    } else {
      this.year += amount;
    }
  }

  //   public getDay(): string {
  //     return `${this.day}`;
  //   }

  get day() {
    return this._day;
  }

  get isLeapYear(): boolean {
    if (this.year % 400 === 0) return true;
    if (this.year % 100 === 0) return false;
    return this.year % 4 === 0;
  }
}

// const my_date = new MyDate(1991, 4, 24);
// console.log(my_date.printFormat());
// console.log(my_date.getDay());

const my_date = new MyDate();
console.log(my_date.printFormat());
console.log(my_date.day);
console.log(my_date.isLeapYear);
