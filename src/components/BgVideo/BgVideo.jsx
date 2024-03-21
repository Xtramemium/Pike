import bgVid7 from '../../assets/bgVid7.mp4';
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
					disablePictureInPicture={true}
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
