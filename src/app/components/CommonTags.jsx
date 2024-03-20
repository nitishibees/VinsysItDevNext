import Image from "next/image"
import Link from "next/link"

const CommonBtn = (props) => {
    return (
        <Link 
            className={`common-btn ${props.class} ${props.extraclass}`}
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
                props.mainHeading && <div className={`common-heading ${props.class} ${props.extraclass}`} >
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
                props.mainHeading && <h1 className={`common-heading ${props.class} ${props.extraclass}`} >
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
                props.mainHeading && <h2 className={`common-heading-md ${props.class} ${props.extraclass}`} >
                    {props.mainHeading}
                </h2>
            }
        </>
    )
}

const CommonSection = props => {
    return (
        <>
            <section className={`py-8 lg:py-12 ${props.class}`}>
                <div className="container">
                    {props.children}
                </div>
            </section>
        </>
    )
}

export default CommonBtn
export {CommonHeadingHone, CommonHeadingHtwo, CommonHeading, CommonSection}