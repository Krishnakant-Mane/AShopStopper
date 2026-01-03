import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { UserInfoContext } from "../context/UserInfoContext";
import { cartContext } from "../context/cartContext";
import {toast} from "react-hot-toast"
export const Viewproduct = () => {
  const {userInfo} = useContext(UserInfoContext)
  const {addToCart} = useContext(cartContext)
  const [productList, setProductList] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    const fetchProduct = async () => {
      // Check localStorage FIRST
      const localProducts =
        JSON.parse(localStorage.getItem("products")) || [];

        const localProduct = localProducts.find(
        (p) => String(p.id) === String(id)
      );

      if (localProduct) {
        setProductList(localProduct);
        return; // STOP HERE
      }

      // Fallback to API
      try {
        const res = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        setProductList(res.data);
      } catch (err) {
        console.error("Product not found");
      }

    };

    fetchProduct();
  }, [id]);

  const loginFirst = () => {
    toast.error("Login first")
  }

  return (
    <div className="min-h-screen bg-white text-black px-6 py-10 flex flex-col items-center">
      
      <Link
        to="/"
        className="text-lg font-medium underline underline-offset-4 hover:text-neutral-600 transition self-start"
      >
        ← Back
      </Link>

      {productList ? (
        <div className="mt-10 flex flex-col md:flex-row gap-12 w-full max-w-6xl border rounded-3xl p-10 shadow-xl">
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              className="w-96 h-96 object-contain rounded-2xl border"
              src={productList.image}
              alt={productList.title}
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <h1 className="text-4xl font-extrabold">
              {productList.title}
            </h1>

            <p className="text-neutral-600 text-lg">
              {productList.description}
            </p>

            <div className="text-3xl font-bold">
              ₹{productList.price}
            </div>

            {productList.rating && (
              <div className="text-neutral-500">
                ⭐ {productList.rating.rate} ({productList.rating.count})
              </div>
            )}

            { userInfo.u_role == 'guest' ?

            <button onClick={() => loginFirst() } className="mt-4 px-8 py-3 border border-black rounded-xl font-semibold bg-black text-white transition">
              🔒ADD TO CART
            </button>
            
            :

            <button onClick={()=>{addToCart(productList); toast.success("Product Added");}} className="mt-4 px-8 py-3 border border-black rounded-xl font-semibold hover:bg-black hover:text-white hover:cursor-pointer transition">
              ADD TO CART
            </button>

            }
          </div>
        </div>
      ) : (
        <p className="mt-20 text-xl">Loading...</p>
      )}


    </div>
  );
};
