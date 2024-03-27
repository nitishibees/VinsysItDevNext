import Image from "next/image"
import Link from "next/link"
import { CommonSection, CommonHeadingHtwo, CommonSubHeading } from "../CommonTags"
import '@/app/components/home/homeServices.scss'

const HomeServices = props => {
    return (
        <>
            <CommonSection styleClass="home-services-section">
                <div className="heading-wrapper text-center">
                    <CommonHeadingHtwo mainHeading="Our Services" />
                    <CommonSubHeading text="Lorem Ipsum is simply dummy text of the printing " />
                </div>
                <div className="items mt-8 md:mt-12">
                    <div className="item item-1">
                        <div className="content flex flex-col items-start">
                            <div className="title">Managed Services</div>
                            <Link href={'#'} className="light-btn mt-4" aria-label="readmore">Read More</Link>
                        </div>
                        <div className="img-wrapper">
                            <Image src={'/images/home/services/service-1.webp'} alt={'Service'} width={333} height={316} />
                        </div>
                    </div>
                    <div className="item item-2">
                        <div className="content flex flex-col items-start">
                            <div className="title">Consultancy</div>
                            <Link href={'#'} className="light-btn mt-4" aria-label="readmore">Read More</Link>
                        </div>
                        <div className="img-wrapper">
                            <Image src={'/images/home/services/service-2.webp'} alt={'Service'} width={333} height={316} />
                        </div>
                    </div>
                    <div className="item item-3">
                        <div className="content flex flex-col items-start">
                            <div className="title">Infrastructure Engineering</div>
                            <Link href={'#'} className="light-btn mt-4" aria-label="readmore">Read More</Link>
                        </div>
                        <div className="img-wrapper">
                            <Image src={'/images/home/services/service-3.webp'} alt={'Service'} width={333} height={316} />
                        </div>
                    </div>
                    <div className="item item-4">
                        <div className="content flex flex-col items-start">
                            <div className="title">Security as a Services</div>
                            <Link href={'#'} className="light-btn mt-4" aria-label="readmore">Read More</Link>
                        </div>
                        <div className="img-wrapper">
                            <Image src={'/images/home/services/service-4.webp'} alt={'Service'} width={333} height={316} />
                        </div>
                    </div>
                    <div className="item item-5">
                        <div className="content flex flex-col items-start">
                            <div className="title">Tech Transformation</div>
                            <Link href={'#'} className="light-btn mt-4" aria-label="readmore">Read More</Link>
                        </div>
                        <div className="img-wrapper">
                            <Image src={'/images/home/services/service-5.webp'} alt={'Service'} width={333} height={316} />
                        </div>
                    </div>
                    <div className="item item-6">
                        <div className="content flex flex-col items-start">
                            <div className="title">Testing as a Service</div>
                            <Link href={'#'} className="light-btn mt-4" aria-label="readmore">Read More</Link>
                        </div>
                        <div className="img-wrapper">
                            <Image src={'/images/home/services/service-6.webp'} alt={'Service'} width={333} height={316} />
                        </div>
                    </div>
                </div>
            </CommonSection>
        </>
    )
}

export default HomeServices