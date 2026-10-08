import Hamburger from '../assets/icon-menu.svg'
import Close from '../assets/icon-close.svg'
import { useState } from 'react'

export function Header () {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div
            className="flex justify-between items-center py-6 px-12 font-inter border-b border-blue-500">
            <ul className="text-white text-[14px] list-disc pl-5">
                <li>Bridge Collective</li>
            </ul>
            <button
                type="button"
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="cursor-pointer"
            >
                <img
                    src={isMenuOpen ? Close : Hamburger}
                    alt=""
                />
            </button>

            {isMenuOpen && (
            <nav className="fixed h-110 md:h-screen bg-blue-600 border-t border-blue-500 p-12 text-white font-medium top-0 inset-y-0 right-0 w-full md:w-1/4 mt-18">
                <ul className="flex flex-col gap-4 text-center md:text-right text-3xl">
                    <li><a href="" className="hover:underline">About</a></li>
                    <li><a href="" className="hover:underline">Our Work</a></li>
                    <li><a href="" className="hover:underline">Partners</a></li>
                    <li><a href="" className="hover:underline">Annual Report</a></li>
                    <li><a href="" className="hover:underline">Donate</a></li>
                </ul>
            </nav>
            )}
        </div>
    )
}