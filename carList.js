var carList = {
  cars: [],
  displayCars: function() {
    if (this.cars.length === 0) {
      console.log('Your Car list is empty!');
    } else {
      console.log('My Cars:\n#Car Title#\t\t#Category#\t\t#Availability#\n');
      for (var i = 0; i < this.cars.length; i++) {
        if (this.cars[i].completed === true) {
          console.log(this.cars[i].carName, '\t\t' this.cars[i].vehicleCategory, '\t\tYes');
        } else {
          console.log(this.cars[i].carName, '\t\t', this.cars[i].vehicleCategory, '\t\tNo');
        }
      }
    }
  },
  addCar: function(carName, vehicleCategory) {
    // validate vehicle category
    vehicleCategory = vehicleCategory.toLowerCase();
    if (vehicleCategory === "sedan" | vehicleCategory === "suv" | vehicleCategory === "sports") {
      this.cars.push({
        carName: carName,
        vehicleCategory: vehicleCategory,
        available: false
      });
    } else {
      console.log("You entered an invalid vehicle category");
      console.log("\nArgument Syntax:\t addCar(<Vehicle Name>,<Vehicle Category>")
    }
  },
  deleteCar: function(position) {
    this.cars.splice(position, 1);
    this.displayCars();
  },
  toggleAvailable: function(position) {
    var Car = this.cars[position];
    Car.available = !Car.available;
    this.displayCars();
  }
};
