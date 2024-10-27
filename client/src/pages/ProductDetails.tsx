import React, { useEffect, useState } from 'react'
import ImageGallary from '../components/ImageGallary'
import { useParams } from 'react-router-dom'
import axios, { AxiosError } from 'axios'
import toast from 'react-hot-toast'
import ReviewContainer from '../components/ReviewContainer'
import Loader from '../components/Loader'

const ProductDetails: React.FC = () => {
     const { id } = useParams<string>()
     const [product, setProduct] = useState<ProductType | null>()

     const fetchProductById = async () => {
          try {
               const { data: response } = await axios.get<ApiResponse>(`${import.meta.env.VITE_BASE_URL}/api/products/${id}`)
               setProduct(response.product)
          } catch (error) {
               const axiosError = error as AxiosError<ApiResponse>
               toast.error(axiosError.response?.data.message || 'Failed to fetch product')
          }
     }

     useEffect(() => {
          fetchProductById()
          // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [])

     const handleShare = () => {
          if (navigator.share) {
               navigator.share({
                    title: 'Product Details',
                    text: 'Product Details',
                    url: window.location.href
               })
                    .then(() => console.log('Successful share'))
                    .catch((error) => console.log('Error sharing:', error));
          }
     }

     if (!product) {
          return <Loader />
     }

     return (
          <div className="md:h-screen max-w-screen-xl mx-auto px-6 py-8 sm:px-12 sm:pt-16 ">
               <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center">
                    <ImageGallary productImages={product?.images || []} />
                    <div className="md:h-screen md:overflow-y-auto md:mb-10 hide-scrollbar">
                         <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">{product?.name}</h1>
                         <p className="text-gray-600 mb-4">{product?.largeDescription}</p>
                         <p className="text-2xl font-bold text-gray-800 mb-4">&#8377;{product?.price.toFixed(2)}</p>
                         <div className='flex justify-start items-center gap-8 py-10 border-b'>
                              <button className="w-[150px] bg-violet-500 hover:bg-violet-600 text-white py-2 rounded-md">
                                   Add to Cart
                              </button>
                              <button onClick={handleShare} className="w-[150px] border border-violet-500 hover:bg-violet-600 hover:text-white text-black py-2 rounded-md">
                                   Share
                              </button>
                         </div>
                         <ReviewContainer product_id={id as string} />
                    </div>
               </div>
          </div>
     )
}

export default ProductDetails