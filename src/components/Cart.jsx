import React, { useContext } from "react";
import { cartContext } from "../context/cartContext";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

export const Cart = () => {

    const {
        cartDetails,
        increasedQty,
        decreaseQty,
        removeItem,
        totalItem,
        totalPrice
    } = useContext(cartContext);


    if (cartDetails.length === -1) {
        return (
            <div className="h-screen flex flex-col items-center justify-center gap-4">
                <h2 className="text-2xl font-semibold">Your cart is empty</h2>
                <Link to="/home" className="underline">Go Shopping</Link>
            </div>
        );
    }

    const orderCount = (cartDetails, totalPrice) => {
        if (cartDetails.length === 0) {
            toast.error("Cart is empty");
            return;
        }

        const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];


        const newOrder = {
            orderId: `ORD_${Date.now()}`,
            items: cartDetails,
            total: totalPrice,
        };


        existingOrders.push(newOrder);


        localStorage.setItem("orders", JSON.stringify(existingOrders));

        toast.success("Order Placed Successfully");
    };

    return (
        <>
            <div className="w-full max-w-[1400px] h-screen mx-auto px-3 sm:px-6 lg:px-10">
                <div className="flex flex-col lg:flex-row gap-8">

                    {/* CART SECTION */}
                    <div className="flex-1">

                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
                            Cart ({totalItem} items)
                        </h1>

                        {cartDetails.map(item => (
                            <div
                                key={item.productID}
                                className="flex flex-col sm:flex-row items-center sm:items-start gap-6 border border-black rounded-2xl p-4 sm:p-6 mb-5"
                            >
                                {/* Image */}
                                <img
                                    src={item.productImage}
                                    className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
                                    alt={item.productName}
                                />

                                <div className="flex-1 text-center sm:text-left">
                                    <h2 className="text-lg sm:text-xl font-semibold">
                                        {item.productName}
                                    </h2>
                                    <p className="text-base sm:text-lg font-bold mt-1">
                                        ₹{item.productPrice}
                                    </p>
                                </div>

                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={() => decreaseQty(item.productID)}
                                        className="px-3 py-1 border border-black rounded-lg font-bold hover:bg-black hover:text-white transition"
                                    >
                                        −
                                    </button>

                                    <span className="text-lg font-semibold w-6 text-center">
                                        {item.productQty}
                                    </span>

                                    <button
                                        onClick={() => increasedQty(item.productID)}
                                        className="px-3 py-1 border border-black rounded-lg font-bold hover:bg-black hover:text-white transition"
                                    >
                                        +
                                    </button>
                                </div>

                                <button
                                    onClick={() => removeItem(item.productID)}
                                    className="text-sm font-semibold border border-red-600 text-red-600 px-4 py-2 rounded-xl hover:bg-red-600 hover:text-white transition"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}

                        <div className="mt-8 border-t border-black pt-6 text-right">
                            <h2 className="text-2xl sm:text-3xl font-bold">
                                Total: ₹{totalPrice}
                            </h2>
                        </div>
                    </div>

                    <div className="w-full lg:w-[420px]">
                        <div className="border border-black rounded-2xl p-4 flex flex-col sticky top-6">

                            <div className="flex justify-center items-center h-[60px] border-b border-black">
                                <h1 className="text-2xl font-semibold">Order Summary</h1>
                            </div>

                            <div className="flex justify-between items-center h-[45px] px-3 border-b border-black font-medium">
                                <div className="w-1/3">Product</div>
                                <div className="w-1/3 text-center">Qty</div>
                                <div className="w-1/3 text-right">Price</div>
                            </div>

                            <div className="flex-1 max-h-[260px] overflow-y-auto">
                                {cartDetails.map((item) => (
                                    <div
                                        key={item.productID}
                                        className="flex justify-between items-center py-2 px-3 border-b text-sm"
                                    >
                                        <div className="w-1/3 truncate">{item.productName}</div>
                                        <div className="w-1/3 text-center">{item.productQty}</div>
                                        <div className="w-1/3 text-right">{item.productPrice}</div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex justify-between items-center h-[60px] px-3 border-t border-black">
                                <div className="text-xl font-semibold">Total</div>
                                <div className="text-xl font-semibold">{totalPrice}</div>
                            </div>

                            <div className="flex justify-center items-center h-[60px]">
                                <button
                                    onClick={() => orderCount(cartDetails, totalPrice)}
                                    className="w-full h-10 border border-black rounded-xl hover:bg-black hover:text-white transition"
                                >
                                    Order
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>




    );
};
