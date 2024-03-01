import bgVid7 from '../../assets/bgVid7.mp4'
export const MainPage = () => {
	return (
		<div className='main_page'>
			<video autoPlay loop muted src={bgVid7} className='bg__video'/>
			<div className="bg__overlay"></div>
		</div>
	)
}
