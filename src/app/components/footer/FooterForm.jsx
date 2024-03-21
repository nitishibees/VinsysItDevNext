const FooterForm = props => {
    return (
        <>
            <form>
                <ul className="d-flex justify-content-between">
                    <li>
                        <input
                            type="text"
                            placeholder="Your Name"
                            id="name"
                            name="name"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            id="uemail"
                            name="email"
                            required
                        />
                    </li>
                    <li>
                        <input
                            type="text"
                            placeholder="Your Country"
                            id="country"
                            name="country"
                            required
                        />
                        
                        <textarea
                        name="message"
                        id="message"
                        rows="2"
                        placeholder="Your Message"
                        required
                        ></textarea>
                        <input type="checkbox" name="fax" style={{ display: "none" }} />
                    </li>
                    <li className="w-100">
                        <div className="links">
                            <button type="submit" className="common-btn">
                                Submit Now <i className="icon">&nbsp;</i>
                            </button>
                        </div>
                    </li>
                </ul>
            </form>
        </>
    )
}

export default FooterForm