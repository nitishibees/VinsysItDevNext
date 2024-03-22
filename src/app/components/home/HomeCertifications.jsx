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
                        <ul className="items mt-8 md:mt-12 grid grid-cols-4 gap-5 md:gap-10 justify-content-between">
                            <li className="item col-span-2 sm:col-span-1 flex flex-col gap-3 items-center justify-content-start text-center">
                                <Image src={'/images/home/certification/iso.webp'} alt={'iso'} width={115} height={115} />
                                <div className="title">Quality Management</div>
                            </li>
                            <li className="item col-span-2 sm:col-span-1 flex flex-col gap-3 items-center justify-content-start text-center">
                                <Image src={'/images/home/certification/iso.webp'} alt={'iso'} width={115} height={115} />
                                <div className="title">Quality Management</div>
                            </li>
                            <li className="item col-span-2 sm:col-span-1 flex flex-col gap-3 items-center justify-content-start text-center">
                                <Image src={'/images/home/certification/iso.webp'} alt={'iso'} width={115} height={115} />
                                <div className="title">Quality Management</div>
                            </li>
                            <li className="item col-span-2 sm:col-span-1 flex flex-col gap-3 items-center justify-content-start text-center">
                                <Image src={'/images/home/certification/iso.webp'} alt={'iso'} width={115} height={115} />
                                <div className="title">Quality Management</div>
                            </li>
                            <li className="item col-span-2 sm:col-span-1 flex flex-col gap-3 items-center justify-content-start text-center">
                                <Image src={'/images/home/certification/iso.webp'} alt={'iso'} width={115} height={115} />
                                <div className="title">Quality Management</div>
                            </li>
                            <li className="item col-span-2 sm:col-span-1 flex flex-col gap-3 items-center justify-content-start text-center">
                                <Image src={'/images/home/certification/iso.webp'} alt={'iso'} width={115} height={115} />
                                <div className="title">Quality Management</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </CommonSection>
        </>
    )
}

export default HomeCertifications