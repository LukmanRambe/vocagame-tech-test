import Image from 'next/image';

import { CgProfile } from 'react-icons/cg';
import ThemeToggler from '../artifacts/ThemeToggler';

const Navbar = () => {
	return (
		<nav className='flex justify-between items-center px-4 py-5 sm:px-6 md:px-12 xl:px-24 bg-primary-600'>
			<Image
				src='https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/vocagame/logohijau-3a71-2a9e.webp'
				width={100}
				height={60}
				alt='Logo'
				priority
				className='w-[100px] h-[60px] bg-white p-2 rounded-xl object-cover'
			/>

			<div className='flex gap-5'>
				<ThemeToggler className='relative text-white' />

				<CgProfile className='w-10 h-10 text-white' />
			</div>
		</nav>
	);
};

export default Navbar;
