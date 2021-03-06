import React, {useContext, useEffect, useState } from "react";

import UserCard from './UserCards'

import {AllProfilesContext} from '../contexts/AllProfilesContext.js'
import {axiosWithAuth} from '../auth/AxiosWithAuth.js'
import { NavLink } from 'react-router-dom'
// import '../scss/Browse.scss'


function Browse (props) {
 
    const [userList, setUserList] = useState([]);

    useEffect(() => {
        getData()
        }, []);
        const getData = () =>{
        axiosWithAuth()
            .get('https://expat-journal-api.herokuapp.com/users')
            .then((res) => {
              console.log(res, 'response from browse');
            setUserList(res.data.filter( element => element.profileType !== 'private profile'))
           
            })
            .catch((err) => console.log(err));
          }
   

    return (
        <div className="user-card-parent">
            <h1 className="expats">Expats</h1>
            {/* <NavLink to={`/trips/${user.id}`}> */}
            <section className= "user-cards">
                {userList.map(user => (
                    <UserCard key={user.id} user={user} />
                ))}
            </section> 
            {/* </NavLink> */}
        </div>
    );
}


export default Browse;


