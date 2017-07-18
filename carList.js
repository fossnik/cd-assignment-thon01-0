var carList = {
  cars: [],
  displayCars: function() {
    if (this.cars.length === 0) {
      console.log('Your Car list is empty!');
    } else {
      console.log('My Cars:\n#Car Title#\t\t#Category#\t\t#Availability#\t\t#Rental Fee#\n');
      for (var i = 0; i < this.cars.length; i++) {
        if (this.cars[i].available === true) {
          console.log(this.cars[i].carName, '\t\t' this.cars[i].vehicleCategory, '\t\tYes');
        } else {
          console.log(this.cars[i].carName, '\t\t', this.cars[i].vehicleCategory, '\t\tNo');
        }
      }
    }
  },
  addCar: function(carName, vehicleCategory, rentalFee) {
    // validate vehicle category
    vehicleCategory = vehicleCategory.toLowerCase();
    if (vehicleCategory === "sedan" | vehicleCategory === "suv" | vehicleCategory === "sports") {
      this.cars.push({
        carName: carName,
        vehicleCategory: vehicleCategory,
        rentalFee: rentalFee,
        available: false
      });
    } else {
      console.log("Invalid Syntax!\n");
      console.log("\n\tArgument Syntax:\naddCar(<Vehicle Name>,<Vehicle Category>,<rentalFee>");
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
