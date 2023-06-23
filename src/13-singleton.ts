// Singleton: Es un constructor privado, para solo crear una sola instancia dentro de la logica de la aplicacion

export class MyService {
  static instance: MyService | null = null;

  private constructor(private name: string) {}

  getName() {
    return this.name;
  }

  static create(name: string) {
    // Creo una instancia dentro de mi misma clase, ya que es la unica que va a llamar al constructor, al ser private
    if (MyService.instance === null) {
      console.log("Creando instancia");
      MyService.instance = new MyService(name);
    }
    return MyService.instance;
  }
}

// Creando diversas instancias para los objectos

// const my_service1 = new MyService("service 1");
// console.log(my_service1.getName());

// const my_service2 = new MyService("service 2");
// console.log(my_service2.getName());

// console.log(my_service1 === my_service2);

// uso de una sola instancia
const my_service1 = MyService.create("service 1");
console.log(my_service1.getName());
const my_service2 = MyService.create("service 2");
console.log(my_service2.getName());
const my_service3 = MyService.create("service 3");
console.log(my_service3.getName());

console.log(my_service1 === my_service2);
