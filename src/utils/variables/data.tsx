import { CgProfile } from 'react-icons/cg';

type SidebarMenusType = {
	name: string;
	icon: React.ReactNode;
	href: string;
}[];

const iconClassname = 'w-7 h-7 transition-colors duration-200 ease-in-out';

const sidebarMenus: SidebarMenusType = [
	{
		name: 'Profile',
		icon: <CgProfile className={iconClassname} />,
		href: '/profile',
	},
];

export { sidebarMenus };
