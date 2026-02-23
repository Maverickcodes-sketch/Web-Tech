import { useState, useEffect } from 'react';
import Card from './app/components/card';
import Header from './app/components/header';
import Cartbill from './app/components/cartbill';

const items = [
  {
    id: 'cold-drink',
    title: 'Cold Drink',
    description: 'Coca Cola, Fanta, Sprite,  Pepsi',
    imageSrc: 'https://images.unsplash.com/photo-1619719304580-c6f308e5315a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbGQlMjBkcmlua3xlbnwwfHwwfHx8MA%3D%3D',
    price: 50,
  },
  {
    id: 'sweets',
    title: 'Sweets',
    description: 'Rasgulla, Gulab Jamun, Kheer',
    imageSrc: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3dlZXRzfGVufDB8fDB8fHww%3D',
    price: 100,
  },
  {
    id: 'savory',
    title: 'Savory',
    description: 'Bhujiya, Samosa, Paratha',
    imageSrc: 'https://media.istockphoto.com/id/525774817/photo/mix-chaat-items-bhelpuri-paanipuri-sevpuri.jpg?s=1024x1024&w=is&k=20&c=fnZZp4zM29rWW_zG5ZqB0qgubyMdupKw9F5R7pYrjFI=',
    price: 70,
  },
];

function App() {
  const [cartItems, setCartItems] = useState(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (!storedCartItems) {
      return [];
    }
    try {
      const parsedItems = JSON.parse(storedCartItems);
      return parsedItems.map((item) => ({
        ...item,
        quantity: Number.isFinite(item.quantity) && item.quantity > 0 ? item.quantity : 1,
      }));
    } catch {
      return [];
    }
  });
  const totalPrice = cartItems.reduce((price, item) => price + (item.price * item.quantity), 0);
  const totalCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const removeFromCart = (item) => {
    if (!cartItems.some((cartItem) => cartItem.id === item.id)) {
      alert('Item not in cart');
      return;
    }
    setCartItems((prevItems) =>
      prevItems
        .map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
        .filter((cartItem) => cartItem.quantity > 0)
    );
  }
  return (
    <div className="min-h-screen bg-blue-950">
      <Header cartCount={totalCount} totalPrice={totalPrice} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 m-10">
      {
        items.map((item) => (
          <Card 
          key={item.id} 
          title={item.title} 
          description={item.description} 
          imageSrc={item.imageSrc} 
          price={item.price}
          addToCart={() => addToCart(item)} 
          removeFromCart={() => removeFromCart(item)} />
        ))
      }
      </div>
      <div className="m-10">
        <Cartbill items={cartItems} cartTotal={totalPrice} />
      </div>
    </div>
  )
}

export default App
