'use client';

import { AppDispatch } from '@/redux/store';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import Button from '@/components/artifacts/Button';
import FormGroup from '@/components/artifacts/FormGroup';
import { useToast } from '@/hooks/useToast';
import { register as reduxRegister } from '@/redux/features/auth-slice';
import { RegisterFormValues } from '@/ts/types/schema/RegisterSchema';
import { registerSchema } from '@/utils/schemaValidation/auth/registerSchema';
import Cookies from 'js-cookie';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Register = () => {
	const router = useRouter();
	const { addToast } = useToast();
	const users = Cookies.get('users') && JSON.parse(Cookies.get('users') as string);
	const dispatch = useDispatch<AppDispatch>();

	const {
		register,
		handleSubmit,
		watch,
		setValue,
		formState: { errors, isSubmitting },
	} = useForm<RegisterFormValues>({
		mode: 'onChange',
		resolver: yupResolver(registerSchema),
	});

	const handleLogin = (formData: RegisterFormValues) => {
		const userExist = users.filter((user: { username: string }) => user.username === formData.username);

		if (userExist.length > 0) {
			addToast({ type: 'error', message: 'User already exists!' });

			return;
		}

		dispatch(reduxRegister(formData));
		router.push('/auth/login');
	};

	return (
		<section className='relative w-full min-h-dvh flex items-center justify-center bg-primary-50/65'>
			<Image
				src='https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/vocagame/logohijau-3a71-2a9e.webp'
				width={300}
				height={300}
				alt='Logo'
				priority
				className='hidden xl:block absolute top-10 left-10 object-cover'
			/>

			<Image src='/assets/oval.svg' width={500} height={500} alt='oval' priority className='absolute top-0 left-0' />

			<div className='w-full xl:max-w-2xl flex flex-col justify-center px-4 sm:px-6 md:px-12 xl:px-24 py-12'>
				<article className='mb-10'>
					<h1 className='text-[44px] font-extrabold tracking-tight text-heading md:text-[56px] lg:text-[64px]'>
						Daftarkan Akun
					</h1>

					<p className='mt-2 text-base text-gray-600'>Daftar akun anda dengan mengisi form dibawah</p>
				</article>

				<form onSubmit={handleSubmit(handleLogin)} className='w-full flex flex-col gap-5'>
					<FormGroup
						{...register('username')}
						id='username'
						label='Username'
						type='text'
						placeholder='Masukkan Username anda'
						isInvalid={!!errors.username}
						errorMessage={errors.username?.message}
						isRegister
						value={watch('username')}
						onChange={(event) => setValue('username', event.target.value)}
					/>

					<FormGroup
						{...register('phoneNumber')}
						id='phoneNumber'
						label='Nomor Handphone'
						type='tel'
						placeholder='Masukkan Nomor Handphone anda'
						isInvalid={!!errors.phoneNumber}
						errorMessage={errors.phoneNumber?.message}
						isRegister
						value={watch('phoneNumber')}
						onChange={(event) => setValue('phoneNumber', event.target.value)}
					/>

					<FormGroup
						{...register('password')}
						id='password'
						label='Password'
						type='password'
						placeholder='Masukkan Password anda'
						isInvalid={!!errors.password}
						errorMessage={errors.password?.message}
						isRegister
						value={watch('password')}
						onChange={(event) => setValue('password', event.target.value)}
						autoComplete='off'
					/>

					<FormGroup
						{...register('confirmPassword')}
						id='confirmPassword'
						label='Konfirmasi Password'
						type='password'
						placeholder='Masukkan kembali Password anda'
						isInvalid={!!errors.confirmPassword}
						errorMessage={errors.confirmPassword?.message}
						isRegister
						value={watch('confirmPassword')}
						onChange={(event) => setValue('confirmPassword', event.target.value)}
						autoComplete='off'
					/>

					<Button
						type='submit'
						text='Daftar Sekarang'
						className='font-medium tracking-wide text-primary-600 hover:text-white active:text-white mt-10 bg-primary-200/65 rounded-[88px] shadow-lg py-5 hover:bg-primary-400 active:bg-primary-500 focus-visible:bg-primary-400 outline-none transition-colors duration-200 ease-in-out'
						isLoading={isSubmitting}
					/>

					<span className='text-center mt-5'>
						Sudah punya akun?{' '}
						<Link
							href='/auth/login'
							className='text-primary-500 font-medium tracking-wide hover:text-primary-600 focus-visible:text-primary-600 active:text-primary-700 outline-none transition-colors duration-200 ease-in-out'>
							Login Sekarang
						</Link>
					</span>
				</form>
			</div>
		</section>
	);
};

export default Register;
