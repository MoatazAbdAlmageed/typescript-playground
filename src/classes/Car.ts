class Car {
  constructor(public engine: string) {}

  start() {
    console.log(`${this.engine} start`);
  }
  stop() {
    console.log(`${this.engine} stop`);
  }
}
export default Car;
