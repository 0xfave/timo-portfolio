import React from 'react'
import Image from 'next/image'
import { Poppins } from '@next/font/google'
import { Roboto } from '@next/font/google'
import portrait from '../../public/portrait.png'
const poppins = Poppins({ weight:"600", subsets: ['latin'] })
const roboto = Roboto({ weight:"400", subsets: ['latin'] })

const Header = () => {
    return (
        <div className="container !pb-0 !max-w-[1450px] flex flex-col justify-center pt-2 mx-auto sm:py-6 lg:py-12 lg:flex-row lg:justify-between text-left bg-gradient-to-r from-black to-[#5cd2b940]">
            {/* bg-[url('../public/bg.png')] */}
            <div className="flex flex-col justify-center p-6 text-left rounded-sm lg:max-w-md xl:max-w-lg lg:text-left lg:ml-32">
                <p className={`${poppins.className} text-[#5CD2B9]`}>CREATIVE AGENCY</p>
                <h1 className="!text-5xl font-extrabold leading-none sm:text-4xl">WE ARE <span className='text-[#5CD2B9]'>CREATIVE</span> <br /> DESIGN AGENCY
                </h1>
                <div className="h-1 bg-[#5CD2B9] w-16 !m-0"></div>
                <p className={`${roboto.className} mt-6 mb-8 text-base font-medium sm:mb-12`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis quam eget ex blandit cursus. Proin est magna, semper a porta sed, lacinia eu lectus.
                    {/* <br className="hidden md:inline lg:hidden">turpis pulvinar, est scelerisque ligula sem </br> */}
                </p>
            </div>
            <div className="flex items-center justify-center pt-6 pl-6">
                {/* mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 */}
                <Image src={portrait} alt="" className="object-contain -mt-40 lg:h-[500px] xl:pl-[415px]"/>
            </div>
        </div>
    )
}

export default Header