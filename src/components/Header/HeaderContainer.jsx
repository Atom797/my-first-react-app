import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../redux/authReducer';
import { setUserProfile } from '../../redux/profileReducer';
import { usersAPI } from '../../api/api'


class HeaderContainer extends React.Component {

    componentDidMount() {
        usersAPI.getMyAuthProfile().then(response => {
            if (response.resultCode === 0) {
                let { id, login, email } = response.data;
                this.props.setAuthUserData(id, login, email)
                if (!this.props.profile.profileId || this.props.profile.profileId === 2) {
                    usersAPI.getProfile(id).then(data => {
                        this.props.setUserProfile(data);
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