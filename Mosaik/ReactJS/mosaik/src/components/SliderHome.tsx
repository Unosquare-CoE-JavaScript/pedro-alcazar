import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import house from '../images/21.png';


const SliderHome = () => {
    return (
        <div className="py-1">
            <div className="row">
                <div className="col-6 content py-1">
                    <span><FontAwesomeIcon icon={faHome} className="text-orange" /> Real Estate Agency</span>
                    <h1>Find your dreams <br />
                    House by us
                    </h1>
                    <div className="slider-description border-left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc condimentum tempor porttitor. Sed lacus orci, congue in aliquam in, facilisis vitae orci. Cras sapien orci, venenatis id scelerisque eget..
                    </div>
                    <div className="slider-btns-section">

                    </div>
                    <button className="slider-btn">Contact to Asessor</button>
                </div>
                <div className="col-6 slider-img-section">
                    <img src={house} alt="" className="slider-img"/>
                </div>
            </div>
        </div>
    )
}
export default SliderHome;