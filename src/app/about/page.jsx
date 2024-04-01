import InnerBanner from "@/app/components/innerbanner/InnerBanner"
import HomeAbout from '@/app/components/home/HomeAbout'
import Offering, { OfferingItems } from "@/app/components/about/Offering"
import OurClients from '@/app/components/home/OurClients'
import Certification, { CertificationItem } from "@/app/components/about/Certification"

const AboutPage = props => {
    return (
        <>
            <InnerBanner 
                imgSrc='/images/about/inner-banner.webp'
                imgAlt='Infrastructure Engineering'
                heading='Infrastructure Engineering'
                subHeading='Lorem Ipsum Dollar Impset'
            />
            <HomeAbout 
                imgSrc='/images/home/homeAbout.webp'
                imgAlt='about'
                heading='Introduction'
                text='Digital transformation is the cultural, organizational and operational change of an organization, industry or ecosystem through a smart integration of digital technologies, processes and competencies across all levels and functions in a staged way. Digital transformation (also DX or DT) leverages technologies to create value for various stakeholders (customers in the broadest possible sense), innovate and adapt to changing circumstances.'
                btnText='Talk to us'
                btnLink='#'
            />

            <Offering
                innerStyleClass='text-center'
                heading='Our Offerings'
                subHeading='Lorem Ipsum is simply dummy text of the printing'
            >
                <OfferingItems
                    title='Data centre management'
                    text='Our team of experts understands the importance of your data and offers extensive managed services for your data center. We provide various services to manage your data center operations, including network security, tool deployment, application reinforcement, team training, and workflow management. By entrusting us with the technical aspects of your data center, you can focus on growing your business.'
                    imgSrc='/images/about/offering.webp'
                    imgAlt='Data centre management'
                />
                <OfferingItems
                    title='Data centre management'
                    text='Our team of experts understands the importance of your data and offers extensive managed services for your data center. We provide various services to manage your data center operations, including network security, tool deployment, application reinforcement, team training, and workflow management. By entrusting us with the technical aspects of your data center, you can focus on growing your business.'
                    imgSrc='/images/about/offering.webp'
                    imgAlt='Data centre management'
                />
                <OfferingItems
                    title='Data centre management'
                    text='Our team of experts understands the importance of your data and offers extensive managed services for your data center. We provide various services to manage your data center operations, including network security, tool deployment, application reinforcement, team training, and workflow management. By entrusting us with the technical aspects of your data center, you can focus on growing your business.'
                    imgSrc='/images/about/offering.webp'
                    imgAlt='Data centre management'
                />
                <OfferingItems
                    title='Data centre management'
                    text='Our team of experts understands the importance of your data and offers extensive managed services for your data center. We provide various services to manage your data center operations, including network security, tool deployment, application reinforcement, team training, and workflow management. By entrusting us with the technical aspects of your data center, you can focus on growing your business.'
                    imgSrc='/images/about/offering.webp'
                    imgAlt='Data centre management'
                />
                <OfferingItems
                    title='Data centre management'
                    text='Our team of experts understands the importance of your data and offers extensive managed services for your data center. We provide various services to manage your data center operations, including network security, tool deployment, application reinforcement, team training, and workflow management. By entrusting us with the technical aspects of your data center, you can focus on growing your business.'
                    imgSrc='/images/about/offering.webp'
                    imgAlt='Data centre management'
                />

            </Offering>

            <OurClients />

            <Certification
                innerStyleClass='text-center'
                heading='Our Certification'
                subHeading='Lorem Ipsum is simply dummy text of the printing'
            >
                <CertificationItem 
                    imgSrc='/images/home/certification/iso.webp'
                    imgAlt='Quality Management'
                    title='Quality Management'
                />
                <CertificationItem 
                    imgSrc='/images/home/certification/iso.webp'
                    imgAlt='Quality Management'
                    title='Quality Management'
                />
                <CertificationItem 
                    imgSrc='/images/home/certification/iso.webp'
                    imgAlt='Quality Management'
                    title='Quality Management'
                />
                <CertificationItem 
                    imgSrc='/images/home/certification/iso.webp'
                    imgAlt='Quality Management'
                    title='Quality Management'
                />
                <CertificationItem 
                    imgSrc='/images/home/certification/iso.webp'
                    imgAlt='Quality Management'
                    title='Quality Management'
                />

            </Certification>
        </>
    )
}

export default AboutPage