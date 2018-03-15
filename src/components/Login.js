import React, { PureComponent } from 'react';
import firebaseui from 'firebaseui';
import firebase from 'firebase';
import { providers } from '../services/firebase';

const ui = new firebaseui.auth.AuthUI(firebase.auth());

class Login extends PureComponent{
  componentDidMount() {
    const { origin } = window.location;
    const { from } = { from: { pathname: '/game' } };
    const { pathname: redirect } = from;
    ui.start('#firebaseui-auth-container', {
      signInSuccessUrl: `${origin}/game`,
      credentialHelper: firebaseui.auth.CredentialHelper.NONE,
      signInOptions:[
        {
          provider: providers.EmailAuthProvider.PROVIDER_ID,
          requireDisplayName: false
        },
        providers.GoogleAuthProvider.PROVIDER_ID
      ]
    });
  }

  render(){
    return <div id="firebaseui-auth-container"></div>;
  }
}

export default Login;

