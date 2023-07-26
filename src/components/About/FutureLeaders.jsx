import React from 'react'

const FutureLeaders = () => {
  return (
    <div className='w-full md:h-[700px] h-auto'>
        <div className='h-full container mx-auto flex md:flex-row flex-col md:gap-5 sm:gap-10 gap-5 px-10 sm:pt-10 pt-5 pb-10 '>
            <div className='md:w-1/2 w-full flex flex-col md:gap-10 gap-5 bg-[#072033] p-5 rounded-lg'>
                <h1 className='xs:text-4xl text-3xl font-bold uppercase text-yellow-600'>Towards Tomorrow</h1>
                <p className='md:text-lg text-base text-gray-200 '>
                    The school provides incredible tours to places like Windhoek and Swakopmund where students can explore new environments. These trips allow for great learning through hands-on experiences and foster meaningful interactions between students, teachers, and guides. <span className='md:inline-block hidden'>The tours create lasting memories and relationships.</span>
                </p>
            </div>
            <div className='md:w-1/2 w-full'>
                <div className='kidsPicture bg-center w-full md:h-[60%] h-48 bg-cover rounded-lg shadow-lg'></div>
                <div className=' w-full md:h-[40%] h-48 mt-2 '>
                    <div className='kids3Picture bg-cover bg-center w-full h-full rounded-lg'></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FutureLeaders