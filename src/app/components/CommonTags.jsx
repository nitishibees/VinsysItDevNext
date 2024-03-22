import Image from "next/image"
import Link from "next/link"

const CommonBtn = (props) => {
    return (
        <Link 
            className={`common-btn ${props.styleClass}`}
            href={props.link ? props.link : "#"} target={props.placing}
            prefetch={props.prefetch ? props.prefetch : false}>
                {props.text}<i className="icon"><Image src={'/images/icons/icon-arrow.svg'} alt="icon" width={25} height={15} /></i>
        </Link>
    )
}

const CommonHeading = (props) => {
    return (
        <>
            {
                props.mainHeading && <div className={`common-heading ${props.styleClass}`} >
                    {props.mainHeading}
                </div>
            }
        </>
    )
}

const CommonHeadingHone = (props) => {
    return (
        <>
            {
                props.mainHeading && <h1 className={`common-heading ${props.styleClass}`} >
                    {props.mainHeading}
                </h1>
            }
        </>
    )
}

const CommonHeadingHtwo = (props) => {
    return (
        <>
            {
                props.mainHeading && <h2 className={`common-heading-md ${props.styleClass}`} >
                    {props.mainHeading}
                </h2>
            }
        </>
    )
}

const CommonSubHeading = props => {
    return (
        <>
            <p className={`subheading mt-2 ${props.styleClass}`}>{props.text}</p>
        </>
    )
}

const CommonSection = props => {
    return (
        <>
            <section className={`${props.styleClass} py-8 lg:py-12 w-full`}>
                <div className="inner-container">
                    {props.children}
                </div>
            </section>
        </>
    )
}

export default CommonBtn
export {CommonHeadingHone, CommonHeadingHtwo, CommonHeading, CommonSection, CommonSubHeading}