import component from "./component.js";
import controller from "./controller.js";
import model from "./model.js";
import { validateEmail, formatCash, changeclickSearch, changeclickGlassSearch, changecancelBtn, changebreakPoint1, changebreakPoint2, changebreakPoint3, changebreakPoint4 } from "./controller.js";
import { db, auth } from "./model.js";


const view = {};
let boolSingin = false;
let boolSingup = false;
let arrShoeImage = [];

view.selectWebPage = (namePage) => {
    switch (namePage) {
        case "homePageUnSingIn":
            document.getElementById('app').innerHTML = component.homePageUnSingin;
            //justin-img
            model.getUrlFileImage('images/banners/banner1.webp', 'banner-img');
            model.getUrlFileImage('images/justin/justin.webp', 'justin-img');
            model.getUrlFileImage('images/essential/essential1.webp', 'essential-img-1');
            model.getInforImage("Image", 'hightligths');
            controller.scrollBtn();
            controller.clickGlass();
            document.getElementById('sing-up-btn').addEventListener('click', () => {
                view.selectWebPage('singupPage');
            });
            document.getElementById('sing-in-btn').addEventListener('click', () => {
                view.selectWebPage('singinPage');
            });
            document.getElementById("gotoMenDesktop").addEventListener('click', () => {
                view.selectWebPage('menShoesUnSigninPage');
                model.getInforUser();
            })
            document.getElementById('gotoFavouriteDesktop').addEventListener('click', () => {
                view.selectWebPage('singinPage');
            })
            document.getElementById('gotoBagDesktop').addEventListener('click', () => {
                view.selectWebPage('singinPage');
            })
            controller.functionVisualSearch();
            controller.clearSearch();
            controller.catchClickEvent();
            controller.cancelSearch();
            controller.functionExpandOption();
            controller.functionCloseExpand();
            controller.search();
            controller.clickGotoMen();
            controller.clickExpandMobileMen();
            controller.clickGobackAllMen();
            controller.clickGotoWomen();
            controller.clickExpandMobileWomen();
            controller.clickGobackAllWomen();
            controller.clickGotoKids();
            controller.clickExpandMobileKids();
            controller.clickGobackAllKids();
            document.getElementById('gotoMenShoes').addEventListener('click',()=>{
                view.selectWebPage('menShoesUnSigninPage');
            });
            document.getElementById('gotoSigninMobile').addEventListener('click',()=>{
                view.selectWebPage('singinPage');
            });
            document.getElementById('gotoSignupMobile').addEventListener('click',()=>{
                view.selectWebPage('singupPage');
            });
            break;
        case "homePageSingIn":
            document.getElementById('app').innerHTML = component.homePageSingin;
            model.getInforUser();
            model.getUrlFileImage('images/banners/banner1.webp', 'banner-img');
            model.getUrlFileImage('images/justin/justin.webp', 'justin-img');
            model.getUrlFileImage('images/essential/essential1.webp', 'essential-img-1');
            model.getInforImage("Image", 'hightligths');
            controller.scrollBtn();
            controller.clickGlass();
            document.getElementById("gotoMenDesktop").addEventListener('click', () => {
                view.selectWebPage('menShoesSinginPage');
            });
            document.getElementById('gotoBagDesktop').addEventListener('click', () => {
                view.selectWebPage('bagPage');
            });
            document.getElementById('gotoFavouriteDesktop').addEventListener('click', () => {
                view.selectWebPage('favoritePage');
            });
            document.getElementById('gotoFavouriteMobile').addEventListener('click', () => {
                view.selectWebPage('favoritePage');
            });
            
            document.getElementById('gotoChangePass').addEventListener('click', () => {
                view.selectWebPage('changePasswordPage');
            });
            document.getElementById('gotoChangePasswordMobile').addEventListener('click', () => {
                view.selectWebPage('changePasswordPage');
            });
            document.getElementById('gotoProfile').addEventListener('click', () => {
                view.selectWebPage('profilePage');
            });
            document.getElementById('gotoProfileMobile').addEventListener('click', () => {
                view.selectWebPage('profilePage');
            });
            
            controller.expandAccount();
            controller.closeAccount();
            controller.functionVisualSearch();
            controller.clearSearch();
            controller.catchClickEvent();
            controller.cancelSearch();
            controller.functionExpandOption();
            controller.functionCloseExpand();
            model.getCountFromBag('Bag');
            view.setProfileNameCheckout('exampleModalLabel1');
            controller.search();
            controller.clickGotoMen();
            controller.clickExpandMobileMen();
            controller.clickGobackAllMen();
            controller.clickGotoWomen();
            controller.clickExpandMobileWomen();
            controller.clickGobackAllWomen();
            controller.clickGotoKids();
            controller.clickExpandMobileKids();
            controller.clickGobackAllKids();
            document.getElementById('gotoMenShoes').addEventListener('click',()=>{
                view.selectWebPage('menShoesSinginPage');
            });
            controller.logout('logout-btn');
            controller.logout('gotoLogoutMobile');
            break;
        case "singinPage":
            document.getElementById('app').innerHTML = component.singinPage;
            let singinForm = document.getElementById('form-singin');
            singinForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const data = {
                    email: singinForm.email.value,
                    password: singinForm.password.value
                }
                controller.singin(data);
            });

            document.getElementById('input-email').addEventListener('input', () => {
                let valueEmail = document.getElementById('input-email').value;
                if (validateEmail(valueEmail) === true) {
                    view.setOkMessage('input-email', 'err-mail', '')
                }
                else {
                    view.setErrorMessagge('input-email', 'err-mail', 'Please enter a valid email address');
                }
            });
            document.getElementById('go-to-singup').addEventListener('click', () => {

                view.selectWebPage('singupPage');
            });
            document.getElementById('sing-up-btn').addEventListener('click', () => {

                view.selectWebPage('singupPage');
            });
            document.getElementById('goto-homepage-unsingin').addEventListener('click', () => {

                view.selectWebPage('homePageUnSingIn')
            });
            document.getElementById('forgotPassword').addEventListener('click', () => {
                document.getElementById('exampleModal').classList.add('padding-hide');
                document.getElementById('body').classList.add('padding-hide');
            });
            document.getElementById('inputEmailReset').addEventListener('input', () => {
                let valueEmail = document.getElementById('inputEmailReset').value;
                if (validateEmail(valueEmail) === true) {
                    view.setOkMessage('inputEmailReset', 'err-email-reset', '')
                }
                else {
                    view.setErrorMessagge('inputEmailReset', 'err-email-reset', 'Please enter a valid email address');
                }
            });
            controller.forgotPassword();
            // ================== Strat show and hide password=====================//
            document.getElementById('show-password').addEventListener('click', () => {
                var x = document.querySelector(".ip-pass");
                var eye = document.getElementById('show-password');
                eye.removeAttribute("class");
                if (x.type === "password") {
                    x.type = "text";
                    eye.setAttribute("class", 'fa-solid fa-eye fixed-eye');

                } else {
                    x.type = "password";
                    eye.setAttribute("class", 'fa-solid fa-eye-slash fixed-eye');
                }
            });
            document.getElementById('gotoHomepageUnsinginMobile').addEventListener('click',()=>{
                view.selectWebPage('homePageUnSingIn');
            });
            break;
        case "singupPage":
            document.getElementById('app').innerHTML = component.singupPage;
            let singupForm = document.getElementById('form-singup');
            singupForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const data = {
                    username: singupForm.username.value,
                    firstname: singupForm.firstname.value,
                    lastname: singupForm.lastname.value,
                    email: singupForm.email.value,
                    password: singupForm.password.value,
                    confirmpassword: singupForm.confirmpassword.value
                }
                controller.singup(data);
            });
            document.getElementById('input-email').addEventListener('input', () => {
                let valueEmail = document.getElementById('input-email').value;
                if (validateEmail(valueEmail) === true) {
                    view.setOkMessage('input-email', 'err-mail', '')
                }
                else {
                    view.setErrorMessagge('input-email', 'err-mail', 'Please enter a valid email address');
                }
            });
            document.getElementById('goto-sing-in').addEventListener('click', () => {
                boolSingup = false;
                boolSingin = true;
                console.log('singin ', boolSingin);
                console.log('singup ', boolSingup);
                view.selectWebPage('singinPage');
            });
            document.getElementById('sing-in-btn').addEventListener('click', () => {
                boolSingup = false;
                boolSingin = true;
                console.log('singin ', boolSingin);
                console.log('singup ', boolSingup);
                view.selectWebPage('singinPage');
            });
            document.getElementById('goto-homepage-unsingin').addEventListener('click', () => {
                boolSingin = false;
                boolSingup = false;
                console.log('singin ', boolSingin);
                console.log('singup ', boolSingup);
                view.selectWebPage('homePageUnSingIn')
            });
            // ================== Strat show and hide password=====================//
            document.getElementById('show-password').addEventListener('click', () => {
                var x = document.querySelector(".ip-pass");
                var eye = document.getElementById('show-password');
                eye.removeAttribute("class");
                if (x.type === "password") {
                    x.type = "text";
                    eye.setAttribute("class", 'fa-solid fa-eye fixed-eye');

                } else {
                    x.type = "password";
                    eye.setAttribute("class", 'fa-solid fa-eye-slash fixed-eye');
                }
            });
            document.getElementById('show-confirm-password').addEventListener('click', () => {
                var x = document.querySelector(".ip-confirmpass");
                var eye = document.getElementById('show-confirm-password');
                eye.removeAttribute("class");
                if (x.type === "password") {
                    x.type = "text";
                    eye.setAttribute("class", 'fa-solid fa-eye fixed-eye');

                } else {
                    x.type = "password";
                    eye.setAttribute("class", 'fa-solid fa-eye-slash fixed-eye');
                }
            });
            // ================== End show and hide password =====================//
            document.getElementById('gotoHomepageUnsinginMobile').addEventListener('click',()=>{
                view.selectWebPage('homePageUnSingIn');
            });
            break;
        case "menShoesSinginPage":
            document.getElementById('app').innerHTML = component.menShoesSinginPage;
            model.getInforUser();
            model.getInforImageOfMenshoes('Image', 'menShoes');
            controller.stickyHeadMenShoes();
            controller.displaySortBy();
            controller.expandAccount();
            controller.closeAccount();
            controller.functionVisualSearch();
            controller.clearSearch();
            controller.catchClickEvent();
            controller.cancelSearch();
            controller.functionExpandOption();
            controller.functionCloseExpand();
            controller.clickGlass();
            model.getValueAndSortIncreaseInforImage('Image', 'menShoes');
            model.getValueAndSortDecreaseInforImage('Image', 'menShoes');
            model.getCountFromBag('Bag');
            document.getElementById('goto-homepage-singin').addEventListener('click', () => {
                view.selectWebPage('homePageSingIn');
            });
            document.getElementById('gotoHomePageSinginHeader').addEventListener('click', () => {
                view.selectWebPage('homePageSingIn');
            });
            document.getElementById('gotoBagDesktop').addEventListener('click', () => {
                view.selectWebPage('bagPage');
            });
            document.getElementById('gotoFavouriteDesktop').addEventListener('click', () => {
                view.selectWebPage('favoritePage');
            });
            document.getElementById('gotoFavouriteMobile').addEventListener('click', () => {
                view.selectWebPage('favoritePage');
            });
            document.getElementById('gotoChangePass').addEventListener('click', () => {
                view.selectWebPage('changePasswordPage');
            });
            document.getElementById('gotoChangePasswordMobile').addEventListener('click', () => {
                view.selectWebPage('changePasswordPage');
            });
            document.getElementById('gotoProfile').addEventListener('click', () => {
                view.selectWebPage('profilePage');
            });
            document.getElementById('gotoProfileMobile').addEventListener('click', () => {
                view.selectWebPage('profilePage');
            });
            view.setProfileNameCheckout('exampleModalLabel1');
            controller.search();
            controller.clickGotoMen();
            controller.clickExpandMobileMen();
            controller.clickGobackAllMen();
            controller.clickGotoWomen();
            controller.clickExpandMobileWomen();
            controller.clickGobackAllWomen();
            controller.clickGotoKids();
            controller.clickExpandMobileKids();
            controller.clickGobackAllKids();
            controller.logout('logout-btn');
            controller.logout('gotoLogoutMobile');
            break;
        case "menShoesUnSigninPage":
            document.getElementById('app').innerHTML = component.menShoesUnSigninPage;
            model.getInforImageOfMenshoes('Image', 'menShoes');
            controller.stickyHeadMenShoes();
            controller.displaySortBy();
            controller.functionVisualSearch();
            controller.clearSearch();
            controller.catchClickEvent();
            controller.cancelSearch();
            controller.functionExpandOption();
            controller.functionCloseExpand();
            model.getValueAndSortIncreaseInforImage('Image', 'menShoes');
            model.getValueAndSortDecreaseInforImage('Image', 'menShoes');
            controller.clickGlass();
            document.getElementById('sing-up-btn').addEventListener('click', () => {
                view.selectWebPage('singupPage');
            });
            document.getElementById('sing-in-btn').addEventListener('click', () => {

                view.selectWebPage('singinPage');
            });
            document.getElementById('goto-homepage-unsingin').addEventListener('click', () => {
                view.selectWebPage('homePageUnSingIn');
            });
            document.getElementById('gotoHomePageSinginHeader').addEventListener('click', () => {
                view.selectWebPage('homePageUnSingIn');
            });
            document.getElementById('gotoFavouriteDesktop').addEventListener('click', () => {
                view.selectWebPage('singinPage');
            })
            document.getElementById('gotoBagDesktop').addEventListener('click', () => {
                view.selectWebPage('singinPage');
            });
            controller.clickGotoMen();
            controller.clickExpandMobileMen();
            controller.clickGobackAllMen();
            controller.clickGotoWomen();
            controller.clickExpandMobileWomen();
            controller.clickGobackAllWomen();
            controller.clickGotoKids();
            controller.clickExpandMobileKids();
            controller.clickGobackAllKids();
            controller.search();
            document.getElementById('gotoSigninMobile').addEventListener('click',()=>{
                view.selectWebPage('singinPage');
            });
            document.getElementById('gotoSignupMobile').addEventListener('click',()=>{
                view.selectWebPage('singupPage');
            });
            break;
        case "bagPage":
            document.getElementById('app').innerHTML = component.bagPage;
            model.getInforUser();
            model.getCountFromBag('Bag');
            controller.increaseBtn();
            model.getTotalPriceFromBag('Bag');
            controller.expandAccount();
            controller.closeAccount();
            controller.functionVisualSearch();
            controller.clearSearch();
            controller.catchClickEvent();
            controller.clickGlass();
            controller.cancelSearch();
            controller.functionExpandOption();
            controller.functionCloseExpand();
            controller.search();
            document.getElementById('gotoHomePageSinginHeader').addEventListener('click', () => {
                view.selectWebPage('homePageSingIn');
            });
            document.getElementById('goto-homepage-singin').addEventListener('click', () => {
                view.selectWebPage('homePageSingIn');
            });
            document.getElementById('gotoFavouriteDesktop').addEventListener('click', () => {
                view.selectWebPage('favoritePage');
            });
            document.getElementById('gotoFavouriteMobile').addEventListener('click', () => {
                view.selectWebPage('favoritePage');
            });
            document.getElementById('gotoMenDesktop').addEventListener('click', () => {
                view.selectWebPage('menShoesSinginPage');
            });
            document.getElementById('checkoutBtn').addEventListener('click', () => {
                view.selectWebPage('checkoutPage');
            });
            document.getElementById('gotoChangePass').addEventListener('click', () => {
                view.selectWebPage('changePasswordPage');
            });
            document.getElementById('gotoProfile').addEventListener('click', () => {
                view.selectWebPage('profilePage');
            });
            document.getElementById('gotoProfileMobile').addEventListener('click', () => {
                view.selectWebPage('profilePage');
            });
            document.getElementById('gotoChangePasswordMobile').addEventListener('click', () => {
                view.selectWebPage('changePasswordPage');
            });
            document.getElementById('gotoMenShoes').addEventListener('click',()=>{
                view.selectWebPage('menShoesSinginPage');
            });
            view.setProfileNameCheckout('exampleModalLabel1');
            controller.clickGotoMen();
            controller.clickExpandMobileMen();
            controller.clickGobackAllMen();
            controller.clickGotoWomen();
            controller.clickExpandMobileWomen();
            controller.clickGobackAllWomen();
            controller.clickGotoKids();
            controller.clickExpandMobileKids();
            controller.clickGobackAllKids();
            controller.logout('logout-btn');
            controller.logout('gotoLogoutMobile');
            break;
        case "favoritePage":
            document.getElementById('app').innerHTML = component.favoritePage;
            model.getInforUser();
            model.getCountFromBag('Bag');
            // model.getInforFavorite('Image', 'menShoes', 'Favorite');
            // view.setInforFavorite();
            controller.deleteFavorite()
            controller.expandAccount();
            controller.closeAccount();
            controller.functionVisualSearch();
            controller.clearSearch();
            controller.catchClickEvent();
            controller.cancelSearch();
            controller.functionExpandOption();
            controller.functionCloseExpand();
            controller.search();
            controller.clickGlass();
            document.getElementById('goto-homepage-singin').addEventListener('click', () => {
                view.selectWebPage('homePageSingIn');
            });
            document.getElementById('gotoHomePageSinginHeader').addEventListener('click', () => {
                view.selectWebPage('homePageSingIn');
            });
            document.getElementById('gotoBagDesktop').addEventListener('click', () => {
                view.selectWebPage('bagPage');
            });
            document.getElementById('gotoMenDesktop').addEventListener('click', () => {
                view.selectWebPage('menShoesSinginPage');
            });
            document.getElementById('gotoChangePass').addEventListener('click', () => {
                view.selectWebPage('changePasswordPage');
            });
            document.getElementById('gotoProfile').addEventListener('click', () => {
                view.selectWebPage('profilePage');
            });
            document.getElementById('gotoProfileMobile').addEventListener('click', () => {
                view.selectWebPage('profilePage');
            });
            document.getElementById('gotoChangePasswordMobile').addEventListener('click', () => {
                view.selectWebPage('changePasswordPage');
            });
            document.getElementById('gotoMenShoes').addEventListener('click',()=>{
                view.selectWebPage('menShoesSinginPage');
            });
            view.setProfileNameCheckout('exampleModalLabel1');
            controller.clickGotoMen();
            controller.clickExpandMobileMen();
            controller.clickGobackAllMen();
            controller.clickGotoWomen();
            controller.clickExpandMobileWomen();
            controller.clickGobackAllWomen();
            controller.clickGotoKids();
            controller.clickExpandMobileKids();
            controller.clickGobackAllKids();
            controller.logout('logout-btn');
            controller.logout('gotoLogoutMobile');
            break;
        case "checkoutPage":
            document.getElementById('app').innerHTML = component.checkoutPage;
            model.getTotalPriceFromBag('Bag');
            controller.clickRemoveFromBag();
            controller.getAddress();
            view.setProfileNameCheckout('exampleModalLabel');
            document.getElementById('goto-home-page-signin').addEventListener('click', () => {
                view.selectWebPage('homePageSingIn');
            });
            document.getElementById('quiteCheckout').addEventListener('click', () => {
                view.selectWebPage('bagPage');
            });
            document.getElementById('cart').addEventListener('click', () => {
                document.getElementById('exampleModal').classList.add('padding-hide');
                document.getElementById('body').classList.add('padding-hide');
            })
            let checkoutForm = document.getElementById('form-checkout');
            checkoutForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const data = {
                    firstname: checkoutForm.firstname.value,
                    lastname: checkoutForm.lastname.value,
                    city: checkoutForm.city.value,
                    district: checkoutForm.district.value,
                    ward: checkoutForm.ward.value,
                    country: checkoutForm.country.value
                }
            });
            controller.clickChat('messageBox', 'inputMessage');
            // let positionNvabar1 = document.getElementById('idChat');
            // const moveNavbar1 = (e) => {

            //     if (!e[0].isIntersecting) {
            //         if (auth.currentUser.email != 'thienbinh1155@gmail.com') {
            //             let value = document.getElementsByClassName('form-chat')[0];
            //             value.removeAttribute('style');
            //         }
            //     }
            // }
            // let moveNavbarIntersectionObs1 = new IntersectionObserver(moveNavbar1);
            // moveNavbarIntersectionObs1.observe(positionNvabar1);
            document.getElementById('closeChatBtn').addEventListener('click',()=>{
                let value = document.getElementsByClassName('form-chat')[0];
                value.removeAttribute('style');
            });
            model.notifyMessageAudio();
            break;
        case "changePasswordPage":
            document.getElementById('app').innerHTML = component.changePasswordPage;
            model.getInforUser();
            controller.expandAccount();
            controller.closeAccount();
            document.getElementById('goto-homepage-singin').addEventListener('click', () => {
                view.selectWebPage('homePageSingIn');
            });
            document.getElementById('gotoProfile').addEventListener('click', () => {
                view.selectWebPage('profilePage');
            });
            let changepasswordForm = document.getElementById('form-changepass');
            changepasswordForm.addEventListener('submit', async (e) => {
                e.preventDefault();
                const data = {
                    currentpassword: changepasswordForm.currentpassword.value,
                    newpassword: changepasswordForm.newpassword.value,
                    confirmpassword: changepasswordForm.confirmpassword.value,
                    oldpassword: await model.getPassword()
                }
                controller.changepassword(data);
            });
            // ================== Strat show and hide password=====================//
            document.getElementById('show-currentpassword').addEventListener('click', () => {
                var x = document.querySelector(".ip-currentpass");
                var eye = document.getElementById('show-currentpassword');
                eye.removeAttribute("class");
                if (x.type === "password") {
                    x.type = "text";
                    eye.setAttribute("class", 'fa-solid fa-eye fixed-eye');

                } else {
                    x.type = "password";
                    eye.setAttribute("class", 'fa-solid fa-eye-slash fixed-eye');
                }
            });
            document.getElementById('show-new-password').addEventListener('click', () => {
                var x = document.querySelector(".ip-pass");
                var eye = document.getElementById('show-new-password');
                eye.removeAttribute("class");
                if (x.type === "password") {
                    x.type = "text";
                    eye.setAttribute("class", 'fa-solid fa-eye fixed-eye');

                } else {
                    x.type = "password";
                    eye.setAttribute("class", 'fa-solid fa-eye-slash fixed-eye');
                }
            });
            document.getElementById('show-confirm-password').addEventListener('click', () => {
                var x = document.querySelector(".ip-confirmpass");
                var eye = document.getElementById('show-confirm-password');
                eye.removeAttribute("class");
                if (x.type === "password") {
                    x.type = "text";
                    eye.setAttribute("class", 'fa-solid fa-eye fixed-eye');

                } else {
                    x.type = "password";
                    eye.setAttribute("class", 'fa-solid fa-eye-slash fixed-eye');
                }
            });
            document.getElementById('gotoHomepageSinginMobile').addEventListener('click',()=>{
                view.selectWebPage('homePageSingIn');
            });
            view.setProfileNameCheckout('exampleModalLabel1');
            controller.logout('logout-btn');
            controller.logout('gotoLogoutMobile');
            break;
        case "profilePage":
            document.getElementById('app').innerHTML = component.profilePage;
            model.getInforUser();
            controller.expandAccount();
            controller.closeAccount();
            document.getElementById('goto-homepage-singin').addEventListener('click', () => {
                view.selectWebPage('homePageSingIn');
            });
            document.getElementById('gotoChangePass').addEventListener('click', () => {
                view.selectWebPage('changePasswordPage');
            });
            document.getElementById('my-profile').addEventListener('mouseover', () => {
                let newClass = document.getElementsByClassName('underline')[0];
                newClass.classList.remove('pos2-top');
                newClass.classList.add('pos1-top');
            });
            document.getElementById('public-profile').addEventListener('mouseover', () => {
                let newClass = document.getElementsByClassName('underline')[0];
                newClass.classList.remove('pos1-top');
                newClass.classList.add('pos2-top');
            });
            view.setProfileUername('username');
            view.getProfile();
            controller.clickChooseImg();
            view.setProfileNameCheckout('exampleModalLabel1');
            controller.logout('logout-btn');
            break;
        case "chatPage":
            document.getElementById('app').innerHTML = component.chatPage;
            document.getElementById('avatarURL').src = auth.currentUser.photoURL;
            if (auth.currentUser.email == 'thienbinh1155@gmail.com') {
                model.getListChat("conversation");
                controller.clickSendMessage('comment');
                model.getInforUser();
                controller.expandAccount();
                controller.closeAccount();
                document.getElementById('goto-homepage-singin').addEventListener('click', () => {
                    view.selectWebPage('homePageSingIn');
                });
                document.getElementById('gotoChangePass').addEventListener('click', () => {
                    view.selectWebPage('changePasswordPage');
                });
                document.getElementById('gotoProfile').addEventListener('click', () => {
                    view.selectWebPage('profilePage');
                });
                controller.logout('logout-btn');
                view.setProfileNameCheckout('exampleModalLabel1');
                model.notifyMessageAudio();
            }
            
            break;
        case "detailProductPage":
            document.getElementById('app').innerHTML = component.detailProductPage;
            model.getInforUser();
            model.getCountFromBag('Bag');
            controller.expandAccount();
            controller.closeAccount();
            controller.functionVisualSearch();
            controller.clearSearch();
            controller.catchClickEvent();
            controller.clickGlass();
            controller.cancelSearch();
            controller.functionExpandOption();
            controller.functionCloseExpand();
            controller.search();
            controller.clicReview();
            controller.clickMoreDetail();
            controller.clickWriteReview();
            controller.clickStar();
            let review = document.getElementById('review');
            review.addEventListener('submit', async (e) => {
                e.preventDefault();
                let paramUrl = document.getElementsByClassName('mainImg')[0].src;
                let dayKu = new Date();
                let timeStamp = `${dayKu.getFullYear()}-${dayKu.getMonth() + 1}-${dayKu.getDate()} AT ${dayKu.getHours()}:${dayKu.getMinutes()}`;
                let countStar = 0;
                let star = document.getElementsByClassName('class-star');
                for (let i = 0; i < star.length; i++) {
                    if (star[i].className.indexOf('fill-star') != -1) {
                        countStar++;
                    }
                }
                let data = {
                    url: paramUrl,
                    username: auth.currentUser.displayName,
                    comment: review.textReview.value,
                    countstar: countStar,
                    time: timeStamp
                };
                controller.checkStar(data);
                review.textReview.value = '';
                for (let i = 0; i < star.length; i++) {
                    if (star[i].className.indexOf('fill-star') != -1) {
                        star[i].classList.toggle('fill-star');
                    }
                }
            })
            document.getElementById("gotoMenDesktop").addEventListener('click', () => {
                view.selectWebPage('menShoesSinginPage');
            });
            document.getElementById('gotoBagDesktop').addEventListener('click', () => {
                view.selectWebPage('bagPage');
            });
            document.getElementById('gotoFavouriteDesktop').addEventListener('click', () => {
                view.selectWebPage('favoritePage');
            });
            document.getElementById('gotoFavouriteMobile').addEventListener('click', () => {
                view.selectWebPage('favoritePage');
            });
            document.getElementById('gotoChangePass').addEventListener('click', () => {
                view.selectWebPage('changePasswordPage');
            });
            document.getElementById('gotoChangePasswordMobile').addEventListener('click', () => {
                view.selectWebPage('changePasswordPage');
            });
            document.getElementById('gotoProfile').addEventListener('click', () => {
                view.selectWebPage('profilePage');
            });
            document.getElementById('gotoProfileMobile').addEventListener('click', () => {
                view.selectWebPage('profilePage');
            });
            document.getElementById('gotoHomePageSinginHeader').addEventListener('click', () => {
                view.selectWebPage('homePageSingIn');
            });
            document.getElementById('goto-homepage-singin').addEventListener('click', () => {
                view.selectWebPage('homePageSingIn');
            });
            document.getElementById('gotoMenShoes').addEventListener('click',()=>{
                view.selectWebPage('menShoesSinginPage');
            });
            view.setProfileNameCheckout('exampleModalLabel1');
            controller.clickMoreReview();
            controller.clickGotoMen();
            controller.clickExpandMobileMen();
            controller.clickGobackAllMen();
            controller.clickGotoWomen();
            controller.clickExpandMobileWomen();
            controller.clickGobackAllWomen();
            controller.clickGotoKids();
            controller.clickExpandMobileKids();
            controller.clickGobackAllKids();
            controller.logout('logout-btn');
            controller.logout('gotoLogoutMobile');
            break;
    }
}

view.setErrorMessagge = (id1, id2, text) => {
    document.getElementById(id1).style.border = '1px solid red';
    document.getElementById(id2).innerText = text;
}
view.setOkMessage = (id1, id2, text) => {
    document.getElementById(id1).removeAttribute('style');
    document.getElementById(id2).innerText = text;
}
view.setProfileName = async (fullNameUser) => {
    document.getElementById('id-account').innerText = "Hi, " + fullNameUser
}
view.setProfileNameCheckout = async (strid) => {
    let fullName = await model.getInforUserNew()
    document.getElementById(strid).innerText = "Hello, " + fullName
}
view.setProfileUername = async (strid) => {
    let fullName = await model.getInforUserNew()
    document.getElementById(strid).innerText = fullName;
}
view.setUrlFileImage = (url, idImg) => {
    document.getElementById(idImg).src = url;
}
view.setHighLigthImg = (arr) => {
    var divData = '';
    for (let i = 0; i < arr.length; i++) {
        if (i != arr.length - 1) {
            divData += `
            <li>
            <div class="box-product-infor">
            <img src="${arr[i].url}" alt="shoe${arr[i].id}" class="size-img">
            <div class="mr-top-bt">
                <div class="infor1">
                <span>${arr[i].name}</span>
                <span style="color:black">${arr[i].price}<sup style="text-decoration: underline;">đ</sup></span>
                </div>
                <div class="infor2">
                <span style="color: rgb(145, 143, 143)">${arr[i].gender}</span>
                </div>
            </div>
            </div>
        </li>`
        }
        else {
            divData += `
            <li>
            <div class="box-product-infor p-r-48">
            <img src="${arr[i].url}" alt="shoe${arr[i].id}" class="size-img">
            <div class="mr-top-bt">
                <div class="infor1">
                <span>${arr[i].name}</span>
                <span style="color:black">${arr[i].price}<sup style="text-decoration: underline;">đ</sup></span>
                </div>
                <div class="infor2">
                <span style="color: rgb(145, 143, 143)">${arr[i].gender}</span>
                </div>
            </div>
            </div>
        </li>`
        }
    }
    divData += `<li class="buffer"></li>`
    document.getElementById('product_items').innerHTML = divData;
    let value = document.getElementsByClassName('size-img');
    for (let i = 0; i < value.length; i++) {
        value[i].addEventListener('click', () => {
            changeclickSearch();
            changeclickGlassSearch();
            changecancelBtn();
            changebreakPoint1();
            changebreakPoint2();
            changebreakPoint3();
            changebreakPoint4();
            view.selectWebPage('detailProductPage');
            view.setInforToReviewPage(arr[i]);
        });
    }
}
view.setMenShoesImg = (arr, arrf, arrb) => {
    document.getElementById('men-shoes-product_items').innerHTML = '';
    var divData = '';
    let temporaryF = [];
    let temporaryB = [];
    for (let i in arrf) {
        temporaryF.push(arrf[i].id);
    }
    for (let i in arrb) {
        temporaryB.push(arrb[i].id);
    }
    for (let i in arr) {
        if (temporaryF.indexOf(arr[i].id) !== -1 && temporaryB.indexOf(arr[i].id) !== -1) {
            let arrEBag = arrb[temporaryB.indexOf(arr[i].id)].index;
            //let arrEFavor = arrf[temporaryF.indexOf(arr[i].id)].index;
            var divData2 = '';
            if (arr[i].hasOwnProperty('thumburl')) {
                divData2 += `<li><img src="${arr[i].url}" alt="shoes" class="img-fluid thumb-color" style="z-index: -1;"></li>`
                for (let j = 0; j < arr[i].thumburl.length; j++) {
                    let soureImg = '';
                    soureImg = arr[i].thumburl[j];
                    divData2 += `<li><img src="${soureImg}" alt="shoes" class="img-fluid thumb-color" style="z-index: -1;"></li>`
                }
                if (arrEBag.indexOf(0) === -1) {
                    divData += `
                    <div class="men-shoes-box-img-infor-product">
                    <div class="colour-img">
                        <img src="${arr[i].url}" alt="shoes" class="img-fluid main-img" style="z-index: -1;">
                        <ul class="box-colour-products hide-thumb"> 
                        ${divData2}  
                        </ul>
                    </div>
                    <div class="box-favorite">
                        <button class="favorite-btn fill--favorite" type="button" id="favoriteBtn${arr[i].id}">
                            <svg height="18px" width="18px" fill="#111" viewBox="0 0 25 32">
                                <path
                                    d="M23.28 6.16q-1.44-1.44-3.4-1.92T16 4.28t-3.28 2.04Q11.36 4.8 9.44 4.28t-3.88-.04-3.4 1.96T.24 9.68t0 4 1.92 3.44L12.72 28l10.56-10.88q1.44-1.44 1.92-3.44t0-4-1.92-3.52z">
                                </path>
                            </svg>
                        </button>
                    </div>
                    <div class="box-bag">
                        <button class="bag-btn" type="button" id="bagBtn${arr[i].id}">
                            <svg aria-hidden="true"  focusable="false" viewBox="0 0 24 24"role="img" width="24px" height="24px" fill="none">
                                <path stroke="currentColor" stroke-width="1.5"
                                    d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5">
                                </path>
                            </svg>
                        </button>
                    </div>
                    <div class="men-shoes-box-infor-product">
                        <span>${arr[i].name}</span>
                        <br>
                        <span style="color: rgb(145, 143, 143)">${arr[i].gender}</span>
                        <br>
                        <span style="color: rgb(145, 143, 143)">${arr[i].numcolor} Colours</span>
                        <br>
                        <span style="color:black">${arr[i].price}<sup style="text-decoration: underline;">đ</sup></span>   
                    </div>
                        </div>`
                }
                else {
                    divData += `
                    <div class="men-shoes-box-img-infor-product">
                    <div class="colour-img">
                        <img src="${arr[i].url}" alt="shoes" class="img-fluid main-img" style="z-index: -1;">
                        <ul class="box-colour-products hide-thumb">  
                        ${divData2} 
                        </ul>
                    </div>
                    <div class="box-favorite">
                        <button class="favorite-btn fill--favorite" type="button" id="favoriteBtn${arr[i].id}">
                            <svg height="18px" width="18px" fill="#111" viewBox="0 0 25 32">
                                <path
                                    d="M23.28 6.16q-1.44-1.44-3.4-1.92T16 4.28t-3.28 2.04Q11.36 4.8 9.44 4.28t-3.88-.04-3.4 1.96T.24 9.68t0 4 1.92 3.44L12.72 28l10.56-10.88q1.44-1.44 1.92-3.44t0-4-1.92-3.52z">
                                </path>
                            </svg>
                        </button>
                    </div>
                    <div class="box-bag">
                        <button class="bag-btn fill--bag" type="button" id="bagBtn${arr[i].id}">
                            <svg aria-hidden="true"  focusable="false" viewBox="0 0 24 24"role="img" width="24px" height="24px" fill="none">
                                <path stroke="currentColor" stroke-width="1.5"
                                    d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5">
                                </path>
                            </svg>
                        </button>
                    </div>
                    <div class="men-shoes-box-infor-product">
                        <span>${arr[i].name}</span>
                        <br>
                        <span style="color: rgb(145, 143, 143)">${arr[i].gender}</span>
                        <br>
                        <span style="color: rgb(145, 143, 143)">${arr[i].numcolor} Colours</span>
                        <br>
                        <span style="color:black">${arr[i].price}<sup style="text-decoration: underline;">đ</sup></span>   
                    </div>
                        </div>`
                }
            }
            else {
                divData += `
                    <div class="men-shoes-box-img-infor-product">
                    <div class="colour-img">
                        <img src="${arr[i].url}" alt="shoes" class="img-fluid main-img" style="z-index: -1;">
                        <ul class="box-colour-products hide-thumb">
                        </ul>
                    </div>
                    <div class="box-favorite">
                        <button class="favorite-btn fill--favorite" type="button" id="favoriteBtn${arr[i].id}">
                            <svg height="18px" width="18px" fill="#111" viewBox="0 0 25 32">
                                <path
                                    d="M23.28 6.16q-1.44-1.44-3.4-1.92T16 4.28t-3.28 2.04Q11.36 4.8 9.44 4.28t-3.88-.04-3.4 1.96T.24 9.68t0 4 1.92 3.44L12.72 28l10.56-10.88q1.44-1.44 1.92-3.44t0-4-1.92-3.52z">
                                </path>
                            </svg>
                        </button>
                    </div>
                    <div class="box-bag">
                        <button class="bag-btn fill--bag" type="button" id="bagBtn${arr[i].id}">
                            <svg aria-hidden="true"  focusable="false" viewBox="0 0 24 24"role="img" width="24px" height="24px" fill="none">
                                <path stroke="currentColor" stroke-width="1.5"
                                    d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5">
                                </path>
                            </svg>
                        </button>
                    </div>
                    <div class="men-shoes-box-infor-product">
                        <span>${arr[i].name}</span>
                        <br>
                        <span style="color: rgb(145, 143, 143)">${arr[i].gender}</span>
                        <br>
                        <span style="color: rgb(145, 143, 143)">${arr[i].numcolor} Colours</span>
                        <br>
                        <span style="color:black">${arr[i].price}<sup style="text-decoration: underline;">đ</sup></span>   
                    </div>
                        </div>`
            }
        }
        else if (temporaryF.indexOf(arr[i].id) !== -1 && temporaryB.indexOf(arr[i].id) === -1) {
            var divData2 = '';
            if (arr[i].hasOwnProperty('thumburl')) {
                divData2 += `<li><img src="${arr[i].url}" alt="shoes" class="img-fluid thumb-color" style="z-index: -1;"></li>`
                for (let j = 0; j < arr[i].thumburl.length; j++) {
                    let soureImg = '';
                    soureImg = arr[i].thumburl[j];
                    divData2 += `<li><img src="${soureImg}" alt="shoes" class="img-fluid thumb-color" style="z-index: -1;"></li>`
                }
                divData += `
            <div class="men-shoes-box-img-infor-product">
            <div class="colour-img">
                <img src="${arr[i].url}" alt="shoes" class="img-fluid main-img" style="z-index: -1;">
                <ul class="box-colour-products hide-thumb">
                ${divData2}  
                </ul>
            </div>
            <div class="box-favorite">
                <button class="favorite-btn fill--favorite" type="button" id="favoriteBtn${arr[i].id}">
                    <svg height="18px" width="18px" fill="#111" viewBox="0 0 25 32">
                        <path
                            d="M23.28 6.16q-1.44-1.44-3.4-1.92T16 4.28t-3.28 2.04Q11.36 4.8 9.44 4.28t-3.88-.04-3.4 1.96T.24 9.68t0 4 1.92 3.44L12.72 28l10.56-10.88q1.44-1.44 1.92-3.44t0-4-1.92-3.52z">
                        </path>
                    </svg>
                </button>
            </div>
            <div class="box-bag">
                <button class="bag-btn" type="button" id="bagBtn${arr[i].id}">
                    <svg aria-hidden="true"  focusable="false" viewBox="0 0 24 24"role="img" width="24px" height="24px" fill="none">
                        <path stroke="currentColor" stroke-width="1.5"
                            d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5">
                        </path>
                    </svg>
                </button>
            </div>
            <div class="men-shoes-box-infor-product">
                <span>${arr[i].name}</span>
                <br>
                <span style="color: rgb(145, 143, 143)">${arr[i].gender}</span>
                <br>
                <span style="color: rgb(145, 143, 143)">${arr[i].numcolor} Colours</span>
                <br>
                <span style="color:black">${arr[i].price}<sup style="text-decoration: underline;">đ</sup></span>   
            </div>
            </div>`
            }
            else {
                divData += `
            <div class="men-shoes-box-img-infor-product">
            <div class="colour-img">
                <img src="${arr[i].url}" alt="shoes" class="img-fluid main-img" style="z-index: -1;">
                <ul class="box-colour-products hide-thumb">   
                </ul>
            </div>
            <div class="box-favorite">
                <button class="favorite-btn fill--favorite" type="button" id="favoriteBtn${arr[i].id}">
                    <svg height="18px" width="18px" fill="#111" viewBox="0 0 25 32">
                        <path
                            d="M23.28 6.16q-1.44-1.44-3.4-1.92T16 4.28t-3.28 2.04Q11.36 4.8 9.44 4.28t-3.88-.04-3.4 1.96T.24 9.68t0 4 1.92 3.44L12.72 28l10.56-10.88q1.44-1.44 1.92-3.44t0-4-1.92-3.52z">
                        </path>
                    </svg>
                </button>
            </div>
            <div class="box-bag">
                <button class="bag-btn" type="button" id="bagBtn${arr[i].id}">
                    <svg aria-hidden="true"  focusable="false" viewBox="0 0 24 24"role="img" width="24px" height="24px" fill="none">
                        <path stroke="currentColor" stroke-width="1.5"
                            d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5">
                        </path>
                    </svg>
                </button>
            </div>
            <div class="men-shoes-box-infor-product">
                <span>${arr[i].name}</span>
                <br>
                <span style="color: rgb(145, 143, 143)">${arr[i].gender}</span>
                <br>
                <span style="color: rgb(145, 143, 143)">${arr[i].numcolor} Colours</span>
                <br>
                <span style="color:black">${arr[i].price}<sup style="text-decoration: underline;">đ</sup></span>   
            </div>
            </div>`
            }
        }
        else if (temporaryF.indexOf(arr[i].id) === -1 && temporaryB.indexOf(arr[i].id) !== -1) {
            let arrEBag = arrb[temporaryB.indexOf(arr[i].id)].index;
            var divData2 = '';
            if (arr[i].hasOwnProperty('thumburl')) {
                divData2 += `<li><img src="${arr[i].url}" alt="shoes" class="img-fluid thumb-color" style="z-index: -1;"></li>`
                for (let j = 0; j < arr[i].thumburl.length; j++) {
                    let soureImg = '';
                    soureImg = arr[i].thumburl[j];
                    divData2 += `<li><img src="${soureImg}" alt="shoes" class="img-fluid thumb-color" style="z-index: -1;"></li>`
                };
                if (arrEBag.indexOf(0) === -1) {
                    divData += `
                    <div class="men-shoes-box-img-infor-product">
                    <div class="colour-img">
                        <img src="${arr[i].url}" alt="shoes" class="img-fluid main-img" style="z-index: -1;">
                        <ul class="box-colour-products  hide-thumb"> 
                        ${divData2}  
                        </ul>
                    </div>
                    <div class="box-favorite">
                        <button class="favorite-btn" type="button" id="favoriteBtn${arr[i].id}">
                            <svg height="18px" width="18px" fill="#111" viewBox="0 0 25 32">
                                <path
                                    d="M23.28 6.16q-1.44-1.44-3.4-1.92T16 4.28t-3.28 2.04Q11.36 4.8 9.44 4.28t-3.88-.04-3.4 1.96T.24 9.68t0 4 1.92 3.44L12.72 28l10.56-10.88q1.44-1.44 1.92-3.44t0-4-1.92-3.52z">
                                </path>
                            </svg>
                        </button>
                    </div>
                    <div class="box-bag">
                        <button class="bag-btn" type="button" id="bagBtn${arr[i].id}">
                            <svg aria-hidden="true"  focusable="false" viewBox="0 0 24 24"role="img" width="24px" height="24px" fill="none">
                                <path stroke="currentColor" stroke-width="1.5"
                                    d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5">
                                </path>
                            </svg>
                        </button>
                    </div>
                    <div class="men-shoes-box-infor-product">
                        <span>${arr[i].name}</span>
                        <br>
                        <span style="color: rgb(145, 143, 143)">${arr[i].gender}</span>
                        <br>
                        <span style="color: rgb(145, 143, 143)">${arr[i].numcolor} Colours</span>
                        <br>
                        <span style="color:black">${arr[i].price}<sup style="text-decoration: underline;">đ</sup></span>   
                    </div>
                        </div>`
                }
                else {
                    divData += `
                    <div class="men-shoes-box-img-infor-product">
                    <div class="colour-img">
                        <img src="${arr[i].url}" alt="shoes" class="img-fluid main-img" style="z-index: -1;">
                        <ul class="box-colour-products  hide-thumb">  
                        ${divData2} 
                        </ul>
                    </div>
                    <div class="box-favorite">
                        <button class="favorite-btn" type="button" id="favoriteBtn${arr[i].id}">
                            <svg height="18px" width="18px" fill="#111" viewBox="0 0 25 32">
                                <path
                                    d="M23.28 6.16q-1.44-1.44-3.4-1.92T16 4.28t-3.28 2.04Q11.36 4.8 9.44 4.28t-3.88-.04-3.4 1.96T.24 9.68t0 4 1.92 3.44L12.72 28l10.56-10.88q1.44-1.44 1.92-3.44t0-4-1.92-3.52z">
                                </path>
                            </svg>
                        </button>
                    </div>
                    <div class="box-bag">
                        <button class="bag-btn fill--bag" type="button" id="bagBtn${arr[i].id}">
                            <svg aria-hidden="true"  focusable="false" viewBox="0 0 24 24"role="img" width="24px" height="24px" fill="none">
                                <path stroke="currentColor" stroke-width="1.5"
                                    d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5">
                                </path>
                            </svg>
                        </button>
                    </div>
                    <div class="men-shoes-box-infor-product">
                        <span>${arr[i].name}</span>
                        <br>
                        <span style="color: rgb(145, 143, 143)">${arr[i].gender}</span>
                        <br>
                        <span style="color: rgb(145, 143, 143)">${arr[i].numcolor} Colours</span>
                        <br>
                        <span style="color:black">${arr[i].price}<sup style="text-decoration: underline;">đ</sup></span>   
                    </div>
                        </div>`
                }
            }
            else {
                divData += `
                    <div class="men-shoes-box-img-infor-product">
                    <div class="colour-img">
                        <img src="${arr[i].url}" alt="shoes" class="img-fluid main-img" style="z-index: -1;">
                        <ul class="box-colour-products hide-thumb">
                        </ul>
                    </div>
                    <div class="box-favorite">
                        <button class="favorite-btn" type="button" id="favoriteBtn${arr[i].id}">
                            <svg height="18px" width="18px" fill="#111" viewBox="0 0 25 32">
                                <path
                                    d="M23.28 6.16q-1.44-1.44-3.4-1.92T16 4.28t-3.28 2.04Q11.36 4.8 9.44 4.28t-3.88-.04-3.4 1.96T.24 9.68t0 4 1.92 3.44L12.72 28l10.56-10.88q1.44-1.44 1.92-3.44t0-4-1.92-3.52z">
                                </path>
                            </svg>
                        </button>
                    </div>
                    <div class="box-bag">
                        <button class="bag-btn fill--bag" type="button" id="bagBtn${arr[i].id}">
                            <svg aria-hidden="true"  focusable="false" viewBox="0 0 24 24"role="img" width="24px" height="24px" fill="none">
                                <path stroke="currentColor" stroke-width="1.5"
                                    d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5">
                                </path>
                            </svg>
                        </button>
                    </div>
                    <div class="men-shoes-box-infor-product">
                        <span>${arr[i].name}</span>
                        <br>
                        <span style="color: rgb(145, 143, 143)">${arr[i].gender}</span>
                        <br>
                        <span style="color: rgb(145, 143, 143)">${arr[i].numcolor} Colours</span>
                        <br>
                        <span style="color:black">${arr[i].price}<sup style="text-decoration: underline;">đ</sup></span>   
                    </div>
                        </div>`
            }
        }
        else {
            var divData2 = '';
            if (arr[i].hasOwnProperty('thumburl')) {
                divData2 += `<li><img src="${arr[i].url}" alt="shoes" class="img-fluid thumb-color" style="z-index: -1;"></li>`
                for (let j = 0; j < arr[i].thumburl.length; j++) {
                    let soureImg = '';
                    soureImg = arr[i].thumburl[j];
                    divData2 += `<li><img src="${soureImg}" alt="shoes" class="img-fluid thumb-color" style="z-index: -1;"></li>`
                };
                divData += `
                    <div class="men-shoes-box-img-infor-product">
                    <div class="colour-img">
                        <img src="${arr[i].url}" alt="shoes" class="img-fluid main-img" style="z-index: -1;">
                        <ul class="box-colour-products hide-thumb">  
                        ${divData2} 
                        </ul>
                    </div>
                    <div class="box-favorite">
                        <button class="favorite-btn" type="button" id="favoriteBtn${arr[i].id}">
                            <svg height="18px" width="18px" fill="#111" viewBox="0 0 25 32">
                                <path
                                    d="M23.28 6.16q-1.44-1.44-3.4-1.92T16 4.28t-3.28 2.04Q11.36 4.8 9.44 4.28t-3.88-.04-3.4 1.96T.24 9.68t0 4 1.92 3.44L12.72 28l10.56-10.88q1.44-1.44 1.92-3.44t0-4-1.92-3.52z">
                                </path>
                            </svg>
                        </button>
                    </div>
                    <div class="box-bag">
                        <button class="bag-btn" type="button" id="bagBtn${arr[i].id}">
                            <svg aria-hidden="true"  focusable="false" viewBox="0 0 24 24"role="img" width="24px" height="24px" fill="none">
                                <path stroke="currentColor" stroke-width="1.5"
                                    d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5">
                                </path>
                            </svg>
                        </button>
                    </div>
                    <div class="men-shoes-box-infor-product">
                        <span>${arr[i].name}</span>
                        <br>
                        <span style="color: rgb(145, 143, 143)">${arr[i].gender}</span>
                        <br>
                        <span style="color: rgb(145, 143, 143)">${arr[i].numcolor} Colours</span>
                        <br>
                        <span style="color:black">${arr[i].price}<sup style="text-decoration: underline;">đ</sup></span>   
                    </div>
                        </div>`

            }
            else {
                divData += `
                    <div class="men-shoes-box-img-infor-product">
                    <div class="colour-img">
                        <img src="${arr[i].url}" alt="shoes" class="img-fluid main-img" style="z-index: -1;">
                        <ul class="box-colour-products hide-thumb">
                        </ul>
                    </div>
                    <div class="box-favorite">
                        <button class="favorite-btn" type="button" id="favoriteBtn${arr[i].id}">
                            <svg height="18px" width="18px" fill="#111" viewBox="0 0 25 32">
                                <path
                                    d="M23.28 6.16q-1.44-1.44-3.4-1.92T16 4.28t-3.28 2.04Q11.36 4.8 9.44 4.28t-3.88-.04-3.4 1.96T.24 9.68t0 4 1.92 3.44L12.72 28l10.56-10.88q1.44-1.44 1.92-3.44t0-4-1.92-3.52z">
                                </path>
                            </svg>
                        </button>
                    </div>
                    <div class="box-bag">
                        <button class="bag-btn" type="button" id="bagBtn${arr[i].id}">
                            <svg aria-hidden="true"  focusable="false" viewBox="0 0 24 24"role="img" width="24px" height="24px" fill="none">
                                <path stroke="currentColor" stroke-width="1.5"
                                    d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5">
                                </path>
                            </svg>
                        </button>
                    </div>
                    <div class="men-shoes-box-infor-product">
                        <span>${arr[i].name}</span>
                        <br>
                        <span style="color: rgb(145, 143, 143)">${arr[i].gender}</span>
                        <br>
                        <span style="color: rgb(145, 143, 143)">${arr[i].numcolor} Colours</span>
                        <br>
                        <span style="color:black">${arr[i].price}<sup style="text-decoration: underline;">đ</sup></span>   
                    </div>
                        </div>`
            }
        }
    }
    let classMenShoes = document.getElementById('title-men-shoes');
    classMenShoes.innerText = `Men's Shoes(${arr.length})`;
    document.getElementById('men-shoes-product_items').innerHTML = divData;
    controller.clickFavorite();
    controller.clickBag();
    var classColourImg = document.getElementsByClassName('colour-img');
    var classThumb = document.getElementsByClassName('box-colour-products');
    var classMainImg = document.getElementsByClassName('main-img');
    var classBagBtn = document.getElementsByClassName('bag-btn');
    var classFavorBtn = document.getElementsByClassName('favorite-btn');
    for (let i = 0; i < classColourImg.length; i++) {
        classColourImg[i].addEventListener('click', () => {
            view.selectWebPage('detailProductPage');
            view.setInforToReviewPage(arr[i]);
        });
        classColourImg[i].addEventListener('mouseover', () => {
            if (arr[i].hasOwnProperty('thumburl')) {
                classThumb[i].classList.remove('hide-thumb');
                var classThumbColour = classThumb[i].children;
                for (let z = 0; z < classThumbColour.length; z++) {
                    classThumbColour[z].addEventListener('mouseover', async () => {
                        await model.readDataBagFavoriteImage(arr, i, z, classBagBtn, classMainImg, classThumbColour, classFavorBtn)
                    });
                }
            }
        });
        classColourImg[i].addEventListener('mouseleave', () => {
            classThumb[i].classList.add('hide-thumb');
        });
    }
}
view.clickFavorite = (classFavorite) => {
    classFavorite.classList.toggle('fill--favorite');
}
view.clickBag = (classBag) => {
    classBag.classList.toggle('fill--bag');
}
view.setSumCountOfBag = (count) => {
    document.getElementById('countTotal').innerText = `${count}`;
}
view.setInforBag = (arr) => {
    var divData = '';
    for (let i in arr) {
        let str = '';
        let numPrice = arr[i].count * arr[i].numprice;
        let strNumPrice = formatCash(numPrice.toString());

        divData +=
            `
        <div class="col-lg-12 col-md-12 col-sm-12 col-12 p-d-0">
            <div class="row format-row">
                <div class="box-img-infor-bag col-lg-4 col-md-4 col-sm-4 col-12 p-d-0">
                    <div class="box-img-bag col-lg-12 col-md-12 col-sm-12 col-12 p-d-l-0 p-d-r-0-new">
                    <img src="${arr[i].url}" alt="" class="img-fluid">
                    </div>
                </div>
                <div class="price-bag pos-text-bag col-lg-8 col-md-8 col-sm-8 col-12 p-d-l-0 p-d-r-0">
                    <div class="row format-row">
                        <div class="box-infor-bag col-lg-9 col-md-9 col-sm-9 col-8 p-d-0">
                        <span class="row format-row format-P1-bag">${arr[i].name}</span>
                        <span class="row format-row format-P2-bag">${arr[i].gender}</span>
                        <span class="row format-row format-P3-bag">Colour: ${arr[i].color}</span>
                        <div class="row format-row">
                            <div class="format-P4-bag">
                                <span>Size</span>
                                <span>
                                    <select name="size" class="size-bag">
                                    <option value="40">40</option>
                                    <option value="40.5">40.5</option>
                                    <option value="41">41</option>
                                    <option value="42">42</option>
                                    <option value="42.5">42.5</option>
                                    <option value="43">43</option>
                                    </select>
                                </span>
                            </div>
                        </div>
                        <div class="row format-row">
                            <div class="format-P5-bag flex-P5-bag">
                                <span>Quantity</span>
                                <span class="mrl-de"> <button type="button" class="decrease-quantity format-operator"
                                    id="decreaseBtn${arr[i].id}">-</button>
                                </span>
                                <span class="mrl-de amount" id="count_items${arr[i].id}">${arr[i].count}</span>
                                <span class="mrl-in"><button type="button" class="increase-quantity format-operator"
                                    id="increaseBtn${arr[i].id}">+</button>
                                </span>
                            </div>
                        </div>
                        <button class="delete-btn mrt-40-delete row format-row" id="deleteBtn${arr[i].id}">
                            <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px"
                            fill="none">
                            <path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5"
                                d="M14.25 7.5v12m-4.5-12v12M5.25 6v13.5c0 1.24 1.01 2.25 2.25 2.25h9c1.24 0 2.25-1.01 2.25-2.25V5.25h2.75m-2.75 0H21m-12-3h5.25c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5H3">
                            </path>
                            </svg>
                        </button>
                        </div>
                    
                        <div class="col-lg-3 col-md-3 col-sm-3 col-4 p-d-0">
                            <span class="price">${strNumPrice}</span><sup style="text-decoration: underline;">đ</sup>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="under-line"></div>
        `
    }
    document.getElementById('display-bag-item').innerHTML = divData;
}
view.setTotalPrice = (price) => {
    let idSubtotal = document.getElementById('sub-price');
    idSubtotal.innerText = price;
    let idTotal = document.getElementById('total-price');
    idTotal.innerText = price;
}
view.setInforFavorite = (arr) => {
    var divData = '';
    for (let i in arr) {

        divData += `
            <div class="men-shoes-box-img-infor-product">
            <img src="${arr[i].url}" alt="shoes" class="img-fluid" style="z-index: -1;">
            <div class="box-favorite">
                <button class="favorite-btn fill--favorite" type="button">
                    <svg height="18px" width="18px" fill="#111" viewBox="0 0 25 32">
                        <path
                            d="M23.28 6.16q-1.44-1.44-3.4-1.92T16 4.28t-3.28 2.04Q11.36 4.8 9.44 4.28t-3.88-.04-3.4 1.96T.24 9.68t0 4 1.92 3.44L12.72 28l10.56-10.88q1.44-1.44 1.92-3.44t0-4-1.92-3.52z">
                        </path>
                    </svg>
                </button>
            </div>
            <div class="men-shoes-box-infor-product">
                <span>${arr[i].name}</span>
                <br>
                <span style="color: rgb(145, 143, 143)">${arr[i].gender}</span>
                <br>
                <span style="color: rgb(145, 143, 143)">Colour: ${arr[i].color}</span>
                <br>
                <span style="color:black">${arr[i].numprice}<sup style="text-decoration: underline;">đ</sup></span>   
            </div>
        </div>`
    }
    document.getElementById('men-shoes-product_items').innerHTML = divData;
    // controller.clickEditBtn(arr);
    // controller.clickFavorite(arr);
}
view.setInforBagToCheckout = (data) => {
    var divData = '';
    for (let i = 0; i < data.length; i++) {
        divData +=
            `
        <div class="flex-img-infor-bag col-lg-12 col-md-12 col-sm-12 col-12 p-d-0 row format-row">
            <div class="box-img-bag col-lg-4 col-md-4 col-sm-4 col-4 p-d-l-0">
                <img src="${data[i].url}" alt="" class="img-fluid">
            </div>
            <div class="col-lg-7 col-md-7 col-sm-7 col-7 p-d-l-0">
                <span class="row format-row format-P1-bag">${data[i].name}</span>
                <span class="row format-row formatnew-P2-bag">${data[i].gender}</span>
                <span class="row format-row formatnew-P3-bag">Colour: ${data[i].color}</span>
                <div class="inline-size-bag row format-row">
                    <div class="formatnew-P4-bag">
                        <span>Size:</span>
                        <span>${data[i].size}</span>
                    </div>
                    <div class="formatnew-P5-bag flex-P5-bag">
                        <span>Quantity: ${data[i].count}</span>
                    </div>
                </div>
                <div>
                    <span class="formatnew-P4-bag">Total Price: ${data[i].price}</span>
                    <sup style="text-decoration: underline;">đ</sup>
                </div>
            </div>
            <div class="col-lg-1 col-md-1 col-sm-1 col-1 p-d-l-0 p-d-r-0">
                <button class="delete-btn mrt-40-delete">
                    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px"height="24px" fill="none">
                        <path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5"
                            d="M14.25 7.5v12m-4.5-12v12M5.25 6v13.5c0 1.24 1.01 2.25 2.25 2.25h9c1.24 0 2.25-1.01 2.25-2.25V5.25h2.75m-2.75 0H21m-12-3h5.25c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5H3">
                        </path>
                    </svg>
                </button>
            </div>
        </div>
        <div class="row format-row under-line col-lg-12 col-md-12 col-sm-12 col-12">
        </div>
        `
    }
    document.getElementById('showProductToCheckout').innerHTML = divData;
}
view.getProfile = async () => {
    let data = await model.raedInforUser();
    let formProfile = document.getElementById('formProfile');
    formProfile.firstname.value = data.firstname;
    formProfile.lastname.value = data.lastname;
    formProfile.email.value = data.email;
    formProfile.password.value = data.pass;
    document.getElementById('avatar').src = data.photoUri;
}

