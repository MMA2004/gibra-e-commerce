'use client'
import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { assets } from '@/assets/assets'
import Image from 'next/image'

const About = () => {
    return (
        <div>
            <Navbar />

            <div className='text-2xl text-center pt-8 border-t'>
                <div className='inline-flex gap-2 items-center mb-3'>
                    <p className='text-gray-500'>ABOUT <span className='text-gray-700 font-medium'>US</span></p>

                </div>
            </div>

            <div className='my-10 flex flex-col md:flex-row gap-16 px-6 md:px-16 lg:px-32'>
                <Image className='w-full md:max-w-[450px]' src={assets.about_img || assets.header_headphone_image} alt="About Us" />
                <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
                    <p>Welcome to QuickCart, your number one source for all things electronics. We're dedicated to providing you the very best of products, with an emphasis on quality, customer service, and uniqueness.</p>
                    <p>Founded in 2024, QuickCart has come a long way from its beginnings. When we first started out, our passion for eco-friendly cleaning products drove us to start our own business.</p>
                    <b className='text-gray-800'>Our Mission</b>
                    <p>Our mission is to empower customers with choice and convenience. We strive to offer a seamless shopping experience, ensuring that you find exactly what you need, when you need it.</p>
                </div>
            </div>

            <div className='text-xl py-4 px-6 md:px-16 lg:px-32'>
                <div className='inline-flex gap-2 items-center mb-3'>
                    <p className='text-gray-500'>WHY <span className='text-gray-700 font-medium'>CHOOSE US</span></p>
                    <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700'></p>
                </div>
            </div>

            <div className='flex flex-col md:flex-row text-sm mb-20 px-6 md:px-16 lg:px-32'>
                <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                    <b>Quality Assurance:</b>
                    <p className='text-gray-600'>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
                </div>
                <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                    <b>Convenience:</b>
                    <p className='text-gray-600'>With our user-friendly interface and hassle-free checkout process, shopping has never been easier.</p>
                </div>
                <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                    <b>Exceptional Customer Service:</b>
                    <p className='text-gray-600'>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
                </div>
            </div>

            <div className='px-6 md:px-16 lg:px-32 py-16 bg-gray-50'>
                <div className='text-center'>
                    <p className='text-2xl font-medium text-gray-800'>Join Our Community</p>
                    <p className='text-gray-600 mt-3'>Subscribe now and get 20% off your first order!</p>
                    <div className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
                        <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter your email' required />
                        <button className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default About
