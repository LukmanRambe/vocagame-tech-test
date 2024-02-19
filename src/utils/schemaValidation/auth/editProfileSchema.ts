import { EditProfileFormValues } from '@/ts/types/schema/EditProfile';
import * as Yup from 'yup';

const phoneNumberRegex =
	/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const editProfileSchema: Yup.ObjectSchema<EditProfileFormValues> = Yup.object().shape({
	username: Yup.string().required('Username tidak boleh osong!'),
	phoneNumber: Yup.string()
		.required('Phone Number tidak boleh kosong!')
		.min(10, 'Nomor Handphone minimal berisi 10 angka!')
		.matches(phoneNumberRegex, 'Nomor Handphone tidak valid!'),
	oldPassword: Yup.string().required('Password tidak boleh kosong!').min(6, 'Password minimal berisi 6 karakter!'),
	newPassword: Yup.string()
		.required('Confirm Password tidak boleh kosong!')
		.oneOf([Yup.ref('password')], 'Password dan Konfirmasi Password tidak sesuai!'),
});
