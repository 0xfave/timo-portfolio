import React from 'react'
import logo from '../../public/logo.jpg'
import Link from 'next/link'
import { Navbar } from 'flowbite-react'

const Navgation = () => {
    return (
        <Navbar
            fluid={true}
            rounded={true}
            className="!bg-black"
        >
            <Navbar.Brand href="https://flowbite.com/" className='ml-0 lg:ml-32'>
                <img
                    src="logo.jpg"
                    className="mr-3 h-6 sm:h-9"
                    alt="Flowbite Logo"
                />
                {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    Flowbite
                </span> */}
            </Navbar.Brand>
            <div className="flex !mr-0">
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link
                    href="/navbars"
                    active={true}
                    className="!text-[#F9F9F9]"
                >
                    Home
                </Navbar.Link>
                <Navbar.Link href="/navbars" className="!text-[#F9F9F9]">
                    Services
                </Navbar.Link>
                <Navbar.Link href="/Aboutus" className="!text-[#F9F9F9]">
                    About
                </Navbar.Link>
                {/* <Navbar.Link href="/navbars" className="!text-[#F9F9F9]">
                    Pricing
                </Navbar.Link> */}
                <Navbar.Link href="/navbars" className="!text-[#F9F9F9]">
                    Contact
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navgation