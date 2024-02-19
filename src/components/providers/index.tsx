'use client';

import { ToastProvider } from '@/hooks/useToast';

import ReduxProvider from '@/redux/ReduxProvider';
import { ReactNode } from 'react';
import AuthProvider from './AuthProvider';
import ThemeProvider from './ThemeProvider';

const Providers = ({ children }: { children: ReactNode }) => {
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
