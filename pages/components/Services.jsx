import React from 'react'
import { Poppins } from '@next/font/google'
import { Roboto } from '@next/font/google'
import { Button, Card } from 'flowbite-react'
const poppins = Poppins({ weight: "600", subsets: ['latin'] })
const roboto = Roboto({ weight: "400", subsets: ['latin'] })
import identity from '../../public/identity.png'
import design from '../../public/design.png'
import ui from '../../public/ui.png'
import video from '../../public/video.png'
import Image from 'next/image'

const Services = () => {
    return (
        <div className='mt-36 container grid md:grid-cols-2'>
            <div className="flex flex-col justify-center p-6 text-left rounded-sm lg:max-w-md xl:max-w-lg lg:text-left lg:ml-32">
                <p className={`${poppins.className} text-[#5CD2B9]`}>OUR SERVICES</p>
                <h1 className="!text-5xl font-extrabold leading-none sm:text-4xl">What we <span className='text-[#5CD2B9]'>do.</span>
                </h1>
                <div className="h-1 bg-[#5CD2B9] w-16 !m-0"></div>
                <p className={`${roboto.className} mt-6 mb-8 text-base font-medium sm:mb-12`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis quam eget ex blandit cursus. Proin est magna, semper a porta sed, lacinia eu lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis quam eget ex blandit cursus. Proin est magna, semper a porta sed, lacinia eu lectus.
                    {/* <br className="hidden md:inline lg:hidden">turpis pulvinar, est scelerisque ligula sem </br> */}
                </p>
                <Button className='!bg-[#5CD2B9] w-[154px] !rounded-none'>VIEW ALL</Button>
            </div>
            <div className='grid grid-cols-2 gap-4 p-6'>
                <div className="max-w-[200px]">
                    <Card className='text-center !p-0 !bg-[#0C0C0C] border-none'>
                        <Image src={identity} alt="" />
                        <h5 className="text-md font-bold tracking-tight">
                            Brand Identity
                        </h5>
                        <p className="font-normal">
                            cursus. Proin est magna, semper a porta sed, lacinia eu lectus.
                        </p>
                    </Card>
                </div>
                <div className="max-w-[200px] mt-4">
                    <Card className='text-center !p-0 bg-gradient-to-b from-black to-[#5CD2B9] border-none'>
                        <Image src={design} alt="" />
                        <h5 className="text-md font-bold tracking-tight">
                            Website Design
                        </h5>
                        <p className="font-normal">
                            cursus. Proin est magna, semper a porta sed, lacinia eu lectus.
                        </p>
                    </Card>
                </div>
                <div className="max-w-[200px] -mt-4">
                    <Card className='text-center !p-0 bg-gradient-to-b from-black to-[#5CD2B9] border-none'>
                        <Image src={ui} alt="" />
                        <h5 className="text-md font-bold tracking-tight">
                            UI & UX Design
                        </h5>
                        <p className="font-normal">
                            cursus. Proin est magna, semper a porta sed, lacinia eu lectus.
                        </p>
                    </Card>
                </div>
                <div className="max-w-[200px]">
                    <Card className='text-center !p-0 !bg-[#0C0C0C] border-none'>
                        <Image src={video} alt="" />
                        <h5 className="text-md font-bold tracking-tight">
                            Video Marketing
                        </h5>
                        <p className="font-normal">
                            cursus. Proin est magna, semper a porta sed, lacinia eu lectus.
                        </p>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Services