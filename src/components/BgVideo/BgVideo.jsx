import bgVid7 from '../../assets/bgVid7.webm';
import { SubHeading } from '../SubHeading/SubHeading';
import { Header } from '../Header/Header';
import './BgVideo.css';

export const BackgroundVideo = () => {
	return (
		<>
			<div className="background-video">
				<video
					preload="metadata"
					controls={false}
					playsInline={true}
					disablePictureInPicture={false}
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
