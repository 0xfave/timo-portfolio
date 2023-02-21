import { Button, Card } from 'flowbite-react'
import Image from 'next/image'
import React from 'react'
import { Poppins } from '@next/font/google'
import { Roboto } from '@next/font/google'
const poppins = Poppins({ weight: "600", subsets: ['latin'] })
const roboto = Roboto({ weight: "400", subsets: ['latin'] })
import girl from '../../public/girl.png'
import eye from '../../public/eye.png'
import modern from '../../public/modern.png'

const Aboutus = () => {
    return (
        <div className='container grid md:grid-cols-2 mt-36'>
            <div className="flex items-center justify-center pt-6 pl-6">
                {/* mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 */}
                <Image src={girl} alt="" className="object-contain h-[500px]" />
            </div>
            <div className="flex flex-col justify-center p-6 text-left rounded-sm lg:max-w-md xl:max-w-lg lg:text-left !pr-0">
                <p className={`${poppins.className} text-[#5CD2B9]`}>ABOUT US</p>
                <h1 className="!text-5xl font-extrabold leading-none sm:text-4xl">We Use <span className='text-[#5CD2B9]'>Creativity</span> to <br /> Get Our Clients.
                </h1>
                <div className="h-1 bg-[#5CD2B9] w-16 !m-0"></div>
                <p className={`${roboto.className} mt-6 text-base font-medium`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis quam eget ex blandit cursus. Proin est magna, semper a porta sed, lacinia eu lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis quam eget ex blandit cursus. Proin est magna, semper a porta sed, lacinia eu lectus.
                    {/* <br className="hidden md:inline lg:hidden">turpis pulvinar, est scelerisque ligula sem </br> */}
                </p>
                <div className='grid md:grid-cols-2 gap-2 !m-0 mt-0'>
                    <div className="max-w-[200px]">
                        <Card className='text-center !p-0 !bg-black border-none ' horizontal={true}>
                            <div className="grid grid-cols-2 justify-center">
                                <Image src={eye} alt="" />
                                <h5 className="text-md font-bold tracking-tight mt-2">
                                    Website Design
                                </h5>
                                <p className="font-normal text-sm col-span-2">
                                    cursus. Proin est magna, semper a porta sed, lacinia eu lectus.
                                </p>
                            </div>
                        </Card>
                    </div>
                    <div className="max-w-[200px]">
                        <Card className='text-center !p-0 !bg-black border-none ' horizontal={true}>
                            <div className="grid grid-cols-2 justify-center">
                                <Image src={modern} alt="" />
                                <h5 className="text-md font-bold tracking-tight mt-2">
                                    Modern Design
                                </h5>
                                <p className="font-normal text-sm col-span-2">
                                    cursus. Proin est magna, semper a porta sed, lacinia eu lectus.
                                </p>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aboutus