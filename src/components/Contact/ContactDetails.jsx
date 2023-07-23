import React from 'react'

const ContactDetails = () => {
  return (
    <div className='w-full bg-[#072033] text-white pt-10 pb-10'>
        <div className='container mx-auto'>
            <h1 className='text-4xl text-center text-primary'>Contact Details</h1>
            <div className='flex flex-col gap-3 items-center pt-10'>
                <h2 className='text-base sm:text-xl'>Tutungeni Office: <span className='text-primary'>066256291</span></h2>
                <h2 className='text-base sm:text-xl'>Queenspark Office: <span className='text-primary'>066255845</span></h2>
                <h2 className='text-base sm:text-xl'>Millenium Pre-Primary Office: <span className='text-primary'>066255845</span></h2>
                <h2 className='text-base sm:text-xl'>Millenium Primary Office: <span className='text-primary'>066255256</span></h2>
                <h2 className='text-base sm:text-xl'>Fax: <span className='text-primary'>066255906</span></h2>
                <h2 className='text-base sm:text-xl'>Emergency Number: <span className='text-primary'>+264 81 279 8717</span></h2>
                <h2 className='text-base sm:text-xl'>P.O. Box: <span className='text-primary'>1953 Rundu</span></h2>
            </div>
            
        </div>
    </div>
  )
}

export default ContactDetails