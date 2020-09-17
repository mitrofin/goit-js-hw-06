class Car {
  // Write code under this line
  static getSpecs(car) {
    // статический метод getSpecs(car) который принимает объект-машину как параметр и возвращает шаблонную строку
    return `maxSpeed: ${car.maxSpeed},  // шаблон
    speed: ${car.speed},  
    isOn: ${car.isOn},  
    distance: ${car.distance}, 
     price: ${car._price}`;
  }
  constructor({ speed = 0, price, maxSpeed, isOn = false, distance = 0 } = {}) {
    this.speed = speed; //текущая скорость
    this._price = price; //цена автомобиля
    this.maxSpeed = maxSpeed; //максимальная скорость
    this.isOn = isOn; //заведен ли автомобиль, начальное значение false
    this.distance = distance; //пробег в километрах,начальное значение `0
  }
  get price() {
    return this._price;
  }
  set price(value) {
    this._price = value;
  }
  turnOn() {
    this.isOn = true;
  }
  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }
  accelerate(value) {
    if (this.speed + value <= this.maxSpeed) {
      this.speed += value;
    } else {
      this.speed = this.maxSpeed;
    }
  }
  decelerate(value) {
    if (this.speed - value >= 0) {
      this.speed -= value;
    } else {
      this.speed = 0;
    }
  }
  drive(hours) {
    if (this.isOn) {
      this.distance += hours * this.speed;
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });
mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
