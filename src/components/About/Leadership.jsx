import React from 'react'

const Leadership = () => {
  return (
    <div className='w-full bg-primary text-white'>
        <div className='h-full container mx-auto flex sm:flex-row flex-col-reverse gap-5 px-10 py-10'>

            <div className='sm:w-1/2 w-full'>
                <div className='pastorPicture bg-center w-full sm:h-96 h-72 bg-cover rounded-lg shadow-md'></div>
            </div>
            <div className='sm:w-1/2 w-full flex flex-col md:gap-10 gap-5'>
                <h1 className='text-4xl font-bold uppercase'>Leading the Way</h1>
                <p className='md:text-lg text-base text-gray-200'>
                    The passionate teachers and staff lead by example, instilling strong values and nurturing students to reach their full potential through their inspirational guidance and care.
                    <span className='block text-xl text-white text-start mt-10'>Principal: Mr. Ajiboso Olusoji</span>
                </p>
            </div>
            
        </div>
    </div>
  )
}

export default Leadership