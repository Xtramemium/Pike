import bgVid7 from '../../assets/bgVid7.mp4';
import { SubHeading } from '../SubHeading/SubHeading';
import { Header } from '../header/Header';
import './BgVideo.css';

export const BackgroundVideo = () => {
	return (
		<>
			<div className="background-video">
				<video
					autoPlay
					loop
					muted
					src={bgVid7}
					className="video"
				/>
				<div className="bg-video-overlay">
					<Header />
					<SubHeading />
				</div>
			</div>
		</>
	);
};
