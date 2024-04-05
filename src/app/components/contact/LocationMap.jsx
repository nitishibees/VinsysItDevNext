const LocationMap = props => {
    return (
        <>
            <div className="map-wrapper">
                <iframe src={props.iframeSrc} width="600" height="400" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </>
    )
}

export default LocationMap