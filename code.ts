// Question 19: Dinner Guests: Use one of your programs from Exercises 14 through 18 to print a message indicating the number of people you are inviting to dinner.


let guests = ["Sana Ullah", "Siraj", "Nabi Dost", "Noman", "Parvaiz", "Qasim"];
console.log(guests.length)



// Question 20: Think of something you could store in an array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.


let citiesNames = ["Karachi", "Islamabad", "Hyderabad", "Sukkur", "Mirpur Khas"];
for (let name of citiesNames) {
    console.log(`cities: ${citiesNames}`);
}
let countriesName = ["Germany", "Pakistan", "London", "Egypt"];
for (let name of countriesName) {
    console.log(`countries: ${name}`);
}
let rivers = ["Channab", "Indus", "Jehlum"];
for (let name of rivers) {
    console.log(`rivers: ${name} `);
}
let mountains = ["Mount Everist", "Koraram Two"];
for (let name of mountains) {
    console.log(`Mountains: ${name}`);
}
let languages = ["Sindhi", "Urdu", "English", "Punjabi", "Pushto"];
for (let name of languages) {
    console.log(`Language: ${name}`);
}


// Question 21: Think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

let student = {
    name: "Nazar Baloh",
    age: 19,
    grade: "A1",
    isPass: true,
}
console.log(student)