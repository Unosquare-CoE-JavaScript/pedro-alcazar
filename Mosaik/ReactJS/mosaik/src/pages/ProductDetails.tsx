import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import { MockupGet } from "../services/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarWeek, faMapMarkerAlt, faComments, faBed} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faTwitter, faYoutube,  } from "@fortawesome/free-brands-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";

import Maps from '../components/Maps';

const ProductDetails = () =>{
    const [house,setHouse] = useState<any | null>(null)
    const [seller, setSeller] = useState<any | null>(null)
    const params = useParams();
    useEffect(() =>{
        console.log("Ingress on useEffect to getHouse")
        const getData = async() =>{
            await setHouse(MockupGet('/house/', Number(params.id)))
        }
        getData();
    }, [params]);

    useEffect(() =>{
        console.log("Ingress on useEffect to getSeller")
        const getSeller = async() =>{
            await setSeller(MockupGet('/users/', Number(house.seller)))
        };
        if (house)
            getSeller();
    },[house])

    if (house && seller){
        console.log(house)
        return (
            <>
                <div className="content py-1">
                    <div className="row">
                        <div className="col-8">
                            <div className="row">
                                <button className="btn btn-featured mr-1">FEATURED</button>
                                <button className="btn btn-mode mr-1">{house.Mode}</button>
                                <span className="mx-1 my-auto"><FontAwesomeIcon icon={faCalendarWeek} className="text-orange"/> May 31 2021</span>
                                <span className="mx-1 my-auto"><FontAwesomeIcon icon={faComments} className="text-orange"/> 35 Comments</span>
                            </div>
                            <h1>{house.Description} <br />
                                {house.price}
                            </h1>
                            
                            <p className="text-pharagrap"><FontAwesomeIcon icon={faMapMarkerAlt} className="text-orange"/> {house.Address}</p>
                            <h2 className="subtitle-product">Description</h2>
                            <p className="text-pharagrap">Massa tempor nec feugiat nisl pretium. Egestas fringilla phasellus faucibus scelerisque eleifend donec Porta nibh venenatis cras sed felis eget velit aliquet. Neque volutpat ac tincidunt vitae semper quis lectus. Turpis in eu mi bibendum neque egestas congue quisque. Sed elementum tempus egestas sed sed risus pretium quam. Dignissim sodales ut eu sem. Nibh mauris cursus mattis molestee iaculis at erat pellentesque. Id interdum velit laoreet id donec ultrices tincidunt.
                            <br/> <br />
                            To the left is the modern kitchen with central island, leading through to the unique breakfast family room which feature glass walls and doors out onto the garden and access to the separate utility room.</p>

                            <h2 className="subtitle-product">Facts and Features</h2>
                            <div className="row justify-content-between">
                                <div className="d-flex">
                                    <div className="badge-product">
                                        <div className="badge-product-image"><FontAwesomeIcon icon={faBed}/></div>
                                    </div>
                                    <div className="">
                                        <span>Living Room</span> <br />
                                        <small>20 x 16 sq feet</small>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className="badge-product">
                                        <div className="badge-product-image"><FontAwesomeIcon icon={faBed}/></div>
                                    </div>
                                    <div className="">
                                        <span>Garage</span> <br />
                                        <small>20 x 16 sq feet</small>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className="badge-product">
                                        <div className="badge-product-image"><FontAwesomeIcon icon={faBed}/></div>
                                    </div>
                                    <div className="">
                                        <span>Dining Area</span> <br />
                                        <small>20 x 16 sq feet</small>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className="badge-product">
                                        <div className="badge-product-image"><FontAwesomeIcon icon={faBed}/></div>
                                    </div>
                                    <div className="">
                                        <span>Bedroom</span> <br />
                                        <small>20 x 16 sq feet</small>
                                    </div>
                                </div>
                            </div>
                            <h2 className="subtitle-product">Location</h2>
                            <div id="map" className="map">
                                <Maps />
                            </div>
                            <h2 className="subtitle-product">Floor Plans</h2>
                            <div className="row">
                                <div className="col-6">
                                    <img src="/images/10.png" alt="" />
                                </div>
                                <div className="col-6">
                                    <h2>First floor</h2>
                                    <p>Enimad minim veniam quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet cons aetetur adipisicing elit sedo eiusmod tempor.Incididunt labore et dolore magna aliqua. sed ayd minim veniam.</p>
                                </div>
                            </div>
                            <div className="row text-pharagrap bg-section-secondary">
                                <div className="col-6">
                                    <div className="d-flex justify-content-between">
                                        <p>
                                            Total Area
                                        </p>
                                        <p>
                                            2800 Sq. Ft
                                        </p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <p>
                                            Bedroom
                                        </p>
                                        <p>
                                            150 Sq. Ft
                                        </p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="d-flex justify-content-between">
                                        <p>
                                            Total Area
                                        </p>
                                        <p>
                                            2800 Sq. Ft
                                        </p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <p>
                                            Bedroom
                                        </p>
                                        <p>
                                            150 Sq. Ft
                                        </p>
                                    </div>
                                </div>
                            </div>
                            { house.gallery.length !== 0 ? 
                                <>
                                    <h2 className="subtitle-product">Gallery</h2>
                                    <div className="gallery">
                                        <div className="row">
                                            {house.gallery.map((picture: any) =>{
                                                return (
                                                    <img src={picture.image} alt="" className="gallery-item"  key={picture.id}/>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </>
                                :
                                ""
                            }
                        </div>
                        <div className="col-4">
                            <div className="card py-1 border">
                                <div className="card-body ">
                                    <div className="row justify-content-center">
                                        <img src={seller.image} alt=""  className="product-image-seller"/>
                                    </div>
                                    <div className="row justify-content-center">
                                        <h3>{seller.firstName} {seller.lastName}</h3>
                                    </div>
                                    <div className="row justify-content-center">
                                        <FontAwesomeIcon icon={faStar} className={seller.score >= 1  ? "text-warning" : ""} />
                                        <FontAwesomeIcon icon={faStar} className={seller.score >= 2  ? "text-warning" : ""}/>
                                        <FontAwesomeIcon icon={faStar} className={seller.score >= 3  ? "text-warning" : ""}/>
                                        <FontAwesomeIcon icon={faStar} className={seller.score >= 4  ? "text-warning" : ""}/>
                                        <FontAwesomeIcon icon={faStar} className={seller.score === 5  ? "text-warning" : ""}/>
                                        <small className="text-warning">(1 Reviews)</small>
                                    </div>
                                    <div className="row px-1">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis distinctio, odio, eligendi suscipit reprehenderit atque.</p>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <div className="row">
                                            <FontAwesomeIcon icon={faFacebook} className="social-media-icon"/>
                                            <FontAwesomeIcon icon={faInstagram} className="social-media-icon"/>
                                            <FontAwesomeIcon icon={faTwitter} className="social-media-icon"/>
                                            <FontAwesomeIcon icon={faYoutube} className="social-media-icon"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Footer />
                </div>
            </>
        );
    }else{
        return (
            "Error de Conexion"
        )
    }
}
export default ProductDetails;