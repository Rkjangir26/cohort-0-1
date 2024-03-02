// let firstName ="ravi kumar";
// let age =20;
// let isMarried =true;

// if(isMarried == true){
//     console.log(firstName + "is married")
// }
// else{
//     console.log(firstName + "is not married")
// }


// let sum =0;

// for(let i=0; i<=100 ;i++){
//     sum = sum + i;
    
// }
// console.log(sum)




//**** arrays******//


// const personArr= ["rk","dj","hk"];

// console.log(personArr);

// const age =[12, 45, 20, 25];

// for(let i=0; i< age.length;i++){
//     if(age[i] % 2 == 0){
//         console.log(age[i] + "is even")
//     }
//     else{
//         console.log(age[i] +"is odd");
//}
//     }


// let numArr=[10, 2,5,4,7,8,];

// for(let i=0; i<numArr.length;i++){

//     if(numArr[i] %2 ==0){
//         console.log(numArr[i] +"is even")
//     }
//      else{
//         console.log(numArr[i] +"num is odd");
//      }
// }



//**********OBJECTS************** *///


// const allUser=[{
//     firstname:"rkjangir",
//     gender:"male",
// },
// {
//     firstname:"suman",
//     gender:"female",
// },{
//     firstname:"rishi",
//     gender:"male",
// }

// ]

// for(let i=0; i<allUser.length;i++){

//     if(allUser[i]["gender"]=="male"){
//         console.log(allUser[i]["firstname"])
//     }
// }



// let allUser=[
//     {
//         firstName:"ravi",
//         age:20,
//         profile:"webdev"
//     },
//     {
//         firstName:"harsh",
//         age:20,
//         profile:"webdev"
//     },
//     {
//         firstName:"deepak",
//         age:20,
//         profile:"bank"
//     }
            
// ]

// for(let i=0;i<allUser.length;i++){
//     if(allUser[i]["profile"] == "webdev"){
//         console.log(allUser[i]["firstName"])
//     }
// }





//*************FUNCTION*********** *///


// function sum(a,b){
//     const sumVal=a+b;

//     return sumVal ;
    
// }
// const val= sum(1,2)
// const val2=sum(10,56)
// console.log(val);
// console.log(val2);



//*****function can take other function as an input



//function goes an argument
 //                    ^
 //                    |

// function sum(num1,num2,fnToCall){
//     let result= num1 + num2;
//     fnToCall(result);

// }

// function displayResult(data){
//     console.log("result of the sum is :" + data);
// }

// function displayResultPassive(data){
//     console.log("sum's result of the sum is :" + data);
// }

// // you are only allowed to call one functon

//  const sumNum = sum(2,5,displayResult);
// //this is called callbacks





// function calculate(a,b,type){
//     if(type=="sum"){
//         const cal= sum(a,b)
//         return cal;

//     }
//     if(type=="minus"){
//         const cal= sub(a,b)
//         return cal;

//     }
// }
// function sum(a,b){
//     return a+b;
// }

// function sub(a,b){
//     return a-b;
// }

// const cal = calculate(5,7,"minus");
// console.log(cal);







// passing an function ina an argument


// function calculate(a,b,arithmeticFunction){

//     function arithmeticFunction(a,b){
//         return a+b;
//     }
//     const ans = arithmeticFunction(a,b);
//     return ans;
// }
//     function sum(a,b){
//         return a+b;
//     }
//     const cal = calculate(5,7,sum);
//     console.log(cal);

// let num = [20, 45,78];
// let largest=num[0];

// for (let i=0; i<num.length;i++){

//     if(num[i] > largest){
//         largest=num[i];
//     }
//     }
//     console.log(largest)


// function sum(num1,num2,sumFunction){
//      function  sumFunction(num1,num2){
//         result = num1+num2;
//         return result;
//     }
    
    
// }

// function displayResult(data){
//     console.log("result of the sum is :"+data);

// }
// function displayResultPassive(data){
//     console.log("num1 and num2 sum is :"+data);
    
// }


// const val =sum(8,2,"displayResult")
// console.log(val)


// //settime out
// function greet(){
//     console.log("helo world")

// }
// setTimeout(greet, 1*1000)

    


    

