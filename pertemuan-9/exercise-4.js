//array exercises
let people = ["Greg", "Mary", "Devon", "James"];
console.log(people);
//1.using for loop
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}
//2.using for Each()
people.forEach((person) => {
    console.log(person);
});
//3.remove greg from array
people.shift("Greg");
console.log(people);
//4.remove james from array
people.pop("James");
console.log(people);
//5.add matt to the front of array
people.unshift("Matt");
console.log(people);
//6.add your name to end of array
people.push("jethro");
console.log(people);
//7.using a for-loop, iterate through this array and after console.log-ing "Mary" exit from the loop
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Mary") {
      console.log("loop berhenti di mery");
      break;
    }
  }
//8.write the command to make a copy of the array using slice The copy should NOT include Mary or Matt  
let copy = people.slice(2);
console.log(copy);

//9.redefine the people variable with the value you started with Using the splice command remove Devon from the array and add Elizabeth and Artie
people.splice(2, 1, "Elizabeth", "Artie");
console.log(people);

//10.create a new variable called withBob and set it equal to the people array concatenated with the string of Bob
let withBob = people.concat("Bob");
console.log(withBob);

//object exercise
let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes:
      "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
  };

//1.write the command to add the language Go to the end of the languages array
programming.languages.push("Go");

//2.by using the bracket notation change the difficulty to the value of 7
programming["difficulty"] = 7;

//3.using the delete keyword write the command to remove the jokes key from the programming object
delete programming.jokes;

//4.by using the dot notation write the command to add a new key called isFun and a value of true to the programming object
programming.isFun = true;

//5.using a map() iterate through the languages array and update each element 
programming.languages.map((language, index) => {
    console.log(`${index} - ${language}`);
});
  

