'use client';

import Image from 'next/image';

import { AppDispatch } from '@/redux/store';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import Button from '@/components/artifacts/Button';
import FormGroup from '@/components/artifacts/FormGroup';
import { useToast } from '@/hooks/useToast';
import { login } from '@/redux/features/auth-slice';
import { LoginFormValues } from '@/ts/types/schema/LoginSchema';
import { loginSchema } from '@/utils/schemaValidation/auth/loginSchema';
import Cookies from 'js-cookie';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Login = () => {
	const router = useRouter();
	const dispatch = useDispatch<AppDispatch>();
	const { addToast } = useToast();
	const users = Cookies.get('users') && JSON.parse(Cookies.get('users') as string);

	const {
		register,
		handleSubmit,
		watch,
		setValue,
		formState: { errors, isSubmitting },
	} = useForm<LoginFormValues>({
		mode: 'onChange',
		resolver: yupResolver(loginSchema),
	});

	const handleLogin = (formData: LoginFormValues) => {
		const userExist = users.filter((user: { username: string }) => user.username === formData.username);

		if (userExist.length <= 0) {
			addToast({ type: 'error', message: 'User not found. Please use a valid, registered User!' });
			return;
		}

		dispatch(login(formData));
		router.push('/profile');
	};

	return (
		<section className='w-full min-h-dvh flex items-center justify-between bg-primary-600'>
			<div className='lg:max-w-lg xl:max-w-3xl min-h-dvh hidden lg:flex flex-col items-center justify-center px-[75px] gap-20'>
				<Image
					src='https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/vocagame/logohijau-3a71-2a9e.webp'
					width={250}
					height={250}
					alt='Logo'
					priority
				/>

				<p className='text-white'>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci rerum laudantium iste minus itaque maiores.
					Beatae nam quae in at repellendus sunt ad ex quam, ipsum officiis, doloremque vitae eos.
				</p>
			</div>

			<div className='w-full min-h-dvh flex flex-col justify-center px-4 sm:px-6 md:px-12 xl:px-20 bg-white'>
				<article className='mb-10'>
					<h1 className='text-[44px] font-extrabold tracking-tight text-heading md:text-[56px] lg:text-[64px]'>
						Silakan Login
					</h1>

					<p className='mt-2 text-base text-gray-600'>Masukkan Username dan Password anda untuk masuk</p>
				</article>

				<form onSubmit={handleSubmit(handleLogin)} className='w-full flex flex-col gap-5'>
					<FormGroup
						{...register('username')}
						id='username'
						label='Username'
						type='text'
						placeholder='Username anda'
						value={watch('username')}
						isInvalid={!!errors.username}
						errorMessage={errors.username?.message}
						onChange={(event) => setValue('username', event.target.value)}
					/>

					<FormGroup
						{...register('password')}
						id='password'
						label='Password'
						type='text'
						placeholder='Password anda'
						value={watch('password')}
						isInvalid={!!errors.password}
						errorMessage={errors.password?.message}
						autoComplete='off'
						onChange={(event) => setValue('password', event.target.value)}
					/>

					<Button
						type='submit'
						text='Masuk Sekarang'
						className='font-medium tracking-wide text-primary-500 mt-10 bg-primary-50 rounded-[88px] shadow-lg py-5 hover:bg-primary-100 active:bg-primary-300 focus-visible:bg-primary-100 active:text-white outline-none transition-colors duration-200 ease-in-out'
						isLoading={isSubmitting}
					/>

					<span className='text-gray-600 text-center mt-5'>
						Belum punya akun?{' '}
						<Link
							href='/auth/register'
							className='text-primary-500 font-medium tracking-wide hover:text-primary-600 focus-visible:text-primary-600 active:text-primary-700 outline-none transition-colors duration-200 ease-in-out'>
							Daftar Sekarang
						</Link>
					</span>
				</form>
			</div>
		</section>
	);
};

export default Login;
