"use client"
import Image from "next/image";
import { useState } from "react";
import '@/app/components/header/header.scss'

const SiteHeader = () => {
    const isWindowDefined = typeof window !== 'undefined';
    const [mobilemenuToggle, setmobilemenuToggle] = useState(false);
    
    return (
        <>
            <header className={`header megaMenu ${(isWindowDefined && window.scrollY > 90 && "small")}`}>
                <div className="container">
                    <div className="inner-content flex items-center justify-between">
                        <div className="logo">
                            <a href="/">
                                <Image src="/images/logo.png" alt="logo" width={114} height={83} />
                            </a>
                        </div>
                        <div className="toggle-icon" onClick={()=> setmobilemenuToggle(true)}>
                            <Image src="/images/icons/icon-toggle.png" alt="toggle" height={20} width={20} />
                        </div>
                        <div className={mobilemenuToggle ? "nav-sec gap-4 megaMenu  active" : "nav-sec gap-4 flex flex-col justify-between" }>
                            <div className="close-icon" onClick={()=> setmobilemenuToggle(false)} >
                                <Image src="/images/icons/icon-close.png" alt="close" height={20} width={20} />
                            </div>
                            <div className="top">
                                <ul className="flex justify-end gap-8">
                                    <li>
                                        <a href="tel: +91 20 67444700" class="icon flex items-center gap-1.5">
                                            <Image src="/images/icons/phone.svg" alt="Tollfree No" width="15" height="16" />+91 2067444700
                                        </a>
                                    </li>
                                    <li>
                                        <a href="mailto:enquiry@vinsys.com" class="icon flex items-center gap-1.5">
                                            <Image src="/images/icons/email.svg" alt="E-mail Id" width="15" height="16" />
                                            enquiry@vinsys.com
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="bottom flex items-center">
                                <ul className="navigation flex justify-end gap-5">
                                    <li class="single-menu"><a href="#">Managed Services</a></li>
                                    <li class="single-menu"><a href="#">Testing as a Service</a></li>
                                    <li class="single-menu"><a href="#">Consultancy</a></li>
                                    <li class="single-menu"><a href="#">Security as a Service</a></li>
                                    <li class="single-menu"><a href="#">Infrastructure Engineering</a></li>
                                    <li class="single-menu"><a href="#">Managed Services</a></li>
                                    <li class="single-menu"><a href="#">Managed Services</a></li>
                                    <li class="dropdown-menus">
                                        <div class="mLink">Resources</div><span class="arrow-btn"></span>
                                        <ul class="dropdown d-none">
                                            <li><a href="/training/individual-training">Individual Training</a></li>
                                            <li><a href="/training/private-training">Private Training</a></li>
                                            <li><a href="/training/corporate-training">Corporate Training</a></li>
                                            <li><a href="/training/consultancy">Consultancy</a></li>
                                        </ul>
                                    </li>
                                    <li class="dropdown-menus">
                                        <div class="mLink">About us</div><span class="arrow-btn"></span>
                                        <ul class="dropdown d-none">
                                            <li><a href="/training/individual-training">Individual Training</a></li>
                                            <li><a href="/training/private-training">Private Training</a></li>
                                            <li><a href="/training/corporate-training">Corporate Training</a></li>
                                            <li><a href="/training/consultancy">Consultancy</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default SiteHeader