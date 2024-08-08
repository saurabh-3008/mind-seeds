import React from 'react'
// import name from './smiling.jpg';

import { BrowserRouter } from 'react-router-dom';
// import name from './girl smile.jpg';
import name from './christopher-campbell-rDEOVtE7vOs-unsplash.jpg';



function Page4() {
  return (
    <>
      <div className='bg-[#202d6e] text-white' >

       <div className='sm:w-[100vw] sm:h-[100vh] flex justify-center items-center p-5 '>
       <div className=' sm:flex sm:justify-center sm:items-center sm:gap-3 sm:p-4'>
            <div className='flex flex-col  items-center '>
                <img src={name} className='h-[300px] w-[500px] rounded-full '/>
                <h1>
                IMOGEN LAMB 
                </h1>
                <p>
                Creator of MindSeedssss
                </p>
            </div>

            <div className='mt-6 sm:mt-0 m-2 sm:m-0' >
<p>
“Having suffered with chronic anxiety, panic attacks and depression for a number of years,
I was desperately looking for a natural way out. Exploring, science, religion, philosophy,
spirituality trying to understand why I was feeling this way.
</p>

<p className='mt-5'>
My research & readings led me to understand how powerful our thoughts are and how
fearful, worrying, negative thoughts trigger our fight or flight survival mode causing the
physical feeling of anxiety.
</p>

<p className='mt-5'>
Once I began to understand this, I set off on a quest to learn how to quieten my mind and
got myself back to a place of peace, calm & zen. To share what I had learned I created a 4
step process audio programme to help reach to more people. I hope it can help you too.” 
</p>
            </div>

        </div>
       </div>

        {/* ---------- */}
      </div>
      <div>
        <p>hello this is conflict check</p>
      </div>
    </>
  )
}

export default Page4
