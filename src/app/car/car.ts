export class Car {

  // without DI
  public engine: Engine;
  public tires: Tires;
  public description = 'No DI';

  constructor() {

  // Car lacks the flexibility to share services that have been created previously for other consumers.
  // This Car needs an engine and tires. Instead of asking for them, the Car constructor instantiates its own copies from the very specific classes Engine and Tires.
    this.engine = new Engine();
    this.tires = new Tires();
  }

  public description = 'DI';

  // correct way!
  // The definition of the dependencies are now in the constructor. The Car class no longer creates an engine or tires. It just consumes them.
  constructor(public engine: Engine, public tires: Tires) { }


  // Simple car with 4 cylinders and Flintstone tires.
 let car = new Car(new Engine(), new Tires());

  // Method using the engine and tires
  drive() {
    return `${this.description} car with ` +
      `${this.engine.cylinders} cylinders and ${this.tires.make} tires.`;
  }
}
