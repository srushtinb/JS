const name = "srushti"
const repoCount = 50 

// console.log(name + repoCount + "Value");  //not readable one 

//instead use backtick where string interpolation occurs == placeholder and variables are directly injected to it
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);//this syntax is readable ,realiable and also methods like name.Toupper etc can be added 


const gameName = new String('sru-shti-nb')
console.log(gameName[0]);//op s
console.log(gameName.__proto__); //op"{} object
console.log(gameName.length);//7
console.log(gameName.toUpperCase());//SRUSHTI
console.log(gameName.charAt(2));//u
console.log(gameName.indexOf('t'));//5


const newString = gameName.substring(2,6)
console.log(newString);//usht ----- i won't print

const another = gameName.slice(-6,4)
console.log(another);//rus ---- we can give negative value also and it start from reverse order 

//to avoid unwanted spaces /whitespaces we use trim
const hero = "      praveen    "
console.log(hero);
console.log(hero.trim()); //can trim both ends

//const url = "https://srushti.com/srushti  20kushi"  //if there's space in between browser automatically converts it into %20 that's url code 
const url = "https://srushti.com/srushti%20kushi"
console.log(url.replace('%20','-'));

//to know whether anything present or not we use includes 
console.log(url.includes('srushti'))
console.log(gameName.split('-')); //op : ['sru' 'shti' 'nb'] coverts to array 
console.log(gameName.small());
 









