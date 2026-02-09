import React from 'react'
import Wrapper from './components/Wrapper'
import UserCard from './components/UserCard'
import { useState } from 'react'
function App() {
  const [isgame, setgame] = useState("Cricket")
  const cricketer=[
    {name:"Virat Kohli",age:35,city:"Delhi",team:"RCB"},
    {name:"Rohit Sharma",age:37,  city:"Mumbai",team:"MI"},
    {name:"KL Rahul",age:32, city:"Bangalore",team:"KXIP"}, 
    {name:"MS Dhoni",age:42, city:"Chennai",team:"CSK"},  
  ]
  const footballer=[
    {name:"Lionel Messi",age:36,city:"Paris",team:"PSG"},
    {name:"Cristiano Ronaldo",age:39,city:"Manchester",team:"MU"},
    {name:"Neymar Jr",age:32,city:"Paris",team:"PSG"},
    {name:"Kylian Mbappe",age:25,city:"Paris",team:"PSG"},
  ]
  const onclick=()=>{
    if(isgame==="Cricket"){
      setgame("Football")
    }
    else{
      setgame("Cricket")
    }
    
  }
  return (
    
    <div className='bg-amber-200 h-screen w-full flex flex-col items-center justify-center'>
      <button onClick={onclick} className='bg-red-500 text-white p-2 rounded-lg m-4 shadow-red-400 shadow-md'>{isgame}</button>
      <h1 className='text-3xl font-bold text-center  p-10'>{isgame} DASHBOARD</h1>
      {isgame==="Cricket" && <Wrapper title="Cricketer Details">
        {cricketer.map((item,index)=>{
          return(
            <UserCard key={index} data={item} />
          );
        })}
        </Wrapper>}
        {isgame==="Football" && <Wrapper title="Footballer Details">
        {footballer.map((item,index)=>{
          return(
            <UserCard key={index} data={item} />
          );
        })} 
        </Wrapper>}
        {/* <Wrapper title="Team Details">

        </Wrapper> //children props is used to pass any content inside the wrapper component and we can access that content in the wrapper component by using props.children and we can also pass any other props in the wrapper component and access them in the wrapper component by using props.propsname */}

    </div>
  )
}

export default App
