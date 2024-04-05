import HomeBanner from '@/app/components/home/HomeBanner'
import HomeAbout from '@/app/components/home/HomeAbout'
import HomeCertifications from '@/app/components/home/HomeCertifications'
import HomeServices from '@/app/components/home/HomeServices'
import OurClients from '@/app/components/home/OurClients'
import CaseStudyList from '@/app/components/common/CaseStudyList'


export default function Home() {
    
    return (
        <>
            <HomeBanner />
            <HomeAbout 
                imgSrc='/images/home/homeAbout.webp'
                imgAlt='about'
                heading='Lorem Ipsum Dollar'
                text='Digital transformation is the cultural, organizational and operational change of an organization, industry or ecosystem through a smart integration of digital technologies, processes and competencies across all levels and functions in a staged way. Digital transformation (also DX or DT) leverages technologies to create value for various stakeholders (customers in the broadest possible sense), innovate and adapt to changing circumstances.'
                btnText='Talk to us'
                btnLink='#'
            />
            <HomeCertifications />
            <HomeServices />
            <OurClients />
            <CaseStudyList 
                innerClass="casestudy-listing"
                heading="Case Study"
                subHeading="Lorem Ipsum is simply dummy text of the printing"
            />
            <OurClients />
        </>
    );
}
