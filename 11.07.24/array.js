const a = [1,2,3,4,5]
console.log(typeof(a)) // Return object because array cannot invoked directly
// Ans : Object
console.log("--------------------------")


console.log(Array.isArray(a)) // Return true because it is invoked as an array
// Ans : True 
console.log("--------------------------")


const person = { fname: "navin", lname: "kumar" };
let output = "";
for (const key in person) {
  output += `${key} : ${person[key]}\n`;
}
console.log(output);
//Ans : fname : navin
//      lname : kumar
console.log("--------------------------")


console.log(Object.values(person))
console.log(Object.values(person))
console.log(Object.entries(person))
//Ans : [ 'navin', 'kumar' ]
//      [ 'navin', 'kumar' ]
//      [ [ 'fname', 'navin' ], [ 'lname', 'kumar' ] ]
console.log("--------------------------")


const result = Object.entries(person).map(([key,values])=>`${key} :${values}`)
console.log(result)
//Ans : [ 'fname :navin', 'lname :kumar' ]
console.log("--------------------------")


const result1 = Object.entries(person).map(([i])=>`${i}`)
console.log(result1)
//Ans : [ 'fname', 'lname' ]
console.log("--------------------------")


const result2 = Object.entries(person).map(([i,j,k])=>`${i}${j}${k}`) // Becomes Undefined , not returns ArrayIndex Out of Bound
console.log(result2)
//Ans : [ 'fnamenavinundefined', 'lnamekumarundefined' ]
console.log("--------------------------")


person.fname = "Lohith";
person["lname"] = "cringe"   //Methods to manipulate in an array
console.log(person)
// Ans : { fname: 'Lohith', lname: 'cringe' }
console.log("--------------------------")


//delete person.fname;
console.log(person)
// Ans : { lname: 'cringe' }
console.log("--------------------------")


//person = undefined; // Throws error because it is declared as const
console.log(person)
// Ans : Uncaught TypeError: Assignment to constant variable.
console.log("--------------------------")


const person2 = {...person,age:20}
console.log(person2)
// Ans : { fname: 'Lohith', lname: 'cringe', age:20 }
console.log("--------------------------")


const{fname,...rest}=person2
console.log(rest)
// Ans : { lname: 'cringe', age: 20 }
console.log("--------------------------")


const{lname,...rest2}=person2
console.log(rest2) 
// Ans : { fname: 'Lohith', age: 20 }
console.log("--------------------------")

const person3 = {fname:"Navin" , lname : " Kumar " , age: " 20 " , phno: " 1234567890"}
console.log(person3)
// Ans : { fname: 'Navin', lname: ' Kumar ', age: ' 20', phno: ' 1234567890' }    // Object format
console.log("--------------------------")


const jsonstring = JSON.stringify(person3)
console.log(jsonstring)
// Ans : {"fname":"Navin","lname":" Kumar ","age":" 20","phno      // JSON format


const ojstring = JSON.parse(person3)
console.log(ojstring)
// Ans : { fname: 'Navin', lname: ' Kumar ', age: ' 20
    