import Footer from '../components/Footer';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Collapse from '../components/Collapse';

import '../styles/About/About.css';

const collapses = [
    {
        title: "Fiabilité",
        text: "Les annonces postées sur Kasa garantissent une fiabilité totale.\
        Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
    },
    {
        title: "Respect",
        text: "La bienveillance fait partie des valeurs fondatrices de Kasa.\
        Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    },
    {
        title: "Service",
        text: "La bienveillance fait partie des valeurs fondatrices de Kasa.\
        Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    },
    {
        title: "Sécurité",
        text: "La sécurité est la priorité de Kasa.\
        Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services.\
        En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés.\
        Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    }
];

export default function AboutPage() {
    return (
        <>
            <Header />
            <main>
                <Banner
                    imageUrl="src/assets/img/banner_2.png"
                    altText="Montagne verte"
                />
                <div className="collapse__container">
                    {collapses.map((collapse, index) => (
                        <Collapse 
                            key={index}
                            title={collapse.title}
                            text={collapse.text}
                        />
                    ))}
                </div>
            </main>
            <Footer />
        </>
    );
}