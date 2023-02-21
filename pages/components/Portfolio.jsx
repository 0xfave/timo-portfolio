import React from 'react'
import { Poppins } from '@next/font/google'
import { Roboto } from '@next/font/google'
import Image from 'next/image'
const poppins = Poppins({ weight: "600", subsets: ['latin'] })
const roboto = Roboto({ weight: "400", subsets: ['latin'] })
import girl2 from '../../public/girl2.png'
import drug from '../../public/drug.png'

const Portfolio = () => {
    return (
        <div className='container mt-20'>
            <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg !pr-0">
                <p className={`${poppins.className} text-[#5CD2B9]`}>PORTFOLIO</p>
                <h1 className="!text-5xl font-extrabold leading-none sm:text-4xl">Latest<span className='text-[#5CD2B9]'> Work</span>.</h1>
                <div className="h-1 bg-[#5CD2B9] w-16"></div>
                <p className={`${roboto.className} mt-6 text-sm font-medium`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis quam eget ex blandit cursus. Proin est magna, semper a porta sed, lacinia eu lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis quam eget ex blandit cursus. Proin est magna, semper a porta sed, lacinia eu lectus.
                </p>
            </div>
            <div className='grid md:grid-cols-3 gap-4'>
                <div>
                    <Image src={girl2} alt="" />
                </div>
                <div>
                    <Image src={drug} alt="" />
                </div>
                <div>
                    <Image src={girl2} alt="" />
                </div>
                <div>
                    <Image src={girl2} alt="" />
                </div>
                <div>
                    <Image src={drug} alt="" />
                </div>
                <div>
                    <Image src={girl2} alt="" />
                </div>
                <div>
                    <Image src={girl2} alt="" />
                </div>
                <div>
                    <Image src={drug} alt="" />
                </div>
                <div>
                    <Image src={girl2} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Portfolio