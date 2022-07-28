import './NavBar.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Nav() {
	return (
		<nav className="navbar bg-white fixed-top" id="navBar">
			<div className="container-fluid">
				<img className="navbar-brand" src={Logo}></img>
				<div className="navLinks">
					<ul>
						<li>
							<Link to="/" className="link1">
								Modelos
							</Link>
						</li>
						<li>
							<Link to="/detail/8" className="link2">
								Ficha de modelo
							</Link>
						</li>
					</ul>
				</div>

				<p>Menú</p>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="offcanvas"
					data-bs-target="#offcanvasNavbar"
					aria-controls="offcanvasNavbar"
				>
					<span>
						<FontAwesomeIcon
							icon={faBars}
							style={{ color: 'black', height: '18px', width: '25.02px' }}
						/>
					</span>
				</button>
				<div
					className="offcanvas offcanvas-end"
					tabindex="-1"
					id="offcanvasNavbar"
					aria-labelledby="offcanvasNavbarLabel"
				>
					<div className="offcanvas-header">
						<img src={Logo} />
						<button
							type="button"
							name="btn-close"
							data-bs-dismiss="offcanvas"
							aria-label="Close"
							className="offcanvas-header-button"
						>
							Cerrar{' '}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								fill="black"
								class="bi bi-x-lg"
								viewBox="0 0 16 16"
							>
								<path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
							</svg>
						</button>
					</div>
					<div className="offcanvas-body">
						<ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
							<li className="nav-item">
								<Link className="nav-link" aria-current="page" to="/">
									Modelos
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="#">
									Servicios y accesorios
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="#">
									Financiación
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="#">
									Reviews y Comunidad
								</Link>
							</li>
							<hr />
							<li className="nav-item">
								<Link className="nav-link" to="#">
									Toyota Mobility Service
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="#">
									Toyota Gazoo Racing
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="#">
									Toyota Híbridos
								</Link>
							</li>
							<hr />
							<li className="nav-item">
								<Link className="nav-link" to="#">
									Concesionarios
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="#">
									Test Drive
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="#">
									Contacto
								</Link>
							</li>
							<hr />
							<div id="nav-last-item">
								<li className="nav-item">
									<Link className="nav-link" to="#">
										Actividades
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="#">
										Servicios al Cliente
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="#">
										Ventas Especiales
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="#">
										Innovación
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="#">
										Prensa
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="#">
										Acerca de...
									</Link>
								</li>
							</div>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
}
