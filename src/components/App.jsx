import React from "react";

import "../styles/styles.scss";

import { Header } from "./sections/header";
import { BitcoinSection } from "./sections/bitcoin-section";
import { BatabitFeaturesSection } from "./sections/features-section";
import { BitcoinAbverstisingSection } from "./sections/abverstising-section";
import { PlansSection } from "./sections/plans-section";
import { Footer } from "./sections/footer";

function App() {
	return (
		<>
			{/* header */}

			<Header />
			{/* main */}

			<main>
				{/* fist section */}

				<BitcoinSection />

				{/* second section */}

				<BatabitFeaturesSection />

				{/* third section */}

				<BitcoinAbverstisingSection />

				{/* fourth section */}

				<PlansSection />
			</main>

			{/* footer */}

			<Footer />
		</>
	);
}

export default App;
