import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import axios, { AxiosError } from 'axios'
import toast from 'react-hot-toast'

const ProductsList: React.FC = () => {
     const [allProducts, setAllProducts] = useState<ProductType[]>([])
     const fetchAllProducts = async () => {
          try {
               const { data: response } = await axios.get<ApiResponse>(`${import.meta.env.VITE_BASE_URL}/api/products`)
               setAllProducts(response.products || [])
          } catch (error) {
               const axiosError = error as AxiosError<ApiResponse>
               toast.error(axiosError.response?.data.message || 'Failed to fetch products')
          }
     }

     useEffect(() => {
          fetchAllProducts()
     }, [])
     return (
          <section className="container mx-auto px-6 py-8">
               <h2 className="text-3xl font-semibold font-Lora text-center text-gray-800 mb-8">Featured Perfumes</h2>
               <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center">
                    {allProducts.map((product) => (
                         <ProductCard key={product._id} {...product} />
                    ))}
               </div>
          </section>
     )
}

export default ProductsList