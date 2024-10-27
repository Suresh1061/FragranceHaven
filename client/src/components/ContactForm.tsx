import React from 'react'

const ContactForm: React.FC = () => {
     return (
          <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
               <div>
                    <img
                    src='https://img.freepik.com/free-photo/front-view-men-cologne-light-blue-blurred-background_140725-145460.jpg?uid=R108666871&ga=GA1.1.23672498.1693238520&semt=ais_hybrid'
                    className='rounded-md'
                    />
               </div>
               <form className='md:p-6 flex flex-col space-y-5'>
                    <div className='grid grid-cols-2 gap-x-5'>
                         <input
                         type='text'
                         placeholder='Full Name'
                         className='px-3 py-2 border border-gray-300 rounded-md focus:outline-violet-500'
                         required
                         />
                         <input
                         type='text'
                         placeholder='Contact Number'
                         className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-violet-500'
                         required
                         />
                    </div>
                    <input
                    type='email'
                    placeholder='Email Address'
                    className='px-3 py-2 border border-gray-300 rounded-md focus:outline-violet-500'
                    required
                    />
                    <textarea
                    placeholder='Your Message'
                    className='px-3 py-2 border border-gray-300 rounded-md focus:outline-violet-500'
                    required
                    />
                    <button className='w-28 py-2 rounded-md bg-violet-500 text-white hover:bg-violet-600'>Submit</button>
               </form>
          </div>
     )
}

export default ContactForm