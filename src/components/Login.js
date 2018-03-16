import React, { PureComponent } from 'react';
import firebaseui from 'firebaseui';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { providers } from '../services/firebase';
import { clearUser } from './actions';

const ui = new firebaseui.auth.AuthUI(firebase.auth());

class Login extends PureComponent{
  componentDidMount() {
    this.props.user ? clearUser() : '';
    const { origin } = window.location;
    const { from } = { from: { pathname: '/game' } };
    const { pathname: redirect } = from;
    const { history } = this.props;

    ui.start('#firebaseui-auth-container', {
      signInSuccessUrl: `${origin}/game`,
      callbacks: { 
        signInSuccess: function(currentUser, credential, redirectUrl) {
          // User successfully signed in.
          // Return type determines whether we continue the redirect automatically
          // or whether we leave that to developer to handle.
          console.log(redirectUrl);
          setTimeout(() =>  history.push('/game'), 100);
          
          return false;
        }
      },
      credentialHelper: firebaseui.auth.CredentialHelper.NONE,
      signInOptions:[
        {
          provider: providers.EmailAuthProvider.PROVIDER_ID,
          requireDisplayName: true
        },
        providers.GoogleAuthProvider.PROVIDER_ID
      ]
    });
  }

  render(){
    return <div id="firebaseui-auth-container"></div>;
  }
}

export default connect(
  state => ({ user: state.user }),
  { clearUser }
)(Login);

