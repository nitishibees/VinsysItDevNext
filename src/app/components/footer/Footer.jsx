import FooterForm from '@/app/components/footer/FooterForm'
import CountryData, { CityData } from '@/app/components/footer/Country'
import SocialLinks from '@/app/components/footer/SocialLinks'
import Link from "next/link"
import Image from "next/image"
import '@/app/components/footer/footer.scss'

const Footer = () => {
    const countryData = [
        {
            country:"India",
            iconSrc:"/images/icons/flag/india.webp",
            iconAlt:"India",
            city: [
                {
                    name:'pune',
                    phone:'+91 20 67444700',
                    emailText:'enquiry@vinsys.com',
                    addText:'Shivaji Niketan, Tejas Society, Behind Kothrud Bus Stand, Near Mantri Park, Kothrud, Pune  -411038'
                },
                {
                    name:'indore',
                    phone:'+91 20 67444700',
                    emailText:'enquiry@vinsys.com',
                    addText:'Shivaji Niketan, Tejas Society, Behind Kothrud Bus Stand, Near Mantri Park, Kothrud, Pune  -411038'
                },
                {
                    name:'banglore',
                    phone:'+91 20 67444700',
                    emailText:'enquiry@vinsys.com',
                    addText:'Shivaji Niketan, Tejas Society, Behind Kothrud Bus Stand, Near Mantri Park, Kothrud, Pune  -411038'
                }
            ]
        },
        {
            country:"United Arab Emirates",
            iconSrc:"/images/icons/flag/uae.webp",
            iconAlt:"uae",
            city: [
                {
                    name:'pune',
                    phone:'+91 20 67444700',
                    emailText:'enquiry@vinsys.com',
                    addText:'Shivaji Niketan, Tejas Society, Behind Kothrud Bus Stand, Near Mantri Park, Kothrud, Pune  -411038'
                },
                {
                    name:'indore',
                    phone:'+91 20 67444700',
                    emailText:'enquiry@vinsys.com',
                    addText:'Shivaji Niketan, Tejas Society, Behind Kothrud Bus Stand, Near Mantri Park, Kothrud, Pune  -411038'
                },
                {
                    name:'banglore',
                    phone:'+91 20 67444700',
                    emailText:'enquiry@vinsys.com',
                    addText:'Shivaji Niketan, Tejas Society, Behind Kothrud Bus Stand, Near Mantri Park, Kothrud, Pune  -411038'
                }
            ]
        },
        {
            country:"United States of America",
            iconSrc:"/images/icons/flag/usa.webp",
            iconAlt:"usa",
            city: [
                {
                    name:'pune',
                    phone:'+91 20 67444700',
                    emailText:'enquiry@vinsys.com',
                    addText:'Shivaji Niketan, Tejas Society, Behind Kothrud Bus Stand, Near Mantri Park, Kothrud, Pune  -411038'
                },
                {
                    name:'indore',
                    phone:'+91 20 67444700',
                    emailText:'enquiry@vinsys.com',
                    addText:'Shivaji Niketan, Tejas Society, Behind Kothrud Bus Stand, Near Mantri Park, Kothrud, Pune  -411038'
                },
                {
                    name:'banglore',
                    phone:'+91 20 67444700',
                    emailText:'enquiry@vinsys.com',
                    addText:'Shivaji Niketan, Tejas Society, Behind Kothrud Bus Stand, Near Mantri Park, Kothrud, Pune  -411038'
                }
            ]
        },
        {
            country:"Saudi Arabia",
            iconSrc:"/images/icons/flag/sa.webp",
            iconAlt:"Saudi Arabia",
            city: [
                {
                    name:'pune',
                    phone:'+91 20 67444700',
                    emailText:'enquiry@vinsys.com',
                    addText:'Shivaji Niketan, Tejas Society, Behind Kothrud Bus Stand, Near Mantri Park, Kothrud, Pune  -411038'
                },
                {
                    name:'indore',
                    phone:'+91 20 67444700',
                    emailText:'enquiry@vinsys.com',
                    addText:'Shivaji Niketan, Tejas Society, Behind Kothrud Bus Stand, Near Mantri Park, Kothrud, Pune  -411038'
                },
                {
                    name:'banglore',
                    phone:'+91 20 67444700',
                    emailText:'enquiry@vinsys.com',
                    addText:'Shivaji Niketan, Tejas Society, Behind Kothrud Bus Stand, Near Mantri Park, Kothrud, Pune  -411038'
                }
            ]
        },
        {
            country:"Qatar",
            iconSrc:"/images/icons/flag/qatar.webp",
            iconAlt:"Qatar",
            city: [
                {
                    name:'pune',
                    phone:'+91 20 67444700',
                    emailText:'enquiry@vinsys.com',
                    addText:'Shivaji Niketan, Tejas Society, Behind Kothrud Bus Stand, Near Mantri Park, Kothrud, Pune  -411038'
                },
                {
                    name:'indore',
                    phone:'+91 20 67444700',
                    emailText:'enquiry@vinsys.com',
                    addText:'Shivaji Niketan, Tejas Society, Behind Kothrud Bus Stand, Near Mantri Park, Kothrud, Pune  -411038'
                },
                {
                    name:'banglore',
                    phone:'+91 20 67444700',
                    emailText:'enquiry@vinsys.com',
                    addText:'Shivaji Niketan, Tejas Society, Behind Kothrud Bus Stand, Near Mantri Park, Kothrud, Pune  -411038'
                }
            ]
        }
    ]

    const socialLinks = [
        {
            link:'https://www.facebook.com/vinsys',
            imgSrc:'/images/icons/social-fb.webp',
            imgAlt:'facebook'
        },
        {
            link:'https://twitter.com/VinsysOfficial',
            imgSrc:'/images/icons/social-twitter.webp',
            imgAlt:'facebook'
        },
        {
            link:'https://www.linkedin.com/company/vinsys/',
            imgSrc:'/images/icons/social-linkdin.webp',
            imgAlt:'facebook'
        },
        {
            link:'https://www.youtube.com/channel/UCRVoaxoz_NeN6_2EJqm5a3Q',
            imgSrc:'/images/icons/social-youtube.webp',
            imgAlt:'facebook'
        }
    ]

    var footer = {
        formHeading:"Let's Talk",
        copyright: '©1998–2024 Vinsys | All Rights Reserved',
        privacyLink:'/privacy-policy',
        privacyText:'Privacy Policy',
        termsText:'Terms &amp; Conditions',
        termsLink:"/terms-conditions"
    }
    
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="top-section">
                        <div className="inner-content grid grid-cols-6 gap-4 justify-content-between">
                            <div className="left-section col-span-6 md:col-span-3">
                                <FooterForm 
                                    formHeading={footer.formHeading}
                                />
                            </div>
                            <div className="right-section col-span-6 md:col-span-3">
                                {countryData.map((val) => (
                                    <>
                                        <CountryData
                                            iconSrc={val.iconSrc}
                                            iconAlt={val.iconAlt}
                                            country={val.country}
                                        >
                                            {val.city.map((city) => (
                                                <><CityData 
                                                    cityname={city.name}
                                                    phone={city.phone}
                                                    emailText={city.emailText}
                                                    addText={city.addText}
                                                /></>
                                            ))}
                                        </CountryData>
                                    </>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="bottom-section flex justify-between items-center gap-4 flex-col lg:flex-row">
                        <div className="left">{footer.copyright}</div>
                        <div className='social-icons flex justify-center items-center gap-4'>
                            <span>Follow Us:</span>
                            {socialLinks.map((val) => (
                                <>
                                    <SocialLinks 
                                        link={val.link}
                                        imgSrc={val.imgSrc}
                                        imgAlt={val.imgAlt}
                                    />
                                </>
                            ))}
                            
                        </div>
                        <div className="right">
                            <ul className="flex gap-4 items-center">
                                <li>
                                    <Link href={footer.privacyLink}>{footer.privacyText}</Link>
                                </li>
                                <li>
                                    <Link href={footer.termsLink}>{footer.termsText}</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </footer>
        </>
    )
}

export default Footer