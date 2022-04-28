import React from "react";

import batataHeader from "/assets/images/batabit-header.svg";

export const Header = () => {
	return (
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
	);
};
