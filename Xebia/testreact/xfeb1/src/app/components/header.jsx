import React from "react";
import { ShoppingCart } from "lucide-react";
import { BadgeIndianRupee } from "lucide-react";
function Header({ cartCount = 0, totalPrice = 0 }) {
  return (
    <header className="w-full bg-yellow-400 shadow-sm px-4 py-3">
      <div className="max-w-6xl mx-auto flex items-center justify-end ">
        <div className="relative flex items-center gap-20">
          <div className="flex items-center gap-1">
            <ShoppingCart className="text-black w-6 h-6" />
            <h1 className="text-black text-lg font-semibold">
              Card Count: {cartCount}
            </h1>
          </div>
          <div className="flex items-center gap-1">
            <BadgeIndianRupee className="text-black w-6 h-6 " />
            <h1 className="text-black text-lg font-semibold">
              Total Price: {totalPrice}
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
