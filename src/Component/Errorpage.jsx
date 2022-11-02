import React from "react";
import { Link } from "react-router-dom";
import "./Errorpage.css"

const Errorpage = () => {
    return (
        <div>
            <p>Oppss... You typed an invalid url</p>
            <Link to='/'> Go back to homepage</Link>
        </div>
    );
};
s

export default Errorpage;