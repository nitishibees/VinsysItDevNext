import Image from "next/image"
import Link from "next/link"
import { CommonSection } from "../CommonTags"
import '@/app/components/common/casestudy.scss'

const CaseStudyList = props => {
    return (
        <>
            <CommonSection styleClass={props.styleCLass}>
                <div className="items grid grid-cols-6 gap-4">
                    <div className="item col-span-6 sm:col-span-3 md:col-span-2">
                        <div className="inner-content flex flex-col gap-6 justify-content-between">
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
                                <Link href={'#'} aria-label="learnmore">Learn More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="item col-span-6 sm:col-span-3 md:col-span-2">
                        <div className="inner-content flex flex-col gap-6 justify-content-between">
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
                                <Link href={'#'} aria-label="learnmore">Learn More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="item col-span-6 sm:col-span-3 md:col-span-2">
                        <div className="inner-content flex flex-col gap-6 justify-content-between">
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
                                <Link href={'#'} aria-label="learnmore">Learn More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </CommonSection>
        </>
    )
}

export default CaseStudyList