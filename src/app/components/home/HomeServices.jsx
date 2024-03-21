import Image from "next/image"
import Link from "next/link"
import { CommonSection, CommonHeadingHtwo, CommonSubHeading } from "../CommonTags"
import '@/app/components/home/homeServices.scss'

const HomeServices = props => {
    return (
        <>
            <CommonSection styleClass="home-services-section">
                <div className="heading-wrapper">
                    <CommonHeadingHtwo mainHeading="Our Services" />
                    <CommonSubHeading text="Lorem Ipsum is simply dummy text of the printing " />
                </div>
                <div className="items">
                    <div className="item">
                        <div className="content">
                            <div className="title">Managed Services</div>
                            <Link href={'#'} aria-label="readmore">Read More</Link>
                        </div>
                        <div className="img-wrapper">
                            <Image src={'/images/home/services/service-1.webp'} alt={'Service'} width={333} height={316} />
                        </div>
                    </div>
                    <div className="item">
                        <div className="content">
                            <div className="title">Managed Services</div>
                            <Link href={'#'} aria-label="readmore">Read More</Link>
                        </div>
                        <div className="img-wrapper">
                            <Image src={'/images/home/services/service-1.webp'} alt={'Service'} width={333} height={316} />
                        </div>
                    </div>
                    <div className="item">
                        <div className="content">
                            <div className="title">Managed Services</div>
                            <Link href={'#'} aria-label="readmore">Read More</Link>
                        </div>
                        <div className="img-wrapper">
                            <Image src={'/images/home/services/service-1.webp'} alt={'Service'} width={333} height={316} />
                        </div>
                    </div>
                    <div className="item">
                        <div className="content">
                            <div className="title">Managed Services</div>
                            <Link href={'#'} aria-label="readmore">Read More</Link>
                        </div>
                        <div className="img-wrapper">
                            <Image src={'/images/home/services/service-1.webp'} alt={'Service'} width={333} height={316} />
                        </div>
                    </div>
                    <div className="item">
                        <div className="content">
                            <div className="title">Managed Services</div>
                            <Link href={'#'} aria-label="readmore">Read More</Link>
                        </div>
                        <div className="img-wrapper">
                            <Image src={'/images/home/services/service-1.webp'} alt={'Service'} width={333} height={316} />
                        </div>
                    </div>
                    <div className="item">
                        <div className="content">
                            <div className="title">Managed Services</div>
                            <Link href={'#'} aria-label="readmore">Read More</Link>
                        </div>
                        <div className="img-wrapper">
                            <Image src={'/images/home/services/service-1.webp'} alt={'Service'} width={333} height={316} />
                        </div>
                    </div>
                </div>
            </CommonSection>
        </>
    )
}

export default HomeServices