view.showSearch = async (data) => {
    console.log(data);
    var divData = '';

    for (let i in data) {
        let str = '';
        if (data[i].numcolor > 1) {
            str = 'Clours';
        }
        else {
            str = 'Clour'
        }
        divData += `
        <div class="men-shoes-box-img-infor-product">
            <img src="${data[i].url}" alt="shoes" class="img-fluid main-img-search" style="z-index: -1;">
            <div class="men-shoes-box-infor-product">
              <span>${data[i].name}</span>
              <br>
              <span style="color: rgb(145, 143, 143)">${data[i].gender}</span>
              <br>
              <span style="color: rgb(145, 143, 143)">${data[i].numcolor} ${str}</span>
              <br>
              <span style="color:black">${data[i].price}<sup style="text-decoration: underline;">đ</sup></span>
            </div>
        </div>
        `
    }
    document.getElementById('shoesSearch').innerHTML = divData;
    let value = document.getElementsByClassName('main-img-search');
    for (let i = 0; i < value.length; i++) {
        value[i].addEventListener('click', () => {
            changeclickSearch();
            changeclickGlassSearch();
            changecancelBtn();
            changebreakPoint1();
            changebreakPoint2();
            changebreakPoint3();
            changebreakPoint4();
            view.selectWebPage('detailProductPage');
            view.setInforToReviewPage(data[i]);
        });
    }
}
view.displayListChat = (currentId, arr) => {
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        var divData = "";
        if (currentId === arr[i].uId1) {
            divData += `<div class="row sideBar-body" id="${arr[i].id}">
                <div class="col-sm-3 col-xs-3 sideBar-avatar">
                    <div class="avatar-icon">
                        <img src="${arr[i].photoUrl2}">
                    </div>
                </div>
                <div class="col-sm-9 col-xs-9 sideBar-main">
                    <div class="row">
                        <div class="col-sm-8 col-xs-8 sideBar-name">
                            <span class="name-meta">${arr[i].username2}</span>
                        </div>
                        <div class="col-sm-4 col-xs-4 sideBar-time">
                            <span class="time-meta">${arr[i].time}</span>
                        </div>
                    </div>
                </div>
            </div>`
            document.getElementById('history-chat').insertAdjacentHTML('beforeend', divData);
        }
        else if (currentId === arr[i].uId2) {
            divData += `<div class="row sideBar-body" id="${arr[i].id}">
                <div class="col-sm-3 col-xs-3 sideBar-avatar">
                    <div class="avatar-icon">
                        <img src="${arr[i].photoUrl1}">
                    </div>
                </div>
                <div class="col-sm-9 col-xs-9 sideBar-main">
                    <div class="row">
                        <div class="col-sm-8 col-xs-8 sideBar-name">
                            <span class="name-meta">${arr[i].username1}</span>
                        </div>
                        <div class="col-sm-4 col-xs-4 sideBar-time">
                            <span class="time-meta">${arr[i].time}</span>
                        </div>
                    </div>
                </div>
            </div>`
            document.getElementById('history-chat').insertAdjacentHTML('beforeend', divData);
        }
    }
}

