import { logout } from '@/redux/features/auth-slice';
import { AppDispatch } from '@/redux/store';
import { sidebarMenus } from '@/utils/variables/data';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { IoLogOut } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import Button from '../artifacts/Button';

const Sidebar = () => {
	const [isShown, setIsShown] = useState<boolean>(false);

	const router = useRouter();
	const pathname = usePathname();
	const dispatch = useDispatch<AppDispatch>();
	const activePage = pathname.split('/')[1];

	const handleLogout = () => {
		dispatch(logout());

		router.push('/auth/login');
	};

	return (
		<>
			<aside
				id='sidebar'
				className={`w-[calc(100%-2.5rem)] sm:w-72 lg:max-w-[200px] lg:relative flex flex-col justify-between inset-0 gap-3 transition-all duration-300 ease-in-out min-h-full bg-white z-50 translate-x-0 ${
					isShown ? 'fixed translate-x-0 px-3 pt-5 lg:p-0' : 'hidden lg:block z-0 -translate-x-full'
				}`}>
				<button
					onClick={() => setIsShown(!isShown)}
					data-drawer-target='sidebar'
					data-drawer-toggle='sidebar'
					aria-controls='sidebar'
					type='button'
					className='w-fit inline-flex items-center p-2 text-sm text-primary-500 bg-primary-50 rounded-lg lg:hidden hover:bg-primary-100 focus:outline-none focus:ring-2 focus:ring-primary-200 mb-5'>
					<svg
						className='w-6 h-6'
						aria-hidden='true'
						fill='currentColor'
						viewBox='0 0 20 20'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							clipRule='evenodd'
							fillRule='evenodd'
							d='M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z'></path>
					</svg>
				</button>

				<div className='flex flex-col justify-between h-full'>
					<div>
						{sidebarMenus.map((menu) => (
							<Link
								key={menu.href}
								href={menu.href}
								className={`flex gap-3 items-center font-semibold text-primary-500 rounded-lg p-3 hover:bg-primary-100/70 active:bg-primary-100 focus-visible:bg-primary-100/70 outline-none transition-colors duration-200 ease-in-out ${
									activePage ? 'bg-primary-50' : 'bg-transparent'
								}`}>
								<span>{menu.icon}</span>
								<span className='text-base font-medium'>{menu.name}</span>
							</Link>
						))}
					</div>

					<div>
						<div className=''>
							<div className='inline-block w-full min-w-[1em] h-[2px] self-stretch bg-gray-200 mb-1' />
						</div>

						<Button
							type='button'
							text='Logout'
							icon={<IoLogOut className='w-7 h-7 rotate-180' />}
							className='w-full flex gap-3 items-center font-semibold text-gray-500 rounded-lg p-3 hover:text-red-500 hover:bg-red-100/70 active:bg-red-100 focus-visible:bg-red-100/70 outline-none transition-colors duration-200 ease-in-out mb-5'
							onClick={handleLogout}
						/>
					</div>
				</div>
			</aside>

			{isShown && <div className='fixed block lg:hidden inset-0 bg-black bg-opacity-25 z-[49] h-screen w-screen' />}

			<button
				onClick={() => setIsShown(!isShown)}
				data-drawer-target='sidebar'
				data-drawer-toggle='sidebar'
				aria-controls='sidebar'
				type='button'
				className='w-fit inline-flex items-center p-2 text-sm text-primary-500 bg-primary-50 shadow-md rounded-lg lg:hidden hover:bg-primary-100 focus:outline-none focus:ring-2 focus:ring-primary-200'>
				<svg
					className='w-6 h-6'
					aria-hidden='true'
					fill='currentColor'
					viewBox='0 0 20 20'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						clipRule='evenodd'
						fillRule='evenodd'
						d='M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z'></path>
				</svg>

				<span className='ms-2 font-semibold capitalize'>{activePage}</span>
			</button>
		</>
	);
};

export default Sidebar;
