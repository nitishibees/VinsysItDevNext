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
                <div className="items flex flex-wrap mt-8 md:mt-12 justify-center">
                    {props.children}
                </div>
            </CommonSection>
        </>
    )
}

const CertificationItem = props => {
    return (
        <>
            <div className='item w-full md:w-1/2 lg:w-2/6'>
                <div className="inner-content flex">
                    <div className="img-wrapper">
                        <Image src={props.imgSrc} alt={props.imgAlt} width={115} height={115} />
                    </div>
                    <div className="title">{props.title}</div>
                </div>
            </div>
        </>
    )
}

export default Certification
export {CertificationItem}