import Footer from '../components/Footer';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import '../styles/NotFound/NotFound.css';

export default function NotFoundPage(){
    return (
        <>
            <Header />
            
            <main>
                <section className="notfound">
                    <h1 className="notfound__title">404</h1>
                    <p className="notfound__desc">Oups! La page que vous demandez n&apos;existe pas.</p>
                    <Link className="notfound__link" to="/">Retourner sur la page d&apos;accueil</Link>
                </section>
            </main>

            <Footer />
        </>
    );
}