import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Product() {
    const [data,setData] =useState({});
    const [brand,setBrand] =useState({});
    const [category,setCategory] =useState({});
    const getProductById = (() => {
        axios.get(`https://ecommerce.routemisr.com/api/v1/products/6428de2adc1175abc65ca05b`).then(response =>{
            setData(response.data.data);
            setBrand(response.data.data.brand);
            setCategory(response.data.data.category)
            console.log(response);
        });
    });
    useEffect(()=>{
        getProductById();
    },[]);
  return (
    <>
        <div className='flex items-center justify-between container mx-auto'>
            <div className='w-1/3'><img className='w-full' src={brand.image}/></div>
            <div className='w-2/3'>
                {console.log(data,"products")}
                <h1>{data.description}</h1>
                <p>{data.description}</p>
                <div className='flex  justify-between'>
                    <div className=''>
                        <h5>{category.name}</h5>
                        <span>{data.price} EGP</span>
                    </div>
                    <div className=''>
                        <span>{data.ratingsAverage}</span>
                    </div>
                </div>
                <button className="w-full bg-green-500 mt-4 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" type="submit">Add to Cart</button>

            </div>
        </div>
    </>
  )
}
