import React, { useState } from 'react'
import { Menu } from 'lucide-react'
import {X} from 'lucide-react'

export default function Navbar() {

    const [menuToggle, setMenuToggle] = useState<boolean>(false)

    const handleClick = () => {
        setMenuToggle((state) => {
            return !state
        }
        )
        console.log(menuToggle);
    }

    return (
        <nav>
            <header className="fixed w-full">
                <nav>
                    <div
                        className="flex justify-between py-3 px-4 h-16 bg-slate-300 rounded-b-md"
                    >
                        <a href="/">
                            <img src="Logo1.png" width={150} height={150} alt="logo" />
                        </a>
                        <li className="hidden py-2 space-x-4 text-xl lg:visible lg:flex ">
                            <ul>
                                <a className="hover:text-gray-600" href="/">Home</a>
                            </ul>
                            <ul>
                                <a className="hover:text-gray-600" href="/about">About</a>
                            </ul>
                            <ul>
                                <a className="hover:text-gray-600" href="/leadership">Leadership</a>
                            </ul>
                            <ul>
                                <a className="hover:text-gray-600" href="/keynote">Keynote</a>
                            </ul>
                            <ul>
                                <a className="hover:text-gray-600" href="/submissions">Submission</a>
                            </ul>
                            <ul>
                                <a className="hover:text-gray-600" href="/contact">To Contact</a>
                            </ul>
                        </li>
                        <div className='flex'>
                            <div>
                                <img src="g20.png" width={80} alt="g20" />
                            </div>
                            <div className='lg:hidden p-2 rounded-md cursor-pointer bg-slate-300 hover:bg-slate-200'>
                                <Menu onClick={handleClick} />
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            {menuToggle? <MenuDisplay/>:<></>}
        </nav>
    )
}

function MenuDisplay() {
    return (
        <div>
            <div className='absolute pt-8 pb-8 top-16 right-0 w-1/2 h-1/4 bg-slate-200 opacity-95 justify-center items-center flex flex-col text-[21px] rounded-b-2xl'>
            <li className=' list-none'>
                <ul className=''>
                    <a className="hover:text-gray-600 " href="/">Home</a>
                </ul>
                <ul className=''>
                    <a className="hover:text-gray-600" href="/about">About</a>
                </ul>
                <ul className=''>
                    <a className="hover:text-gray-600" href="/leadership">Leadership</a>
                </ul>
                <ul className=''>
                    <a className="hover:text-gray-600" href="/keynote">Keynote</a>
                </ul>
                <ul className=''>
                    <a className="hover:text-gray-600" href="/submissions">Submission</a>
                </ul>
                <ul className=''>
                    <a className="hover:text-gray-600" href="/contact">To Contact</a>
                </ul>
            </li>
        </div>
        </div>
        
    )
}