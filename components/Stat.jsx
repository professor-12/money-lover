import Lock from './SVGS/1'
import User from './SVGS/2'
import Review from './SVGS/3'
import Image from 'next/image'
import APPSVG from './SVGS/4'

const Stat = () => {
      return (
            <div className='grid font-normal  grid-cols-2 gap-2 font-mono py-12 lg:py-32 lg:gap-5 gap-y-2  lg:grid-cols-4'>
                  <div className='bg-[#00a6ff]/10 gap-2 rounded-lg justify-center flex-nowrap flex flex-col items-center'>
                        <Lock />
                        <p className='text-lg  w-full text-center'>100% Secured data</p>
                  </div>
                  <div className='bg-[#00a6ff]/10 gap-2 rounded-lg h-[9rem] flex flex-col justify-center items-center'>
                        <User/>
                        <p className='text-lg'>1 Million + users</p>
                  </div>
                  <div className='bg-[#00a6ff]/10 gap-2 rounded-lg h-[9rem] flex flex-col justify-center items-center'>
                        <Review/>
                        <p className='text-lg'>100k+ 5-star Reviews</p>
                  </div>
                  <div className='bg-[#00a6ff]/10 gap-2 rounded-lg  flex flex-col justify-center items-center'>
                        <APPSVG/>
                        <p className='text-lg'>App of the day</p>
                  </div>
                 
            </div>
      )

}

export default Stat