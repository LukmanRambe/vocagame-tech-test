'use client';

import { useEffect, useState } from 'react';

import { ThemeProvider as NextThemeProvider } from 'next-themes';

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	const [mounted, setMounted] = useState<boolean>(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return <>{children}</>;
	}

	return (
		<NextThemeProvider enableSystem={false} attribute='class'>
			{children}
		</NextThemeProvider>
	);
};

export default ThemeProvider;
