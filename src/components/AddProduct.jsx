import React, { useContext } from 'react'
import { UserInfoContext } from '../context/UserInfoContext'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'
export const AddProduct = () => {
    const { userInfo } = useContext(UserInfoContext)
    const navigate = useNavigate();

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm()

    const onSubmit = async (data) => {
        try {
            // const response = await axios.post(
            //     "https://fakestoreapi.com/products",
            //     {
            //         id: data.id,
            //         title: data.title,
            //         price: data.price,
            //         description: data.description,
            //         category: data.category,
            //         image: data.image
            //     }


            // );

            const localProducts = JSON.parse(localStorage.getItem("products")) || [];

            const newProduct = {
                id: data.id,
                title: data.title,
                price: data.price,
                description: data.description,
                image: data.image,
                category: data.category
            };

            localProducts.push(newProduct);
            localStorage.setItem("products", JSON.stringify(localProducts));

            alert("Product Added")
            reset();
            console.log(localProducts);


        } catch (error) {
            alert("Failed to Add Product");
            console.error(error);
        }
    }

    return (
        <>
            <div className="min-h-screen flex justify-center items-center">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="bg-base-100 p-8 rounded-2xl shadow-xl w-96 space-y-4 border border-neutral-300 dark:border-neutral-700"
                >
                    <h2 className="text-2xl font-bold text-center text-base-content">Add Product</h2>

                    <input
                        type="number"
                        placeholder="ID"
                        {...register("id", { required: true })}
                        className="input input-bordered w-full"
                    />

                    <input
                        placeholder="Title"
                        {...register("title", { required: true })}
                        className="input input-bordered w-full"
                    />

                    <input
                        type="number"
                        step="0.01"
                        placeholder="Price"
                        {...register("price", { required: true })}
                        className="input input-bordered w-full"
                    />

                    <input
                        placeholder="Category"
                        {...register("category", { required: true })}
                        className="input input-bordered w-full"
                    />

                    <input
                        placeholder="Image URL"
                        {...register("image", { required: true })}
                        className="input input-bordered w-full"
                    />

                    <textarea
                        placeholder="Description"
                        {...register("description", { required: true })}
                        className="textarea textarea-bordered w-full"
                    />

                    <button className="btn btn-primary w-full rounded-2xl">
                        Add Product
                    </button>
                </form>
            </div>
        </>
    )

}
