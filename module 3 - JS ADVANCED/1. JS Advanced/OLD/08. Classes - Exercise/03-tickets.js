function tickets(data, sortingCriterion) {

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    let database = [];

    data.forEach(element => {
        let [destination, price, status] = element.split("|");
        let newTicket = new Ticket(destination, price, status);
        database.push(newTicket);
    });


    sortingCriterion === "destination" ? database = database.sort((a, b) => a.destination.localeCompare(b.destination)) : "sorting error";
    sortingCriterion === "price" ? database = database.sort((a, b) => a.price - b.price) : "sorting error";
    sortingCriterion === "status" ? database = database.sort((a, b) => a.status.localeCompare(b.status)) : "sorting error";

    return database;
}

console.log(tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'
));