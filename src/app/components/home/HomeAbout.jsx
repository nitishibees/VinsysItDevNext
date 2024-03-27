import CommonBtn, {CommonSection, CommonHeadingHtwo} from '@/app/components/CommonTags'
import Image from 'next/image'
import '@/app/components/home/homeAbout.scss'

const HomeAbout = props => {
    return (
        <>
            <CommonSection styleClass="home-about-section">
                <div className='inner-content grid grid-cols-5 gap-8 md:gap-16 items-center'>
                    <div className='img-wrapper col-span-5 lg:col-span-2'>
                        <Image src='/images/home/homeAbout.webp' alt='about' width={550} height={419} className="rounded-lg md:rounded-2xl" />
                    </div>
                    <div className="content-wrapper col-span-5 lg:col-span-3">
                        <CommonHeadingHtwo 
                            mainHeading="Lorem Ipsum Dollar"
                        />
                        <p>Digital transformation is the cultural, organizational and operational change of an organization, industry or ecosystem through a smart integration of digital technologies, processes and competencies across all levels and functions in a staged way. Digital transformation (also DX or DT) leverages technologies to create value for various stakeholders (customers in the broadest possible sense), innovate and adapt to changing circumstances.</p>
                        <CommonBtn
                            styleClass="mt-5 lg:mt-10"
                            text="Talk to us"
                        />
                    </div>
                </div>
            </CommonSection>
        </>
    )
}

export default HomeAbout