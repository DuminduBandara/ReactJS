const first = {name: 'John'};
const second = {city: 'San Francisco'};

const combined = {...first,...second, country: 'United States'};
console.log(combined);