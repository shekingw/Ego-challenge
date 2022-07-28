import {
	CLEAR_CAR_DETAIL,
	GET_CARS,
	GET_CARS_BY_PRICE,
	GET_CAR_DETAIL,
	GET_CARS_BY_YEAR,
	GET_CARS_BY_SEGMENT,
	CLEAR_FILTERS,
	IS_FILTER,
} from '../actions';

const initialState = {
	cars: [],
	carsDetail: [],
	carsFiltered: [],
	isFilter: false,
};

function rootReducer(state = initialState, action) {
	let carsBackUp = state.cars.map((car) => car);
	switch (action.type) {
		case GET_CARS:
			return {
				...state,
				cars: action.payload,
			};
		case GET_CAR_DETAIL:
			return {
				...state,
				carsDetail: action.payload,
			};
		case CLEAR_CAR_DETAIL:
			return {
				...state,
				carsDetail: [],
			};
		case GET_CARS_BY_PRICE:
			let carsFilt = carsBackUp.sort((a, b) =>
				a.price > b.price ? 1 : b.price > a.price ? -1 : 0,
			);
			if (action.payload === 'min') {
				return {
					...state,
					carsFiltered: carsFilt,
				};
			}
			if (action.payload === 'may') {
				return {
					...state,
					carsFiltered: carsFilt.reverse(),
				};
			}
			break;
		case GET_CARS_BY_YEAR:
			let carsByYear = carsBackUp.sort((a, b) =>
				a.year > b.year ? 1 : b.year > a.year ? -1 : 0,
			);
			if (action.payload === 'new') {
				return {
					...state,
					carsFiltered: carsByYear,
				};
			}
			if (action.payload === 'old') {
				return {
					...state,
					carsFiltered: carsByYear.reverse(),
				};
			}
			break;
		case GET_CARS_BY_SEGMENT:
			let carsBySegment =
				action.payload === 'all'
					? carsBackUp
					: carsBackUp.filter((car) => car.segment?.includes(action.payload));
			return {
				...state,
				carsFiltered: carsBySegment,
			};
		case CLEAR_FILTERS:
			return {
				...state,
				carsFiltered: [],
			};

		case IS_FILTER:
			return {
				...state,
				isFilter: !state.isFilter,
			};
		default:
			return state;
	}
}

export default rootReducer;
