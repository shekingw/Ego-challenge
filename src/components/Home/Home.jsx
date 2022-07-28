import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCars } from '../../actions';
import Index from '../../page/Index/Index';

export default function Home() {
	const cars = useSelector((state) => state.cars);
	return (
		<div>{cars.length > 0 ? <Index cars={cars} /> : <div>Loading...</div>}</div>
	);
}
