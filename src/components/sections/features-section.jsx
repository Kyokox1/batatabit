import React from "react";

import batabit from "/assets/images/batabit.svg";
import checkCircle from "/assets/icons/check-circle.svg";
import clock from "/assets/icons/clock.svg";
import dollar from "/assets/icons/dollar-sign.svg";
import eye from "/assets/icons/eye.svg";

export const BatabitFeaturesSection = () => {
	return (
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
					<img className="batabit-service__img" src={clock} alt="clock" />
					<h3 className="batabit-service__title">Tiempo real</h3>
					<p className="batabit-service__description">
						Nuestra API toma información minuto a minuto sobre las tasas
						que mas determinan el comportamiento.
					</p>
				</section>
				<section>
					<img className="batabit-service__img" mg src={eye} alt="eye" />
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
						No más rumores, con Batabit sabrás el valor de cada moneda en
						el mercado actual.
					</p>
				</section>
				<section>
					<img
						className="batabit-service__img"
						src={checkCircle}
						alt="check"
					/>
					<h3 className="batabit-service__title">Información confiable</h3>
					<p className="batabit-service__description">
						Nuestras fuentes están 100% verficadas y continuamos auditando
						su contenido mientras se actualizan.
					</p>
				</section>
			</section>
		</section>
	);
};
