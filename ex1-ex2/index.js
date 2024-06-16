EX1;

class Cars {
  constructor(brand, model, color, mileage) {
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.mileage = mileage;
  }

  getCarDetails() {
    return "Cars[brand = ${this.brand}, model = ${this.model}, color = ${this.color}, mileage = ${this.mileage}]";
  }
}

function displayCars() {
  const car1 = new Cars("VOLVO", "XC-60", "Black", "234.000");
  const car2 = new Cars("Mazda", "CX-5", "Geen", "111.000");
  const car3 = new Cars("Dacia", "Duster", "Blue", "20.000");

  console.log(car1.getCarDetails());
  console.log(car2.getCarDetails());
  console.log(car3.getCarDetails());
}

displayCars();

EX2;

class Car {
  constructor(brand, model, color, mileage) {
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.mileage = mileage;
  }

  getCarDetails() {
    return "Car[brand = ${this.brand}, model = ${this.model}, color = ${this.color}, mileage = ${this.mileage}]";
  }
}

class RacingCar extends Car {
  participation(position) {
    if (position > 0) {
      return "I won the place ${position} with the car";
    } else {
      return "I did not win any prize with the car";
    }
  }
}

function displayCarDetails() {
  const car1 = new RacingCar("Toyota", "Turbo", "Red", "100.000");
  const car2 = new RacingCar("Ferrari", "F8", "Yellow", "50.000");

  console.log(car1.participation(1));
  console.log(car1.getCarDetails());
  console.log(); //am adaugat acest console.log pentru a avea un spatiu intre cele doua raspunsuri
  console.log(car2.participation(-2));
  console.log(car2.getCarDetails());
}

displayCarDetails();
