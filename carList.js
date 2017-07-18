var carList = {
  cars: [],
  displayCars: function() {
    if (this.cars.length === 0) {
      console.log('Your Car list is empty!');
    } else {
      console.log('My Cars:\nMake  --  Category  --  Availability  --  Rental Fee\n');
      for (var i = 0; i < this.cars.length; i++) {
        console.log(this.cars[i].carName + '  --  ' + this.cars[i].vehicleCategory + '  --  ' + this.cars[i].available + '  --  $ ' + this.cars[i].rentalFee);
      }
    }
    // tally by category
    var sedans = 0;
    var suvs = 0;
    var sports = 0;
    for (var i = 0; i < this.cars.length; i++) {
      if (this.cars[i].vehicleCategory === "sedan") {
        sedans++;
      }
      if (this.cars[i].vehicleCategory === "suvs") {
        suvs++;
      }
      if (this.cars[i].vehicleCategory === "sports") {
        sports++;
      }
    }
    // display quantity by category
    console.log('Sedans:\t', sedans, '\nSUVs:\t', suvs, '\nSports Cars:\t', sports);
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
      console.log("\n\tArgument Syntax:\naddCar(<Vehicle Name>,<Vehicle Category>,<rentalFee>)");
    }
    this.displayCars();
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
