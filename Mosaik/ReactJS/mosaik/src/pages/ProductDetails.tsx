import { useParams } from "react-router-dom";
import Footer from "../components/Footer";

const ProductDetails = () =>{
    let params = useParams();
    console.log(params)
    return (
        <>
            <div className="content py-1">
                Detalles: {params.id}
            </div>
            <div>
                <Footer />
            </div>
        </>
    );
}
export default ProductDetails;