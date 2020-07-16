class Car {
  engine: string;

  constructor(engine: string) {
    this.engine = engine;
  }

  start() {
    console.log(`${this.engine} start`);
  }
  stop() {
    console.log(`${this.engine} stop`);
  }
}
export default Car;
