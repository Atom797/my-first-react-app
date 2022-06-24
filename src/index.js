import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store'
import StoreContext from './StoreContext';


const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <StoreContext.Provider value={store}>
        <App/>
      </StoreContext.Provider>
    </React.StrictMode>
  );
}

rerenderEntireTree(store.getState());

store.subscribe( () => {
  let state  = store.getState();
  rerenderEntireTree(state);
});


reportWebVitals();
