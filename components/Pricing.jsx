import React from 'react'
import Image from 'next/image'

const Pricing = () => {


      return (
            <div className='container px-3 space-y-20 mx-auto md:py-28'>
                  <div className='md:flex  flex-row-reverse items-center gap-12 space-y-5'>
                        <div className='md:space-y-5 space-y-2'>
                              <h1 className='md:text-4xl lg:text-4xl text-2xl text-slate-800'>Simple money tracker</h1>
                              <p className='font-normal text-neutral-600/90'>It takes seconds to record daily transactions. Put them into clear and visualized categories such as Expense: Food, Shopping or Income: Salary, Gift.</p>
                        </div>
                        <div class="imgWrapper_H04T  md:w-2/3 drop-shadow-xl  rounded-xl overflow-hidden mx-auto"><Image className='md:w-full w-[70%] rounded-xl mx-auto' width={700} height={700} src="/Transaction@4x.png" alt="coverage" /></div>

                  </div>
                  <div className='md:flex  items-center gap-12'>
                        <div className='md:space-y-5 space-y-2'>
                              <h1 className='md:text-4xl lg:text-4xl text-2xl text-slate-800'>Painless budgeting</h1>
                              <p className='font-normal text-neutral-600/90'>It takes seconds to record daily transactions. Put them into clear and visualized categories such as Expense: Food, Shopping or Income: Salary, Gift.</p>
                        </div>
                        <div class="imgWrapper_H04T md:w-2/3 drop-shadow-xl  rounded-xl overflow-hidden mx-auto"><Image className='md:w-full w-[70%] rounded-xl mx-auto' width={700} height={700} src="/budget@4x.png" alt="coverage" /></div>

                  </div>
                  <div className='md:flex  flex-row-reverse items-center gap-12'>
                        <div className='md:space-y-5 space-y-2'>
                              <h1 className='md:text-4xl lg:text-4xl text-2xl text-slate-800'>The whole picture in one place</h1>
                              <p className='font-normal text-neutral-600/90'>One report to give a clear view on your spending patterns. Understand where your money comes and goes with easy-to-read graphs.</p>
                        </div>
                        <div class="imgWrapper_H04T md:w-2/3 drop-shadow-xl  rounded-xl overflow-hidden mx-auto"><Image className='md:w-full w-[70%] rounded-xl mx-auto' width={700} height={700} src="/REPORT@4x.png" alt="coverage" /></div>

                  </div>
                 
            </div>
      )
}

export default Pricing