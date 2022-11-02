import { Link } from "react-router-dom";
import "./Home.css";


const Home = () =>{
    return(
        <div>
        <h3> This is the homepage</h3>
        <p>Click here to go to about page</p>
        <Link to='/about'>About</Link>

        <p>Click here to go User page</p>
        <Link to='/users'> User page</Link>
        </div>
    );

};


export default Home;