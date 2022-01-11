import todaySalesImg from '../images/9.png';
import Img11 from '../images/11.jpeg';
import Img12 from '../images/12.jpeg';
import Img13 from '../images/13.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBath, faBed, faCarAlt, faVectorSquare } from '@fortawesome/free-solid-svg-icons';

const TodaySales = () => {
    return (
        <div className="row py-1">
            <div className="col-6 py-1">
                <div className="today-btn-background">
                    <div className="today-btn">
                        Last sold
                    </div>
                </div>
                <h1 className="today-title">Today Sales Properties</h1>
                <span className='text-pharagrap'>Houzez allow you to design unlimited panels and real estate custom forms to capture leads and keep record of all information</span>
                <div className="vineta-orange">
                    Live Music Cocerts at Luviana
                </div>
                <div className="vineta-orange">
                    Our SecretIsland Boat Tour is Just for You
                </div>
                <div className="vineta-orange">
                    Live Music Cocerts at Luviana
                </div>
                <div className="row">
                    <div className="border-left today-items">
                    <FontAwesomeIcon className="" icon={faBed}/> 3 <br />
                        Bedrooms
                    </div>
                    <div className="border-left today-items">
                        <FontAwesomeIcon className="" icon={faBath}/> 3 <br />
                        Bathrooms
                    </div>
                    <div className="border-left today-items">
                        <FontAwesomeIcon className="" icon={faCarAlt}/> 2 <br />
                        Car Parking
                    </div>
                    <div className="border-left today-items">
                        <FontAwesomeIcon className="" icon={faVectorSquare}/> 3000 <br />
                        Square Ft
                    </div>
                </div>
                <div className="row">
                    <div className="d-flex justify-content-between">
                        <div className="today-items-img">
                            <img src={Img11} alt="" />
                        </div>
                        <div className="today-items-img">
                            <img src={Img12} alt="" />
                        </div>
                        <div className="today-items-img">
                            <img src={Img13} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-6 py-1">
                <img src={todaySalesImg} alt="" className="today-img" />
            </div>
        </div>
    )
}
export default TodaySales;