import Image from "next/image"

const Comments = () => {
  return (
        <div className='py-12'>
              <h2 className='text-center my-3 text-2xl md:text-3xl lg:text-4xl text-slate-800 md:font-semibold'>See what others have to say</h2>
              <div className='flex justify-center'><Image src={"/Stars.svg"} alt={"stars"} /><span className='font-semibold mx-1'>4.9</span>
                    <span className='text-neutral-500'>Based on user reviews</span>
              </div>
              <div className='grid md:gap-x-8 md:grid-cols-3  py-4 grid-cols-2'>
                    <div className='border flex flex-col justify-between h-[23rem] rounded-lg border-neutral-200 p-4'>
                          <p className='text-slate-600 leading-7 text-center'>Perfect app. My husband and I use it to track all our expenses and income. We generate our household accounts and budget using this fab app. Furthermore,the developers are hands-on and extremely helpful. Do not look any further. Get this app now!!</p>
                          <h2 className='font-semibold float-end text-center my-1'>Lorna Mifsud Cachia</h2>
                    </div>
                    <div className='border flex flex-col  justify-between rounded-lg border-neutral-200 p-4'>
                          <p className='text-slate-600   text-center'>Perfect app. My husband and I use it to track all our expenses and income. We generate our household accounts and budget using this fab app. Furthermore,the developers are hands-on and extremely helpful. Do not look any further. Get this app now!!</p>
                          <h2 className='font-semibold  text-center my-1'>Lorna Mifsud Cachia</h2>
                    </div>
                    <div className='border hidden md:flex flex-col  justify-between rounded-lg border-neutral-200 p-4'>
                          <p className='text-slate-600   text-center'>Perfect app. My husband and I use it to track all our expenses and income. We generate our household accounts and budget using this fab app. Furthermore,the developers are hands-on and extremely helpful. Do not look any further. Get this app now!!</p>
                          <h2 className='font-semibold  text-center my-1'>Lorna Mifsud Cachia</h2>
                    </div>
                    
              </div>
        </div>
  )
}

export default Comments