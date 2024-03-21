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
            <HomeAbout />
            <HomeCertifications />
            <HomeServices />
            <OurClients />
            <CaseStudyList />
            <OurClients />
        </>
    );
}
