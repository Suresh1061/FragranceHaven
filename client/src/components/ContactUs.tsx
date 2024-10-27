import { Clock, Mail, MapPin, PhoneCall } from 'lucide-react'
import React from 'react'
import ContactForm from './ContactForm'

const ContactUs: React.FC = () => {
     return (
          <section className='max-w-screen-xl mx-auto px-6 py-10' id='contact'>
               <h1 className='text-3xl md:text-4xl font-Lora font-semibold text-center mb-10'>Contact Us</h1>
               <div className='grid grid-cols-2 lg:grid-cols-4 mb-10 gap-y-5'>
                    <div className='flex flex-col items-center border-r p-4 text-center'>
                         <MapPin className='w-10 h-10 text-violet-500 mb-3'/>
                         <p className='text-base md:text-lg font-medium'>Our Office Address</p>
                         <p>123 Main Street, Anytown, India</p>
                    </div>
                    <div className='flex flex-col items-center border-r p-4 text-center'>
                         <Mail className='w-10 h-10 text-violet-500 mb-3'/>
                         <p className='text-base md:text-lg font-medium'>General Enquiries</p>
                         <p>example@gmail.com</p>
                    </div>
                    <div className='flex flex-col items-center border-r p-4 text-center'>
                         <PhoneCall className='w-10 h-10 text-violet-500 mb-3'/>
                         <p className='text-base md:text-lg font-medium'>Call Us</p>
                         <p>+91 1234567890</p>
                    </div>
                    <div className='flex flex-col items-center p-4 text-center'>
                         <Clock className='w-10 h-10 text-violet-500 mb-3'/>
                         <p className='text-base md:text-lg font-medium'>Our Timings</p>
                         <p>Monday - Sunday : 9:00 AM - 6:00 PM</p>
                    </div>
               </div>
               <ContactForm/>
          </section>
     )
}

export default ContactUs