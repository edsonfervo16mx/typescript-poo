function getValue<Type>(value: Type) {
  return value;
}

// Llamadas a la funcion, con diferentes tipos
// 1. En la primera llamada, la propia funcion infiere el tipo que esta recibiendo para tratarlo
// 2. En la segunda llamada, se le pasa el tipo, para que sepa de primera instancia como tratarlo
getValue(12).toFixed();
getValue<number>(12).toFixed();

getValue("12").toLocaleUpperCase();
getValue<string>("12").toLocaleUpperCase();

getValue([10, 11, 12]).forEach;
getValue<number[]>([10, 11, 12]).forEach;
