// const score = 400
// console.log(score);// op:400  automatically definied it as number

// const balance = new Number(400)
// console.log(balance); //op :[Number:400] here number is specifically casted as Number type
// //console.log(balance.toString());// 400 in string form
// console.log(typeof(balance));//object
// console.log(balance.toString().length);//op:3

// const balance2 = new Number(100)
// console.log(balance2.toFixed(2)); //100.00 --- when we developw e commerce website and if we have to calculate gst precision value will more and if we don't want user to show that much values toFixed can be used

// const otherNumber = 123.8966 //op:124 precised value set to 3(roundoff)
// console.log(otherNumber.toPrecision(3))// will give precise value and it has to be in range of 0-21 and the value it returns is in the form of string

// console.log(otherNumber.toPrecision(4))//op:123.9

// const hundreds = 1000000
// console.log(hundreds.toLocaleString());//op:1,000,000 toLocaleString puts comma in between zeros in us standards by default
// console.log(hundreds.toLocaleString('en-IN'));//10,00,00 in indian standards




////// MATHS ////////
// console.log(Math); //object [math] {}<- sevreal properties can be known by . operator
// console.log(Math.abs(-4)); //op:4 to make neagtive value positive

// console.log(Math.round(4.45));// op :4 round function will round off the value
// console.log(Math.ceil(4.45));//5 takes larger as output 
// console.log(Math.floor(4.45));// 4 takes floor value that is smaller value as output
// console.log(Math.min(2,3,4,5));//2
// console.log(Math.max(2,3,4,5));//5

console.log(Math.random()); //returns some random value within 0-1
//for instance we use math.random during the building of dice game 
console.log((Math.random()*10)+1);  //+1 coz it should not go for 0 as dice have 1-6 numbers
console.log((Math.floor(Math.random()*10)+1));

const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1)+min)); //prints the random value above 10

