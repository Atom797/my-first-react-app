import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/redux-store'
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer'
import Navbar from './components/Navbar/Navbar'
import ProfileContainer from './components/Profile/ProfileContainer'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import UsersContainer from './components/Users/UsersContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login/Login';
import { connect } from 'react-redux'
import { initializeApp } from '../src/redux/appReducer';
import Preloader from './components/common/Preloader/Preloader';

class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp()
  }

  render() {

    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <BrowserRouter>
        <div className='app-wrapper'>
          <HeaderContainer />
          <Navbar />
          <div className='app-wrapper-content'>
            <Routes>
              <Route path="/profile/:profileId" element={<ProfileContainer />} />
              <Route path="/profile/" element={<ProfileContainer />} />
              <Route path="/dialogs/*" element={<DialogsContainer />} />
              <Route path="/news" element={<News />} />
              <Route path="/music" element={<Music />} />
              <Route path="/settings" element={<Settings />} />
              <Route path='/users' element={<UsersContainer />} />
              <Route path='/login' element={<Login />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter >
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})


let AppContainer =  connect(mapStateToProps, { initializeApp })(App);


const AppMain = () =>{
  return(
    <React.StrictMode>
      <Provider store={store}>
        <AppContainer/>
      </Provider>
    </React.StrictMode>
  )
}

export default AppMain;