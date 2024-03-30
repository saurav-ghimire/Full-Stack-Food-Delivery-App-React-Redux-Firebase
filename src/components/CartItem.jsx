import React from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cartSlicer";

const CartItem = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const handleCart = (productId, action) => {
    console.log("handleCart called with productId:", productId, "and action:", action);
    // Dispatch actions based on productId and action
  };

  return (
    <>
      {cartItems.map((data) => (
        <div key={data.id} className="w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2">
          <img src={data.imageURL} alt={data.title} className="w-12 h-12 object-cover rounded bg-white" />
          <div className="flex-grow">
            <h3 className="text-sm font-medium">{data.title}</h3>
            <p className="text-xs text-gray-500">${data.price}</p>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => handleCart(data.id, "decrement")}
              className="text-sm text-gray-500"
            >
              <BiMinus />
            </button>
            <span className="text-sm">{data.qty}</span>
            <button
              onClick={() => handleCart(data.id, "increment")}
              className="text-sm text-gray-500"
            >
              <BiPlus />
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default CartItem;
