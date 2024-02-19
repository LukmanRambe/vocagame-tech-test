import { ReactNode, createContext, useContext, useEffect, useState } from 'react';

import Toast from '../components/artifacts/Toast';

type ToastContextProps = {
	children: ReactNode;
};

export type ToastState = {
	id?: string;
	message: string;
	duration?: number;
	type: 'success' | 'error';
};

type ToastContextType = {
	addToast: ({ message, type, duration }: ToastState) => void;
};

const ToastContext = createContext<ToastContextType>({
	addToast: () => {},
});

export const ToastProvider = ({ children }: ToastContextProps) => {
	const [toasts, setToasts] = useState<ToastState[]>([]);

	const addToast = ({ message, type, duration = 5000 }: ToastState) => {
		setToasts((prevToasts) => [
			...prevToasts,
			{
				type,
				message,
				duration,
				id: String(new Date(Date.now()).getMilliseconds()),
			},
		]);
	};

	useEffect(() => {
		if (toasts.length > 0) {
			const timer = setTimeout(() => {
				setToasts((prevToasts) => prevToasts.slice(1));
			}, toasts[0].duration);

			return () => clearTimeout(timer);
		}
	}, [toasts]);

	return (
		<ToastContext.Provider value={{ addToast }}>
			{children}
			{toasts.map((toast, index) => {
				return <Toast key={index} {...toast} />;
			})}
		</ToastContext.Provider>
	);
};

export const useToast = () => {
	const context = useContext(ToastContext);
	if (!context) {
		throw new Error('useToast must be used within a ToastProvider');
	}
	return context;
};
