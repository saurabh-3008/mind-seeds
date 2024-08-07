import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <div className='bg-[#202d6e]'
      >
        <div className=' text-white p-4 md:p-28 font-Almarai'>
          <div className='flex flex-col md:flex-row-reverse'>
            <div className='w-full md:w-1/2 flex justify-center mb-8 md:mb-0'>
              <img className='w-full max-w-xs md:max-w-md' src="mobile.png" alt="mobile_photo" />
            </div>
            <div className='md:w-2/3 flex flex-col justify-center'>
              <div className='mb-4'>
                <h1 className='text-3xl md:text-4xl lg:text-6xl font-bold leading-tight tracking-wide mb-9'>Re-think your thoughts with the powerful MindSeeds app.</h1>
                <p className='font-bold text-1xl md:text-2xl'>The 4 week relaxation audio programme designed to help you change the way you think.
                  Available on both Apple & Android</p>
              </div>
              <div>
                <div className='flex justify-center text-xl md:text-2xl font-bold mt-10'>
                  <h1>GET THE APP</h1>
                </div>
                <div className='flex justify-center gap-6 mt-4'>
                  <Link to="#"><img src="AppStore.png" alt="App Store" className="h-12 md:h-14" /></Link>
                  <Link to="#"><img src="appdownload.png" alt="Google Play" className="h-12 md:h-14" /></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;



