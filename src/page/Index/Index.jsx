import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCars } from '../../actions';
import { Link } from 'react-router-dom';
import Filters from '../../components/Filters/Filters';
import Car from '../../components/Car/Car';
import './Index.css';

export default function Index(cars) {
	const carsFilt = useSelector((state) => state.carsFiltered);
	const isFilter = useSelector((state) => state.isFilter);

	return (
		<div className="container">
			<h1 className="title">Descubrí todos los modelos</h1>
			<div className="container-cars">
				<div>
					<Filters />
				</div>
				<ul className="ulCars">
					{carsFilt.length
						? carsFilt.map((car) => {
								return (
									<li key={car.id}>
										<Car
											id={car.id}
											name={car.name}
											year={car.year}
											price={car.price}
											thumbnail={car.thumbnail}
										/>
									</li>
								);
						  })
						: cars.cars &&
						  cars?.cars?.map((car) => {
								return (
									<li key={car.id}>
										<Car
											id={car.id}
											name={car.name}
											year={car.year}
											price={car.price}
											thumbnail={car.thumbnail}
										/>
									</li>
								);
						  })}
				</ul>
			</div>
			<footer className="footer">
				<p>.</p>
			</footer>
		</div>
	);
}
