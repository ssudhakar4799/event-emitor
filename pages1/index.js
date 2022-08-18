import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Routerss from './pages/routers/router';
import App from './App';
import { Provider } from 'react-redux';
import store from './pages/redux/store';
import Rowting from './pages/project/rowting';
import Demo from './pages/project/demo';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Demo />
  // <Rowting />
//   <Provider store={store}>
//  <App/>
//  </Provider>
  
);

