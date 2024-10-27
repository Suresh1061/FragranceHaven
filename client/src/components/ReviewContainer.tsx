import axios, { AxiosError } from 'axios'
import React, { useCallback, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import ReviewCard from './ReviewCard'

const ReviewContainer: React.FC<{ product_id: string }> = ({ product_id }) => {
     const [newReview, setNewReview] = useState({ rating: 5, comment: '' })
     const [allReviews, setAllReviews] = useState<Review[]>([])

     const fetchAllReviews = useCallback(async () => {
          try {
               const { data: response } = await axios.get<ApiResponse>(`${import.meta.env.VITE_BASE_URL}/api/reviews/${product_id}`)
               setAllReviews(response.reviews || [])
               setNewReview({ rating: 5, comment: '' })
          } catch (error) {
               const axiosError = error as AxiosError<ApiResponse>
               toast.error(axiosError.response?.data.message || 'Failed to fetch reviews')
          }
     }, [product_id])

     useEffect(() => {
          fetchAllReviews()
     }, [fetchAllReviews])

     const handleReviewSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault()
          try {
               const { data: response } = await axios.post<ApiResponse>(`${import.meta.env.VITE_BASE_URL}/api/reviews/add`, { ...newReview, product_id })
               fetchAllReviews()
               toast.success(response.message)
          } catch (error) {
               const axiosError = error as AxiosError<ApiResponse>
               toast.error(axiosError.response?.data.message || 'Failed to add review')
          }
     }

     return (
          <>
               <div>
                    <h2 className="text-2xl font-bold text-gray-800 my-4">Customer Ratings & Reviews</h2>
                    {allReviews.map((review, index) => (
                         <ReviewCard key={`${product_id}-${index}`} {...review} />
                    ))}
               </div>
               <form onSubmit={handleReviewSubmit} className="bg-white rounded-lg border p-4 mt-10">
                    <h3 className="text-xl font-semibold mb-4">Add Your Review</h3>
                    <div className="mb-4">
                         <label className="block text-gray-700 mb-2">Rating</label>
                         <select
                              value={newReview.rating}
                              onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value) })}
                              className="w-full border border-gray-300 rounded-md px-3 py-2"
                         >
                              {[1, 2, 3, 4, 5].map((rating) => (
                                   <option key={rating} value={rating}>{rating} Star{rating !== 1 ? 's' : ''}</option>
                              ))}
                         </select>
                    </div>
                    <div className="mb-4">
                         <label className="block text-gray-700 mb-2">Comment</label>
                         <textarea
                              value={newReview.comment}
                              onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                              className="w-full border border-gray-300 rounded-md px-3 py-2"
                              rows={4}
                              required
                         />
                    </div>
                    <button type='submit' className="w-[150px] bg-violet-500 hover:bg-violet-600 text-white py-2 rounded-md">
                         Submit Review
                    </button>
               </form>
          </>
     )
}

export default ReviewContainer