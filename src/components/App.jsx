import React from "react";

import "../styles/styles.scss";

import arrowUp from "/assets/icons/trending-up.png";
import arrowDown from "/assets/icons/trending-down.png";

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
				<img
					className="header__img"
					src="/assets/images/batabit-header.svg"
					alt="header"
				/>
				<div>
					<h1 className="title header__title">
						La próxima revolución en el intercambio de criptomonedas.
					</h1>
					<p className="description header__description">
						Batabit te ayuda a navegar entre los diferentes precios y
						tendencias.
					</p>
					<button className="button button-header">
						<a src="#" className="button__link">
							Conoce Nuestros Planes <span className="button__icon"></span>{" "}
						</a>
					</button>
				</div>
			</header>

			{/* main */}

			<main>
				<section className="bitcoin">
					<img className="bitcoin__img" src="/assets/images/bitcoin.svg" />
					<div className="bitcoin__content">
						<h2 className="title">
							Visibilizamos todas las tasas de cambio.
						</h2>
						<p className="description bitcoin__description">
							Traemos informacion en tiempo real de las casas de cambio y
							las monedas más importantes del mundo.
						</p>
					</div>
					<div className="bitcoin__table">
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
					</div>
				</section>
				<section></section>
				<section></section>
				<section></section>
			</main>
		</>
	);
}

export default App;
