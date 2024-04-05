import Image from "next/image"
import Link from "next/link"

const SocialLinks = props => {
    return (
        <>
            <Link href={props.link}>
                <Image src={props.imgSrc} alt={props.imgAlt} width={28} height={28} />
            </Link>
        </>
    )
}

export default SocialLinks