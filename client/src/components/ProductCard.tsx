import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard: React.FC<ProductType> = ({_id, name, images, smallDescription, price}) => {
     return (
          <Link to={`/products/${_id}`} className="group">
               <div className="max-w-sm w-full p-4 max-lg:shadow max-lg:rounded bg-white overflow-hidden transition-transform duration-300 ease-in-out transform lg:hover:rounded-md lg:hover:shadow-lg">
                    <img
                         src={images[0]}
                         alt={name}
                         className="w-full h-64 object-fill"
                    />
                    <div className="p-4">
                         <h3 className="text-lg font-semibold text-gray-800 mb-2">{name}</h3>
                         <p className="text-gray-600 mb-2">{smallDescription}</p>
                         <p className="text-gray-800 font-bold">&#8377;{price.toFixed(2)}</p>
                    </div>
                    {/* <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                         <span className="text-white font-semibold">View Details</span>
                    </div> */}
               </div>
          </Link>
     )
}

export default ProductCard