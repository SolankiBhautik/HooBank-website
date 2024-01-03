import React from 'react'
import { useState } from 'react'
import { close, logo, menu } from '../assets'
import { navLinks } from '../constants'

const Navbar = () => {

	const [toggle, settoggle] = useState(false)

	return (
		<nav className='w-full flex py-6 justify-between items-center navbar'>
			<img src={logo} alt="BlueCollar" className='w-[124px] h-[32px]' />

			<ul className='list-none sm:flex hidden justify-end items-center flex-1'>
				{navLinks.map((nav, index) => (
					<li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] text-white  ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}>
						<a href={`#${nav.id}`} className=' link'>
							{nav.title}
						</a>
					</li>
				))}
			</ul>

			<div className='sm:hidden flex flex-1 justify-end items-center'>
				<img src={toggle ? close : menu}
					alt="hambergar"
					className='w-28px h-28px object-contain'
					onClick={() => settoggle((prev) => !prev)} />
			</div>

			<div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebarmicrosoft `}>
				<ul className='list-none flex  justify-end items-center flex-1 flex-col'>
					{navLinks.map((nav, index) => (
						<li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] text-white  ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'}`}>
							<a href={`#${nav.id}`} className=' link'>
								{nav.title}
							</a>
						</li>
					))}
				</ul>
			</div>
		</nav>
	)
}

export default Navbar