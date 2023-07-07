import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import About from './components/About/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero';
import Nav from './components/Nav/Nav';
import Portfolio from './components/Portfolio/Portfolio';
import Services from './components/Services/Services';
import Testimonials from './components/Testimonials/Testimonials';
import WrapComponent from './components/WrapComponent';

function App() {
    return (
        <>
            <Nav />
            <Hero name='Dao Nguyen' job='Fronted Developer' id='home' />
            <WrapComponent text='Get To Know' title='About Me' id='about'>
                <About />
            </WrapComponent>
            <WrapComponent
                text='What I Can Do'
                title='My Experience'
                id='experience'
            >
                <Experience />
            </WrapComponent>
            <WrapComponent text='What I Offer' title='Services' id='services'>
                <Services />
            </WrapComponent>
            <WrapComponent
                text='MY Recent Work'
                title='Portfolio'
                id='portfolio'
            >
                <Portfolio />
            </WrapComponent>
            <WrapComponent
                text='Review From Clients'
                title='Testimonials'
                id='testimonials'
            >
                <Testimonials />
            </WrapComponent>
            <WrapComponent text='Get In Touch' title='Contact Me' id='contact'>
                <Contact />
            </WrapComponent>
            <Footer />
        </>
    );
}

export default App;
