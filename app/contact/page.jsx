'use client'
import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const Contact = () => {
    return (
        <>
            <Navbar />
            <div className="px-6 md:px-16 lg:px-32 py-10">
                <h1 className="text-3xl font-bold mb-10 text-center">Contact Us</h1>
                <div className="flex flex-col md:flex-row gap-10 justify-center">
                    <div className="md:w-1/2 bg-gray-50 p-8 rounded-lg shadow-sm">
                        <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
                        <p className="text-gray-600 mb-4">Have questions? We'd love to hear from you.</p>
                        <div className="space-y-3">
                            <p><strong>Email:</strong> support@quickcart.com</p>
                            <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                            <p><strong>Address:</strong> 123 Commerce St, Tech City, TC 90210</p>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Name</label>
                                <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md p-2" placeholder="Your Name" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Email</label>
                                <input type="email" className="mt-1 block w-full border border-gray-300 rounded-md p-2" placeholder="your@email.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Message</label>
                                <textarea className="mt-1 block w-full border border-gray-300 rounded-md p-2" rows="4" placeholder="How can we help?"></textarea>
                            </div>
                            <button type="button" className="bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-700 transition">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact
