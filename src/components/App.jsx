import React from "react";

import "../styles/styles.scss";

function App() {
	return (
		<>
			<header className="header">
				<img
					className="header__img"
					src="/assets/images/batabit-header.svg"
					alt="header"
				/>
				<div>
					<h1 className="header__title">
						La próxima revolución en el intercambio de criptomonedas.
					</h1>
					<p className="header__description">
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
		</>
	);
}

export default App;
