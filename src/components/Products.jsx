import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useSearchParams } from "react-router-dom";
import { UserInfoContext } from "../context/UserInfoContext";

export const Products = () => {
    const {userInfo} = useContext(UserInfoContext)
    const [allProducts, setAllProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    const [searchParams, setSearchParams] = useSearchParams();
    const searchText = searchParams.get("q") || "";

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get("https://fakestoreapi.com/products");

                const localProducts =
                    JSON.parse(localStorage.getItem("products")) || [];

                // Prevent duplicate IDs
                const apiIds = new Set(res.data.map(p => p.id));

                const uniqueLocalProducts = localProducts.filter(
                    p => !apiIds.has(p.id)
                );

                const mergedProducts = [...res.data, ...uniqueLocalProducts];

                setAllProducts(mergedProducts);
                setFilteredProducts(mergedProducts);

                console.log("API Products:", res.data);
                console.log("Local Products:", uniqueLocalProducts);
                console.log("Merged Products:", mergedProducts);

            } catch (err) {
                console.error("Error fetching products:", err);
            }
        };

        fetchProducts();
    }, []);

    useEffect(() => {
        const filtered = allProducts.filter(item =>
            item.title.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredProducts(filtered);
    }, [searchText, allProducts]);

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchParams(value ? { q: value } : {});
    };

    const handleDelete = (id) =>{
        const updateAll = allProducts.filter(product => product.id != id);
        setAllProducts(updateAll);

        const updateFiltered = filteredProducts.filter(product => product.id != id);
        setFilteredProducts(updateFiltered);

        const localProducts = JSON.parse(localStorage.getItem("products")) || [];
        const updateLocal = localProducts.filter(product => product.id != id);
        localStorage.setItem("products", JSON.stringify(updateLocal));
    }

    return (
        <div
            id="products"
            className="w-full px-5 md:px-20 lg:px-40 my-10 border border-neutral-300 rounded-2xl"
        >
            {/* Header */}
            <div className="flex justify-center">
                <div className="my-6 p-6 border border-neutral-300 rounded-3xl w-full max-w-2xl bg-white/70 backdrop-blur">
                    <h1 className="text-center text-5xl font-bold tracking-tight text-neutral-900 mb-6">
                        Our Products
                    </h1>

                    <input
                        className="w-full h-12 px-4 border border-neutral-400 rounded-2xl
            bg-white focus:outline-none focus:ring-2 focus:ring-black
            placeholder-neutral-500"
                        placeholder="Search for products..."
                        value={searchText}
                        onChange={handleSearch}
                    />
                </div>
            </div>

            {/* Products Grid */}
            <div className="flex flex-wrap justify-center gap-8 my-5">
                {filteredProducts.length === 0 && (
                    <p className="text-xl text-neutral-500">No products found</p>
                )}

                {filteredProducts.map(item => (
                    <div key={item.id} className="group">
                        <div
                            className="
                bg-white
                border border-neutral-300
                rounded-3xl
                shadow-[0_4px_20px_rgba(0,0,0,0.05)]
                hover:shadow-[0_6px_30px_rgba(0,0,0,0.12)]
                transition-all duration-300
                hover:-translate-y-2
                p-5
                w-80
              "
                        >
                            {/* Title */}
                            <h2 className="text-center text-xl font-semibold tracking-wide text-neutral-900">
                                {item.title}
                            </h2>

                            {/* Image */}
                            <div className="flex justify-center my-5">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-48 object-contain transition-all duration-300"
                                />
                            </div>

                            <div className="border-t border-neutral-300 my-4"></div>

                            {/* Price & Button */}
                            <div className="flex justify-between items-center">
                                <p className="text-xl font-bold text-neutral-900">
                                    ${item.price}
                                </p>

                                { userInfo.u_role == 'admin' &&

                                <button
                                    onClick={() => handleDelete(item.id)}
                                    className="
                    px-5 py-2
                    border border-red-700
                    rounded-xl
                    text-red-700
                    font-medium
                    tracking-wide
                    hover:bg-red-700 hover:text-white hover:cursor-pointer
                    transition-all duration-300
                  "
                                >
                                    Delete
                                </button>

                                }

                                <Link
                                    to={`/product/${item.id}`}
                                    className="
                    px-5 py-2
                    border border-neutral-900
                    rounded-xl
                    text-neutral-900
                    font-medium
                    tracking-wide
                    hover:bg-neutral-900 hover:text-white
                    transition-all duration-300
                  "
                                >
                                    VIEW
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
