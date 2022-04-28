import React from "react";

import batabitFooter from "/assets/images/batabit-footer.svg";

export const Footer = () => {
	return (
		<footer className="footer">
			<section className="footer__social">
				<ul>
					<li>
						<a href="#">Linkedin</a>
					</li>
					<li>
						<a href="#">Crunchbase</a>
					</li>
					<li>
						<a href="#">Hackernews</a>
					</li>
				</ul>
			</section>
			<section className="footer__logo">
				<img src={batabitFooter} alt="logo-footer" />
			</section>
		</footer>
	);
};
