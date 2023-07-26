import React from 'react'

const TourAbout = () => {
  return (
    <div className='w-full h-auto bg-primary'>
        <div className='h-full container mx-auto flex sm:flex-row flex-col md:gap-5 sm:gap-10 gap-5 px-10 py-10'>
            <div className='sm:w-1/2 w-full flex flex-col md:gap-10 gap-5'>
                <h1 className='text-4xl font-bold uppercase text-white'>Discovering Together</h1>
                <p className='md:text-lg text-base text-gray-200 '>
                    The school provides incredible tours to places like Windhoek and Swakopmund where students can explore new environments. These trips allow for great learning through hands-on experiences and foster meaningful interactions between students, teachers, and guides. <span className='md:inline-block hidden'>The tours create lasting memories and relationships.</span>
                </p>
            </div>
            <div className='sm:w-1/2 w-full'>
                <div className='tourPicture bg-center w-full sm:h-96 h-72 bg-cover rounded-lg shadow-lg'></div>
            </div>
        </div>
    </div>
  )
}

export default TourAbout