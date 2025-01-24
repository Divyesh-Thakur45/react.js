import React from 'react'
import { useGetProductsByNameQuery } from '../Services/product'

const About = () => {
    const { data, error, isLoading } = useGetProductsByNameQuery('bulbasaur')
    console.log(data?.products, error, isLoading)

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 m-10">
            {error ? (
                <h1>Oh no, there was an error</h1>
            ) : isLoading ? (
                <h1>Loding.....</h1>
            ) : data ? (
                <>
                    {data?.products.map(({ images, category, price, id }) => {
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
                                </div>
                            </div>
                        )
                    })}
                </>
            ) : null}

        </div>
    )
}

export default About