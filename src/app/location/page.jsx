import InnerBanner from "@/app/components/innerbanner/InnerBanner"
import Location, { LocationItems } from "@/app/components/location/Location"

const LocationPage = props => {
    return (
        <>
            <InnerBanner 
                imgSrc='/images/about/inner-banner.webp'
                imgAlt='Infrastructure Engineering'
                heading='Infrastructure Engineering'
                subHeading='Lorem Ipsum Dollar Impset'
            />
            <Location
                innerStyleClass="text-center"
                heading="Our Location"
                subHeading="Lorem Ipsum is simply dummy text of the printing "
            >
                <LocationItems 
                    imgSrc="/images/location/location-1.webp"
                    imgAlt="location"
                    title="Delhi"
                    text="205, Tansen Marg, Opp. FICCI Auditorium, Todermal Road Area, Mandi House, New Delhi, Delhi 110001, India"
                />
                <LocationItems 
                    imgSrc="/images/location/location-1.webp"
                    imgAlt="location"
                    title="Delhi"
                    text="205, Tansen Marg, Opp. FICCI Auditorium, Todermal Road Area, Mandi House, New Delhi, Delhi 110001, India"
                />
                <LocationItems 
                    imgSrc="/images/location/location-1.webp"
                    imgAlt="location"
                    title="Delhi"
                    text="205, Tansen Marg, Opp. FICCI Auditorium, Todermal Road Area, Mandi House, New Delhi, Delhi 110001, India"
                />
                <LocationItems 
                    imgSrc="/images/location/location-1.webp"
                    imgAlt="location"
                    title="Delhi"
                    text="205, Tansen Marg, Opp. FICCI Auditorium, Todermal Road Area, Mandi House, New Delhi, Delhi 110001, India"
                />
            </Location>
            
        </>
    )
}

export default LocationPage