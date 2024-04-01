import {CommonSection, CommonHeadingHtwo, CommonSubHeading} from '@/app/components/CommonTags'
import Image from 'next/image'
import '@/app/components/about/offering.scss'

const Offering = props => {
    return (
        <>
            <CommonSection 
                styleClass="offering-section"
            >
                <div className={`heading-wrapper ${props.innerStyleClass}`}>
                    <CommonHeadingHtwo 
                        mainHeading={props.heading}
                    />
                    <CommonSubHeading 
                        text={props.subHeading}
                    />
                </div>
                <ul className="items flex flex-col gap-4 mt-8 md:mt-12">
                    {props.children}
                </ul>
            </CommonSection>
        </>
    )
}

const OfferingItems = props => {
    return (
        <>
            <li className="item">
                <div className="inner-content grid grid-cols-4">
                    <div className="content-section col-span-2">
                        <div className="title">{props.title}</div>
                        <p>{props.text}</p>
                    </div>
                    <div className='img-section col-span-2'>
                        <Image src={props.imgSrc} alt={props.imgAlt} width={589} height={300} />
                    </div>
                </div>
            </li>
        </>
    )
}

export default Offering
export {OfferingItems}