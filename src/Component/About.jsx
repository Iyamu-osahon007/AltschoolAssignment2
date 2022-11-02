import "./About.css"
import { Link } from "react-router-dom";

const About = () => {
    return(
        <div>This is About page

            <p>Click here to go to Home page</p>
            <Link to='/' >Home page</Link>

            <p>Click here to go to Users page</p>
            <Link to='/users'> User page</Link>
        </div>

    );
};


export default About;