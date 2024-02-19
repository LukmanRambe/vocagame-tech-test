import ThemeToggler from '@/components/artifacts/ThemeToggler';
import React from 'react';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className='relative h-full w-full'>
			<ThemeToggler className='absolute top-5 right-5 text-black dark:text-white' />
			{children}
		</main>
	);
};

export default AuthLayout;