view.initialMessage = (id) => {
    document.getElementById(id).innerHTML = '';
}
view.displayMessages = (arrMessage, currentEmail, idRenderMessage) => {
    for (let i = 0; i < arrMessage.length; i++) {
        let messagesParagrap = '';
        if (currentEmail !== arrMessage[i].email) {
            messagesParagrap += `<div class="row message-body">
                    <div class="col-sm-12 message-main-receiver">
                    <div>${arrMessage[i].sender}</div>
                    <div class="message-text-receiver">${arrMessage[i].message}</div>
                    <div class="message-time">${arrMessage[i].time}</div>
                    </div>
                    </div>`;
            document.getElementById(idRenderMessage).insertAdjacentHTML('beforeend', messagesParagrap);
        }
        else if (currentEmail === arrMessage[i].email) {
            messagesParagrap += `<div class="row message-body">
                    <div class="col-sm-12 message-main-sender">
                    <div>${arrMessage[i].sender}</div>
                    <div class="message-text-sender">${arrMessage[i].message}</div>
                    <div class="message-time">${arrMessage[i].time}</div>
                    </div>
                    </div>`
            document.getElementById(idRenderMessage).insertAdjacentHTML('beforeend', messagesParagrap);
        }
    }
    let top = document.getElementById(idRenderMessage);
    top.scrollTop = top.scrollHeight;
}
view.getSendMessages = (idInputMessage) => {
    let txtvalue = '';
    txtvalue = document.getElementById(idInputMessage).value;
    return txtvalue;
}
view.displayNameGuess = (fname) => {
    document.getElementById('head-name-meta').innerText = fname;
}
view.displayAvatarGuess = (avatar) => {
    document.getElementById('avatarGuess1').src = avatar;
}
view.setInforToReviewPage = async (obj) => {

    document.getElementsByClassName('mainImg')[0].src = obj.url;
    document.getElementsByClassName('nameproduct')[0].innerText = `Name: ${obj.name}`;
    document.getElementsByClassName('gender')[0].innerText = `Gender: ${obj.gender}`;
    document.getElementsByClassName('color')[0].innerText = `Color: ${obj.numcolor}`;
    document.getElementsByClassName('price')[0].innerHTML = `Price: ${obj.price}<sup style="text-decoration: underline;">đ</sup>`;
    if (obj.hasOwnProperty('thumburl') == true) {
        let thumb = document.getElementById('thumbImg');
        if (thumb.className.indexOf('hide-thumb-img') != -1) {
            thumb.classList.toggle('hide-thumb-img');
            thumb.classList.toggle('show-thumb-img');
        }
        var divData2 = `<li><img src="${obj.url}" alt="shoes" class="img-fluid thumb-color" style="z-index: -1;"></li>`
        for (let j = 0; j < obj.thumburl.length; j++) {
            let soureImg = '';
            soureImg = obj.thumburl[j];
            divData2 += `<li class="padding-left-5"><img src="${soureImg}" alt="shoes" class="img-fluid thumb-color" style="z-index: -1;"></li>`
        }
        thumb.innerHTML = divData2;
        controller.hoverThumbImg('thumb-color','mainImg');
    }
    let data = await model.readReview(obj.url);
    let count = 0;
    let value;
    if (data.check == true) {
        for (let i = 0; i < data.content.length; i++) {
            count += data.content[i].star;
        }
        document.getElementById('countReview').innerText = `Reviews(${data.content.length})`;
        value = Math.round((count / data.content.length))
    }
    else {
        document.getElementById('countReview').innerText = `Review(${0})`;
        value = 0;
    }
    switch (value) {
        case 0:
            var divData = `
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            `
            var divData2 = `<span class="padding-left-12" id="countStar">0 Star</span>`
            document.getElementById('displayStar').innerHTML = divData;
            document.getElementById('displayDetailStar').innerHTML = divData + divData2;
            document.getElementById('displayRating').innerHTML = divData + divData2;
            break;
        case 1:
            var divData = `
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            `
            var divData2 = `<span class="padding-left-12" id="countStar">1 Star</span>`
            document.getElementById('displayStar').innerHTML = divData;
            document.getElementById('displayDetailStar').innerHTML = divData + divData2;
            document.getElementById('displayRating').innerHTML = divData + divData2;
            break;
        case 2:
            var divData = `
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            `
            var divData2 = `<span class="padding-left-12" id="countStar">2 Stars</span>`
            document.getElementById('displayStar').innerHTML = divData;
            document.getElementById('displayDetailStar').innerHTML = divData + divData2;
            document.getElementById('displayRating').innerHTML = divData + divData2;
            break;
        case 3:
            var divData = `
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            `
            var divData2 = `<span class="padding-left-12" id="countStar">3 Stars</span>`
            document.getElementById('displayStar').innerHTML = divData;
            document.getElementById('displayDetailStar').innerHTML = divData + divData2;
            document.getElementById('displayRating').innerHTML = divData + divData2;
            break;
        case 4:
            var divData = `
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star"></i>
            `
            var divData2 = `<span class="padding-left-12" id="countStar">4 Stars</span>`
            document.getElementById('displayStar').innerHTML = divData;
            document.getElementById('displayDetailStar').innerHTML = divData + divData2;
            document.getElementById('displayRating').innerHTML = divData + divData2;
            break;
        case 5:
            var divData = `
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            `
            var divData2 = `<span class="padding-left-12" id="countStar">5 Stars</span>`
            document.getElementById('displayStar').innerHTML = divData;
            document.getElementById('displayDetailStar').innerHTML = divData + divData2;
            document.getElementById('displayRating').innerHTML = divData + divData2;
            break;
    }

}

export { boolSingin, boolSingup, arrShoeImage }
export default view;