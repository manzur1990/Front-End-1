import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import { ProfileContext } from '../contexts/ProfileContext'
import axios from 'axios';


function Profile(props) {
    console.log(props)
    console.log(ProfileContext)
    const [user, setUser] = useState({})
    useEffect(() => {
        axios.get(`https://expat-journal-api.herokuapp.com/users/${props.match.params.id}`)
        .then(res => {
            setUser(res.data);
            console.log(res.data)
        })
    },[])


    
    const clickHandle = (event, element) => {
        event.persist()
        console.log(element.id)
        props.history.push(`/profile/${props.match.params.id}/location/${element.id}`)
    }
    return (
        <div className='profile-wrapper'>
            <div className='header-container'>
                <h1>{`Hello, ${user.first_name}`}</h1>
            </div>
            {/* banner image of the profile */}
            <div className='public-trip-header-div'>
                <img className="public-trip-header-img" src='https://images.unsplash.com/photo-1567913300214-364d5256df1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80'></img>
            </div>
            {/* header with the location of the trip */}
           

            {/* bottom section of page underneath the banner image that will display the tabs */}
            <div>
                <h2>Your Trips</h2>
                <NavLink  to={`/profile/${user.id}/newTrip`}>+ Add Trip</NavLink>
                <div className="profile-trip-div">
                    {console.log(user)}
                { !user.trips ? <h3>Loading</h3> : 
                    user.trips.map(element => {
                        console.log(element)
                        return <div onClick={(event) => clickHandle(event, element)} key={element.id} style={{backgroundImage: `url(${element.locationCardUrl})`}}>{element.location}</div>
                })}
                
                </div>
            </div>
            
        </div>
    )
}

export default Profile