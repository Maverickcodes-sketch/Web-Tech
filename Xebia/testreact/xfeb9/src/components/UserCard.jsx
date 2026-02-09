import React from 'react'

function UserCard({data}) {
  return (
    <div className='bg-green-400 p-4 m-4 rounded-lg  m-5 shadow-green-700 shadow-md'>
        <h3 className='text-lg font-bold text-gray-800'>NAME:{data.name}</h3> 
        <p className='text-md font-medium text-gray-800'>AGE:{data.age}</p>
        <p className='text-md font-medium text-gray-800'>CITY:{data.city}</p>
        <p className='text-md font-medium text-gray-800'>TEAM:{data.team}</p>
    </div>
  )
}

export default UserCard