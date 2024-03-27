import Image from "next/image"
import CommonBtn, { CommonHeadingHone } from "../CommonTags"
import '@/app/components/home/homebanner.scss'

const HomeBanner = () => {
    return (
        <>
            <div className="homebanner">
                <div className="img-banner">
                    <Image src="/images/home/bannerHome.webp" className="hidden md:block" alt="homebanner" width={1600} height={900} />
                    <Image src="/images/home/bannerHomeSm.webp" className="block md:hidden" alt="homebanner" width={767} height={550} />
                </div>
                <div className="container">
                    <div className="inner-content py-8 md:py-32">
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