import React from "react";

import bitcoin from "/assets/images/bitcoin.svg";
import arrowUp from "/assets/icons/trending-up.png";
import arrowDown from "/assets/icons/trending-down.png";

export const BitcoinSection = () => {
	const bitcoins = {
		Bitcoin: "$ 1.96",
		Ethereum: "$ 0.07",
		Ripple: "$ 2.15",
		Stellar: "$ 4.96"
	};

	const comisions = {
		Bitrade: "$ 12.96",
		Bitpreco: "$ 13.07",
		Novadax: "$ 13.15",
		Coinext: "$ 14.96"
	};

	const bitcoinsArray = Object.entries(bitcoins);
	console.log(bitcoinsArray);

	const comisionsArray = Object.entries(comisions);

	return (
		<section className="bitcoin">
			<img className="bitcoin__img" src={bitcoin} />
			<div className="bitcoin__content">
				<h2 className="title">Visibilizamos todas las tasas de cambio.</h2>
				<p className="description bitcoin__description">
					Traemos informacion en tiempo real de las casas de cambio y las
					monedas más importantes del mundo.
				</p>
			</div>
			<section className="bitcoin__table">
				<div>
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
						<b>Actualizado:</b> 24 Abril 23:45
					</p>
				</div>
				<div>
					<p className="table-title-blue">Comisiones</p>
					<table>
						{comisionsArray.map((el, i) => (
							<tr key={i}>
								<td className="bitcoin__table-left-column">{el[0]}</td>
								<td className="bitcoin__table-rigth-column">{el[1]}</td>
							</tr>
						))}
					</table>
					<p className="bitcoin__table-date table-date-blue">
						<b>Actualizado:</b> 24 Abril 23:48
					</p>
				</div>
			</section>
		</section>
	);
};
