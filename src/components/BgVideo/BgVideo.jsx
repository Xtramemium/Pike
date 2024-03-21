import bgVid7 from '../../assets/bgVid7.webm';
import bgVid7_lowQ from '../../assets/bgVid7_lowQ.webm';
import bgVid7_lowQ2 from '../../assets/bgVid7_lowQ2.mp4';
import bgVid7_mod from '../../assets/bgVid7_mod.mp4';
import { SubHeading } from '../SubHeading/SubHeading';
import { Header } from '../Header/Header';
import './BgVideo.css';

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
