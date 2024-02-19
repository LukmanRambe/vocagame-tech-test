'use client';

import { ToastProvider } from '@/hooks/useToast';

import ReduxProvider from '@/redux/ReduxProvider';
import Cookies from 'js-cookie';
import { ReactNode, useEffect } from 'react';
import AuthProvider from './AuthProvider';
import ThemeProvider from './ThemeProvider';

const Providers = ({ children }: { children: ReactNode }) => {
	useEffect(() => {
		Cookies.remove('xtfs');
		Cookies.set('users', JSON.stringify([]));
		Cookies.set('user', JSON.stringify({ id: '', username: '', password: '', phoneNumber: '' }));
	}, []);

	return (
		<ReduxProvider>
			<AuthProvider>
				<ThemeProvider>
					<ToastProvider>{children}</ToastProvider>
				</ThemeProvider>
			</AuthProvider>
		</ReduxProvider>
	);
};

export default Providers;
