function companyUsers(input) {

    let companies = {};

    for (let element of input) {
        let [company, employee] = element.split(" -> ");

        if (!companies.hasOwnProperty(company)) {
            companies[company] = [];
        }

        if (!companies[company].includes(employee)) {
            companies[company].push(employee);
        }
    }

    let sorted = Object.entries(companies).sort((a, b) => a[0].localeCompare(b[0]));


    for (let [key, value] of sorted) {
        console.log(`${key}`);
        
        value.forEach(employee => console.log(`-- ${employee}`));
    }
}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]);