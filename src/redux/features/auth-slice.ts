import { User } from '@/ts/types/main/User';
import { EditProfileFormValues } from '@/ts/types/schema/EditProfile';
import { LoginFormValues } from '@/ts/types/schema/LoginSchema';
import { RegisterFormValues } from '@/ts/types/schema/RegisterSchema';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createHash } from 'crypto';
import Cookies from 'js-cookie';

type InitialState = {
	isAuth: boolean;
	users: User[];
	user: User;
};

const initialState = {
	isAuth: false,
	users: [],
	user: {
		id: '',
		username: '',
		phoneNumber: '',
		password: '',
	},
} as InitialState;

export const auth = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		logout: () => {
			Cookies.remove('xtfs');
			Cookies.set('users', JSON.stringify([]));
			Cookies.set('user', JSON.stringify({ id: '', username: '', password: '', phoneNumber: '' }));

			return initialState;
		},
		login: (state, action: PayloadAction<LoginFormValues>) => {
			const timestamp = Date.now();
			const reversedEpoch = timestamp.toString().split('').reverse().join('');
			const rawSignature = timestamp + reversedEpoch;

			const signature = createHash('sha256').update(rawSignature).digest('hex');
			Cookies.set('xtfs', signature, { expires: 1 / 24 });

			const user = state.users?.filter((user) => user.username === action.payload.username)[0];
			Cookies.set('user', JSON.stringify(user), { expires: 1 / 24 });

			return {
				...state,
				isAuth: true,
				user,
			};
		},
		setUserData: (state, action: PayloadAction<User>) => {
			const user = state.users?.filter((user) => user.username === action.payload.username)[0];

			return {
				...state,
				isAuth: true,
				user,
			};
		},
		register: (state, action: PayloadAction<RegisterFormValues>) => {
			const newUser = {
				id: Date.now().toString(),
				username: action.payload.username,
				password: action.payload.password,
				phoneNumber: action.payload.phoneNumber,
			};

			Cookies.set('users', JSON.stringify([...(state.users as []), newUser]));

			return {
				...state,
				users: [...(state.users as []), newUser],
			};
		},
		editProfile: (state, action: PayloadAction<EditProfileFormValues>) => {
			return {
				...state,
				users: [
					...(state.users as []),
					{
						id: Date.now().toString(),
						username: action.payload.username,
						phoneNumber: action.payload.phoneNumber,
						password: action.payload.newPassword,
					},
				],
			};
		},
	},
});

export const { login, logout, register, editProfile, setUserData } = auth.actions;
export default auth.reducer;
