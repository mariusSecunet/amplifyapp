import React from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

function App({ isPassedToWithAuthenticator, signOut, user }) {
    if (!isPassedToWithAuthenticator) {
        throw new Error(`isPassedToWithAuthenticator was not provided`);
    }

    return (
        <div className="App">
            <header>
                <img src={logo} className="App-logo" alt="logo" />
                <h1>We now have Auth!</h1>
            </header>
            <button onClick={signOut}>Sign out</button>
        </div>
    );
}

export default withAuthenticator(App);