import { Card } from 'flowbite-react'
import Image from 'next/image'
import React from 'react'
import { Work_Sans } from '@next/font/google'
const worksan = Work_Sans({ weight: "600", subsets: ['latin'] })
import identity from '../../public/identity.png'
import happy from '../../public/happy.png'
import project from '../../public/project-done.png'
import award from '../../public/award.png'
import team from '../../public/team.png'

const Clients = () => {
    return (
        <div className='container bg-gradient-to-r from-black to-[#5cd2b940] grid md:grid-cols-4'>
            <div className="max-w-[200px]">
                <Card className='text-center !p-0 !bg-transparent border-none'>
                    <Image src={project} alt="" />
                    <h5 className={`${worksan.className} text-[#5CD2B9] text-md font-bold tracking-tight`}>
                        150<span className='text-white'>+</span>
                    </h5>
                    <p className={`${worksan.className} font-normal`}>
                        Project Done
                    </p>
                </Card>
            </div>
            <div className="max-w-[200px]">
                <Card className='text-center !p-0 !bg-transparent border-none'>
                    <Image src={happy} alt="" />
                    <h5 className={`${worksan.className} text-[#5CD2B9] text-md font-bold tracking-tight`}>
                        75<span className='text-white'>+</span>
                    </h5>
                    <p className={`${worksan.className} font-normal`}>
                        Award Winning
                    </p>
                </Card>
            </div>
            <div className="max-w-[200px]">
                <Card className='text-center !p-0 !bg-transparent border-none'>
                    <Image src={award} alt="" />
                    <h5 className={`${worksan.className} text-[#5CD2B9] text-md font-bold tracking-tight`}>
                        20<span className='text-white'>+</span>
                    </h5>
                    <p className="font-normal">
                        Award Winning
                    </p>
                </Card>
            </div>
            <div className="max-w-[200px]">
                <Card className='text-center !p-0 !bg-transparent border-none'>
                    <Image src={team} alt="" />
                    <h5 className={`${worksan.className} text-[#5CD2B9] text-md font-bold tracking-tight`}>
                        45<span className='text-white'>+</span>
                    </h5>
                    <p className="font-normal">
                        Team Members
                    </p>
                </Card>
            </div>
        </div>
    )
}

export default Clients