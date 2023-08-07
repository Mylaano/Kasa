import Footer from '../components/Footer';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Card from '../components/Card';

import logements from '../logements.json'

export default function HomePage() {
	return (
		<>
			<Header />

			<main>
				<Banner
					imageUrl="src/assets/img/banner_1.png"
					altText="Montagne"
					captionText="Chez vous, partout et ailleurs"
				/>

				<section className="card__container">
					{
						logements.map((logement, index) => (
							<Card 
								key={index}
								title={logement.title}
								imageUrl={logement.cover}
								link={`/housing/${logement.id}`}
							/>
						))	
					}
				</section>
			</main>
			
			<Footer />
		</>
	);
}