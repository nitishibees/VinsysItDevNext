import Image from "next/image"
import CommonBtn, { CommonHeadingHone } from "../CommonTags"
import '@/app/components/home/homebanner.scss'

const HomeBanner = () => {
    return (
        <>
            <div className="homebanner">
                <div className="img-banner">
                    <Image src="/images/home/bannerHome.webp" alt="homebanner" width={1600} height={900} />
                </div>
                <div className="inner-content py-8 md:py-12">
                    <div className="container">
                        <CommonHeadingHone mainHeading="Delivering Skills Driving Success" />
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered</p>
                        <CommonBtn
                            styleClass="mt-14"
                            link="#"
                            text="View All Services"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeBanner