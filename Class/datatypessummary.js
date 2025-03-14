//divided on the basis of how data is stored in memory and how it is accesed


// datatypes : 1)Primitive 2)non primitive

/*
primitive  ---CALL BY VALUE
7 types  
Strings ,number,boolean,null(empty),undefined,symbol


Non primitive --CALL BY REFERENCE
Arrays,Objects,Functions


*/
// Js dynamically typed or statically typed???



const id =Symbol('123')
const id2 = Symbol('123')
console.log(id==id2);

const heros = ["pravee","liki","preethu"];
let myObj = {
    name : "pravee",
    age:24,
}

const myFunction = function(){
    console.log("hello world");
    

}

/*datatypes of 
undefined =                                         "undefined" 
boolean =                                            "boolean
number=                                               "number"
null=                                                "object"
String                                               "string"
object(native and doe't implement [call])             "object"
object (native or host and does implement)             "FUNCTION"
onject(host and does not implement)                     "implenation deivered ecpect may not be "undefined","boolean","number","string"
*/






//MEMORY
/*
stack === used by all primitives
heap === used by non primitive
*/


//primitive datatype
let myname = "sonu"
let anothername = myname //creates a copy of "sonu", so anothername holds a separate value.
console.log(anothername);

anothername= "kushi"
console.log(anothername); 
//Changing anothername to "kushi" does not affect myname, because primitive types are copied by value, not by reference.


//refernece datatype
let userOne ={
    email:"user@gmail.com",
    upi: "user@ybl"
}
let usertwo=userOne //let usertwo = userOne; does not create a new object; instead, it assigns usertwo a reference to the same object in memory.
usertwo.email = "srushti@gmail.com" //object

console.log(userOne.email);
console.log(usertwo.email);//Modifying usertwo.email also modifies userOne.email because both variables point to the same object in memory.




