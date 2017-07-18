var carList = {
  Cars: [],
  displayCars: function() {
    if (this.Cars.length === 0) {
      console.log('Your Car list is empty!');
    } else {
      console.log('My Cars:\n#Car Title#\t\t#Category#\t\t#Availability#\n');
      for (var i = 0; i < this.Cars.length; i++) {
        if (this.Cars[i].completed === true) {
          console.log(this.Cars[i].carText, '\t\t' this.Cars[i].vehicleCategory, '\t\tYes');
        } else {
          console.log(this.Cars[i].carText, '\t\t', this.Cars[i].vehicleCategory, '\t\tNo');
        }
      }
    }
  },
  addCar: function(carText, vehicleCategory) {
    // validate vehicle category
    vehicleCategory = vehicleCategory.toLowerCase();
    if (vehicleCategory === "sedan" | vehicleCategory === "suv" | vehicleCategory === "sports") {
      this.Cars.push({
        carText: carText,
        vehicleCategory: vehicleCategory,
        available: false
      });
    } else {
      console.log("You entered an invalid vehicle category");
      console.log("\nArgument Syntax:\t addCar(<Vehicle Name>,<Vehicle Category>")
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
