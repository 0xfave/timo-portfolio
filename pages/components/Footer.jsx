import { Card } from 'flowbite-react'
import { Work_Sans } from '@next/font/google'
const worksan = Work_Sans({ weight: "600", subsets: ['latin'] })
import React from 'react'
import { BsTelegram } from "react-icons/bs";

const Footer = () => {
    return (
        <div className={`${worksan} container bg-[#0C0C0C] mt-20`}>
            <div className='grid md:grid-cols-2 pt-20'>
                <div className="max-w-sm">
                    <Card className='!bg-black border-none'>
                        <h5 className="text-2xl font-bold tracking-tight">
                            Have any Project in <br />Mind?
                        </h5>
                        {/* <p className="font-normal text-gray-700 dark:text-gray-400">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis quam
                        </p> */}
                        <a href="https://t.me/nftslife/" className='text-[#5CD2B9]'>
                            <BsTelegram />
                        </a>
                    </Card>
                </div>
                <div>
                    <h5>Let’s find a estimate on your Project.</h5>
                    <form className="w-full max-w-sm">
                        <div className="flex items-center border-b border-[#5CD2B9] py-2">
                            <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Jane Doe" aria-label="Full name" />
                        </div>
                        <div className="flex items-center border-b border-[#5CD2B9] py-2">
                            <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="email" placeholder="Your Email" aria-label="E-mail" />
                        </div>
                        <div className="flex items-center border-b border-[#5CD2B9] py-2">
                            <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Message" aria-label="Message" />
                        </div>

                        <button className="flex-shrink-0 mt-4 bg-[#5CD2B9] hover:bg-teal-700 border-[#5CD2B9] hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
                            Send
                        </button>
                    </form>
                </div>
            </div>

            <div className="text-center pb-10 mt-10">
                <h1>Timo</h1>
                <p>Copyright @Timo 2023 All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer