import "./Users.css";
import React from "react";
import { Link, Route } from "react-router-dom";
import { useEffect, useState } from "react";




const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://randomuser.me/api/?results=30");
            const data = await response.json();

            console.log(data.results);
            setUsers(data.results);
            setLoading(false);
            // console.log("users", users);
        };

        fetchData();
    }, []);

    if (loading) {
        return <h2>Loading</h2>
    }

    return (

        <div className="user-container">
            <h3>Data page</h3>
            {users.map((user, idx) => {
                return (
                    <div className="user" key={idx}>
                        <h3>
                            {user.name.first} {user.name.last}
                        </h3>
                        <img src={user.picture.medium} alt='user' />




                    </div>
                );
            })}
            <p> Click here for About page</p>

            <Link to='/about'>About page </Link><br></br>
            <Link to='/'>Home page</Link>

        </div>
    );
};



export default Users;