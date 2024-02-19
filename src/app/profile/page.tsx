'use client';

import Button from '@/components/artifacts/Button';
import FormGroup from '@/components/artifacts/FormGroup';
import { editProfile } from '@/redux/features/auth-slice';
import { AppDispatch } from '@/redux/store';
import { User } from '@/ts/types/main/User';
import { EditProfileFormValues } from '@/ts/types/schema/EditProfile';
import { editProfileSchema } from '@/utils/schemaValidation/auth/editProfileSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { GrEdit } from 'react-icons/gr';
import { useDispatch } from 'react-redux';

const Profile = () => {
	const [userData, setUserData] = useState<User>({
		id: '',
		username: '',
		phoneNumber: '',
		password: '',
	});

	const dispatch = useDispatch<AppDispatch>();

	const {
		register,
		handleSubmit,
		watch,
		setValue,
		formState: { errors, isSubmitting },
	} = useForm<EditProfileFormValues>({
		mode: 'onChange',
		resolver: yupResolver(editProfileSchema),
		defaultValues: {
			username: userData?.username,
			phoneNumber: userData?.phoneNumber,
		},
	});

	const handleLogin = (formData: EditProfileFormValues) => {
		dispatch(editProfile(formData));
	};

	useEffect(() => {
		const data = (Cookies.get('user') && JSON.parse(Cookies.get('user') as string)) ?? '';

		setUserData(data);
	}, []);

	return (
		<section className='w-full bg-white rounded-lg shadow-xl px-5 xl:px-10 py-8'>
			<div className='flex items-center gap-2 text-heading mb-4'>
				<GrEdit className='w-6 h-6' />
				<h2 className='text-[20px] font-extrabold tracking-tight md:text-[22px] lg:text-[24px]'>Edit Profile</h2>
			</div>

			<div className=''>
				<div className='inline-block w-full min-w-[1em] h-[2px] self-stretch bg-gray-200 mb-6' />
			</div>

			<form onSubmit={handleSubmit(handleLogin)} className='w-full flex flex-col gap-5'>
				<FormGroup
					{...register('username')}
					id='username'
					label='Username'
					type='text'
					placeholder='Masukkan Username anda'
					isInvalid={!!errors.username}
					errorMessage={errors.username?.message}
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
					value={watch('phoneNumber')}
					onChange={(event) => setValue('phoneNumber', event.target.value)}
				/>

				<FormGroup
					{...register('oldPassword')}
					id='oldPassword'
					label='Old Password'
					type='password'
					placeholder='Old Password'
					isInvalid={!!errors.oldPassword}
					errorMessage={errors.oldPassword?.message}
					value={watch('oldPassword')}
					onChange={(event) => setValue('oldPassword', event.target.value)}
					autoComplete='off'
				/>

				<FormGroup
					{...register('newPassword')}
					id='newPassword'
					label='New Password'
					type='password'
					placeholder='New Password'
					isInvalid={!!errors.newPassword}
					errorMessage={errors.newPassword?.message}
					value={watch('newPassword')}
					onChange={(event) => setValue('newPassword', event.target.value)}
					autoComplete='off'
				/>

				<Button
					type='submit'
					text='Edit Profile'
					className='w-full sm:w-fit font-medium tracking-wide text-primary-500 mt-10 bg-primary-50 rounded-[30px] shadow-lg px-8 h-[48px] hover:bg-primary-100 active:bg-primary-300 focus-visible:bg-primary-100 active:text-white outline-none transition-colors duration-200 ease-in-out'
					isLoading={isSubmitting}
				/>
			</form>
		</section>
	);
};

export default Profile;
