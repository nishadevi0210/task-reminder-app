import {Link} from "react-router-dom";
// <a> ki bjaye Link lgane se page reload nhi hota :)

const Footer = () => {
    return (
        <footer className="footer">
            <Link to="/about" > About </Link>
        </footer>
    )
}

export default Footer;