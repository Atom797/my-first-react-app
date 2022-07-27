import React from 'react';
import { addMessageActionCreator } from '../../redux/dialogsReducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux';

const mapStateToOrops = (state) => {
    return {
        dialogsData: state.dialogPage,
        isAuth: state.authUser.isAuth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNewMessage: (newMessageBody) => {
            dispatch(addMessageActionCreator(newMessageBody));
        }
    }
}

export default compose(
    connect(mapStateToOrops, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)