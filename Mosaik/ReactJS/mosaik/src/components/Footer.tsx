import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faDribbble } from "@fortawesome/free-brands-svg-icons";
import { faLocationArrow, faMapMarkerAlt, faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPaypal, faCcMastercard, faCcDiscover, faCcVisa, faCcAmex, faCcApplePay } from "@fortawesome/free-brands-svg-icons";
import Logo from '../images/Logo.png';
const Footer = (prop : any = {header: true} ) =>{
    return (
        <div className="footer content">
            { prop.header === true ? 
                <div className="footer-header">
                <div className="d-flex justify-content-center">
                    <div className="">
                        <h1>Looking for a dream home?</h1>
                        <p>We can help you realize your dream of a new home</p>
                    </div>
                    <div className="">
                        <button className="footer-header-btn">Explore Properties</button>
                    </div>
                </div>
            </div> 
            :""
            }
            
            <div className="row">
                <div className="d-flex justify-content-between">
                    <div className="footer-col">
                        <h2><img src={Logo} alt="" className="footer-logo"/>Mosaik</h2>
                        <p>Lorem Ipsum is simply dummy text of the and typesetting industry. Lorem Ipsum is dummy text of the printing.</p>
                        <p><FontAwesomeIcon className="icon-top" icon={faMapMarkerAlt} />Brooklyn, New York, United States</p>
                        <p><FontAwesomeIcon className="icon-top" icon={faPhoneAlt} />+0123-456789</p>
                        <p><FontAwesomeIcon className="icon-top" icon={faEnvelope} />example@example.com</p>
                        <p>
                            <FontAwesomeIcon className="icon-top" icon={faFacebook}/>
                            <FontAwesomeIcon className="icon-top" icon={faTwitter} />
                            <FontAwesomeIcon className="icon-top" icon={faInstagram} />
                            <FontAwesomeIcon className="icon-top" icon={faDribbble} />  
                        </p>
                    </div>
                    <div className="footer-col">
                        <h2>Company</h2>
                        <p>
                            <a href="/" className="footer-link">About</a>
                        </p>
                        <p>
                            <a href="/" className="footer-link">Blog</a>
                        </p>
                        <p>
                            <a href="/" className="footer-link">All Products</a>
                        </p>
                        <p>
                            <a href="/" className="footer-link">Contact</a>
                        </p>
                        <p>
                            <a href="/" className="footer-link">FAQ</a>
                        </p>
                        <p>
                            <a href="/" className="footer-link">Contact Us</a>
                        </p>
                    </div>
                    <div className="footer-col">
                        <h2>Services</h2>
                        <p>
                            <a href="/" className="footer-link">Cart</a>
                        </p>
                        <p>
                            <a href="/" className="footer-link">Wish List</a>
                        </p>
                        <p>
                            <a href="/" className="footer-link">Login</a>
                        </p>
                        <p>
                            <a href="/" className="footer-link">Checkout</a>
                        </p>
                        <p>
                            <a href="/" className="footer-link">Terms & Conditions</a>
                        </p>
                        <p>
                            <a href="/" className="footer-link">Promotional Offers</a>
                        </p>
                    </div>
                    <div className="footer-col">
                        <h2>Customer Care</h2>
                        <p>
                            <a href="/" className="footer-link">Login</a>
                        </p>
                        <p>
                            <a href="/" className="footer-link">My Account</a>
                        </p>
                        <p>
                            <a href="/" className="footer-link">Wish List</a>
                        </p>
                        <p>
                            <a href="/" className="footer-link">Add listing</a>
                        </p>
                        <p>
                            <a href="/" className="footer-link">FAQ</a>
                        </p>
                        <p>
                            <a href="/" className="footer-link">Contact us</a>
                        </p>
                    </div>
                    <div className="footer-col">
                        <h2>Newsletter</h2>
                        <p>
                            Subscribe to our weekly Newsletter and receive updates via email.
                        </p>
                            <div className="input-group">
                                <input type="" className="input-group-box"  placeholder="example@email.com"/>
                                <button className="input-group-btn">
                                    <FontAwesomeIcon className="input-group-btn-ico" icon={faLocationArrow}/>
                                </button>
                            </div>
                        <p>
                            We Accept
                        </p>
                        
                        <div className="row">
                            <FontAwesomeIcon className="icon-top" icon={faPaypal} />
                            <FontAwesomeIcon className="icon-top" icon={faCcMastercard} />
                            <FontAwesomeIcon className="icon-top" icon={faCcVisa} />
                            <FontAwesomeIcon className="icon-top" icon={faCcDiscover} />
                            <FontAwesomeIcon className="icon-top" icon={faCcAmex} />
                            <FontAwesomeIcon className="icon-top" icon={faCcApplePay} />
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;