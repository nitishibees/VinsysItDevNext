import Image from "next/image"
import Link from "next/link"
import { CommonHeadingHtwo, CommonSection, CommonSubHeading } from "../CommonTags"
import '@/app/components/common/caseStudy.scss'

const CaseStudyList = props => {
    return (
        <>
            <CommonSection styleClass={props.innerClass}>
                {props.heading &&
                    <div className="heading-wrapper text-center">
                        <CommonHeadingHtwo mainHeading={props.heading} />
                        <CommonSubHeading text={props.subHeading} />
                    </div>
                }
                <div className="items grid grid-cols-6 gap-4 mt-8 md:mt-12">
                    <div className="item col-span-6 sm:col-span-3 md:col-span-2">
                        <div className="inner-content flex flex-col gap-6 md:gap-12 justify-between">
                            <div className="top-content">
                                <div className="img-wrapper">
                                    <Image src={'/images/home/casestudy/casestudy-1.webp'} alt="case study" width={374} height={289} />
                                    <div className="label">Case Study</div>
                                    <div className="date"><span>13</span>March</div>   
                                </div>
                                <div className="content">
                                    <div className="title">How Technology Growth in 2023</div>
                                    <p>Lorem Ipsum is simply dummy text of the printing</p>
                                </div>
                            </div>
                            <div className="btn-wrapper">
                                <Link href={'#'} className="learn-more-btn" aria-label="learnmore">Learn More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="item col-span-6 sm:col-span-3 md:col-span-2">
                        <div className="inner-content flex flex-col gap-6 md:gap-12 justify-between">
                            <div className="top-content">
                                <div className="img-wrapper">
                                    <Image src={'/images/home/casestudy/casestudy-1.webp'} alt="case study" width={374} height={289} />
                                    <div className="label">Case Study</div>
                                    <div className="date"><span>13</span>March</div>   
                                </div>
                                <div className="content">
                                    <div className="title">How Technology Growth in 2023</div>
                                    <p>Lorem Ipsum is simply dummy text of the printing</p>
                                </div>
                            </div>
                            <div className="btn-wrapper">
                                <Link href={'#'} className="learn-more-btn" aria-label="learnmore">Learn More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="item col-span-6 sm:col-span-3 md:col-span-2">
                        <div className="inner-content flex flex-col gap-6 md:gap-12 justify-between">
                            <div className="top-content">
                                <div className="img-wrapper">
                                    <Image src={'/images/home/casestudy/casestudy-1.webp'} alt="case study" width={374} height={289} />
                                    <div className="label">Case Study</div>
                                    <div className="date"><span>13</span>March</div>   
                                </div>
                                <div className="content">
                                    <div className="title">How Technology Growth in 2023</div>
                                    <p>Lorem Ipsum is simply dummy text of the printing</p>
                                </div>
                            </div>
                            <div className="btn-wrapper">
                                <Link href={'#'} className="learn-more-btn" aria-label="learnmore">Learn More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </CommonSection>
        </>
    )
}

export default CaseStudyList