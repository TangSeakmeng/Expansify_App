const person = {
    name: 'Tang Seakmeng',
    age: 19,
    location: {
        city: 'Phnom Penh',
        country: 'Cambodia',
        temperature: 39.0
    }
}

// const name = person.name;
// const age = person.age;
// const city = person.location.city
// const country = person.location.country

// const { name, age } = person
// const { city, country, temperature: temp = "40" } = person.location 

// console.log(`${name} is ${age}.`);
// if(city && country)
//     console.log(`It's ${temp} celsius in ${city}, ${country}.`);

// -------------------------------------------------------------------------------------

// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
// const [street, city, state, zip] = address
// console.log(`You are in ${street}, ${city}, ${state}. It has ${zip} for zip code.`)

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
const [, city = "New York", state] = address
console.log(`You are in ${city}, ${state}.`)

const item = ['Coffee (hot)', '$2.00', '$2.50',, '$2.75']
const [name, , mediumPrice, ] = item
console.log(`A medium ${name} costs ${mediumPrice}.`)
