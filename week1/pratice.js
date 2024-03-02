// const str ="hello world";
// console.log(str.replace("world","js"));

// function findIndexOf(str,target){

//     console.log("origional string", str)
//     console.log("index",str.indexOf(target))
// }
// findIndexOf("hello world","world")


// console.log(str.slice(2,7))


// const str="hello world";
// console.log(str.replace( "world","javascript"))


// const arr=[4,5,6,7];

// function logThing(str){
//     console.log(str);
// }

// arr.forEach(logThing)


// map filter find sort




/*********CLASS *************/




// class Animal{
//     constructor(name, legCount, speaks){
//         this.name =name;
//         this.legCount =legCount;
//         this.speaks =speaks;
//     }
// }



// //  let dog =new Animal("dog" , 4, "bhow bhow")
// //  console.log(dog)



// /**********date*************/


// function dateMethods(){
//     const currentDate = new Date();
//     console.log("current date:", currentDate);

//     console.log("current date:", currentDate);

//     console.log("current date:", currentDate);

//     console.log("current date:", currentDate);

//     console.log("current date:", currentDate);



   

// // }
// // dateMethods();



// function sum(a,b){
//     const sum = a+b;
//     return sum;
// }
// function mul(a,b){
//     const mul = a * b;
//     return mul;
// }
// function someThing(a,b,fn){
//     const val1=fn(a,b)
//     const val2=fn(a,b)

//     return val1, val2
// }

//  const val =someThing(25,5,mul)
// console.log(val);








// /***********  Async function vs sync Function ***********/



// function sum(n){
//     let sum =0;
//     for(i=0;i<n; i++){
//         sum =sum +i;
//     }
//     return sum;
// }
// function val(){
//     console.log(sum(100));
// }


// setTimeout(val,1000)
// console.log("hello wo")



// const fs =require("fs")

// fs.readFile( "a.txt","utf-8", function (err,data){
//     console.log(data);
// })




/*************** PROMISES *************/


const { promises } = require('fs');
const fs =require('fs');

function raviReadFile(){
    return new Promise(function (resolve){
        console.log("inside promises");
        fs.readFile("a.txt","utf-8",function(err, data){
            console.log("before resolve");
            resolve (data)
        });
    
    })
}

function onDone(data){
    console.log(data);
}

var a= raviReadFile()
a.then(onDone);