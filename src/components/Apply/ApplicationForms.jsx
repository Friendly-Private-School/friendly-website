import React from 'react';
import preSchoolForm from '../../applicationForms/FPS Application Form 2024 (Pre school).docx';
import gradeZero from '../../applicationForms/FPS Application Form 2024 (Grade 0).docx';
import gradeOnetoThree from '../../applicationForms/FPS Application Form 2024 (Grade 1-3).docx';
import gradeFourtoSeven from '../../applicationForms/FPS Application Form 2024 (Grade 4-7).docx';
import gradeEighttoTen from '../../applicationForms/FPS Application Form 2024 (Grade 8-10).docx';

const ApplicationForms = () => {
  return (
    <div className="text-black w-full h-auto bg-white pb-20">
        <h1 className='text-4xl text-center font-bold py-4'>Application Forms</h1>
        <h1 className='text-2xl text-center font-bold'>2024</h1>
        <div className='container mx-auto  text-white text-center font-bold text-2xl pt-10'>
            <div className='w-1/2 mx-auto flex flex-col gap-10'>
            <a href={preSchoolForm} download='PreSchool-form.docx' className='px-4 py-2 bg-primary hover:bg-[rgb(38,97,23)] rounded-md'>Pre School</a>
            <a href={gradeZero} download='Grade-0-form.docx' className='px-4 py-2 bg-primary hover:bg-[rgb(38,97,23)] rounded-md'>Grade 0</a>
            <a href={gradeOnetoThree} download='Grade-1-3-form.docx' className='px-4 py-2 bg-primary hover:bg-[rgb(38,97,23)] rounded-md'>Grade 1-3</a>
            <a href={gradeFourtoSeven} download='Grade-4-7-form.docx' className='px-4 py-2 bg-primary hover:bg-[rgb(38,97,23)] rounded-md'>Grade 4-7</a>
            <a href={gradeEighttoTen} download='Grade-8-10-form.docx' className='px-4 py-2 bg-primary hover:bg-[rgb(38,97,23)] rounded-md'>Grade 8-10</a>
            </div>
        </div>
    </div>
  )
}

export default ApplicationForms