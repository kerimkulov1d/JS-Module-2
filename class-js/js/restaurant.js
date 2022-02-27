class Restaurant {
  // served = 0;

  constructor(name, cousine, served) {
    this.name = name;
    this.cousine = cousine;
    this.served = served;
  }

  showInfo() {
    return `${this.name} is reastaurant of ${this.cousine} cousine.`;
  }

  isOpen() {
    let currentHour = new Date().getHours();
    let currentDay = new Date().getDay();
    if (currentDay === 6 || currentDay === 0) {
      return `${this.name} is closed!`;
    } else {
      if (currentHour > 9 && currentHour < 22) {
        return `${this.name} is open!`;
      } else {
        return `${this.name} is closed!`;
      }
    }
  }

  serve() {
    return this.served++;
  }

  setServe(numberOfServed) {
    this.served += numberOfServed;
  }

  showTotal() {
    return `Total served: ${this.served}`;
  }
}

const restaurant = new Restaurant('Alatoo', 'European', 0);
console.log(restaurant.showInfo());
console.log(restaurant.isOpen());
console.log(restaurant.serve());
console.log(restaurant.serve());
console.log(restaurant.setServe(10));
console.log(restaurant.showTotal());
