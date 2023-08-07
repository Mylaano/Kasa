import { useParams, useHistory } from 'react-router-dom';

import '../styles/Housing/Housing.css';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Collapse from '../components/Collapse';
import Star from '../components/Star';
import Tag from '../components/Tag';
import Carousel from '../components/Carousel';

import logements from '../logements.json'


const HousingPage = () => {
    const { id } = useParams();
    const housing = logements.find(logement => logement.id === id);
    
    const history = useHistory();
    
    if(!housing) {
        history.push('/404');
        return null;
    }

    return (
        <>
            <Header />

            <main>
                <Carousel pictures={housing.pictures} pagination={housing.pictures.length} />

                <section className="housing">
                    <section className="housing__left">
                        <h1 className="housing__title">{housing.title}</h1>
                        <p className="housing__location">{housing.location}</p>
                        <ul className="housing__tags">
                            {housing.tags.map((item, index) => (
                                <Tag key={index} name={item} />
                            ))}
                        </ul>
                    </section>

                    <section className="housing__right">
                        <figure className="housing__profil">
                            <img src={housing.host.picture} alt="Photo de profil" />
                            <figcaption>{housing.host.name}</figcaption>
                        </figure>
                        <Star amount={parseInt(housing.rating)} />
                    </section>
                </section>

                <section className="collapses">
                    <Collapse 
                        key={Math.random()}
                        title="Description"
                        text={housing.description}
                    />
                    <Collapse 
                        key={Math.random()}
                        title="Équipements"
                        text={
                            <ul>
                                {housing.equipments.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        }
                    />
                </section>
            </main>

            <Footer />
        </>
    );
}

export default HousingPage;