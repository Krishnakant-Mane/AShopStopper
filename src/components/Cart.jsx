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

                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-base-content">
                            Cart ({totalItem} items)
                        </h1>

                        {cartDetails.map(item => (
                            <div
                                key={item.productID}
                                className="flex flex-col sm:flex-row items-center sm:items-start gap-6 border border-neutral-300 dark:border-neutral-700 rounded-2xl p-4 sm:p-6 mb-5 bg-base-100 transition-colors"
                            >
                                {/* Image */}
                                <img
                                    src={item.productImage}
                                    className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
                                    alt={item.productName}
                                />

                                <div className="flex-1 text-center sm:text-left">
                                    <h2 className="text-lg sm:text-xl font-semibold text-base-content">
                                        {item.productName}
                                    </h2>
                                    <p className="text-base sm:text-lg font-bold mt-1 text-base-content/80">
                                        ₹{item.productPrice}
                                    </p>
                                </div>

                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={() => decreaseQty(item.productID)}
                                        className="px-3 py-1 border border-neutral-300 dark:border-neutral-700 rounded-lg font-bold hover:bg-primary hover:text-primary-content transition"
                                    >
                                        −
                                    </button>

                                    <span className="text-lg font-semibold w-6 text-center">
                                        {item.productQty}
                                    </span>

                                    <button
                                        onClick={() => increasedQty(item.productID)}
                                        className="px-3 py-1 border border-neutral-300 dark:border-neutral-700 rounded-lg font-bold hover:bg-primary hover:text-primary-content transition"
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

                        <div className="mt-8 border-t border-neutral-300 dark:border-neutral-700 pt-6 text-right">
                            <h2 className="text-2xl sm:text-3xl font-bold text-base-content">
                                Total: ₹{totalPrice}
                            </h2>
                        </div>
                    </div>

                    <div className="w-full lg:w-[420px]">
                        <div className="border border-neutral-300 dark:border-neutral-700 rounded-2xl p-4 flex flex-col sticky top-6 bg-base-100">

                            <div className="flex justify-center items-center h-[60px] border-b border-neutral-300 dark:border-neutral-700">
                                <h1 className="text-2xl font-semibold text-base-content">Order Summary</h1>
                            </div>

                            <div className="flex justify-between items-center h-[45px] px-3 border-b border-neutral-300 dark:border-neutral-700 font-medium text-base-content/70">
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

                            <div className="flex justify-between items-center h-[60px] px-3 border-t border-neutral-300 dark:border-neutral-700">
                                <div className="text-xl font-semibold text-base-content">Total</div>
                                <div className="text-xl font-semibold text-base-content">{totalPrice}</div>
                            </div>

                            <div className="flex justify-center items-center h-[60px]">
                                <button
                                    onClick={() => orderCount(cartDetails, totalPrice)}
                                    className="w-full h-10 border border-primary text-primary rounded-xl hover:bg-primary hover:text-primary-content transition"
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
