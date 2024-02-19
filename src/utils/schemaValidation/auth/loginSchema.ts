import * as Yup from 'yup';

import { LoginFormValues } from '@/ts/types/schema/LoginSchema';

export const loginSchema: Yup.ObjectSchema<LoginFormValues> = Yup.object().shape({
	username: Yup.string().required('Username tidak boleh kosong!'),
	password: Yup.string().required('Password tidak boleh kosong!').min(6, 'Password minimal berisi 6 karakter!'),
});
