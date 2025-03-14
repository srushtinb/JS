//avoid these kind of checks as it will leads to confusion
console.log("2" > 1);//true
console.log("02">1);//true

console.log(null > 0);//false
console.log(null<0);//false
console.log(null>=0);//true js automatically convert null to 0;
console.log(null == 0);//false 


//strict check === checks even datatype ||| == does'nt check datatype;
console.log("2" === 0);//false





