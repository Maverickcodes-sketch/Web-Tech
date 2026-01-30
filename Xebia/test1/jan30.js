// let arr=[1,2,3,4,5,6,7,8]
// let evencheck=(arr)=>{
//     var m;
//     for(m=0;m<arr.length;m++)
//     {
//         if(arr[m]%2==0)
//         {
//             console.log(arr[m])
//         }
//     }

// }
// evencheck(arr)
// const person={key:"Hello"};
// console.log(person.key)
// person.key="Bye"
// console.log(person.key);
// const arr=["HTML","CSS","Javascript"];
// arr.push("Python");
// console.log(arr);
// arr.forEach(e=>console.log(e));
// const newarr=arr.map(e=>e+" Language");
// console.log(newarr);
// arr.filter(e=>e.includes("S")).forEach(e=>console.log(e));
// function check(name)
// {
//     return name==="Honda"?name:"Sorry";
// }
// console.log(check("Honda"));
// console.log(check("Toyota"));
// let a1=[1,2,3,4,5,6,7,8,9];
// a1.forEach((item,index)=>a1[index]=item+3);
// console.log(a1);
// let newarr=a1.map((e)=>e-3);
// console.log(newarr);
// let items=["Honda","Toyota","Hyundai"];
// for(const i in items)
// {
//     console.log(i,items[i]);
// }
let obj={name:"Alice",age:25,city:"New York",hobby: "Traveling to Offbeat places"};
for(const key in obj)
{
    console.log(key+":"+obj[key]);
}