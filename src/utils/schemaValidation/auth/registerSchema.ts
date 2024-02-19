import * as Yup from 'yup';

import { RegisterFormValues } from '@/ts/types/schema/RegisterSchema';

const phoneNumberRegex =
	/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const registerSchema: Yup.ObjectSchema<RegisterFormValues> = Yup.object().shape({
	username: Yup.string().required('Username tidak boleh kosong!'),
	phoneNumber: Yup.string()
		.required('Phone Number tidak boleh kosong!')
		.min(10, 'Nomor Handphone minimal berisi 10 angka!')
		.matches(phoneNumberRegex, 'Nomor Handphone tidak valid!'),
	password: Yup.string().required('Password tidak boleh kosong!').min(6, 'Password minimal berisi 6 karakter!'),
	confirmPassword: Yup.string()
		.required('Confirm Password tidak boleh kosong!')
		.oneOf([Yup.ref('password')], 'Password dan Konfirmasi Password tidak sesuai!'),
});
