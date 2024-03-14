const employee1 = {
    name: "Ivan",
    lastName: "Ivanov",
    age: 45,
    companies: ["Google", "Amazon", "RBC"]
}

// console.log(employee1.name);
// console.log(employee1.lastName);
// console.log(employee1.age);
// console.log(employee1.companiesList1[0, 1, 2]);

const employee2 = {
    name: "Petya",
    lastName: "Petrov",
    age: 31,
    companies: ["Shopify Inc", "Amazon", "Enbridge Inc", "CIBC"]
}

// console.log(employee2.name);
// console.log(employee2.lastName);
// console.log(employee2.age);
// console.log(employee2.companies_list2[3]);

compareEmployees(employee1, employee2);

function compareEmployees (employee1, employee2) {
    if(employee1.companies.length > employee2.companies.length) {
        console.log(employee1.name + " has more companies");
        for (let i = 0; i < employee1.companies.length; i++) {
            console.log(employee1.companies[i]);
        }
    } else if(employee1.companies.length < employee2.companies.length) {
        console.log(employee2.name + " has more companies");
        for (let i = 0; i < employee2.companies.length; i++) {
            console.log(employee2.companies[i]);
        }
    } else {
        console.log(employee1.name + " and " + employee2.name + " both have " + employee1.companies.length + " companies");
        console.log(employee1.name);
        for (let i = 0; i < employee1.companies.length; i++) {
            console.log(employee1.companies[i]);
        }
        console.log(employee2.name);
        for (let i = 0; i < employee2.companies.length; i++) {
            console.log(employee2.companies[i]);
        }
    }
}