import FooterForm from '@/app/components/footer/FooterForm'
import CountryData, { CityData } from '@/app/components/footer/Country'
import Link from "next/link"
import Image from "next/image"
import '@/app/components/footer/footer.scss'

const Footer = props => {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="top-section">
                        <div className="inner-content grid grid-cols-6 gap-4 justify-content-between">
                            <div className="left-section col-span-6 md:col-span-3">
                                <div className="title">Let’s Talk</div>
                                <FooterForm />
                            </div>
                            <div className="right-section col-span-6 md:col-span-3">
                            
                            </div>
                        </div>
                    </div>
                    <div className="bottom-section flex justify-between items-center">
                        <div className="left">©1998–2024 Vinsys | All Rights Reserved</div>
                        <div className='social-icons flex justify-center items-center gap-4'>
                            <span>Follow Us:</span>
                            <Link href={'https://www.facebook.com/vinsys'}>
                                <Image src={'/images/icons/social-fb.webp'} alt={'facebook'} width={28} height={28} />
                            </Link>
                            <Link href={'https://twitter.com/VinsysOfficial'}>
                                <Image src={'/images/icons/social-twitter.webp'} alt={'twitter'} width={28} height={28} />
                            </Link>
                            <Link href={'https://www.linkedin.com/company/vinsys/'}>
                                <Image src={'/images/icons/social-linkdin.webp'} alt={'linkedin'} width={28} height={28} />
                            </Link>
                            <Link href={'https://www.youtube.com/channel/UCRVoaxoz_NeN6_2EJqm5a3Q'}>
                                <Image src={'/images/icons/social-youtube.webp'} alt={'you tube'} width={28} height={28} />
                            </Link>
                        </div>
                        <div class="right">
                            <ul class="flex gap-4 items-center">
                                <li>
                                    <Link href="/privacy-policy">Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link href="/terms-conditions">Terms &amp; Conditions</Link>
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