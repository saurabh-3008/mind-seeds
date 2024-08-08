import React from 'react'
import { BsCloudSnow } from "react-icons/bs";
import Main from './../assets/main_image.png';


function Secondpage() {
  return (
    <div className=' bg-[#202d6e] text-white flex flex-col justify-center items-center sm:flex sm:flex-row sm:gap-2 sm:justify-evenly sm:items-center
    md:flex md:flex-row md:justify-evenly md:items-center '>

      <div>
        <img src={Main} alt="main_pic" className=' h-60 w-60 sm:h-72 sm:w-72 lg:h-96 lg:w-96 rounded-full shadow-md shadow-black' />
      </div>



            <div className='flex flex-col justify-center items-center p-2 sm:p-0 gap-5'>

                <div>
                <p className='text-5xl  font-extrabold p-2 sm:p-0'>Break free from your thoughts</p>
                </div>

                <div className='flex flex-col justify-center items-start gap-2 p-2 sm:p-0  '>

                <div className='flex items-center text-2xl justify-center gap-2 '>
                <p className='mb-5 sm:mb-0'><BsCloudSnow /></p>
                <p className='text-2xl'> Learn how to become aware of your thoughts</p>
                </div>
                
                <div className='flex items-center text-2xl justify-center gap-2  '>
                <p className='mb-12 sm:mb-0'><BsCloudSnow /></p>
                <p className='text-2xl'>Identify the inner dialogue on repeat in your mind</p>
                </div>
 
                <div className='flex items-center text-2xl justify-center gap-2 '>
                <p className='mb-14 sm:mb-0'><BsCloudSnow /></p>
                <p className='text-2xl sm:text-xl lg:text-2xl'>Release and let go of old thoughts and feelings holding you back</p>
                </div>

                <div className='flex items-center text-2xl justify-center gap-2'>
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
