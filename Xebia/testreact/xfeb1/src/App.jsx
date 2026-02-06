import React, { useState } from 'react'
import Toast from './app/components/toast'
const App = () => {
  const [fre, setFre] = useState(false)
  function handleClick() {
    setFre(!fre)
  }
  const ap=[2024,2025,2026]
  const obj={
    name:"Shaswat",
    age:22 ,
  }
  return (
    <div className="flex items-center justify-center h-screen bg-amber-200">
    <button className="bg-blue-500 text-black font-extrabold text-4xl h-15 w-25 px-4 py-2 rounded-lg" onClick={handleClick}>App</button>
    {/* {fre && <Toast a={obj}/>} */}
    {/* {fre && <Toast a={ap}/>} */}
    {/* {fre && <Toast a={obj.name} b={obj.age}/>} */ }
    {fre && <Toast name="Shaswwat" age={22}/>}
    </div>


  )
}

export default App
