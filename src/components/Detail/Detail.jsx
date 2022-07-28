import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { clearCarDetail, getCarDetail } from '../../actions';
import './Detail.css';
import Slider from 'react-slick';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const Detail = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const carDetail = useSelector((state) => state.carsDetail);
	useEffect(() => {
		dispatch(getCarDetail(id));
	}, [dispatch]);

	useEffect(() => {
		return () => {
			dispatch(clearCarDetail());
		};
	}, []);

	//----- CAROUSEL -----//

	const [imageIndex, setImageIndex] = useState(0);

	const NextArrow = ({ onClick }) => {
		return (
			<div className="arrow next" onClick={onClick}>
				<FaArrowRight />
			</div>
		);
	};
	const PrevArrow = ({ onClick }) => {
		return (
			<div className="arrow prev" onClick={onClick}>
				<FaArrowLeft />
			</div>
		);
	};

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		beforeChange: (current, next) => setImageIndex(next),
	};

	const images = carDetail?.model_features?.map((image, i) => {
		return (
			<div className={i === imageIndex ? 'slide activeSlide' : 'slide'}>
				<img src={image.image} alt={image.image} />
				<h5>{image.name}</h5>
				<p>{image.description}</p>
			</div>
		);
	});

	const detalle = carDetail.id;

	const content = (
		<div className="container">
			<div className="detail-title-img">
				<div className="detail-div-img">
					<img src={carDetail.photo} alt={carDetail.name} />
				</div>
				<div className="detail-title-text">
					<h3>{carDetail?.name}</h3>
					<h1>{carDetail?.title}</h1>
					<p>{carDetail?.description?.replace(/<[^>]+>/g, '')}</p>
				</div>
			</div>
			<div className="slider__container">
				<Slider {...settings} className="slider">
					{images}
				</Slider>
			</div>
			<div className="div__highlights">
				{carDetail?.model_highlights?.map((m, i) => {
					return (
						<div key={i} id={i}>
							<h5 id={i}>{m.title}</h5>
							<p id={i}>{m.content.replace(/<[^>]+>/g, '')}</p>
							<div id={i + 10}>
								<img src={m.image} alt={m.title} id={i} />
							</div>
						</div>
					);
				})}
			</div>
			<footer className="footerDetail">.</footer>
		</div>
	);
	return <div>{carDetail ? content : null}</div>;
};

export default Detail;
