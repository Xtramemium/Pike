/* eslint-disable react/no-unescaped-entities */
import './Slider.css';

export const Slider = () => {
	return (
		<div className="wrapper">
			<div className="container">
				<input
					type="radio"
					name="slide"
					id="c1"
					checked
				/>
				<label
					htmlFor="c1"
					className="card"
				>
					<div className="row">
						<div className="icon">1</div>
						<div className="description">
							<h4>Black sheep</h4>
							<p>
								Азотный стаут Black Sheep Irish Stout (Блэк Шип Айриш
								Стаут) обладает сладковатым и сливочным вкусом, с нотами
								обжаренного солода. Послевкусие с сухой горчинкой.{' '}
							</p>
						</div>
					</div>
				</label>
				<input
					type="radio"
					name="slide"
					id="c2"
					checked
				/>
				<label
					htmlFor="c2"
					className="card"
				>
					<div className="row">
						<div className="icon">1</div>
						<div className="description">
							<h4>Bakalar</h4>
							<p>
								Premium Lager — превосходный чешский лагер премиум-класса,
								сваренный по традиционному рецепту из моравского ячменного
								солода и жатецкого хмеля.
							</p>
						</div>
					</div>
				</label>
				<input
					type="radio"
					name="slide"
					id="c3"
					checked
				/>
				<label
					htmlFor="c3"
					className="card"
				>
					<div className="row">
						<div className="icon">3</div>
						<div className="description">
							<h4>Zubr gold</h4>
							<p>
								Zubr Gold это светлое пиво прозрачно-золотистого цвета,
								умеренной крепости, с мягким вкусом, превосходно
								сочетающим в себе горечь хмеля и сладость пивного сусла.
							</p>
						</div>
					</div>
				</label>
				<input
					type="radio"
					name="slide"
					id="c4"
					checked
				/>
				<label
					htmlFor="c4"
					className="card"
				>
					<div className="row">
						<div className="icon">4</div>
						<div className="description">
							<h4>Дальняя дача</h4>
							<p>
								"Дальняя Дача" №1 — освежающий сухой игристый сидр,
								приготовленный из яблок. Яблочный сок первого отжима
								ферментируется по традиционной технологии с использованием
								винных дрожжей, без добавления сахара и воды, затем
								фильтруется и бутилируется.
							</p>
						</div>
					</div>
				</label>
			</div>
		</div>
	);
};
