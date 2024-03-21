import Image from "next/image"
import {CommonSection, CommonHeadingHtwo, CommonSubHeading} from '@/app/components/CommonTags'
import '@/app/components/home/homeCertifications.scss'

const HomeCertifications = props => {
    return(
        <>
            <CommonSection styleClass="home-certification-section gradiant-bg">
                <div className="inner-content grid grid-cols-5 gap-8 items-center">
                    <div className="img-wrapper col-span-5 md:col-span-2">
                        <Image src={'/images/home/homeCertification.webp'} alt="Certification" width={550} height={447} />
                    </div>
                    <div className="content-wrapper col-span-5 md:col-span-3">
                        <CommonHeadingHtwo mainHeading="Our Certifications" />
                        <CommonSubHeading text="Lorem Ipsum is simply dummy text of the printing " />
                        <ul className="items mt-4 grid grid-cols-4 gap-4 justify-content-between">
                            <li className="item col-span-2 sm:col-span-1 flex flex-col items-center justify-content-start">
                                <Image src={'/images/home/certification/iso.webp'} alt={'iso'} width={115} height={115} />
                                <p>Quality Management</p>
                            </li>
                            <li className="item col-span-2 sm:col-span-1 flex flex-col items-center justify-content-start">
                                <Image src={'/images/home/certification/iso.webp'} alt={'iso'} width={115} height={115} />
                                <p>Quality Management</p>
                            </li>
                            <li className="item col-span-2 sm:col-span-1 flex flex-col items-center justify-content-start">
                                <Image src={'/images/home/certification/iso.webp'} alt={'iso'} width={115} height={115} />
                                <p>Quality Management</p>
                            </li>
                            <li className="item col-span-2 sm:col-span-1 flex flex-col items-center justify-content-start">
                                <Image src={'/images/home/certification/iso.webp'} alt={'iso'} width={115} height={115} />
                                <p>Quality Management</p>
                            </li>
                            <li className="item col-span-2 sm:col-span-1 flex flex-col items-center justify-content-start">
                                <Image src={'/images/home/certification/iso.webp'} alt={'iso'} width={115} height={115} />
                                <p>Quality Management</p>
                            </li>
                            <li className="item col-span-2 sm:col-span-1 flex flex-col items-center justify-content-start">
                                <Image src={'/images/home/certification/iso.webp'} alt={'iso'} width={115} height={115} />
                                <p>Quality Management</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </CommonSection>
        </>
    )
}

export default HomeCertifications