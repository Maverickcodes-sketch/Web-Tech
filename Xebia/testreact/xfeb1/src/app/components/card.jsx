import React from 'react'

function card({title, description, imageSrc,addToCart,removeFromCart}) {
  return (
    <div>
        <div className="h-100 w-100 bg-gray-300 rounded-lg shadow-lg p-4 flex flex-col items-center justify-center">
            <div>
                <div className="relative w-90 h-50 mb-4 mx-auto rounded-lg overflow-hidden">
                    <img
                        src={imageSrc}
                        alt="Card"
                        className="w-full h-full object-cover flex justify-center items-center  "
                    />
                </div>
                <h2 className="text-gray-800 text-2xl font-bold mb-2">{title}</h2>
                <p className="text-gray-700 mb-4">{description}</p>
                <div className="flex gap-4">
                <button className="bg-green-500 hover:bg-green-600   text-white px-4 py-2 rounded" onClick={addToCart}>Add to Cart</button>
                <button className="bg-red-500 hover:bg-red-600   text-white px-4 py-2 rounded" onClick={removeFromCart}>Remove from Cart</button>
                </div>
            </div>

        </div>
    </div>
  )
}

export default card
