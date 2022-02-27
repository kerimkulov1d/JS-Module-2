class Cars {
  constructor(model, year, power, color) {
    this.model = model;
    this.year = year;
    this.power = power;
    this.color = color;
  }

  showInfo() {
    return `Model: ${this.model}, year: ${this.year}, power: ${this.power}, color: ${this.color},`;
  }
}

class ElectroCars extends Cars {
  constructor(model, year, power, color, battery) {
    super(model, year, power, color);
    this.battery = battery;
  }

  showInfo() {
    return super.showInfo() + ` battery: ${this.battery}.`;
  }

  promote() {
    return `Buy ${this.model} and save the planet!`;
  }
}

const mercedes = new Cars('Mercedes Benz', 2022, 500, 'black');
console.log(mercedes.showInfo());

const tesla = new ElectroCars('Tesla X', 2022, 150, 'white', 2000);
console.log(tesla.showInfo());
console.log(tesla.promote());
