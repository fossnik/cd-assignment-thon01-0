var carList = {
  Cars: [],
  displayCars: function() {
    if (this.Cars.length === 0) {
      console.log('Your Car list is empty!');
    } else {
      console.log('My Cars:');
      for (var i = 0; i < this.Cars.length; i++) {
        if (this.Cars[i].completed === true) {
          console.log(this.Cars[i].carText, 'Category: ', this.Cars[i].vehicleCategory, ' Available: Yes');
        } else {
          console.log(this.Cars[i].carText, 'Category: ', this.Cars[i].vehicleCategory, ' Available: Yes');
        }
      }
    }
  },
  addCar: function(carText, vehicleCategory) {
    // validate vehicle category
    if (vehicleCategory === "sedan" | vehicleCategory === "suv" | vehicleCategory === "sports") {
      this.Cars.push({
        carText: carText,
        vehicleCategory: vehicleCategory,
        available: false
      });
      this.displayCars();
    } else {
      console.log("You entered an invalid vehicle category");
    }
  },
  changeCar: function(position, carText) {
    this.Cars[position].carText = carText;
    this.displayCars();
  },
  deleteCar: function(position) {
    this.Cars.splice(position, 1);
    this.displayCars();
  },
  toggleAvailable: function(position) {
    var Car = this.Cars[position];
    Car.available = !Car.available;
    this.displayCars();
  }
};
