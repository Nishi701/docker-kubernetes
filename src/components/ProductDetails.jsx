import { useEffect, useState } from "react";
import Skeleton from "./Skeleton";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
Skeleton
const ProductDetails = () => {

    const [singleProduct, setSingleProduct] = useState(null);
    const {productId} = useParams();
    console.log(productId);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(`https://fakestoreapi.com/products/${productId}`);
        const resData = await data.json();
        console.log(resData);
        setSingleProduct(resData);
    }

    if (singleProduct === null){
        return <Skeleton />
    }
    // console.log(singleProduct);
    const {image, title,description, price} = singleProduct;
    //here we are not using ternary operator for single product because useState is initially null
    return (
        <div className="product">
            <img className="product-img" src={image} />
            <h3>{title}</h3>
            <p>{singleProduct.rating.rate}: Ratings</p>
            <p>price:{price}</p>
            <p>{description}</p>
            
        </div>
    );
}
export default ProductDetails;