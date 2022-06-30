import React from 'react';
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setUsersTotalCountAC } from '../../redux/usersReducer'
import Users from './Users'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (usersId) => {
            dispatch(followAC(usersId));
        },
        unfollow: (usersId) => {
            dispatch(unfollowAC(usersId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalUsersCount) => {
            dispatch(setUsersTotalCountAC(totalUsersCount))
        }

    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;