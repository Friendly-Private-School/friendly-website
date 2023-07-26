import React from 'react'

const Learning = () => {
  return (
    <div className='w-full h-auto bg-[#072033] text-white'>
        <div className='h-full container mx-auto flex sm:flex-row flex-col-reverse gap-5 px-10 py-10'>

            <div className='sm:w-1/2 w-full'>
                <div className='buildingPicture bg-center w-full sm:h-96 h-72 bg-cover rounded-lg'></div>
            </div>
            <div className='sm:w-1/2 w-full flex flex-col md:gap-10 gap-5'>
                <h1 className='text-4xl font-bold uppercase'>Unlocking Student Potential</h1>
                <p className='md:text-lg text-base text-gray-300'>
                    The dedicated and caring teachers at our school nurture students' unique personalities and learning styles through innovative and engaging teaching techniques. <span className='sm:inline-block hidden'> There is a warm, family-like environment fostered between the passionate staff, involved parents, and delighted children who feel supported. </span>
                </p>
            </div>
            
        </div>
    </div>
  )
}

export default Learning