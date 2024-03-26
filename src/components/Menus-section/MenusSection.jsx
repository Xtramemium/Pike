import img1 from '../../assets/img1.webp';
import chizborg from '../../assets/chizborg.webp';
import Midii from '../../assets/Midii.jpg';
import Potato_fry from '../../assets/Potato_fry.jpg';
import Sheki from '../../assets/Sheki.jpg';
import TarTar from '../../assets/TarTar.jpg';
import Wings from '../../assets/Wings.jpg';
import Crevets from '../../assets/Greni.jpg';
import unknown_img from '../../assets/unknown_img.webp';
import './MenuSection.css';
import { Link } from 'react-router-dom';
import { Slider } from '../Swiper/Slider';

export const MenuSection = () => {
	const food = [
		{ src: Midii },
		{ src: Potato_fry },
		{ src: Sheki },
		{ src: chizborg },
		{ src: Crevets },
		{ src: Wings },
		{ src: TarTar },
	];

	return <div></div>;
};
