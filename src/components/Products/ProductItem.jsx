import React from 'react'
import { FaStar } from 'react-icons/fa6'

const ProductItem = ({item}) => {
  return (
    <div data-aos='fade-up' data-aos-dealy={item.aosDelay} className='space-y-3'>
      <img src={item.img} alt={item.title} className='h-[250px] w-[300px] sm:h-[220px] sm:w-[150px] object-cover rounded-md' />
      <div>
        <h3 className='font-semibold'>{item.title}</h3>
        <p className='text-sm text-gray-600'>{item.color}</p>
        <div className='flex items-center gap-1'>
            <FaStar className='text-yellow-400' />
            <span>{item.rating}</span>
        </div>
      </div>
    </div>
  )
}

export default ProductItem
