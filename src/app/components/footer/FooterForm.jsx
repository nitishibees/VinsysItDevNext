import CommonBtn, { CommonBtnButton } from "../CommonTags"

const FooterForm = props => {
    return (
        <>
            <form>
                <ul className="flex justify-between flex-wrap">
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
                    <li className="w-full mt-2 md:mt-4">
                        <CommonBtnButton 
                            styleClass="w-max"
                            text="Submit Now"
                        />
                    </li>
                </ul>
            </form>
        </>
    )
}

export default FooterForm