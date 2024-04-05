"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import '@/app/components/header/header.scss'

const SiteHeader = () => {
    const [mobilemenuToggle, setmobilemenuToggle] = useState(false);

    const handleScroll = () => {
        // Get the scroll position of the window
        const scrollPosition = window.scrollY || window.pageYOffset;
    
        // Select the HTML element
        const header  = document.querySelector('header');
    
       // Check if the scroll position is beyond 90px
        if (scrollPosition > 100) {
            // Add a class to the header element
            header.classList.add('small');
        } else {
            // Remove the class if scroll position is less than or equal to 90px
            header.classList.remove('small');
        }
    };

    useEffect(() => {
        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);
    
        // Clean up function to remove the scroll event listener when component unmounts
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const menu = [
        {
            id:'1',
            name:'Managed Services'
        },
        {
            id:'2',
            name:'Testing as a Service'
        },
        {
            id:'3',
            name:'Consultancy'
        },
        {
            id:'4',
            name:'Security as a Service'
        },
        {
            id:'5',
            name:'Infrastructure Engineering'
        },
        {
            id:'6',
            name:'Tech Transformation'
        },
        {
            id:'7',
            name:'Resources',
            child: [
                {
                    id:'1',
                    name:'Case Study'
                },
                {
                    id:'2',
                    name:'Blogs'
                }
            ]
        },
        {
            id:'8',
            name:'About',
            child: [
                {
                    id:'1',
                    name:'Case Study'
                },
                {
                    id:'2',
                    name:'Blogs'
                }
            ]
        }
    ]

    const [isOpen, setIsOpen] = useState(false);
    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };
    
    return (
        <>
            <header className={`header megaMenu`}>
                <div className="container">
                    <div className="inner-content flex items-center justify-between gap-4">
                        <div className="logo">
                            <a href="/">
                                <Image src="/images/logo.png" alt="logo" width={114} height={83} />
                            </a>
                        </div>
                        <div className="toggle-icon" onClick={()=> setmobilemenuToggle(true)}>
                            <Image src="/images/icons/icon-toggle.png" alt="toggle" height={20} width={20} />
                        </div>
                        <div className={mobilemenuToggle ? "nav-sec gap-4 flex flex-col megaMenu active" : "nav-sec gap-4 flex flex-col justify-between" }>
                            <div className="close-icon" onClick={()=> setmobilemenuToggle(false)} >
                                <Image src="/images/icons/icon-close.png" alt="close" height={20} width={20} />
                            </div>
                            <div className="top">
                                <ul className="flex justify-end gap-8">
                                    <li>
                                        <a href="tel: +91 20 67444700" className="icon flex items-center gap-1.5">
                                            <Image src="/images/icons/phone.svg" alt="Tollfree No" width="15" height="16" />+91 2067444700
                                        </a>
                                    </li>
                                    <li>
                                        <a href="mailto:enquiry@vinsys.com" className="icon flex items-center gap-1.5">
                                            <Image src="/images/icons/email.svg" alt="E-mail Id" width="15" height="16" />
                                            enquiry@vinsys.com
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="bottom flex items-center">
                                <ul className="navigation flex justify-end gap-3 2xl:gap-4">
                                    {menu.map((val) => (
                                        <>
                                            {!val.child && 
                                                <li className="single-menu"><a href="#">{val.name}</a></li>
                                            }
                                            {val.child && 
                                                <li className="dropdown-menus">
                                                    <div className="mLink">{val.name}</div><span className="arrow-btn" onClick={toggleAccordion}></span>
                                                    {isOpen && 
                                                        <ul className={`dropdown ${isOpen && 'show'}`}>
                                                            {val.child.map((child) => (
                                                                <>
                                                                    <li><a href="#">{child.name}</a></li>    
                                                                </>
                                                            ))}
                                                        </ul>
                                                    }
                                                </li>
                                            }
                                        </>
                                    ))}
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