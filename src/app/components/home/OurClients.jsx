"use client"
import Image from "next/image"
import { CommonSection, CommonHeadingHtwo, CommonSubHeading } from "../CommonTags"
import '@/app/components/home/ourClients.scss'
import { useEffect, useState } from "react"

const OurClients = props => {
    const slides = [
        '/images/home/clients/hsbc.webp',
        '/images/home/clients/hsbc.webp',
        '/images/home/clients/hsbc.webp',
        '/images/home/clients/hsbc.webp',
        '/images/home/clients/hsbc.webp',
        '/images/home/clients/hsbc.webp',
        '/images/home/clients/hsbc.webp',
        '/images/home/clients/hsbc.webp',
        '/images/home/clients/hsbc.webp',
        '/images/home/clients/hsbc.webp',
        '/images/home/clients/hsbc.webp',
        '/images/home/clients/hsbc.webp',
        '/images/home/clients/hsbc.webp',
        '/images/home/clients/hsbc.webp',
        '/images/home/clients/hsbc.webp',
        '/images/home/clients/hsbc.webp',
        '/images/home/clients/hsbc.webp',
        '/images/home/clients/hsbc.webp',
    ]

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    const nextSlide = () => {
        setCurrentSlideIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Effect to automatically switch slides every 3 seconds
    useEffect(() => {
        
        const intervalId = setInterval(() => {
            nextSlide();
        }, 3000);
        return () => clearInterval(intervalId);
    }, [slides]);
    
    return (
        <>
            <section className="our-clients-section py-8 lg:py-12 w-full">
                <div className="inner-container">
                    <div className="heading-wrapper text-center">
                        <CommonHeadingHtwo mainHeading={'Our Clients'} />
                        <CommonSubHeading text="Lorem Ipsum is simply dummy text of the printing " />
                    </div>
                </div>
                <div className="slider-container"
                    style={{ transform: `translateX(-${currentSlideIndex * 100}%)` }}
                >
                    <div className="logo-slider mt-8 md:mt-12" >
                        {slides.map((logo, index) => (
                            <>
                                <div
                                    key={index}
                                    className={`slide ${index === currentSlideIndex ? 'active' : ''} `}
                                >
                                    <p>{index}</p>
                                    <Image 
                                        src={logo}
                                        alt={'logo'}
                                        width={145}
                                        height={50}
                                    />    
                                </div>
                                
                            </>
                        ))}
                    </div>
                </div>
                
            </section> 
        </>
    )
}

export default OurClients