import React from 'react';
import Paginator from '../common/Paginator/Paginator'
import usersCss from './Users.module.css'
import userPhoto from '../../assets/images/user.png'
import { NavLink } from 'react-router-dom';
import User from './User';

let Users = (props) => {
    return (
        <div>
            <Paginator totalUsersCount={props.totalUsersCount}
                pageSize={props.pageSize}
                currentPage={props.currentPage}
                onPageChanged={props.onPageChanged} />
            {
                props.users.map(i =>
                    <User user={i}
                        followingInProgress={props.followingInProgress}
                        unfollow={props.unfollow}
                        follow={props.follow} />
                )
            }
        </div >
    )
}


export default Users;