import Profile from './Profile';
import React from 'react';
import axios from 'axios';
import { setUserProfile } from '../../redux/profileReducer'
import { connect } from 'react-redux'
import { useLocation, useNavigate, useParams } from 'react-router-dom'


class ProfileContainer extends React.Component {

  componentDidMount() {
    let profileId = this.props.router.params.profileId;
    if (!profileId && this.props.myId != null) {
      profileId = this.props.myId;
    } else if (!profileId && !this.props.myId) {
      profileId = 2;
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + profileId).then(response => {
      this.props.setUserProfile(response.data);
    })
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
    myId: state.authUser.id
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

let withUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, { setUserProfile })(withUrlDataContainerComponent); 