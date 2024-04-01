import {CommonSubHeading, CommonHeadingHone} from '@/app/components/CommonTags'
import '@/app/components/innerbanner/innerbanner.scss'
import Image from 'next/image'

const InnerBanner = props => {
    return (
        <>
            <div className="inner-banner w-full">
                <Image src={props.imgSrc} alt={props.imgAlt} width={1600} height={400} />
                <div className="container">
                    <div className="inner-content flex flex-col justify-end items-center">
                        <CommonHeadingHone 
                            mainHeading={props.heading}
                        />
                        {props.subHeading && 
                            <CommonSubHeading 
                                text={props.subHeading}
                            />
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default InnerBanner