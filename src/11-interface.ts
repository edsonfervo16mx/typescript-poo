// Interface son contratos, para respetar la estructura de los datos

export interface Driver {
  database: string;
  password: string;
  port: number;

  connect(): void;
  disconnect(): void;
  isConnected(name: string): boolean;
}

// const driver: Driver = {
//   database: "",
//   password: "",
//   port: 23,
// };

// Implementando una interfaz en una clase
class PostgresDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number,
    private host: string
  ) {}

  connect(): void {}

  disconnect(): void {}

  isConnected(name: string): boolean {
    return true;
  }
}

class OracleDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number
  ) {}

  connect(): void {}

  disconnect(): void {}

  isConnected(name: string): boolean {
    return true;
  }
}
