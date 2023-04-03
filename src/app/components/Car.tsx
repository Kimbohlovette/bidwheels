import React from 'react'
import { NavLink } from 'react-router-dom'

const Car = ({ car }: any) => {
    return (
        <div className="max-w-sm my-8">
            <img className="object-center object-cover aspect-video" src={car.image} alt="" />
            <h1 className="text-white my-5 text-xl font-bold">{car.name}</h1>
            <p className="text-slate-200 text-sm my-5 h-12">{car.description}</p>
            <NavLink to="/shop">
                <button className="button text-primary bg-white font-semibold w-2/3 mt-5 hover:bg-primary-hover hover:text-white">Shop Now</button>
            </NavLink>
        </div>
    )
}

export default Car;