import view from "./view.js";
import model from "./model.js";
import {boolSingin, boolSingup} from "./view.js";

firebase.auth().onAuthStateChanged(user => {
    if (user) {
        if (firebase.auth().currentUser.emailVerified == true) {
            view.selectWebPage('homePageSingIn');
            model.getInforUser();
        }
        else {
            alert("Email is not Verify yet")
            view.selectWebPage('singinPage');
        }
    } else {
        if(boolSingin == true){
            view.selectWebPage('singinPage');
        }
        if(boolSingup== true){
            view.selectWebPage('singupPage');
        }
        if(boolSingin == false && boolSingup == false){
            view.selectWebPage('homePageUnSingIn');
        }
    }
});