import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faDribbble } from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const TopBar = () => {
    return (
        <div className="topbar content">
            <div className="d-flex justify-content-between">
                <div className="row">
                    <div className="top-element">
                        <FontAwesomeIcon className="icon-top text-orange" icon={faEnvelope}/> info@mosaik.com  
                    </div>
                    <div className="top-element">
                        <FontAwesomeIcon className="icon-top text-orange" icon={faMapMarkerAlt} />
                        <span>15/A, Nest Tower, NYC</span>
                    </div>
                </div>
                <div className="row">
                    <div className="p-top-element">
                        <FontAwesomeIcon className="icon-top" icon={faFacebook}/>
                        <FontAwesomeIcon className="icon-top" icon={faTwitter} />
                        <FontAwesomeIcon className="icon-top" icon={faInstagram} />
                        <FontAwesomeIcon className="icon-top" icon={faDribbble} />
                    </div>
                    <div className="btn-top">
                        Contact
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TopBar;