function Auto(model, year, color, fuelLeft) {
  this.model = model;
  this.year = year;
  this.color = color;
  this.fuelLeft = fuelLeft;
}

Auto.prototype.showInfo = function () {
  console.log(
    `Model: ${this.model}, Year: ${this.year}, Color: ${this.color}, Fuel left: ${this.fuelLeft}`
  );
};

Auto.prototype.drive = function () {
  if (this.fuelLeft > 0) {
    this.fuelLeft -= 10;
  } else {
    console.log(`No fuel left!`);
  }
};

const toyota = new Auto('Toyota', '2022', 'white', 20);
toyota.showInfo();
toyota.drive();
toyota.showInfo();
toyota.drive();
toyota.showInfo();
toyota.drive();
