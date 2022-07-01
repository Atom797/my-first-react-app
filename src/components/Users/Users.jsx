import React from 'react';
import axios from 'axios'
import usersCss from './Users.module.css'
import userPhoto from '../../assets/images/user.png'

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div className={usersCss.pagination}>
                {pages.map(p => {
                    return <span className={props.currentPage === p && usersCss.selectedPage} onClick={() => { props.onPageChanged(p) }}>{p}</span>
                })}
            </div>
            {
                props.users.map(i =>
                    <div key={i.id} className={usersCss.mainContainer}>

                        <div className={usersCss.followContainer}>
                            <img src={i.profileAvatar != null ? i.profileAvatar : userPhoto} className={usersCss.img} />
                            {i.followed ? <button onClick={() => { props.unfollow(i.id) }}>Unfollow</button> : <button onClick={() => { props.follow(i.id) }}>Follow</button>}
                        </div>

                        <div className={usersCss.informationContainer}>

                            <div сlassName={usersCss.userContent}>

                                <div>{i.name}</div>
                                <div>{i.status}</div>

                            </div>

                            <div сlassName={usersCss.userContent}>

                                <div>{"i.location.country"}</div>
                                <div>{"i.location.city"}</div>

                            </div>

                        </div>
                    </div>
                )
            }
        </div>
    )
}


export default Users;