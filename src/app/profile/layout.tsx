'use client';

import Button from '@/components/artifacts/Button';
import Footer from '@/components/main/Footer';
import Navbar from '@/components/main/Navbar';
import Sidebar from '@/components/main/Sidebar';
import { User } from '@/ts/types/main/User';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import { GrEdit } from 'react-icons/gr';

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
	const [userData, setUserData] = useState<User>({
		id: '',
		username: '',
		phoneNumber: '',
		password: '',
	});

	useEffect(() => {
		const data = (Cookies.get('user') && JSON.parse(Cookies.get('user') as string)) ?? '';

		setUserData(data);
	}, []);

	return (
		<>
			<Navbar />

			<header className='px-4 py-5 sm:px-6 md:px-12 xl:px-24'>
				<article className='w-full my-10 py-3 pb-5 text-center mx-auto bg-primary-600 rounded-lg'>
					<h1 className='text-[36px] font-extrabold tracking-tight text-white md:text-[40px] lg:text-[48px]'>LOREM</h1>

					<p className='text-white tracking-wide font-normal max-w-md mx-auto'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, tempore magni vel vitae et eligendi
						consequuntur natus reprehenderit porro cumque nihil nobis, incidunt dicta dolore. Voluptas debitis maiores
						repudiandae odit!
					</p>
				</article>

				<article className='w-full flex flex-col sm:flex-row justify-between gap-7 sm:gap-0 xl:items-center'>
					<article className='flex items-center gap-5'>
						<CgProfile className='w-[50px] h-[50px] xl:w-[71px] xl:h-[71px] text-gray-500' />

						<span className='text-black font-bold text-xl'>{userData?.username}</span>
					</article>

					<Button
						type='button'
						text='Edit Profile'
						className='w-full sm:w-fit self-end flex gap-2 items-center justify-center font-semibold text-primary-500 bg-primary-50 rounded-[30px] shadow-lg h-[48px] px-[38px] hover:bg-primary-100 active:bg-primary-300 focus-visible:bg-primary-100 active:text-white outline-none transition-colors duration-200 ease-in-out'
						icon={<GrEdit />}
					/>
				</article>
			</header>

			<main className='flex flex-col lg:flex-row gap-[39px] px-4 sm:px-6 md:px-12 xl:px-24 mt-16'>
				<Sidebar />

				<div className='hidden xl:flex flex-1'>
					<div className='inline-block h-full min-h-[1em] w-[2px] self-stretch bg-gray-200' />
				</div>

				{children}
			</main>

			<Footer />
		</>
	);
};

export default ProfileLayout;
