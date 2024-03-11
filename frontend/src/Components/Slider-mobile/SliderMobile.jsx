import './Slider-mobile.css';

export const SliderMobile = () => {
	return (
		<div id="slider">
			<input
				type="radio"
				name="slider"
				id="slide1"
				checked
			/>
			<input
				type="radio"
				name="slider"
				id="slide2"
				checked
			/>
			<input
				type="radio"
				name="slider"
				id="slide3"
				checked
			/>
			<input
				type="radio"
				name="slider"
				id="slide4"
				checked
			/>
			<div id="slides">
				<div id="overflow">
					<div className="inner">
						<div className="slide slide_1">
							<div className="slide-content">
								<h2>Slide1</h2>
								<p>Slide content</p>
							</div>
						</div>
						<div className="slide slide_2">
							<div className="slide-content">
								<h2>Slide2</h2>
								<p>Slide content</p>
							</div>
						</div>
						<div className="slide slide_3">
							<div className="slide-content">
								<h2>Slide3</h2>
								<p>Slide content</p>
							</div>
						</div>
						<div className="slide slide_4">
							<div className="slide-content">
								<h2>Slide4</h2>
								<p>Slide content</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div id="controls">
				<label htmlFor="slide1"></label>
				<label htmlFor="slide2"></label>
				<label htmlFor="slide3"></label>
				<label htmlFor="slide4"></label>
			</div>
			<div id="bullets">
				<label htmlFor="slide1"></label>
				<label htmlFor="slide2"></label>
				<label htmlFor="slide3"></label>
				<label htmlFor="slide4"></label>
			</div>
		</div>
	);
};
