'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

import Cookies from 'js-cookie';

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const router = useRouter();
	const pathname = usePathname();

	const userSession = Cookies.get('xtfs');

	useEffect(() => {
		if (!userSession) {
			if (pathname.split('/')[1] !== 'auth') {
				router.push('/auth/login');
			}
		} else {
			if (pathname === '/auth/login' || pathname === '/auth/register') {
				router.push('/profile');
			}
		}
	}, [userSession, router, pathname]);

	return <>{children}</>;
};

export default AuthProvider;
