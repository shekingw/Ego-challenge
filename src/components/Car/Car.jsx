import { Link } from 'react-router-dom';

const Car = ({ id, name, year, price, thumbnail, photo }) => {
	let priceMillares = (price) => {
		let precio = price.toString().split('.');

		precio[0] = precio[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');

		return precio.join('.');
	};
	return (
		<div className="container-div-cars">
			<Link
				to={`/detail/${id}`}
				style={{ width: '300px', height: '30px' }}
				className="nameLink"
			>
				{name}
				<p style={{ width: '269', height: '17px' }} className="carP">
					{year} | $ {priceMillares(price)}
				</p>
				<div className="divHover">
					<div className="divPrueba">
						<img
							src={thumbnail}
							alt={id}
							width="268px"
							height="132px"
							style={{ objectFit: 'cover' }}
						/>
						<Link to={`/detail/${id}`} className="buttonLink">
							Ver modelo
						</Link>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default Car;
