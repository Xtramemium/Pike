import bgVid7_mod from '../../assets/bgVid7_mod.mp4';
import { SubHeading } from '../sub-heading/sub-heading.jsx';
import { Header } from '../header/header.jsx';
import './bg-video.css';

export const BackgroundVideo = () => {
	return (
		<>
			<div className="background-video">
				<video
					preload="auto"
					controls={false}
					playsInline={true}
					disablePictureInPicture={false}
					autoPlay
					loop
					muted
					src={bgVid7_mod}
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
