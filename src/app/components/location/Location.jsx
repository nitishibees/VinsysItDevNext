import {CommonSection, CommonHeadingHtwo, CommonSubHeading} from '@/app/components/CommonTags'
import Image from 'next/image'
import '@/app/components/location/location.scss'
const Location = props => {
    return (
        <>
            <CommonSection 
                styleClass="location-section"
            >
                <div className={`heading-wrapper ${props.innerStyleClass}`}>
                    <CommonHeadingHtwo 
                        mainHeading={props.heading}
                    />
                    <CommonSubHeading 
                        text={props.subHeading}
                    />
                </div>
                <div className="items grid grid-cols-2 mt-8 md:mt-12 gap-4 md:gap-8">
                    <div className="item col-span-2 md:col-span-1">
                        <Image src="/images/location/map.webp" alt="map" width={517} height={577} />
                    </div>
                    <div className='item our-location col-span-2 md:col-span-1'>
                        <ul className='flex flex-col gap-8'>
                            {props.children}
                        </ul>
                    </div>
                </div>
            </CommonSection>
        </>
    )
}

const LocationItems = props => {
    return (
        <>
            <li className='item flex items-center gap-4 md:gap-8'>
                <div className="img-wrapper flex items-center justify-center rounded-full">
                    <Image src={props.imgSrc} alt={props.imgAlt} width={40} height={40} />
                </div>
                <div className="content">
                    <div className="title">{props.title}</div>
                    <p>{props.text}</p>
                </div>
            </li>
        </>
    )
}

export default Location
export { LocationItems }