const name = "prajwal"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is $ {repoCount}`);

const gameName = new String('praajwalpc')

console.log(gameName[0]);
console.log(gameName._proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = " prajwal "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://prajwal.com/prajwal%20hirkane"

console.log(url.replace('%20', '-'))

console.log(url.includes('prajwal'))

console.log(gameName.split('-'));