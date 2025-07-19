import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>

      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img src={assets.about_img} alt="" className="w-full md:max-w-[450px]" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur aliquam maiores ab facilis eum voluptatem nam iusto voluptate sit rerum ipsum incidunt itaque facere repudiandae, ut quisquam vitae vero.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, nobis error autem repellat, quis placeat a, officiis quidem nesciunt id quae asperiores eum laborum nisi voluptas esse eligendi corrupti possimus?</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our Mission Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod assumenda esse itaque rerum ratione quasi officia corporis dolor laborum numquam cum illum, dolorem, obcaecati sunt vel. Fugiat voluptates temporibus nihil.</p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quailty Assurance:</b>
          <p className='text-gray-600'>We metiulously Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus quisquam repellat iure modi nisi, debitis, corporis ad eius reiciendis delectus sed aliquam! Ratione fugit aut ut dolor velit mollitia asperiores!</p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className='text-gray-600'>With our frindly Users Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt dicta, ducimus expedita ut debitis illum voluptate magni! Quis aliquam, cumque iste unde consequuntur labore ipsam est similique architecto dolore!</p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Our team of dedicated dolor sit amet consectetur adipisicing elit. Repellendus quisquam repellat iure modi nisi, debitis, corporis ad eius reiciendis delectus sed aliquam! Ratione fugit aut ut dolor velit mollitia asperiores!</p>
        </div>
      </div>

      <NewsLetterBox />

    </div>
  )
}

export default About
