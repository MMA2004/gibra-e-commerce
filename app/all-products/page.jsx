'use client'
import React, { useState } from "react";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAppContext } from "@/context/AppContext";

const AllProducts = () => {

    const { products } = useAppContext();
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ['All', ...new Set(products.map(product => product.category))];

    const filteredProducts = selectedCategory === 'All'
        ? products
        : products.filter(product => product.category === selectedCategory);

    return (
        <>
            <Navbar />
            <div className="flex flex-col items-start px-6 md:px-16 lg:px-32">
                <div className="flex flex-col items-end pt-12 w-full">
                    <div className="flex justify-between w-full items-center">
                        <div className="flex flex-col items-start">
                            <p className="text-2xl font-medium">All products</p>
                            <div className="w-16 h-0.5 bg-orange-600 rounded-full"></div>
                        </div>
                        <div className="flex gap-2 flex-wrap justify-end">
                            {categories.map((category, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-4 py-1 border rounded-full text-sm transition ${selectedCategory === category
                                        ? 'bg-orange-600 text-white border-orange-600'
                                        : 'text-gray-600 border-gray-300 hover:bg-gray-100'
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 flex-col items-center gap-6 mt-12 pb-14 w-full">
                    {filteredProducts.map((product, index) => <ProductCard key={index} product={product} />)}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AllProducts;
