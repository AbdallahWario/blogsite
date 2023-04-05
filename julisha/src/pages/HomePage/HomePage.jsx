import React from 'react'
import Desc_Cards from '../../components/Desc_Cards'

const HomePage = () => {
  return (
    <div>
        <div className="my-4 md:py-4 my-4   ">
          <h1 className='text-2xl font-semibold m-2'>We are JulishaMedia</h1>
<div className='flex-col py-4 mb-4  justify-center md:flex py-4 flex-row lg:flex-row  h-[400px] '>
  <div className='flex md:flex items-center'>
    <p>
         Welcome to our PR (public relations) company! 
          We specialize in managing and improving the reputation of individuals, organizations, and brands.
          Our team uses various communication strategies and tactics to create and maintain a positive public image for our clients.
          Our services include media relations, event planning, branding and messaging, crisis management, and more.
    </p>
  </div>
  <div  className='my-0'> 
  <img src="/pr2.jpg" alt=""  className='h-auto md:max-w-2xl  md:max-h-fit '/>

  </div>
</div>
</div>

        <div className='my-24'>
          <p className='font-bold text-2xl'>What we do</p>
          <div className="  flex flex-wrap items-center justify-center gap-4 px-2 py-4">
         
          <Desc_Cards/>
          <Desc_Cards/>
          <Desc_Cards/>
          <Desc_Cards/>

        </div>
        </div>
<div className="div">
<p className='font-bold text-2xl'>WhY Choose Us</p>
<div className="  flex flex-wrap items-center justify-center gap-4 px-2 py-4">
         
         <Desc_Cards/>
         <Desc_Cards/>
        <Desc_Cards/>

       </div>

</div>
        
        
    </div>
  )
}

export default HomePage