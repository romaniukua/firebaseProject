import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Header from '../Header';
import Home from '../Home';
import UsersList from '../UsersList';
import UserDetails from '../UserDetails';
import store from '../../store';


const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <Header />
                    <Route path='/' exact component={Home} />
                    <Route path='/users' exact component={UsersList} />
                    <Route path = '/users/:userId' component = {UserDetails}/>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
