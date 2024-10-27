import React, { memo, useState } from 'react'

const ImageGallary: React.FC<{ productImages: string[] }> = ({ productImages }) => {
     const [selectedImage, setSelectedImage] = useState<number>(0)

     return (
          <div>
               <img
                    src={productImages[selectedImage]}
                    alt={`Image ${selectedImage + 1}`}
                    width={500}
                    height={500}
                    className="aspect-[4/3] object-fill rounded-md border p-6"
               />
               <div className="mt-8 flex space-x-5">
                    {productImages.map((image, index) => (
                         <img
                              key={index}
                              src={image}
                              alt={`Image ${index + 1}`}
                              className={`p-2 w-24 border  rounded-md cursor-pointer ${selectedImage === index ? 'border-2 border-violet-500' : ''}`}
                              onClick={() => setSelectedImage(index)}
                         />
                    ))}
               </div>
          </div>
     )
}

export default memo(ImageGallary)