import Image from "next/image"
import Link from "next/link"

const Footer = () => {
      return (
            <div className="py-12">
                  <div className="bg-green-600 flex text-white p-12 md:py-0 md:pt-12 justify-between rounded-xl  md:px-32">
                        <div className="text-center lg:w-[50%]  md:text-left">
                              <h1 className="text-2xl lg:text-5xl">Take your finances to the next levels!</h1>
                              <p className="my-2">Don't hesitate, money matters.</p>

                              <div className="space-x-2 mt-12 md:static md:justify-start flex justify-center mx-auto">
                                    <Link href={"/"}>
                                          <Image src={"/appstore.svg"} width={150} height={40}/>
                                    </Link>
                                    <Link href={"/"}>
                                          <Image src={"/google-play.svg"} width={150} height={80} />
                                    </Link>
                              </div>
                        </div>
                        <Image width={220} className="hidden md:flex" height={200} src={"/MOCKUP@4x.png"} />
                  </div>

                  <div className="mt-12 md:flex justify-between">
                        <p className="text-zinc-700">© 2022 Finsify Technology Co., Ltd. All rights reserved.</p>
                        <ul className="text-zinc-600 md:space-y-0 md:mt-0 space-y-3 mt-5 md:flex md:space-x-7">
                              <li className="hover:text-blue-500 transition-colors"><Link href={"/"}>About us</Link></li>
                              <li className="hover:text-blue-500 transition-colors"><Link href={"/"}>Career</Link></li>
                              <li className="hover:text-blue-500 transition-colors"><Link href={"/"}>Blog</Link></li>
                              <li className="hover:text-blue-500 transition-colors"><Link href={"/"}>Privacy Policy</Link></li>
                        </ul>

                  </div>
                  <div className="fixed w-200 p-3 bg-emerald-600 text-white rounded-full px-8 h-200 bottom-10 right-7">
                        <span></span>
                        <span>Support</span>
                        </div>
            </div>
      )
}

export default Footer