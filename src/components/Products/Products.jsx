import React from 'react'
import { ProductsData } from '../../data'
import ProductItem from './ProductItem'

const Products = () => {
  return (
    <section className='mt-14 mb-12'>
        <div className='container'>
            <div className='text-center mb-10 max-w-[600px] mx-auto'>
                <p data-aos='fade-up' className='text-sm text-primary'>Top Selling Products for you</p>
                <h1 data-aos='fade-up' className='text-3xl font-bold'>Top Selling Products</h1>
                <p data-aos='fade-up' className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dolore eveniet cumque eum quam consectetur quaerat porro minima, ex dignissimos modi natus et reprehenderit facere error corrupti aperiam quo consequuntur.</p>
            </div>
            <div>
                <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>
                    {ProductsData.map((data)=>(
                        <ProductItem key={data.id} item={data} />
                    ))}
                </div>
                <div className='flex justify-center'>
                    <button className='text-center mt-10 cursor-pointer hover:scale-105 bg-primary text-white py-1 px-5 rounded-md'>View All</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Products
