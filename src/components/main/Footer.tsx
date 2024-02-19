import Image from 'next/image';

const Footer = () => {
	return (
		<footer className='bg-primary-600 px-4 sm:px-6 md:px-12 xl:px-24 mt-16 pt-9 pb-28'>
			<Image
				src='https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/vocagame/logohijau-3a71-2a9e.webp'
				width={200}
				height={160}
				alt='Logo'
				priority
				className='bg-white p-2 rounded-xl'
			/>
		</footer>
	);
};

export default Footer;
