import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserInfoContext } from "../context/UserInfoContext";
import { useContext } from "react";


export const Orders = () => {
    const { userInfo } = useContext(UserInfoContext);
    const navigate = useNavigate()

    // useEffect(() => {

    //     if (userInfo.u_role != 'admin' || userInfo.u_role != 'customer') {

    //         navigate("/home")
    //     }
    // })

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
        setOrders(storedOrders);
    }, []);

    if (orders.length === 0) {
        return (
            <div className="h-screen flex flex-col items-center justify-center gap-4">
                <h2 className="text-2xl font-semibold">No orders placed yet</h2>
                <Link to="/home" className="underline">Go Shopping</Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen px-4 sm:px-6 md:px-10 py-6 md:py-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">
                My Orders
            </h1>

            {orders.map((order, index) => (
                <div
                    key={order.orderId}
                    className="border border-black rounded-2xl p-5 mb-6"
                >
                    <div className="flex justify-between items-center mb-4">
                        <div className="font-semibold text-lg">
                            Order ID: {order.orderId}
                        </div>
                        <div className="text-sm text-gray-500">
                            {new Date(Number(order.orderId.split("_")[1])).toLocaleString()}
                        </div>
                    </div>

                    <div className="flex justify-between font-medium border-b pb-2 mb-2">
                        <div className="w-1/3 text-left">Product</div>
                        <div className="w-1/3 text-center">Qty</div>
                        <div className="w-1/3 text-right">Price</div>
                    </div>

                    {order.items.map((item) => (
                        <div
                            key={item.productID}
                            className="flex justify-between py-2 border-b text-sm"
                        >
                            <div className="w-1/3 text-left">{item.productName}</div>
                            <div className="w-1/3 text-center">{item.productQty}</div>
                            <div className="w-1/3 text-right">
                                ₹{item.productPrice}
                            </div>
                        </div>
                    ))}

                    <div className="flex justify-end mt-4 text-xl font-semibold">
                        Total: ₹{order.total}
                    </div>
                </div>
            ))}
        </div>
    );
};
