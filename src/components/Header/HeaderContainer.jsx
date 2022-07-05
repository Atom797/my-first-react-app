import React from 'react';
import Header from './Header';
import axios from 'axios';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../redux/authReducer';
import { setUserProfile } from '../../redux/profileReducer'


class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then(response => {
            if (response.data.resultCode === 0) {
                let { id, login, email } = response.data.data;
                this.props.setAuthUserData(id, login, email)
                if (!this.props.profile.profileId || this.props.profile.profileId === 2) {
                    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + id).then(response => {
                        this.props.setUserProfile(response.data);
                    })
                }
            }
        })
    }

    render() {
        return (
            <Header {...this.props} />
        );
    }
}

const mapStateToProps = (state) => {
    return ({
        isAuth: state.authUser.isAuth,
        login: state.authUser.login,
        profile: state.profilePage.profile
    })
}



export default connect(mapStateToProps, { setAuthUserData, setUserProfile })(HeaderContainer);