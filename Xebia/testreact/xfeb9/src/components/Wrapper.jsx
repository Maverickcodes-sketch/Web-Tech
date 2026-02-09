import React from 'react'

function Wrapper({title, children}) {
  return (
    < div className='p-4 m-4 bg-blue-400  rounded-lg w-2xl grid grid-cols-2 gap-4 shadow-blue-600 shadow-md'>
      <h2 className='text-xl font-bold col-span-2 text-center'>{title}</h2>
      {children}
    </div>
  )
}

export default Wrapper
