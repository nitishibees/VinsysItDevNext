'use client'
import Image from "next/image"
import { useEffect, useState } from "react";

const CountryData = props =>{
    const [isOpen, setIsOpen] = useState();

    const handleCountryClick = () => {
        setIsOpen(!isOpen);
    };

    return(
        <div className="item"  onClick={handleCountryClick}>
            <div className={`country flex items-center ${isOpen ? " active" : ""}`}>
                <div className="icon">
                    <Image                   
                        src={props.iconSrc}
                        width={32}
                        loading = 'lazy'
                        height={32}
                        alt={props.iconAlt}
                    />                    
                </div>
                <div className="title">{props.country}</div>
            </div>
            {isOpen &&
                <div className={`content-box d-flex`}>
                    {props.children}
                </div> 
            }
        </div>
    )
}
const CityData = props=>{
    return(
        <div className="city-data">
            <div className="title">{props.cityname}</div>
            <ul>
                <li className="call"><a href={`tel:${props.phone}`}>{props.phone}</a></li>
                <li className="email"><a href={`mailto:${props.emailText}`}>{props.emailText}</a></li>
                <li className="add">{props.addText}</li>
            </ul>
        </div>
    )
}
export default CountryData;
export {CityData}