import React from "react";

export const PlansSection = () => {
	return (
		<section id="plans">
			<div>
				<h2 className="title plans__title ">
					Escoge el plan que mejor se ajusta a ti.
				</h2>
				<p className="description plans__description">
					Cualquier te da acceso completo a nuestra plataforma.
				</p>
			</div>
			<section className="plans__cards">
				<article className="plans__card">
					<p className="plans__card-head hidden ">Recomendado</p>
					<div className="plans__card-body">
						<h3 className="description plans__card-title ">
							Pago Mensual
						</h3>
						<p className="plans__card-price">
							<span>$</span> 99
						</p>
						<p className="plans__card-description">
							*Ahorras $129 comparado al plan mensual.
						</p>
						<button className="button plans__card-button ">
							Escoger este <span></span>
						</button>
					</div>
				</article>
				<article className="plans__card">
					<p className="plans__card-head">Recomendado</p>
					<div className="plans__card-body">
						<h3 className="description plans__card-title ">Pago Anual</h3>
						<p className="plans__card-price">
							<span>$</span> 99
						</p>
						<p className="plans__card-description">
							*Ahorras $129 comparado al plan mensual.
						</p>
						<button className="button plans__card-button ">
							Escoger este <span></span>
						</button>
					</div>
				</article>
				<article className="plans__card" id="plan3">
					<p className="plans__card-head hidden ">Recomendado</p>
					<div className="plans__card-body">
						<h3 className="description plans__card-title ">
							Pago Semanal
						</h3>
						<p className="plans__card-price">
							<span>$</span> 99
						</p>
						<p className="plans__card-description">
							*Ahorras $129 comparado al plan mensual.
						</p>
						<button className="button plans__card-button ">
							Escoger este <span></span>
						</button>
					</div>
				</article>
			</section>
		</section>
	);
};
