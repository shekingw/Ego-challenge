import { useDispatch } from 'react-redux';
import {
	clearFilters,
	getCarsByPrice,
	getCarsBySegment,
	getCarsByYear,
	isFilter,
} from '../../actions';
import './Filters.css';

const Filters = () => {
	const dispatch = useDispatch();
	const handleChange = (e) => {
		let option = e.target.value;
		if (option === 'min' || option === 'may') {
			dispatch(getCarsByPrice(option));
		} else if (option === 'new' || option === 'old') {
			dispatch(getCarsByYear(option));
		} else if (option === 'clear') {
			dispatch(clearFilters());
		}
		dispatch(isFilter());
	};
	const handleButton = (e) => {
		dispatch(getCarsBySegment(e.target.value));
	};

	return (
		<div className="container">
			<div className="container-buttons">
				<p>Filtrar por</p>
				<button value="all" onClick={handleButton}>
					Todos
				</button>
				<button value="Sedan" onClick={handleButton}>
					Autos
				</button>
				<button value="Pickups y Comerciales" onClick={handleButton}>
					Pickups y Comerciales
				</button>
				<button value="SUVs" onClick={handleButton}>
					SUVs y Crossovers
				</button>
				<button value="Hatchback" onClick={handleButton}>
					Hatchback
				</button>
			</div>
			<div className="container-selects">
				<div className="container-buttons2">
					<select name="segment" onChange={handleButton}>
						<option selected disabled>
							Filtrar por
						</option>
						<option value="all">Todos</option>
						<hr />
						<option value="Sedan">Autos</option>
						<hr />
						<option value="Pickups y Comerciales">Pickups y Comerciales</option>
						<hr />
						<option value="SUVs">SUVs y Crossovers</option>
						<hr />
						<option value="Hatchback">Hatchback</option>
					</select>
				</div>
				<div className="divSelect">
					<select name="price" onChange={handleChange}>
						<option selected disabled>
							Ordenar por
						</option>
						<option value="clear">Nada</option>
						<hr />
						<option value="min">De menor a mayor precio</option>
						<hr />
						<option value="may">De mayor a menor precio</option>
						<hr />
						<option value="new">Mas nuevos primero</option>
						<hr />
						<option value="old">Mas viejos primero</option>
					</select>
				</div>
			</div>
			<hr></hr>
		</div>
	);
};

export default Filters;
