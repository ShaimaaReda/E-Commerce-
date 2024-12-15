import React, { useEffect, useState } from "react";
import Loading from "../component/Loading/Loading";
import Card from "../component/Card";
import axios from "axios";

export default function Home() {
  const [product, setProduct] = useState([]);
  async function GetProduct() {
    const options = {
      url: "https://ecommerce.routemisr.com/api/v1/products",
      method: "GET",
    };
    let { data } = await axios.request(options);
    setProduct(data.data);
  }
  useEffect(() => {
    GetProduct();
  }, []);
  return (
    <>
      {console.log(product)}
      {product == [] ? (
        <Loading />
      ) : (
        <div className="grid m-5 sm:gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {product.map((product) => (
            <Card productInfo={product} key={product.id} />
          ))}
        </div>
      )}
    </>
  );
}
