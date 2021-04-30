// 1st way to create object
const bioData = {
    firstName: "Chirag",
    lastName: "Goel",
    dob: "13/11/1992",
    age: function() {
        return 28;
    },
    fullName: function () {
        return this.firstName + " " + this.lastName;   
    }
};

console.log(bioData);
console.log(bioData.firstName);
console.log(bioData['lastName']);
console.log(bioData.fullName());

bioData.company = "Flipkart";
console.log(bioData);

var randomBioData = Object.create(bioData);
randomBioData.address = "Banaglore";

console.log("Object.create Start ------");

console.log(bioData);
console.log(randomBioData);


console.log("Object.create End------");


// 2nd way to create object
function MyBioData (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function () {
      return this.firstName + "" + this.lastName;
  }
}

var chiragBioData = new MyBioData("Chirag", "Goel");
console.log("Class ------");
console.log(chiragBioData.firstName);
console.log(chiragBioData.fullName());

// 4nd way to create object
const personalDetail = {
	email: "engineerchiragXXX@gmail.com",
	phone: "720460XXXX",
};

var enhancedBioData = Object.assign({}, bioData, personalDetail);
console.log("Object.assign start ----");
console.log(enhancedBioData);
console.log("Object.assign end ---");

//  Using ES6

class Person {
    constructor(firstName, lastName, dob, occupation, company, height){
        this.firstName = firstName;
          this.lastName = lastName;
          this.dob = dob;
          this.occupation = occupation;
          this.company = company;
          this.height = height;
    }
  
    fullname () {
        return this.firstName + " " + this.lastName;
    }
      
  }

var newPerson = new Person("Chirag", "Goel", "13 Nov", "Flipkart", "5.11");
console.log(newPerson);