// let a=10;
// const b=20;
// var c= 30;
//const d= 40;
// console.log(d);

// {
    // let a=20;
    // var c = 100000000000000000000000000000000000n;
    // console.log(c);
    // console.log(typeof(c))

    // let d = 1n;
    // const b=50;
    // console.log("inner" ,a)
    // console.log("inner" ,b)
    // console.log("inner" ,c)
    // console.log("inner" ,d)
// }
// console.log("outer" ,d)

// let is more preferrable among all
// Why using const in java
// const is used to make the variable constant and it is used to make the variable immutable
// API calls are invoked using const

// myfunc()

// function myfunc()
// {
//     console.log("Hello")
// }

// const myfunc2 = function(){
//     console.log("function 2")
// }
// myfunc2()

// const myfunc3=()=>{
//     console.log("function 3")
// }

// (function(){console.log("hii")})()  // IIF (Immediately invoked function)



// const outerfunction=()=>{
//     const a = "outer func called";

//     const innerfunction=()=>{
//         console.log("a",a)
//     }
//     return innerfunction;
// }

// const anotherfunc =outerfunction()
// {
//     anotherfunc()
// }



// console.log(0=="0")

// let a=10;
// if(a=="10")
// {
//     console.log(true)
// }
// else
// console.log(false)


//Fizz Buzz



// let a=100
// for(var i=1;i<=a;i++)
// {
//     if(i%3==0)
//     {
//         console.log("Fizz")
//         continue
//     }
//     if(i%5==0)
//     {
//         console.log("Buzz")
//         continue
//     }
//     console.log(i)
// }


//Amstrong number
// let a =999;
// for(var i=100;i<a;i++){
//     let sum=0;
//     let temp=i;
//     while(temp>0)
//         {
//             let rem=temp%10;
//             sum=sum+(rem*rem*rem);
//             temp=temp/10;
//             }
//             if(sum==i)
//                 console.log(i)   
// }


//Array implementation
let arr=[1,2,3,4,5,6,7,8,9];
for(var i=0;i<arr.length;i++){
    if(arr[i]%3==0)
    {
        console.log(arr[i]  )
        }
    }


