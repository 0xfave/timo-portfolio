import React from 'react'
import { Poppins } from '@next/font/google'
import { Roboto } from '@next/font/google'
import Image from 'next/image'
const poppins = Poppins({ weight: "600", subsets: ['latin'] })
const roboto = Roboto({ weight: "400", subsets: ['latin'] })
import nft2dart from '../../public/2d1.jpg'
import nft2dart2 from '../../public/2d.jpg'
import drug from '../../public/3d.jpg'
import turtlers from '../../public/turtlers.jpg'
import web1 from '../../public/web1.jpg'

const Portfolio = () => {
    return (
        <div className='container mt-20'>
            <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg !pr-0">
                <p className={`${poppins.className} text-[#5CD2B9]`}>PORTFOLIO</p>
                <h1 className="!text-5xl font-extrabold leading-none sm:text-4xl">Latest<span className='text-[#5CD2B9]'> Work</span>.</h1>
                <div className="h-1 bg-[#5CD2B9] w-16"></div>
                <p className={`${roboto.className} mt-6 text-sm font-medium`}>
                    Get in touch with both our latest and past works arranged professionally for the purpose of keeping visitors company while their projects are being worked on and to get design inspirations and ideas for upcoming projects.
                </p>
            </div>
            <div className='grid md:grid-cols-2 gap-4 text-center'>
                <div>
                    <h1 className="ml-4 !text-5xl font-extrabold leading-none sm:text-4xl">2D NFT<span className='text-[#5CD2B9]'> ART</span>.</h1>
                    <div className='p-4 md:p-0'>
                        <Image src={nft2dart} alt="" />
                    </div>
                    <div className='md:w-96 m-4 p-2'>
                        <Image src={nft2dart2} alt="" />
                    </div>
                </div>
                <div>
                    <h1 className="ml-4 !text-5xl font-extrabold leading-none sm:text-4xl">3D NFT<span className='text-[#5CD2B9]'> ART</span>.</h1>
                    <div>
                        <Image src={drug} className='p-4 md:p-0' alt="" />
                    </div>
                    <div className='m-4'>
                        <Image src={turtlers} alt="" />
                    </div>
                </div>
                {/* <div>
                    <h1 className="ml-4 !text-5xl font-extrabold leading-none sm:text-4xl">WEB<span className='text-[#5CD2B9]'>SITE</span>.</h1>
                    <Image src={web1} className='p-4' alt="" />
                    <div className='m-4'>
                        <Image src={web1} alt="" />
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Portfolio