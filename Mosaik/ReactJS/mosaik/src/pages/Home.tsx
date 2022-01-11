import SliderHome from '../components/SliderHome';
import TodaySales from '../components/TodaySales';
import Footer from '../components/Footer';

const Home = () => {

    return (
        <>
            <div className="slider content">
                <SliderHome/>
            </div>
            <div className="today-sales-section content">
                <TodaySales />
            </div>
            <div>
                <Footer header={true}/>
            </div>
        </>
    )
}
export default Home;