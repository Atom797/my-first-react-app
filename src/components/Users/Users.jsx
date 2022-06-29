import React from 'react';
import axios from 'axios'
import usersCss from './Users.module.css'
import userPhoto from '../../assets/images/user.png'

class Users extends React.Component {

    constructor(props) {
        super(props);
        if (this.props.users.length === 0) {

            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                debugger;
                this.props.setUsers(response.data.items)
            })
        }
    }


    render() {
        return (
            <div>
                {
                    this.props.users.map(i =>
                        <div key={i.id} className={usersCss.mainContainer}>
                            <div className={usersCss.followContainer}>
                                <img src={i.profileAvatar != null ? i.profileAvatar : userPhoto} className={usersCss.img} />
                                {i.followed ? <button onClick={() => { this.props.unfollow(i.id) }}>Unfollow</button> : <button onClick={() => { this.props.follow(i.id) }}>Follow</button>}
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
}

export default Users;