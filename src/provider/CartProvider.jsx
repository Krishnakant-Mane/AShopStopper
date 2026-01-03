import React, { useState, useMemo, useContext, useEffect } from "react";
import { cartContext } from "../context/cartContext";
import toast from "react-hot-toast";

export const CartProvider = ({ children }) => {

    const [cartDetails, setCartDetails] = useState(() => {
        const saved = JSON.parse(localStorage.getItem("cart")) || [];
        return Array.isArray(saved) ? saved.filter(Boolean) : [];
    });


    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartDetails));
    }, [cartDetails])

    const addToCart = (product) => {
        setCartDetails(prev => {
            const found = prev.find(i => i.productID === product.id);

            if (found) {
                return prev.map(item =>
                    item.productID === product.id ?
                        { ...item, productQty: item.productQty + 1 }
                        : item
                )
            }

            return [
                ...prev,
                {
                    productID: product.id,
                    productName: product.title,
                    productQty: 0,
                    productImage: product.image,
                    productPrice: product.price
                }
            ];

        });
    };

    const increasedQty = (id) => {
        setCartDetails(prev =>
            prev.map(item =>
                item.productID === id ?
                    { ...item, productQty: item.productQty + 1 }
                    : item
            )
        )
    }

    const decreaseQty = (id) => {
        setCartDetails(prev =>
            prev.map(item =>
                item.productID === id ?
                    { ...item, productQty: item.productQty - 1 }
                    : item
            )
                .filter(item => item.productQty > 0)
        );
    };

    const removeItem = (id) => {
        setCartDetails( prev =>
            prev.filter(item => item.productID !== id)
        )
    };

    const totalItem = useMemo(() => {
        return cartDetails.reduce((sum, item) => sum + item.productQty, 0);
    }, [cartDetails])

    const totalPrice = useMemo(() => {
        return cartDetails.reduce((sum, item) => sum + (item.productQty * item.productPrice), 0)
    }, [cartDetails]);

    return (
        <>
            <cartContext.Provider value={{ cartDetails, addToCart, increasedQty, decreaseQty, totalItem, totalPrice, removeItem }}>
                {children}
            </cartContext.Provider>
        </>
    );
};
