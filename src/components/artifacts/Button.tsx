import Loading from './Loading';

type ButtonPropsType = {
	type: 'submit' | 'reset' | 'button';
	text: string;
	icon?: React.ReactNode;
	className: string;
	onClick?: () => void;
	isLoading?: boolean;
};

const Button: React.FC<ButtonPropsType> = ({ type = 'button', text, icon, className, onClick, isLoading }) => {
	return (
		<button type={type} className={className} onClick={onClick}>
			<span>{icon}</span>
			{isLoading ? <Loading size={5} text='Submitting' /> : text}
		</button>
	);
};

export default Button;
