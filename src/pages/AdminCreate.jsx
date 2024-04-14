import React, { useState } from 'react'
import { toast, Toaster } from "react-hot-toast";


const AdminCreate = () => {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productImage, setProductImage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    const id = Date.now() + Math.floor(Math.random() * 1000);

        await firebase.AddNewProduct(id,productName , productPrice, productImage);
        setProductName("");
        setProductPrice("");
        setProductImage("");
    };
    const [serviceName, setServiceName] = useState('');
    // const [servicePrice, setServicePrice] = useState('');
    const [serviceImage, setServiceImage] = useState('');
    // const [serviceDuration, setServiceDuration] = useState('');

    const handleSubmit2 = async (e) => {
        e.preventDefault();
        const id = Date.now() + Math.floor(Math.random() * 1000);
        await firebase.AddNewService(id,serviceName , serviceImage);
        setServiceName("");
        setServiceImage("");
    };
    return (
        <div className='pt-4 flex justify-center '>
            <Toaster toastOptions={{ duration: 4000 }} />

            <div className='pt-16 grid grid-cols-2 gap-8 justify-center items-center'>
                <div className=" ">
                    <form onSubmit={handleSubmit} className="w-[30rem]  bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
                        <span className="text-3xl font-bold  "> Create New Product</span>
                        <div className="my-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productName">
                                Product Name
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="productName"
                                type="text"
                                placeholder="Enter product name"
                                value={productName}
                                onChange={(e) => setProductName(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productPrice">
                                Product Price
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="productPrice"
                                type="number"
                                placeholder="Enter product price"
                                value={productPrice}
                                onChange={(e) => setProductPrice(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productImage">
                                Product Image
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="productImage"
                                type="text"
                                placeholder="Enter product image URL"
                                value={productImage}
                                onChange={(e) => setProductImage(e.target.value)}
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Add Product
                            </button>
                        </div>
                    </form>
                </div>
                <div className=" justify-center items-center ">
                    <form onSubmit={handleSubmit2} className="w-[30rem] bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
                    <span className="text-3xl font-bold  "> Create New Service</span>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="serviceName">
                                Service Name
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="serviceName"
                                type="text"
                                placeholder="Enter service name"
                                value={serviceName}
                                onChange={(e) => setServiceName(e.target.value)}
                            />
                        </div>
                        
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="serviceImage">
                                Service Image
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="serviceImage"
                                type="text"
                                placeholder="Enter service image URL"
                                value={serviceImage}
                                onChange={(e) => setServiceImage(e.target.value)}
                            />
                        </div>
                        
                        <div className="flex items-center justify-between">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Add Service
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default AdminCreate