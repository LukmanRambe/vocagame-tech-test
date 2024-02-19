'use client';

import { useState } from 'react';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';

type FormGroupPropsType = {
	type: string;
	id: string;
	label: string;
	placeholder: string;
	value: string;
	autoComplete?: 'on' | 'off';
	isInvalid: boolean;
	errorMessage?: string;
	isRegister?: boolean;
	onChange: React.ChangeEventHandler<HTMLInputElement>;
};

const FormGroup: React.FC<FormGroupPropsType> = ({
	type,
	id,
	label,
	placeholder,
	value,
	autoComplete,
	isInvalid,
	errorMessage = '',
	isRegister,
	onChange,
}) => {
	const [inputType, setInputType] = useState<{
		password: string;
		confirmPassword: string;
	}>({
		password: 'password',
		confirmPassword: 'password',
	});

	const handleToggleType = (id: string, value: string) => {
		{
			setInputType((prevState) => ({
				...prevState,
				[id]: value === 'text' ? 'password' : 'text',
			}));
		}
	};

	const registerClassname = `w-full text-sm lg:text-base outline-none border  rounded-[68px] p-5 transition-colors duration-200 ease-in-out bg-transparent ${
		isInvalid ? 'border-red-500' : 'border-primary-400 hover:border-primary-500 focus-visible:border-primary-700'
	}`;

	return (
		<div className='w-full flex flex-col gap-3'>
			<label htmlFor={id} className='text-base font-semibold tracking-wide text-[#666666]'>
				{label}
			</label>

			<div className='relative'>
				<input
					type={id === 'password' || id === 'confirmPassword' ? inputType[id] : type}
					id={id}
					placeholder={placeholder}
					autoComplete={autoComplete}
					value={value}
					onChange={onChange}
					className={
						isRegister
							? registerClassname
							: `w-full text-sm lg:text-base outline-none border  rounded-[68px] p-5 transition-colors duration-200 ease-in-out bg-transparent ${
									isInvalid
										? 'border-red-500'
										: 'border-[#d1d5db] hover:border-primary-200 focus-visible:border-primary-500'
							  }`
					}
				/>

				{(id === 'password' || id === 'confirmPassword') && (
					<span
						id={id}
						className='flex items-center absolute inset-y-0 right-4 sm:right-6 cursor-pointer'
						onClick={() => handleToggleType(id, inputType[id])}>
						{inputType[id] === 'text' ? (
							<IoEyeOutline className='w-5 h-5 text-primary-500' />
						) : (
							<IoEyeOffOutline className='w-5 h-5 text-gray-400' />
						)}
					</span>
				)}
			</div>

			{isInvalid && <span className='text-sm text-red-600'>{errorMessage}</span>}
		</div>
	);
};

export default FormGroup;
