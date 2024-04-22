class BikeRentalService {
    constructor(name, location) {
      this.name = name;
      this.location = location;
      this.availableBikes = [];
    }
  
    addBikes(bikes) {
      const addedBrands = [];
      bikes.forEach(bike => {
        const [brand, quantity, price] = bike.split("-");
        const existingBikeIndex = this.availableBikes.findIndex(item => item.brand === brand);
        if (existingBikeIndex !== -1) {
          const existingBike = this.availableBikes[existingBikeIndex];
          existingBike.quantity += parseInt(quantity);
          existingBike.price = Math.max(existingBike.price, parseInt(price));
        } else {
          this.availableBikes.push({ brand, quantity: parseInt(quantity), price: parseInt(price) });
          addedBrands.push(brand);
        }
      });
      return `Successfully added ${addedBrands.join(", ")}`;
    }
  
    rentBikes(selectedBikes) {
      let totalPrice = 0;
      for (const selectedBike of selectedBikes) {
        const [brand, quantity] = selectedBike.split("-");
        const bike = this.availableBikes.find(item => item.brand === brand);
        if (!bike || bike.quantity < parseInt(quantity)) {
          return "Some of the bikes are unavailable or low on quantity in the bike rental service.";
        }
        totalPrice += bike.price * parseInt(quantity);
        bike.quantity -= parseInt(quantity);
      }
      return `Enjoy your ride! You must pay the following amount $${totalPrice.toFixed(2)}.`;
    }
  
    returnBikes(returnedBikes) {
      for (const returnedBike of returnedBikes) {
        const [brand, quantity] = returnedBike.split("-");
        const bike = this.availableBikes.find(item => item.brand === brand);
        if (!bike) {
          return "Some of the returned bikes are not from our selection.";
        }
        if (bike.quantity < parseInt(quantity)) {
          return "You are trying to return more bikes than you rented.";
        }
        bike.quantity -= parseInt(quantity);
      }
      return "Thank you for returning!";
    }
  
    revision() {
      const sortedBikes = this.availableBikes.slice().sort((a, b) => a.price - b.price);
      let result = "Available bikes:\n";
      sortedBikes.forEach(bike => {
        result += `${bike.brand} quantity:${bike.quantity} price:$${bike.price}\n`;
      });
      result += `The name of the bike rental service is ${this.name}, and the location is ${this.location}.`;
      return result;
    }
  }
  
  // Example usage:
  const rentalService = new BikeRentalService("MyBikeRental", "New York");
  console.log(rentalService.addBikes(["Mountain Bike-5-150", "City Bike-10-100", "Electric Bike-3-200"]));
  console.log(rentalService.rentBikes(["Mountain Bike-2", "City Bike-5"]));
  console.log(rentalService.returnBikes(["Mountain Bike-1", "City Bike-3"]));
  console.log(rentalService.revision());