function filterEmployees(data, criteria) {

    let parsedData = JSON.parse(data);
    const [criteriaKey, criteriaValue] = criteria.split("-");

    if (criteria === "all") { 
        parsedData.map((object, index) => console.log(`${index}. ${object.first_name} ${object.last_name} - ${object.email}`));
    } else {
        let filteredData = parsedData
            .filter(el => el[criteriaKey] === criteriaValue)
            .map((object, index) => console.log(`${index}. ${object.first_name} ${object.last_name} - ${object.email}`));
    }
}

filterEmployees(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
    'gender-Female'
);