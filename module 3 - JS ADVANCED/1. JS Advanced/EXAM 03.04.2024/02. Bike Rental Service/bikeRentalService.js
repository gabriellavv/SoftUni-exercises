class BikeRentalService {
    //Constructor
    // Should have these 3 properties:
    // •	name - string
    // •	location - string
    // •	availableBikes - empty array
    constructor(name, location) {
        this.name = name;
        this.location = location;
        this.availableBikes = [];
    }


    addBikes(bikes) { //This method adds bikes to the bike rental service. The method takes 1 argument: bikes (array of strings).
        const addedBikes = {};

        // •	Every element into this array is information about the bike in the format:
        // "{brand} {quantity} {price}"
        // o	They are separated by a dash.
        //    Example: ["Mountain Bike-5-150", "City Bike-10-100", "Electric Bike-3-200"...]
        bikes.forEach(bikeInfo => {
            const [brand, quantity, price] = bikeInfo.split("-");

            //•	If the brand of the current bike is already present in availableBikes array, add the new quantity
            // to the old one and update the old price per bike only if the current one is higher.
            const existingBikeIndex = this.availableBikes.findIndex(bike => bike.brand === brand);

            if (existingBikeIndex !== -1) {
                const existingBike = this.availableBikes[existingBikeIndex];
                existingBike.quantity += Number(quantity);

                if (Number(price) > existingBike.price) {
                    existingBike.price = Number(price);
                }

                //•	Otherwise, add the bike, with properties: {brand, quantity, price} to the availableBikes array.
            } else {
                this.availableBikes.push({
                    brand,
                    quantity: Number(quantity),
                    price: Number(price)
                });
                addedBikes[brand] = true;
            }
        });

        let addedBikeBrands = Object.keys(addedBikes);
        return `Successfully added ${addedBikeBrands.join(", ")}`;
    }


    rentBikes(selectedBikes) {
        //•	With this method, users can rent bikes from the rental service. The method takes 1 argument: selectedBikes (array of strings).

        //•	Every element in this array is information about the rented bikes in the format: 
        // "{brand} {quantity}"
        // o	They are separated by a dash.
        //    Example: ["Mountain Bike-5", "City Bike-10", "Electric Bike-3"...]

        //•	For each element of the array selectedBikes, check:
        // o	Note: It is crucial to return one of the strings ("Some of the bikes are unavailable..." or "Enjoy your ride! You must pay the following amount $${totalPrice.toFixed(2)}.") after the function goes through every element of the selectedBikes array and updates the bike quantities that match the criteria.
        // "Some of the bikes are unavailable or low on quantity in the bike rental service."

        let totalPrice = 0;

        for (let i = 0; i < selectedBikes.length; i++) {
            const [brand, quantity] = selectedBikes[i].split("-");

            const bike = this.availableBikes.find(bike => bike.brand === brand);
            // o	If the brand of the current bike is not present in the availableBikes array, or if the brand is present but
            // the quantity selected by the customer exceeds the available quantity recorded in the availableBikes array,
            // the following message should be returned:
            if (!bike || bike.quantity < Number(quantity)) {
                return "Some of the bikes are unavailable or low on quantity in the bike rental service.";

            } else {
                // o	Otherwise, if the above conditions are not met, you have to calculate the price for the given bike
                //  by multiplying the price per bike for the given brand by the quantity desired by the user. 
                //Then reduce the quantity recorded in the availableBikes array.
                totalPrice += bike.price * Number(quantity);
                bike.quantity -= Number(quantity);
            }
        }

        //Note: The totalPrice must be rounded to the second decimal point and before the price must have a dollar sign ($).
        return `Enjoy your ride! You must pay the following amount $${totalPrice.toFixed(2)}.`;
    }




    returnBikes(returnedBikes) {
        for (let i = 0; i < returnedBikes.length; i++) {
          const [brand, quantity2] = returnedBikes[i].split("-");
          const bike = this.availableBikes.find(bike => bike.brand === brand);
    
          if (!bike) {
            return "Some of the returned bikes are not from our selection.";
          } 
            bike.quantity += Number(quantity2);
        }
    
        return "Thank you for returning!";
      }


    revision() {
        //•	This method returns all available bikes in the store in the following format:
        // o	The first line shows the following message:
        // "Available bikes:"
        let result = "Available bikes:\n";


        // o	On the new line, display information about each bike sorted in ascending order of price and must have a dollar sign ($):
        // `{brand} quantity:{quantity} price:${price}`

        const sortedBikes = this.availableBikes.sort((a, b) => a.price - b.price);

        sortedBikes.forEach(bike => {
            result += `${bike.brand} quantity:${bike.quantity} price:$${bike.price}\n`;
        });

        // o	The last line shows the following message:
        // `The name of the bike rental service is {name}, and the location is {location}.`
        result += `The name of the bike rental service is ${this.name}, and the location is ${this.location}.`;

        return result;
    }
}



const rentalService = new BikeRentalService("MyBikes", "CityCenter");

console.log(rentalService.addBikes(["Mountain Bike-5-150", "City Bike-10-100", "Electric Bike-3-200", "Electric Bike-8-400"]));
console.log(rentalService.rentBikes(["Mountain Bike-5", "City Bike-5"]));
console.log(rentalService.returnBikes(["Mountain Bike-1", "City Bike-3"]));
console.log(rentalService.revision());

//Successfully added Mountain Bike, City Bike, Electric Bike 
//  Enjoy your ride! You must pay the following amount $1250.00.
//  Thank you for returning! 
//  Available bikes:
//  City Bike quantity:8 price:$100
//  Mountain Bike quantity:1 price:$150
//  Electric Bike quantity:11 price:$400
//  The name of the bike rental service is MyBikes, and the location is CityCenter.
