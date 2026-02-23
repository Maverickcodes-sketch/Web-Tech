import React from 'react'

function cartbill({items,cartTotal}) {
  const totalCount = items.reduce((count, item) => count + item.quantity, 0);

  return (
    <div className="bg-white text-gray-800 p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">Cart Summary</h2>
      {items.map((item,index) => (
        <div key={index} className="flex justify-between items-center mb-2">
          <span>{item.title}</span>
          <span>Quantity: {item.quantity}</span>
          <span>₹{item.price}</span>
        </div>
      ))}
      <hr className="my-2" />
      <p className="text-lg">Total Items: {totalCount}</p>
      <p className="text-lg">Total Price: ₹{cartTotal}</p>
    </div>
  )
}

export default cartbill
