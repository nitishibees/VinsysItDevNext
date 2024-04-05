import InnerBanner from "@/app/components/innerbanner/InnerBanner"
import CaseStudyList from '@/app/components/common/CaseStudyList'

const CaseStudyListingPage = props => {
    return (
        <>
            <InnerBanner 
                imgSrc='/images/about/inner-banner.webp'
                imgAlt='Casestudy'
                heading='Casestudy'
                subHeading='Lorem Ipsum Dollar Impset'
            />
            <CaseStudyList 
                innerClass="casestudy-listing"
            />
        </>
    )
}

export default CaseStudyListingPage