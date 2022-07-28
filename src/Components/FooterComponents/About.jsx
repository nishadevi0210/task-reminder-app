import HeaderTitle from "../HeaderComponents/HeaderTitle.jsx";
import {Link} from "react-router-dom";

const About = () => {
    return (
        <div className="footer">
            <HeaderTitle />
            <p> Copyright &copy; 2021 </p>
            <h4> Version 1.0.0 </h4>
            <Link to="/" > Home </Link>   
        </div>
    )
}

export default About;