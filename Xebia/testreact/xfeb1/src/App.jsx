import React, { useState } from 'react'
import Toast from './app/components/toast'
const App = () => {
  const [fre, setFre] = useState(false)
  function handleClick() {
    setFre(!fre)
  }
  return (
    <div className="flex items-center justify-center h-screen bg-amber-200">
    <button className="bg-blue-500 text-black font-extrabold text-4xl h-15 w-25 px-4 py-2 rounded-lg" onClick={handleClick}>App</button>
    {fre && <Toast />}
    </div>
  )
}

export default App
