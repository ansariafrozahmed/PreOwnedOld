import React from 'react'
import ProductCard from './ProductCard/ProductCard'

const HomeProductSection = () => {

    const items = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]

    return (
        <div className='px-4 py-10 lg:px-20 lg:py-16'>
            <h1 className='text-2xl lg:text-4xl font-semibold '>Our Most Popular Models</h1>
            <div className='py-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-5'>
                {
                    items.map((item, index) => (
                        <ProductCard key={index} />
                    ))
                }
            </div>
        </div>
    )
}

export default HomeProductSection