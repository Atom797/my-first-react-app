import Profile from './Profile';
import React from 'react';
import { getProfile, getStatus, updateStatus } from '../../redux/profileReducer'
import { connect } from 'react-redux'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';


class ProfileContainer extends React.Component {

  componentDidMount() {
    let profileId = this.props.router.params.profileId;
    if (!profileId) {
      profileId = this.props.authorizedUserId
      // if (!profileId) {
      //   this.props.history.push("/login");
      // }
    }
    this.props.getProfile(profileId);
    this.props.getStatus(profileId)
  }

  render() {


    return (
      <Profile {...this.props} />
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.authUser.id,
    isAuth: state.authUser.isAuth
  })
}

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}

export default compose(
  connect(mapStateToProps, { getProfile, getStatus, updateStatus }),
  withRouter,
  withAuthRedirect
)(ProfileContainer)