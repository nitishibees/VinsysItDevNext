import Image from "next/image"

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

export default CommonBtn
export {CommonHeadingHone, CommonHeading}