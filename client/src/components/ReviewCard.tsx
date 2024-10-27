import React from 'react'

type Props = {
     rating: number
     comment: string
}

const ReviewCard: React.FC<Props> = ({ rating, comment }) => {
     return (
          <div className="bg-white border rounded-md p-4 mb-4">
               <div className="flex items-center mb-2">
                    {/* <span className="font-semibold mr-2">{author}</span> */}
                    <span className="text-yellow-500">{'★'.repeat(rating)}{'☆'.repeat(5 - rating)}</span>
               </div>
               <p className="text-gray-600">{comment}</p>
          </div>
     )
}

export default ReviewCard