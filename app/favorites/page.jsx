'use client'
import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProductCard from '@/components/ProductCard'
import { useAppContext } from '@/context/AppContext'

const Favorites = () => {
    const { products, favorites } = useAppContext();

    const favoriteProducts = products.filter(product => favorites.includes(product._id));

    return (
        <>
            <Navbar />
            <div className="flex flex-col items-start px-6 md:px-16 lg:px-32">
                <div className="flex flex-col items-end pt-12 w-full">
                    <div className="flex flex-col items-start">
                        <p className="text-2xl font-medium">My Favorites</p>
                        <div className="w-16 h-0.5 bg-orange-600 rounded-full"></div>
                    </div>
                </div>
                {favoriteProducts.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 flex-col items-center gap-6 mt-12 pb-14 w-full">
                        {favoriteProducts.map((product, index) => <ProductCard key={index} product={product} />)}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center w-full py-20">
                        <p className="text-gray-500 text-lg">No favorites yet</p>
                        <p className="text-gray-400 text-sm mt-2">Click the heart icon on products to add them to your favorites</p>
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
};

export default Favorites;
