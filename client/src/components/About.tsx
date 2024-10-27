import React from 'react'

const About: React.FC = () => {
     return (
          <section className='max-w-screen-xl mx-auto px-6 py-8' id='about'>
          <div className='py-10 grid grid-cols-1 md:grid-cols-2 gap-10'>
               <div className='flex flex-col justify-center items-center text-center'>
                    <h1 className='text-3xl md:text-4xl font-Lora font-semibold mb-6'>About Us</h1>
                    <p>
                         At Essence Elegance, we believe that every scent tells a story. Our passion for perfumery drives us to create unique, captivating fragrances that evoke emotions and memories.
                         <br />
                         Founded in 2010, our brand has grown from a small artisanal workshop to a renowned name in the world of fine fragrances. We combine traditional techniques with modern innovation to craft scents that are both timeless and contemporary.
                    </p>
               </div>
               <img
                    src='https://image3.jdomni.in/banner/30072021/8D/E8/32/CDF9F56F9B912AAB0ABB3AC2A6_1627660032582.jpg?output-format=webp'
                    className='rounded-lg aspect-square'
               />
          </div>
          </section>
     )
}

export default About