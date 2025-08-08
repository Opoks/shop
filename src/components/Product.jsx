import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "./slices/Cart-slice";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  function handleAdd() {
    dispatch(addToCart(product));
  }

  function handleRemove() {
    dispatch(removeFromCart(product.id));
  }
  return (
    <div className=" border-3 overflow-hidden rounded-md px-4 py-2 flex flex-col items-center w-45">
      <div className=" w-40 h-50 bg-amber-200 p-2 rounded-md flex items-center justify-center" >
        <LazyLoadImage
          src={product.image}
          alt={product.title}
         width={100}
        />
      </div>
      <p className=" truncate w-[100%]">{product.title}</p>
      <p>GHC {product.price}</p>
      <button
        onClick={
          state.cart.some((item) => item.id === product.id) ? handleRemove : handleAdd
        }
        className=" truncate border-2 rounded-md mt-2 hover:scale-120 transition ease-in-out px-2 py-1 cursor-pointer font-bold bg-amber-200 text-emerald-900  "
      >
        {state.cart.some((item) => item.id === product.id)
          ? "Remove From cart"
          : "Add To Cart"}
      </button>
    </div>
  );
};

export default Product;
