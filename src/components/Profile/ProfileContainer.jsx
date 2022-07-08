import Profile from './Profile';
import React from 'react';
import { getProfile } from '../../redux/profileReducer'
import { connect } from 'react-redux'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux';


class ProfileContainer extends React.Component {

  componentDidMount() {
    let profileId = this.props.router.params.profileId;
    if (!profileId && this.props.myId != null) {
      profileId = this.props.myId;
    } else if (!profileId && !this.props.myId) {
      profileId = 2;
    }
    this.props.getProfile(profileId);
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
    myId: state.authUser.id,
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
  connect(mapStateToProps, { getProfile }),
  withRouter,
  withAuthRedirect
)(ProfileContainer)