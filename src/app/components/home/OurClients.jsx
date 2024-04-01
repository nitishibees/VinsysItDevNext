"use client"
import Image from "next/image"
import { CommonHeadingHtwo, CommonSubHeading } from "../CommonTags"
import '@/app/components/home/ourClients.scss'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const OurClients = props => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 1200 },
          items: 7,         
        },
        desktop: {
          breakpoint: { max: 1199, min: 1024 },
          items: 6,          
        },
        tablet: {
          breakpoint: { max: 1023, min: 768 },
          items: 4,
        },
        mobile: {
          breakpoint: { max: 767, min: 0 },
          items: 2,
        }
    };
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
    
    return (
        <>
            <section className="our-clients-section py-8 lg:py-12 w-full">
                <div className="inner-container">
                    <div className="heading-wrapper text-center">
                        <CommonHeadingHtwo mainHeading={'Our Clients'} />
                        <CommonSubHeading text="Lorem Ipsum is simply dummy text of the printing " />
                    </div>
                </div>
                <div className="slider-container">
                    <div className="logo-slider mt-8 md:mt-12" >
                        <Carousel responsive={responsive} arrows={false} swipeable={false} draggable={false} showDots={false} infinite={true} autoPlay={true} customTransition="linear 4s">  
                            {slides.map((slide, index) => (
                                <img key={index} src={slide} alt={`Slide ${index}`} />
                            ))}
                        </Carousel>
                    </div>
                </div>
                
            </section> 
        </>
    )
}

export default OurClients