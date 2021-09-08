import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
import { ContextProvider } from 'react-is';

// Initialize Firebase
const app = initializeApp({
	apiKey: 'AIzaSyCVCYAJs7_eNVtQytuaV4GQGeJHMwjtzjM',
	authDomain: 'infinite-cache-300121.firebaseapp.com',
	projectId: 'infinite-cache-300121',
	storageBucket: 'infinite-cache-300121.appspot.com',
	messagingSenderId: '682010132010',
	appId: '1:682010132010:web:b620d847afba4e8b84cd53',
	measurementId: 'G-QQ1YWKEB0Q'
});

const Context = createContext(null);

const auth = firebase.auth();
const firestore = firebase.firestore();

ReactDOM.render(
	<Context.Provider
		value={{
			firebase,
			auth,
			firestore
		}}>
		<App />
	</Context.Provider>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
