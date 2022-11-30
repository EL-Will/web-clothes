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
            view.selectWebPage('singinPage');
        }
    } else {
        view.selectWebPage('homePageUnSingIn');
    }
});