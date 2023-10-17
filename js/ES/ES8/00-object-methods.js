const countries = {MX: 'Mexico', CO: 'Colombia', AR: 'Argentina'};

console.log(countries); // {MX: "Mexico", CO: "Colombia", AR: "Argentina"}
console.log(Object.values(countries)); // ["Mexico", "Colombia", "Argentina"]
console.log(Object.keys(countries)); // ["MX", "CO", "AR"]
console.log(Object.entries(countries)); // [["MX", "Mexico"], ["CO", "Colombia"], ["AR", "Argentina"]]