import React from 'react';
import axios from 'axios'
import usersCss from './Users.module.css'
import userPhoto from '../../assets/images/user.png'

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount / 200);
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }


    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div>
                <div className={usersCss.pagination}>
                    {pages.map(p => {
                        return <span className={this.props.currentPage === p && usersCss.selectedPage} onClick={() => { this.onPageChanged(p) }}>{p}</span>
                    })}
                </div>
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