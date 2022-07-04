import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import ProfileContainer from './components/Profile/ProfileContainer'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import UsersContainer from './components/Users/UsersContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App(props) {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path="/profile/:profileId" element={<ProfileContainer/>}/>
            <Route path="/profile/" element={<ProfileContainer/>}/>
            <Route path="/dialogs/*" element={<DialogsContainer/>}/>
            <Route path="/news" element={<News/>} />
            <Route path="/music" element={<Music/>} />
            <Route path="/settings" element={<Settings/>} />
            <Route path='/users' element={<UsersContainer/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
