import logo from './logo.svg';
import './App.css';
import Nav from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import { useDispatch } from 'react-redux';
import { getCars } from './actions';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router';
import Detail from './components/Detail/Detail';
import Index from './page/Index/Index';

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getCars());
	}, [dispatch]);
	return (
		<div className="App">
			<Nav />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/detail/:id" element={<Detail />} />
			</Routes>
		</div>
	);
}

export default App;
