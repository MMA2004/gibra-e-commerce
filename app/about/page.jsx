'use client'
import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { assets } from '@/assets/assets'
import Image from 'next/image'

const About = () => {
    return (
        <>
            <Navbar />
            <div className="px-6 md:px-16 lg:px-32 py-10">
                <h1 className="text-3xl font-bold mb-6 text-center">About Us</h1>
                <div className="flex flex-col md:flex-row gap-10 items-center">
                    <div className="md:w-1/2">
                        <Image src={assets.header_headphone_image} alt="About Us" className="w-full rounded-lg shadow-md" />
                    </div>
                    <div className="md:w-1/2 space-y-4 text-gray-600">
                        <p>
                            Welcome to QuickCart, your number one source for all things electronics. We're dedicated to providing you the very best of products, with an emphasis on quality, customer service, and uniqueness.
                        </p>
                        <p>
                            Founded in 2024, QuickCart has come a long way from its beginnings. When we first started out, our passion for eco-friendly cleaning products drove us to start our own business.
                        </p>
                        <p>
                            We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
                        </p>
                        <p className="font-semibold">
                            Sincerely,<br />
                            The QuickCart Team
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default About
