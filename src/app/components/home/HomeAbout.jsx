import CommonBtn, {CommonSection, CommonHeadingHtwo} from '@/app/components/CommonTags'
import Image from 'next/image'
import '@/app/components/home/homeAbout.scss'

const HomeAbout = props => {
    return (
        <>
            <CommonSection styleClass="home-about-section">
                <div className='inner-content grid grid-cols-5 gap-8 md:gap-16 items-center'>
                    <div className='img-wrapper col-span-5 lg:col-span-2'>
                        <Image src={props.imgSrc} alt={props.imgAlt} width={550} height={419} className="rounded-lg md:rounded-2xl" />
                    </div>
                    <div className="content-wrapper col-span-5 lg:col-span-3">
                        <CommonHeadingHtwo 
                            mainHeading={props.heading}
                        />
                        <p>{props.text}</p>
                        <CommonBtn
                            styleClass="mt-5 lg:mt-10"
                            text={props.btnText}
                            link={props.btnLink}
                        />
                    </div>
                </div>
            </CommonSection>
        </>
    )
}

export default HomeAbout