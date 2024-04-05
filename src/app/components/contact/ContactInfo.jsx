import {CommonSection, CommonHeadingHtwo, CommonSubHeading, CommonBtnButton} from '@/app/components/CommonTags'
import Image from 'next/image'
import Link from 'next/link'
import '@/app/components/contact/contactinfo.scss'

const ContactInfo = props => {
    return (
        <>
            <CommonSection 
                styleClass="contact-info-section"
            >
                <div className={`heading-wrapper ${props.innerStyleClass}`}>
                    <CommonHeadingHtwo 
                        mainHeading={props.heading}
                    />
                    <CommonSubHeading 
                        text={props.subHeading}
                    />
                </div>
                <div className="contact-info grid grid-cols-5 gap-4 md:gap-8 mt-8 md:mt-12 justify-center p-0 md:p-4 rounded-lg md:rounded-2xl">
                    <div className='contact-details col-span-5 lg:col-span-2'>
                        {props.children}
                    </div>
                    <div className='contact-form col-span-5 lg:col-span-3'>
                        <form action="" className="form-wrapper">
                            <ul className='flex flex-wrap'>
                                <li className="form-row flex">
                                    <div className="row-item">
                                        <input type="text" placeholder='First Name' />
                                    </div>
                                    <div className="row-item">
                                        <input type="text" placeholder='Last Name' />
                                    </div>
                                </li>
                                <li className="form-row flex">
                                    <div className="row-item">
                                        <input type="tel" placeholder='Mobile No' />
                                    </div>
                                    <div className="row-item">
                                        <input type="email" placeholder='Email' />
                                    </div>
                                </li>
                                <li className="form-row flex w-full">
                                    <div className="row-item">
                                        <input type="text" placeholder='Subject' />
                                    </div>
                                </li>
                                <li className="form-row flex w-full">
                                    <div className="row-item">
                                        <textarea name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
                                    </div>
                                </li>
                                <li className="form-row flex mt-2 md:mt-8">
                                    <CommonBtnButton 
                                        styleClass="w-max"
                                        text="Submit"
                                    />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </CommonSection>
        </>
    )
}

const ContactDetails = props => {
    return (
        <>
            <div className="inner-content rounded-lg md:rounded-2xl">
                <div className="heading-wrapper">
                    <div className="heading">{props.heading}</div>
                    <p>{props.subHeading}</p>
                </div>
                <div className="items flex flex-col gap-4 lg:gap-6 mt-8">
                    {props.children}
                </div>
                <div className='social-icons mt-8'>
                    <div className="heading">Follow Us On</div>
                    <ul className='flex gap-3 mt-4 lg:mt-8'>
                        <li className='flex justify-center items-center'>
                            <Link href={'#'}>
                                <Image src={'/images/icons/insta.svg'} alt='insta' width={25} height={25} />
                            </Link>
                        </li>
                        <li className='flex justify-center items-center'>
                            <Link href={'#'}>
                                <Image src={'/images/icons/insta.svg'} alt='insta' width={25} height={25} />
                            </Link>
                        </li>
                        <li className='flex justify-center items-center'>
                            <Link href={'#'}>
                                <Image src={'/images/icons/insta.svg'} alt='insta' width={25} height={25} />
                            </Link>
                        </li>
                        <li className='flex justify-center items-center'>
                            <Link href={'#'}>
                                <Image src={'/images/icons/insta.svg'} alt='insta' width={25} height={25} />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

const ContactDetailsItems = props => {
    return (
        <>
            <div className='item flex gap-4 lg:gap-8 items-start p-5 rounded-lg md:rounded-2xl'>
                <img src={props.imgSrc} alt={props.imgAlt} width={50} height={50} />
                <div className="content">
                    <div className="title">{props.title}</div>
                    {props.link && 
                        <Link href={`${props.linkHref}`}>{props.link}</Link>
                    }
                    {props.text &&
                        <p>{props.text}</p>
                    }
                </div>
            </div>
        </>
    )
}

export default ContactInfo
export {ContactDetails, ContactDetailsItems}