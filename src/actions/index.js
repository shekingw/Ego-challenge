export const GET_CARS = 'GET_CARS';
export const GET_CAR_DETAIL = 'GET_CAR_DETAIL';
export const CLEAR_CAR_DETAIL = 'CLEAR_CAR_DETAIL';
export const GET_CARS_BY_PRICE = 'GET_CARS_BY_PRICE';
export const GET_CARS_BY_YEAR = 'GET_CARS_BY_YEAR';
export const GET_CARS_BY_SEGMENT = 'GET_CARS_BY_SEGMENT';
export const CLEAR_FILTERS = 'CLEAR_FILTERS';
export const IS_FILTER = 'IS_FILTER';

export const getCars = () => {
	return async (dispatch) => {
		const response = await fetch(
			'https://challenge.agenciaego.tech/api/models/',
		);
		const data = await response.json();
		console.log('GET CARS', data);
		dispatch({
			type: GET_CARS,
			payload: data,
		});
	};
};

export const getCarDetail = (id) => {
	return async (dispatch) => {
		const response = await fetch(
			`https://challenge.agenciaego.tech/api/models/${id}`,
		);
		const data = await response.json();
		console.log('CAR DETAIL', data);
		dispatch({
			type: GET_CAR_DETAIL,
			payload: data,
		});
	};
};

export const clearCarDetail = () => {
	return {
		type: CLEAR_CAR_DETAIL,
	};
};

export const getCarsByPrice = (payload) => {
	return {
		type: GET_CARS_BY_PRICE,
		payload,
	};
};

export const getCarsByYear = (payload) => {
	return {
		type: GET_CARS_BY_YEAR,
		payload,
	};
};

export const getCarsBySegment = (payload) => {
	return {
		type: GET_CARS_BY_SEGMENT,
		payload,
	};
};

export const clearFilters = () => {
	return {
		type: CLEAR_FILTERS,
	};
};

export const isFilter = () => {
	return {
		type: IS_FILTER,
	};
};
