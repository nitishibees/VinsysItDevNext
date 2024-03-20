import Image from "next/image"

const HomeBanner = () => {
    return (
        <>
            <div className="homebanner">
                <div className="container">
                    <div className="inner-content">
                        
                    </div>
                    <div className="img-banner">
                        <Image src="/images/home/bannerHome.webp" alt="homebanner" width={1600} height={900} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeBanner