import React from 'react';
import usersCss from './Users.module.css'
import userPhoto from '../../assets/images/user.png'
import { NavLink } from 'react-router-dom';

let User = ({user, ...props}) => {
    return (
        <div key={user.id} className={usersCss.mainContainer}>

            <div className={usersCss.followContainer}>
                <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : userPhoto} className={usersCss.img} />
                </NavLink>
                {user.followed ?
                    <button disabled={props.followingInProgress.some(id => id === user.id)}
                        onClick={() => {
                            props.unfollow(user.id)
                        }}>Unfollow</button>
                    : <button disabled={props.followingInProgress.some(id => id === user.id)}
                        onClick={() => {
                            props.follow(user.id)
                        }}>Follow</button>}
            </div>

            <div className={usersCss.informationContainer}>

                <div сlassName={usersCss.userContent}>

                    <div>{user.name}</div>
                    <div>{user.status}</div>

                </div>

                <div сlassName={usersCss.userContent}>

                    <div>{"user.location.country"}</div>
                    <div>{"user.location.city"}</div>

                </div>

            </div>
        </div>
    )
}


export default User;