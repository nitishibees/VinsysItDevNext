import InnerBanner from "@/app/components/innerbanner/InnerBanner"
import ContactInfo, { ContactDetails, ContactDetailsItems } from '@/app/components/contact/ContactInfo'
import LocationMap from '@/app/components/contact/LocationMap'

const ContactPage = props => {
    return (
        <>
            <InnerBanner 
                imgSrc='/images/about/inner-banner.webp'
                imgAlt='Contact Us'
                heading='Contact Us'
                subHeading='Lorem Ipsum Dollar Impset'
            />
            
            <ContactInfo
                innerStyleClass="text-center"
                heading="Connect With Us"
                subHeading="Lorem Ipsum is simply dummy text of the printing"
                contactInfoHeading="Contact Information"

            >
                <ContactDetails 
                    heading="Contact Information"
                    subHeading="Say something to start a live chat!"
                >
                    <ContactDetailsItems 
                        imgSrc="/images/icons/call.png"
                        imgAlt="call"
                        title="Give Us A Call"
                        linkHref="tel:+91-9898765678"
                        link="+91-9898765678"
                    />
                    <ContactDetailsItems 
                        imgSrc="/images/icons/mail.png"
                        imgAlt="call"
                        title="Give Us A Call"
                        linkHref="tel:+91-9898765678"
                        link="+91-9898765678"
                    />
                    <ContactDetailsItems 
                        imgSrc="/images/icons/call.png"
                        imgAlt="call"
                        title="Give Us A Call"
                        text="1 &2, Agarwal Market, Station Rd, Opp.rly St., Vile Parle , Delhi"
                    />
                </ContactDetails>
                
            </ContactInfo>

            <LocationMap 
                iframeSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.7476274901883!2d77.24768971061746!3d28.54730447561008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3cfc6b8ded5%3A0xfef1d6a52412d8f9!2sVinsys%20IT%20Corporate%20Training%20%7C%20SAFe%20Agile%20Certification%20Training%20%7C%20Scrum%20Master%20Course!5e0!3m2!1sen!2sin!4v1712225332091!5m2!1sen!2sin"
            />
        </>
    )
}

export default ContactPage