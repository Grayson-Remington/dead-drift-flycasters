import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import React, { useState } from 'react';
import { Transition } from '@headlessui/react';

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<nav className=' w-full bg-yellow-500 text-black h-[72px]'>
			<div className='flex w-full px-4 sm:px-6 lg:px-8 justify-between items-stretch'>
				<div className='flex justify-between items-stretch h-16 w-full'>
					<div className='p-0 m-0 list-none gap-9 items-stretch h-full hidden min-[900px]:flex'>
						<CustomLink
							to='/'
							className='overflow-hidden text-inherit h-full flex items-center p-2 active:bg-white nav-button leading-4'
						>
							Home
						</CustomLink>
						<CustomLink
							to='/team'
							className='text-inherit h-full flex items-center p-2 text-center hover:bg-white'
						>
							The Team
						</CustomLink>
					</div>

					<div className='flex gap-2 p-4'>
						<img
							className='aspect-auto h-10 hidden sm:block'
							src='./assets/dead-drift-river.png'
							alt=''
						/>
						<img
							className='aspect ratio-auto h-10'
							src='./assets/dead-drift-logo.png'
							alt=''
						/>
					</div>
					<div className='p-0 m-0 list-none hidden min-[900px]:flex gap-9 items-stretch h-full'>
						<CustomLink
							to='/'
							className='text-inherit h-full flex items-center p-2 active:bg-white nav-button'
						>
							{' '}
							Merchandise
						</CustomLink>
						<CustomLink
							to='/team'
							className='text-inherit h-full flex items-center p-2 text-center hover:bg-white'
						>
							Upcoming Events
						</CustomLink>
					</div>
					<button
						className='min-[900px]:hidden border inline-flex items-center justify-center'
						onClick={() => setIsOpen(!isOpen)}
						type='button'
						aria-controls='mobile-menu'
						aria-expanded='false'
					>
						{!isOpen ? <div>Hamburger</div> : <div>Hotdog</div>}
					</button>
				</div>
			</div>
			<Transition
				show={isOpen}
				enter='transition ease-out duration-100 transform'
				enterFrom='opacity-0 scale-95'
				enterTo='opacity-100 scale-100'
				leave='transition ease-in duration-75 transform'
				leaveFrom='opacity-100 scale-100'
				leaveTo='opacity-0 scale-95'
			>
				{(ref) => (
					<div
						className='md:hidden w-screen bg-black'
						id='mobile-menu'
					>
						<div
							ref={ref}
							className=''
						>
							<CustomLink
								to='/'
								className='hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium'
							>
								Merchandise
							</CustomLink>
						</div>
					</div>
				)}
			</Transition>
		</nav>
	);
}

function CustomLink({ to, children, ...props }) {
	const resolvedPath = useResolvedPath(to);
	const isActive = useMatch({ path: resolvedPath.pathname, end: true });
	return (
		<li className={isActive ? 'active' : ''}>
			<Link
				to={to}
				{...props}
			>
				{children}
			</Link>
		</li>
	);
}
