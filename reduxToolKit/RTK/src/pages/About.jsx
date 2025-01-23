import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import { useGetProductsByNameQuery } from '../Services/product'

const About = () => {
    const [products, setProducts] = useState([])
    // const { data, isSuccess, isLoading } = useGetProductsByNameQuery('bulbasaur')
    // console.log(data.products , isSuccess , isLoading)
    useEffect(() => {
        axios.get("https://dummyjson.com/products")
            .then((res) => setProducts(res.data.products))
            .catch((err) => console.log(err))
    }, [])
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 m-10">
            {products.map(({ images, category, price, id }) => {
                return (
                    <div
                        className="max-w-sm rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 bg-white"
                        key={id}
                    >
                        <img
                            className="m-auto h-48 md:h-56 lg:h-64"
                            src={images[0]}
                            alt={category}
                        />
                        <div className="p-4">
                            <p className="text-gray-600 text-sm mb-4">{category}</p>
                            <p className="text-lg font-bold text-blue-600">Price: ${price}</p>
                            <div className="flex justify-between mt-4">
                                <button
                                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-300"

                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}

export default About