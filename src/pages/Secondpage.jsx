import React from 'react'
import { BsCloudSnow } from "react-icons/bs";

function Secondpage() {
  return (
    <div className='w-[100vw] h-[100vh] bg-purple-900 text-white flex justify-center items-center'>
        {/* <div className='bg-purple-900 text-white'> */}
            <div className='flex flex-col justify-center items-center gap-5'>

                <div>
                <p className='text-5xl  font-extrabold p-2 sm:p-0'>Break free from your thoughts</p>
                </div>

                <div className='flex flex-col justify-center items-center gap-2 p-2 sm:p-0'>

                <div className='flex items-center text-2xl justify-center gap-2 '>
                <p className='mb-5 sm:mb-0'><BsCloudSnow /></p>
                <p className='text-2xl'> Learn how to become aware of your thoughts</p>
                </div>
                
                <div className='flex items-center text-2xl justify-center gap-2 ml-0 sm:ml-10 lg:ml-10 '>
                <p className='mb-12 sm:mb-0'><BsCloudSnow /></p>
                <p className='text-2xl'>Identify the inner dialogue on repeat in your mind</p>
                </div>

                <div className='flex items-center text-2xl justify-center gap-2 ml-0 sm:ml-[85px] lg:ml-[204px]'>
                <p className='mb-14 sm:mb-0'><BsCloudSnow /></p>
                <p className='text-2xl sm:text-xl lg:text-2xl'>Release and let go of old thoughts and feelings holding you back</p>
                </div>

                <div className='flex items-center text-2xl justify-center mr-0 sm:mr-[85px] lg:mr-20 gap-2'>
                <p className='mb-5 sm:mb-0'><BsCloudSnow /></p>
                <p className='text-2xl'>Visualize the life you want for yourself</p>
                </div>

                </div>
            </div>
        {/* </div> */}
    </div>
  )
}

export default Secondpage
