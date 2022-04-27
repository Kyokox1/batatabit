import React from "react";

import "../styles/styles.scss";

import batataHeader from "/assets/images/batabit-header.svg";
import bitcoin from "/assets/images/bitcoin.svg";
import batabit from "/assets/images/batabit.svg";
import arrowUp from "/assets/icons/trending-up.png";
import arrowDown from "/assets/icons/trending-down.png";
import checkCircle from "/assets/icons/check-circle.svg";
import clock from "/assets/icons/clock.svg";
import dollar from "/assets/icons/dollar-sign.svg";
import eye from "/assets/icons/eye.svg";

function App() {
	const bitcoins = {
		Bitcoin: "$ 1.96",
		Ethereum: "$ 0.07",
		Ripple: "$ 2.15",
		Stellar: "$ 4.96"
	};

	const bitcoinsArray = Object.entries(bitcoins);
	console.log(bitcoinsArray);

	return (
		<>
			{/* header */}
			<header className="header">
				<img className="header__img" src={batataHeader} alt="header" />
				<div>
					<h1 className="title header__title">
						La próxima revolución en el intercambio de criptomonedas.
					</h1>
					<p className="description header__description">
						Batabit te ayuda a navegar entre los diferentes precios y
						tendencias.
					</p>
					<button className="button button-header">
						<a href="#plans" className="button__link">
							Conoce Nuestros Planes <span className="button__icon"></span>{" "}
						</a>
					</button>
				</div>
			</header>

			{/* main */}

			<main>
				{/* fist section */}

				<section className="bitcoin">
					<img className="bitcoin__img" src={bitcoin} />
					<div className="bitcoin__content">
						<h2 className="title">
							Visibilizamos todas las tasas de cambio.
						</h2>
						<p className="description bitcoin__description">
							Traemos informacion en tiempo real de las casas de cambio y
							las monedas más importantes del mundo.
						</p>
					</div>
					<section className="bitcoin__table">
						<p>Monedas.</p>
						<table>
							{bitcoinsArray.map((el, i) => (
								<tr key={i}>
									<td className="bitcoin__table-left-column">{el[0]}</td>
									<td className="bitcoin__table-rigth-column">
										{el[1]}
										<img
											className="bitcoin__table-arrow"
											src={i === 1 ? arrowUp : arrowDown}
											alt="trendingArrow"
										/>
									</td>
								</tr>
							))}
						</table>
						<p className="bitcoin__table-date">
							<b>Actualizado:</b> 24 Abril 23:45{" "}
						</p>
					</section>
				</section>

				{/* second section */}

				<section className="batabit-features">
					<img
						className="batabit-features__logo"
						src={batabit}
						alt="batabit"
					/>
					<div>
						<h2 className="title batabit-features__title">
							Creamos un producto sin comparación.
						</h2>
						<p className="description batabit-features__description">
							Confiable y diseñado para su uso diario.
						</p>
					</div>
					<section className="batabit-service">
						<section>
							<img
								className="batabit-service__img"
								src={clock}
								alt="clock"
							/>
							<h3 className="batabit-service__title">Tiempo real</h3>
							<p className="batabit-service__description">
								Nuestra API toma información minuto a minuto sobre las
								tasas que mas determinan el comportamiento.
							</p>
						</section>
						<section>
							<img
								className="batabit-service__img"
								mg
								src={eye}
								alt="eye"
							/>
							<h3 className="batabit-service__title">
								No hay tasas escondidas
							</h3>
							<p className="batabit-service__description">
								Ni en la compra o al momento de exit, Batabit siempre te
								muestra el costo real de lo que estás adquiriendo.
							</p>
						</section>
						<section>
							<img
								className="batabit-service__img"
								src={dollar}
								alt="dollar"
							/>
							<h3 className="batabit-service__title">Compara monedas</h3>
							<p className="batabit-service__description">
								No más rumores, con Batabit sabrás el valor de cada moneda
								en el mercado actual.
							</p>
						</section>
						<section>
							<img
								className="batabit-service__img"
								src={checkCircle}
								alt="check"
							/>
							<h3 className="batabit-service__title">
								Información confiable
							</h3>
							<p className="batabit-service__description">
								Nuestras fuentes están 100% verficadas y continuamos
								auditando su contenido mientras se actualizan.
							</p>
						</section>
					</section>
				</section>

				{/* third section */}

				<section className="bitcoin-adverstising">
					<div className="bitcoin-adverstising__img">
						<h2 className="title bitcoin-adverstising__title">
							Conócelo hoy.
						</h2>
					</div>
				</section>

				{/* fourth section */}

				<section id="plans">
					<div>
						<h2 className="title plans__title ">
							Escoge el plan que mejor se ajusta a ti.
						</h2>
						<p className="description plans__description  ">
							Cualquier te da acceso completo a nuestra plataforma.
						</p>
					</div>
					<section className="plans__cards">
						<article className="plans__card">
							<p className="plans__card-head">Recomendado</p>
							<div className="plans__card-body">
								<h3 className="description plans__card-title ">
									Pago Anual
								</h3>
								<p className="plans__card-price">
									<span>$</span> 99
								</p>
								<p className="plans__card-description">
									*Ahorras $129 comparado al plan mensual.
								</p>
								<button className="button plans__card-button ">
									Escoger este <span></span>{" "}
								</button>
							</div>
						</article>
					</section>
				</section>
			</main>
		</>
	);
}

export default App;
