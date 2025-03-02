import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold py-2'>
            Want tips and tricks to optimize your flow?
          </h1>
          <p>
            Sign up to our newsletter and stay up to date.
          </p>
        </div>
        <div className='my-4 '>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input className='p-3 flex w-full rounded-md text-black' type="email" placeholder='Enter E-Mail'/>
            <button className='text-black bg-[#00df9a] rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>Notify Me</button>
          </div>
          <p>We care about the protection of your data. Read out <span className='text-[#00df9a] cursor-pointer'>Privacy Policy.</span></p>
        </div>
      </div>
    </div>
  )
}

export default Newsletter