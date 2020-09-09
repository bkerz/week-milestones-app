import app from "firebase/app"
import "firebase/auth"

const config = {

			    apiKey: "AIzaSyBNFk0-jQCyMSvJiquqCx7vCkMFAkMpN2A",
			    authDomain: "week-milestones.firebaseapp.com",
			    databaseURL: "https://week-milestones.firebaseio.com",
					projectId: "week-milestones",
				  storageBucket: "week-milestones.appspot.com",
					messagingSenderId: "765753425990",
					appId: "1:765753425990:web:5a028440ec610dbb6b0a47",
					measurementId: "G-Q0BQQFPQGF"
																	  
}

class Firebase {

	constructor(){
		app.initializeApp(config)
		this.auth = app.auth()
	}

	doCreateUserWithEmailAndPassword = (email, password)=>
		this.auth.createUserWithEmailAndPassword(email, password)
	

	doSignInWithEmailAndPassword = (email, password)=>
		this.auth.signInWithEmailAndPassword(email, password)
	

	doSignOut = ()=> this.auth.signOut()
	
}

export default Firebase
