import bgVid7 from '../../assets/Bgvid7.webm';
export const BgVideo = () => {
	return (
		<div>
			<video
				autoPlay
				loop
				muted
				src={bgVid7}
				className={'bg-vid'}
			/>
			<div className={'bg-overlay'} />
		</div>
	);
};
