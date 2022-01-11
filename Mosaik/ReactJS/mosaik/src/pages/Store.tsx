import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faExpandAlt, faHeart, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { MockupGet } from "../services/api";
import { useEffect, useState } from "react";

const Store = () => {
    const [houses, setHouses] = useState<any | null>(null)
    useEffect(() =>{
        const getData = async() =>{
            MockupGet('/houses')
                .then(data:any =>{
                    setHouses(data)
                })
        }
    })
    return(
        <>
            <div className="store content py-1 ">
                <div className="row">
                {arrayHouses.map(house =>{
                    return(
                        <div className="col card-store" key={house.id}>
                            <div className="card shadow h-100 bg-white">
                                <div className="card-header">
                                    <Link to={`/store/product-details/${house.id}`} >
                                        <img src={house.image} alt="" className="card-store-img"  />
                                    </Link>
                                </div>
                                <div className="card-body">
                                    <p className="text-orange"><strong>{house.Mode}</strong></p>
                                    <a href={`/product-details/${house.id}`} className="card-store-link">
                                        <h2>{house.Description}</h2>
                                    </a>
                                    <p><FontAwesomeIcon icon={faMapMarkerAlt} className="text-orange" /> {house.Address}</p>
                                    <p><strong>{house.Betrooms}</strong> Bed <strong className="ml-1">{house.Bathrooms}</strong> Bath  <strong className="ml-1">{house.Square}</strong> Square Ft</p>
                                    <div className="row">
                                        <button className="card-store-btn"><FontAwesomeIcon  icon={faExpandAlt}/></button>
                                        <button className="card-store-btn"><FontAwesomeIcon  icon={faHeart}/></button>
                                        <button className="card-store-btn"><FontAwesomeIcon  icon={faPlusCircle}/></button>
                                    </div>
                                </div>
                                <div className="text-orange store-footer-card" >
                                    <strong>{house.Mode === "For Sale" ? 
                                        "$" + house.price 
                                        : "$" + house.price +"/Month"}</strong>
                                </div>
                            </div>
                        </div>
                    )
                })}
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}
export default Store;