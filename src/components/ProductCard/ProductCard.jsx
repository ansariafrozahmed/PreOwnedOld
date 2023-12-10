import React from 'react'

const ProductCard = () => {
    return (
        <div className='bg-gray-100 rounded-lg '>
            <div className='aspect-[3/4]'>
                <img className='object-contain h-full w-full' src="https://cdn2.chrono24.com/cdn-cgi/image/f=auto,metadata=none,q=65,h=305/images/topmodels/45-w36w6el32cnbsnxr0smetc2y-Original.png" alt="" />
            </div>
            <div className='p-3'>
                <h2 className='text-gray-700 text-sm'>Rolex</h2>
                <h3>Vintage watch</h3>
            </div>
        </div>
    )
}

export default ProductCard