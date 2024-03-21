import Image from "next/image"
import { CommonSection, CommonHeadingHtwo, CommonSubHeading } from "../CommonTags"
import '@/app/components/home/homeServices.scss'

const OurClients = props => {
    return (
        <>
            <CommonSection styleClass="our-clients-section">
                <div className="heading-wrapper">
                    <CommonHeadingHtwo mainHeading={'Our Clients'} />
                    <CommonSubHeading text="Lorem Ipsum is simply dummy text of the printing " />
                </div>
                <div className="logo-slider mt-4">
                    <Image src={'/images/home/clients/hsbc.webp'} alt={'logo'} width={145} height={50} />
                    <Image src={'/images/home/clients/hsbc.webp'} alt={'logo'} width={145} height={50} />
                    <Image src={'/images/home/clients/hsbc.webp'} alt={'logo'} width={145} height={50} />
                    <Image src={'/images/home/clients/hsbc.webp'} alt={'logo'} width={145} height={50} />
                    <Image src={'/images/home/clients/hsbc.webp'} alt={'logo'} width={145} height={50} />
                    <Image src={'/images/home/clients/hsbc.webp'} alt={'logo'} width={145} height={50} />
                    <Image src={'/images/home/clients/hsbc.webp'} alt={'logo'} width={145} height={50} />
                </div>
            </CommonSection> 
        </>
    )
}

export default OurClients