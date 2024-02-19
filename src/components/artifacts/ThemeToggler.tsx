'use client';

import { useEffect, useState } from 'react';

import Cookies from 'js-cookie';
import { useTheme } from 'next-themes';

type ThemeTogglerPropsType = {
	className: string;
};

const ThemeToggler: React.FC<ThemeTogglerPropsType> = ({ className }) => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	const handleThemeToggle = () => {
		theme === 'dark' ? setTheme('light') : setTheme('dark');

		Cookies.set('theme', theme as string);
	};

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<label className={`z-[2] inline-flex items-center cursor-pointer ${className}`} onClick={handleThemeToggle}>
			<span className='me-3 text-sm font-medium'>Light</span>

			<input type='checkbox' value='' className='sr-only peer' />
			<div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-2 peer-focus:ring-primary-300 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-200"></div>

			<span className='ms-3 text-sm font-medium'>Dark</span>
		</label>
	);
};

export default ThemeToggler;
