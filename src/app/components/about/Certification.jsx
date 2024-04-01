import {CommonSection, CommonHeadingHtwo, CommonSubHeading} from '@/app/components/CommonTags'
import Image from 'next/image'
import '@/app/components/about/certification.scss'

const Certification = props => {
    return (
        <>
            <CommonSection 
                styleClass="about-certification-section"
            >
                <div className={`heading-wrapper ${props.innerStyleClass}`}>
                    <CommonHeadingHtwo 
                        mainHeading={props.heading}
                    />
                    <CommonSubHeading 
                        text={props.subHeading}
                    />
                </div>
                <div className="items grid grid-cols-6 gap-4 md-gap-5 mt-8 md:mt-12 place-content-center">
                    {props.children}
                </div>
            </CommonSection>
        </>
    )
}

const CertificationItem = props => {
    return (
        <>
            <div className='item flex items-center col-span-6 sm:col-span-3 md:col-span-2'>
                <div className="img-wrapper">
                    <Image src={props.imgSrc} alt={props.imgAlt} width={115} height={115} />
                </div>
                <div className="title">{props.title}</div>
            </div>
        </>
    )
}

export default Certification
export {CertificationItem}