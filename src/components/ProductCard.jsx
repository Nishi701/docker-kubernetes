//navbar export
import Skeleton from "./Skeleton";
import { useState, useEffect } from "react";
//import { ProductList } from "../utils/constant"; we dont use this constant data we go to dynamic section
import Product from "./Product";
import { Link } from "react-router-dom";
// const topRatedProduct = () =>
// we use useState hook for re rendering user interface(UI).
// using useState and doing arrray destructuring.
export const ProductCard = () => {

  //local state variable
  const [listOfProduct, setListOfProduct] = useState([]);// empty array destructuring
  const [filterProduct, setFilterProduct] = useState([]);// for temperory variable
  //state variable for searchbox
  const [searchText, setSearchText] = useState("");//empty string is initial value


  useEffect(() => {
    //console.log("useEffect Called");
    //const data = fetch("https://fakestoreapi.com/products");// we dont use here acync and await.
    fetchData();
  }, []);
  
  const fetchData = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    //console.log(data); not in json format
    const resData = await data.json();
    console.log(resData);
    setListOfProduct(resData);
    setFilterProduct(resData);
  }
  console.log("product render");

  //conditional rendering

  // if(listOfProduct.length === 0){
  //   return <Skeleton />
  // }  
  //it is not good practice to make any conditional rendering at industry level .
  // so we use ternary operation using only one return.

  // let listOfProduct = [
  //   {
  //     "id": 1,
  //     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  //     "price": 109.95,
  //     "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  //     "category": "men's clothing",
  //     "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  //     "rating": {
  //       "rate": 3.9,
  //       "count": 120
  //     }
  //   },
  //   {
  //     "id": 2,
  //     "title": "Mens Casual Premium Slim Fit T-Shirts ",
  //     "price": 22.3,
  //     "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
  //     "category": "men's clothing",
  //     "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  //     "rating": {
  //       "rate": 4.1,
  //       "count": 259
  //     }
  //   }
  // ];
  return listOfProduct.length === 0 ? <Skeleton /> : (
    <div>
      <div>
        <input type="text" className="txtsearch" onChange={(e) => setSearchText(e.target.value)} value={searchText} />
        <button onClick={() => {
          const filteredData = listOfProduct.filter((Product) => {
            return Product.title.toLowerCase().includes(searchText.toLowerCase());
          });
          setFilterProduct(filteredData);
        }}>Search</button>
      </div>
      <button onClick={() => {

        const filteredProduct = listOfProduct.filter(product => product.rating.rate >= 4);
        setListOfProduct(filteredProduct);

      }} style={{ "marginTop": "10px" }}>Top Rated Product</button>
      <div className='productCard' >
        {
          filterProduct.map((product) => {
            return (
              <Link key={product.id} to={`/product/${product.id}`}><Product  product={product} /></Link>
            )
          })
        }
      </div>
    </div>
  );
};