// const a=10;
// console.log(a);
// a=20;
// console.log(a);
//  let a=10;
//  console.log(a);
//  a=20;
//  console.log(a);
// console.log(a);
// const a=20;
// for(let i=0;i<5;i++){
//     if(i%2!=0)
//     {
//     console.log(i);
//     }
// }
// let i=5;
// while(i!=1){
//     console.log(i);
//     i--;    
// }
// console.log(5=='5');//true
// console.log(5==='5');//false strict equality before value match datatype
// let emp=null;//object null
//let isok=true;//boolean
// let arr=[1,4,6,8,10];
// let obj={name:"John",age:30,};
// const func=(arr)=>{
//     let n=arr.length;
//     for(let i=0;i<n;i++){
//         console.log(arr[i]);
//     }
// }
// func(arr);
// console.log(typeof(arr));
// console.log(obj.name);
// console.log(obj.age);

// function greet()
// {   var x=10;
//     console.log("Hello World");
//     return "Greeted";
// }
// console.log(greet());
// console.log(x);//error x is not defined
//scope checking
let y=20;
console.log(y);
{
        let y=30;
        console.log(y);
    }
console.log(y);