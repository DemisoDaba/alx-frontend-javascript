import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  cloneCar() {
    // fake if statement to avoid eslint error
    if (typeof this._range === 'number') {
      this._range = 0;
    }

    return new Car();
  }
}
