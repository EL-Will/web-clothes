import view from "./view.js";
import model from "./model.js";
import { db, auth } from "./model.js";

const controller = {};

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function checkEmail(str1, str2) {
    if (str1 === str2) {
        return true;
    } else {
        return false;
    }
}

function checkPass(str) {

    if (str.length < 8 || str.indexOf(" ") !== -1) {
        return false;
    } else {
        return true;
    }
}
function checkConfirmpass(str, str2) {
    if (str === str2) {
        return true;
    }
    else {
        console.log(false);
        return false;
    }
}

controller.singup = (data) => {
    data.firstname === "" ? view.setErrorMessagge('input-first-name', 'err-first-name', 'Mời bạn nhập First name') : view.setOkMessage('input-first-name', 'err-first-name', ''); //{
    data.lastname === "" ? view.setErrorMessagge('input-last-name', 'err-last-name', 'Mời bạn nhập Last name') : view.setOkMessage('input-last-name', 'err-last-name', '');
    data.username === "" ? view.setErrorMessagge('input-username', 'err-user-name', 'Mời bạn nhập User name') : view.setOkMessage('input-username', 'err-user-name', '');
    validateEmail(data.email) == true ? view.setOkMessage('input-email', 'err-mail', '') : view.setErrorMessagge('input-email', 'err-mail', 'Email không chính xác hoặc không đúng định dạng');
    checkPass(data.password) == false ? view.setErrorMessagge('input-pass', 'err-pass', 'Mời bạn nhập mật khẩu') : view.setOkMessage('input-pass', 'err-pass', '');
    data.confirmpassword === "" ? view.setErrorMessagge('input-confirmpass', 'err-confirm-pass', 'Mời bạn nhập mật khẩu') : (checkConfirmpass(data.password, data.confirmpassword) == false ? view.setErrorMessagge('input-confirmpass', 'err-confirm-pass', 'Mật khẩu của bạn không chính xác') : view.setOkMessage('input-confirmpass', 'err-confirm-pass', ''));

    if (data.firstname !== "" && data.lastname !== "" && data.username !== "" && validateEmail(data.email) == true && data.confirmpassword !== "" && checkPass(data.password) == true && checkConfirmpass(data.password, data.confirmpassword)) {
        model.getSingup(data);
    }
    else {
        console.log('err');
    }
}

controller.singin = (data) => {
    validateEmail(data.email) == true ? (view.setOkMessage('input-email', 'err-mail', '')) : view.setErrorMessagge('input-email', 'err-mail', 'Email không chính xác hoặc không đúng định dạng');
    data.passWord === "" ? view.setErrorMessagge('input-pass', 'err-pass', 'Mời bạn nhập mật khẩu') : (view.setOkMessage('input-pass', 'err-pass', ''));
    if (validateEmail(data.email) == true && data.passWord !== '') {
        model.getSingin(data);
    }
};
controller.changepassword = async (data) => {
    checkPass(data.currentpassword) == false ? view.setErrorMessagge('input-currentpass', 'err-currentpass', 'Mật khẩu của bạn phải chứa ít nhất 8 ký tự và không chứa khoảng trống') : view.setOkMessage('input-currentpass', 'err-currentpass', '');
    data.currentpassword == "" ? view.setErrorMessagge('input-currentpass', 'err-currentpass', 'Mời bạn nhập mật khẩu') : view.setOkMessage('input-currentpass', 'err-currentpass', '');
    data.currentpassword != data.oldpassword ? view.setErrorMessagge('input-currentpass', 'err-currentpass', 'Mật khẩu của bạn không chính xác') : view.setOkMessage('input-currentpass', 'err-currentpass', '');

    checkPass(data.newpassword) == false ? view.setErrorMessagge('input-newpass', 'err-newpass', 'Mật khẩu của bạn phải chứa ít nhất 8 ký tự và không chứa khoảng trống') : view.setOkMessage('input-newpass', 'err-newpass', '');
    data.newpassword == "" ? view.setErrorMessagge('input-newpass', 'err-newpass', 'Mời bạn nhập mật khẩu') : view.setOkMessage('input-newpass', 'err-newpass', '');
    data.currentpassword == data.newpassword ? view.setErrorMessagge('input-newpass', 'err-newpass', 'Mật khẩu của bạn không được trùng với mật khẩu cũ') : view.setOkMessage('input-newpass', 'err-newpass', '');

    data.newpassword != data.confirmpassword ? view.setErrorMessagge('input-confirmpass', 'err-confirm-pass', 'Mật khẩu của bạn không khớp với mật khẩu mới') : view.setOkMessage('input-confirmpass', 'err-confirm-pass', '');
    data.currentpassword == "" ? view.setErrorMessagge('input-confirmpass', 'err-confirm-pass', 'Mời bạn nhập mật khẩu') : (data.newpassword != data.confirmpassword ? view.setErrorMessagge('input-confirmpass', 'err-confirm-pass', 'Mật khẩu của bạn không khớp với mật khẩu mới') : view.setOkMessage('input-confirmpass', 'err-confirm-pass', ''));

    if (data.currentpassword !== "" && data.newpassword !== "" && data.currentpassword !== "" && data.currentpassword == data.oldpassword
        && data.currentpassword !== data.newpassword && data.newpassword == data.confirmpassword && checkPass(data.currentpassword) == true && checkPass(data.newpassword) == true) {
        await model.updatepassWord(data.newpassword, data.oldpassword);
    }
    else {
        console.log('error');
        console.log(data);
    }
}
controller.expandAccount = () => {
    document.getElementById('expand-account').addEventListener('mouseover', () => {
        let preAccountExpand = document.getElementsByClassName('pre-account-expand')[0];
        preAccountExpand.style.opacity = 1;
        preAccountExpand.style.visibility = "visible";
        preAccountExpand.style.transform = 'translateY(0px)';
    })
}
controller.closeAccount = () => {
    document.getElementById('expand-account').addEventListener('mouseout', () => {
        let preAccountExpand = document.getElementsByClassName('pre-account-expand')[0];
        preAccountExpand.removeAttribute('style');
    })
}

controller.functionVisualSearch = () => {
    document.getElementById("inputSearch").addEventListener("input", () => {
        let visualSearch = document.getElementById('inputSearch').value;
        let clearBtn = document.getElementsByClassName('pre-clear-search')[0];
        if (visualSearch !== "" && clearBtn.className.indexOf('pre-clear-search-show') == -1) {
            clearBtn.className = clearBtn.className.replace(' pre-clear-search-hide', '')
            clearBtn.className += ' pre-clear-search-show';
        }
        if (visualSearch === "" && clearBtn.className.indexOf('pre-clear-search-hide') == -1) {
            clearBtn.className = clearBtn.className.replace(' pre-clear-search-show', '')
            clearBtn.className += ' pre-clear-search-hide';
        }
    });
}
controller.clearSearch = () => {
    document.getElementById("btnClear").addEventListener("click", () => {
        document.getElementById('shoesSearch').innerHTML = '';
        let newPreSearch = document.getElementsByClassName('new-pre-l-search')[0];
        if (newPreSearch.className.indexOf('hide-product-search') == -1) {
            newPreSearch.classList.toggle('hide-product-search');
            newPreSearch.classList.toggle('show-product-search');
        }
        document.getElementById('inputSearch').value = '';
        let visualSearch = document.getElementById('inputSearch').value;
        let clearBtn = document.getElementsByClassName('pre-clear-search')[0];
        if (visualSearch === "" && clearBtn.className.indexOf('pre-clear-search-hide') == -1) {
            clearBtn.className = clearBtn.className.replace(' pre-clear-search-show', '')
            clearBtn.className += ' pre-clear-search-hide';
        }
    });
}
let clickSearch = false;
let clickGlassSearch = false;
let cancelBtn = false;
let breakPoint1 = false, breakPoint2 = false, breakPoint3 = false, breakPoint4 = true;
const changeclickSearch = () => clickSearch = false;
const changeclickGlassSearch = () => clickGlassSearch = false;
const changecancelBtn = () => cancelBtn = false;
const changebreakPoint1 = () => breakPoint1 = false;
const changebreakPoint2 = () => breakPoint2 = false;
const changebreakPoint3 = () => breakPoint3 = false;
const changebreakPoint4 = () => breakPoint4 = false;
controller.catchClickEvent = () => {
    document.getElementsByClassName("input-search")[0].addEventListener('click', () => {
        if (clickGlassSearch == false && clickSearch == false) {
            document.getElementsByClassName('show-nvabar')[0].style.display = 'none';
            clickSearch = true;
            clickGlassSearch = false;
            document.getElementsByClassName('item2')[0].style.display = 'none';
            document.getElementsByClassName('item3')[0].style.display = 'none';
            document.getElementsByClassName('item4')[0].style.display = 'none';
            let item5 = document.getElementsByClassName('item5')[0];
            item5.classList.toggle('col-lg-4');
            item5.classList.toggle('col-lg-10');
            let item5All = document.getElementsByClassName('item5All')[0];
            item5All.classList.toggle('padding-right-48');
            let item51 = document.getElementsByClassName('item5-1')[0];
            item51.classList.toggle('col-lg-6');
            item51.classList.toggle('col-lg-12');
            document.getElementsByClassName('item5-3')[0].style.display = 'none';
            document.getElementsByClassName('item5-4')[0].style.display = 'none';
            document.getElementsByClassName('item5-5')[0].style.display = 'none';
            document.getElementsByClassName('item5-6')[0].style.display = 'none';
            let item6 = document.getElementsByClassName('item6')[0];
            item6.classList.toggle('hide-Cancel');
            item6.classList.toggle('show-Cancel');
            function myFunction(x1) {
                if (x1.matches && breakPoint4 == true && clickSearch == true && cancelBtn == false) {
                    document.getElementsByClassName('item1')[0].style.display = 'none';
                    let item5 = document.getElementsByClassName('item5')[0];
                    item5.classList.add('padding-left-48');
                    breakPoint4 = false;
                }
                if (x1.matches && breakPoint1 == false && clickSearch == true && cancelBtn == false) { // If media query matches
                    breakPoint1 = true;
                    let item5 = document.getElementsByClassName('item5')[0];
                    item5.classList.toggle('col-md-4');
                    item5.classList.toggle('col-md-10');
                    let item51 = document.getElementsByClassName('item5-1')[0];
                    if (item51.className.indexOf('box-input-search') != -1) {
                        item51.classList.toggle('box-input-search');
                    }
                    item51.classList.toggle('col-md-6');
                    item51.classList.toggle('col-md-12');
                    let item6 = document.getElementsByClassName('item6')[0];
                    item6.classList.toggle('col-md-1');
                    item6.classList.toggle('col-md-2');
                }
            }
            var x1 = window.matchMedia("(min-width: 768px) and (max-width: 991.98px)")
            myFunction(x1) // Call listener function at run time
            x1.addListener(myFunction) // Attach listener function on state changes

            function myFunction2(x2) {
                if (x2.matches && breakPoint2 == false && clickSearch == true && cancelBtn == false) { // If media query matches
                    breakPoint2 = true;
                    let item5 = document.getElementsByClassName('item5')[0];
                    item5.classList.toggle('col-sm-4');
                    item5.classList.toggle('col-sm-9');
                    let item51 = document.getElementsByClassName('item5-1')[0];
                    if (item51.className.indexOf('box-input-search') != -1) {
                        item51.classList.toggle('box-input-search');
                    }
                    item51.classList.toggle('col-sm-6');
                    item51.classList.toggle('col-sm-12');
                    let item6 = document.getElementsByClassName('item6')[0];
                    item6.classList.toggle('col-sm-1');
                    item6.classList.toggle('col-sm-3');
                }
            }
            var x2 = window.matchMedia("(min-width:576px) and (max-width: 767.98px)")
            myFunction2(x2) // Call listener function at run time
            x2.addListener(myFunction2) // Attach listener function on state changes

            function myFunction3(x3) {
                if (x3.matches && breakPoint3 == false && clickSearch == true && cancelBtn == false) { // If media query matches
                    breakPoint3 = true;
                    let item5 = document.getElementsByClassName('item5')[0];
                    item5.classList.toggle('col-4');
                    item5.classList.toggle('col-9');
                    let item51 = document.getElementsByClassName('item5-1')[0];
                    if (item51.className.indexOf('box-input-search') != -1) {
                        item51.classList.toggle('box-input-search');
                    }
                    item51.classList.toggle('col-6');
                    item51.classList.toggle('col-12');
                    let item6 = document.getElementsByClassName('item6')[0];
                    item6.classList.toggle('col-1');
                    item6.classList.toggle('col-3');
                }
            }
            var x3 = window.matchMedia("(max-width:576px)")
            myFunction3(x3) // Call listener function at run time
            x3.addListener(myFunction3) // Attach listener function on state changes

            function myFunction4(x4) {
                if (x4.matches && breakPoint1 == true && clickSearch == true && cancelBtn == false) { // If media query matches
                    breakPoint4 = true;
                    document.getElementsByClassName('item1')[0].removeAttribute('style');
                    let item5 = document.getElementsByClassName('item5')[0];
                    item5.classList.remove('padding-left-48');
                    let item51 = document.getElementsByClassName('item5-1')[0];
                }
            }
            var x4 = window.matchMedia("(min-width:992px)")
            myFunction4(x4) // Call listener function at run time
            x4.addListener(myFunction4) // Attach listener function on state changes


        }
    });

}
controller.clickGlass = () => {
    document.getElementById('btnSearch').addEventListener('click', () => {
        if (clickGlassSearch == false && clickSearch == false) {
            clickGlassSearch = true;
            clickSearch = false;
            function myFunctionBtn1(x7) {
                if (x7.matches && breakPoint4 == true && clickGlassSearch == true && cancelBtn == false) {
                    document.getElementsByClassName('item1')[0].style.display = 'none';
                    let item5 = document.getElementsByClassName('item5')[0];
                    item5.classList.add('padding-left-48');
                    breakPoint4 = false;
                }
                if (x7.matches && breakPoint1 == false && clickGlassSearch == true && cancelBtn == false) { // If media query matches
                    breakPoint1 = true;
                    document.getElementsByClassName('item2')[0].style.display = 'none';
                    let item5 = document.getElementsByClassName('item5')[0];
                    item5.classList.toggle('col-md-4');
                    item5.classList.toggle('col-md-10');
                    let item51 = document.getElementsByClassName('item5-1')[0];
                    if (item51.className.indexOf('box-input-search') != -1) {
                        item51.classList.toggle('box-input-search');
                    }
                    let item5All = document.getElementsByClassName('item5All')[0];
                    if (item5All.className.indexOf('padding-right-48') != -1) {
                        item5All.classList.toggle('padding-right-48');
                    }
                    item51.classList.toggle('col-md-6');
                    item51.classList.toggle('col-md-12');
                    let item6 = document.getElementsByClassName('item6')[0];
                    item6.classList.toggle('col-md-1');
                    item6.classList.toggle('col-md-2');
                    if (item6.className.indexOf('hide-Cancel') != -1) {
                        item6.classList.toggle('hide-Cancel');
                        item6.classList.toggle('show-Cancel');
                    }
                    document.getElementsByClassName('item5-3')[0].style.display = 'none';
                    document.getElementsByClassName('item5-5')[0].style.display = 'none';
                    document.getElementsByClassName('item5-6')[0].style.display = 'none';
                }

            }
            var x7 = window.matchMedia("(min-width: 768px) and (max-width: 991.98px)")
            myFunctionBtn1(x7) // Call listener function at run time
            x7.addListener(myFunctionBtn1) // Attach listener function on state changes

            function myFunctionBtn2(x8) {
                if (x8.matches && breakPoint2 == false && clickGlassSearch == true && cancelBtn == false) { // If media query matches
                    breakPoint2 = true;
                    document.getElementsByClassName('item1')[0].style.display = 'none';
                    document.getElementsByClassName('item2')[0].style.display = 'none';
                    let item5 = document.getElementsByClassName('item5')[0];
                    item5.classList.toggle('col-sm-4');
                    item5.classList.toggle('col-sm-9');
                    item5.classList.add('padding-left-48');
                    let item51 = document.getElementsByClassName('item5-1')[0];
                    if (item51.className.indexOf('box-input-search') != -1) {
                        item51.classList.toggle('box-input-search');
                    }
                    let item5All = document.getElementsByClassName('item5All')[0];
                    if (item5All.className.indexOf('padding-right-48') != -1) {
                        item5All.classList.toggle('padding-right-48');
                    }
                    item51.classList.toggle('col-sm-6');
                    item51.classList.toggle('col-sm-12');
                    let item6 = document.getElementsByClassName('item6')[0];
                    item6.classList.toggle('col-sm-1');
                    item6.classList.toggle('col-sm-3');
                    if (item6.className.indexOf('hide-Cancel') != -1) {
                        item6.classList.toggle('hide-Cancel');
                        item6.classList.toggle('show-Cancel');
                    }

                    document.getElementsByClassName('item5-3')[0].style.display = 'none';
                    document.getElementsByClassName('item5-5')[0].style.display = 'none';
                    document.getElementsByClassName('item5-6')[0].style.display = 'none';
                }
            }
            var x8 = window.matchMedia("(min-width:576px) and (max-width: 767.98px)")
            myFunctionBtn2(x8) // Call listener function at run time
            x8.addListener(myFunctionBtn2) // Attach listener function on state changes

            function myFunctionBtn3(x9) {
                if (x9.matches && breakPoint3 == false && clickGlassSearch == true && cancelBtn == false) { // If media query matches
                    breakPoint3 = true;
                    document.getElementsByClassName('item1')[0].style.display = 'none';
                    document.getElementsByClassName('item2')[0].style.display = 'none';
                    let item5 = document.getElementsByClassName('item5')[0];
                    item5.classList.toggle('col-4');
                    item5.classList.toggle('col-9');
                    item5.classList.add('padding-left-48');
                    let item51 = document.getElementsByClassName('item5-1')[0];
                    if (item51.className.indexOf('box-input-search') != -1) {
                        item51.classList.toggle('box-input-search');
                    }
                    let item5All = document.getElementsByClassName('item5All')[0];
                    if (item5All.className.indexOf('padding-right-48') != -1) {
                        item5All.classList.toggle('padding-right-48');
                    }
                    item51.classList.toggle('col-6');
                    item51.classList.toggle('col-12');
                    let item6 = document.getElementsByClassName('item6')[0];
                    item6.classList.toggle('col-1');
                    item6.classList.toggle('col-3');
                    if (item6.className.indexOf('hide-Cancel') != -1) {
                        item6.classList.toggle('hide-Cancel');
                        item6.classList.toggle('show-Cancel');
                    }
                    document.getElementsByClassName('item5-3')[0].style.display = 'none';
                    document.getElementsByClassName('item5-5')[0].style.display = 'none';
                    document.getElementsByClassName('item5-6')[0].style.display = 'none';
                }
            }
            var x9 = window.matchMedia("(max-width:576px)")
            myFunctionBtn3(x9) // Call listener function at run time
            x9.addListener(myFunctionBtn3) // Attach listener function on state changes

            function myFunctionBtn4(x10) {
                if (x10.matches && breakPoint1 == true && clickGlassSearch == true && cancelBtn == false) { // If media query matches
                    breakPoint4 = true;
                    document.getElementsByClassName('item2')[0].style.display = 'none';
                    document.getElementsByClassName('item3')[0].style.display = 'none';
                    document.getElementsByClassName('item4')[0].style.display = 'none';
                    document.getElementsByClassName('item1')[0].removeAttribute('style');
                    document.getElementsByClassName('item2')[0].style.display = 'none';
                    let item5 = document.getElementsByClassName('item5')[0];
                    item5.classList.remove('padding-left-48');
                    if (item5.className.indexOf('col-lg-10') == -1) {
                        item5.classList.toggle('col-lg-4');
                        item5.classList.toggle('col-lg-10');
                    }
                    let item5All = document.getElementsByClassName('item5All')[0];
                    if (item5All.className.indexOf('padding-right-48') != -1) {
                        item5All.classList.toggle('padding-right-48');
                    }

                    let item51 = document.getElementsByClassName('item5-1')[0];
                    if (item51.className.indexOf('col-lg-12') == -1) {
                        item51.classList.toggle('col-lg-6');
                        item51.classList.toggle('col-lg-12');
                    }
                    let item6 = document.getElementsByClassName('item6')[0];
                    if (item6.className.indexOf('hide-Cancel') != -1) {
                        item6.classList.toggle('hide-Cancel');
                        item6.classList.toggle('show-Cancel');
                    }
                    document.getElementsByClassName('item5-3')[0].style.display = 'none';
                    document.getElementsByClassName('item5-4')[0].style.display = 'none';
                    document.getElementsByClassName('item5-5')[0].style.display = 'none';
                }
            }
            var x10 = window.matchMedia("(min-width:992px)")
            myFunctionBtn4(x10) // Call listener function at run time
            x10.addListener(myFunctionBtn4) // Attach listener function on state changes
        }
    })
}
controller.cancelSearch = () => {
    document.getElementById("cancelBtn").addEventListener('click', () => {
        let newPreSearch = document.getElementsByClassName('new-pre-l-search')[0];
        if (newPreSearch.className.indexOf('hide-product-search') == -1) {
            newPreSearch.classList.toggle('hide-product-search');
            newPreSearch.classList.toggle('show-product-search');
        }
        document.getElementsByClassName('show-nvabar')[0].removeAttribute('style');
        clickSearch = false;
        clickGlassSearch = false;
        cancelBtn = true;
        function myFunctionCancel4(x5) {
            if (x5.matches && clickSearch == false && cancelBtn == true) { // If media query matches
                console.log(1);
                document.getElementsByClassName('item2')[0].removeAttribute('style');
                document.getElementsByClassName('item3')[0].removeAttribute('style');
                document.getElementsByClassName('item4')[0].removeAttribute('style');
                let item5 = document.getElementsByClassName('item5')[0];
                if (item5.className.indexOf('padding-left-48') != -1) {
                    item5.classList.toggle('padding-left-48');
                }
                if (item5.className.indexOf('col-lg-10') != -1) {
                    item5.classList.toggle('col-lg-4');
                    item5.classList.toggle('col-lg-10');
                }
                if (item5.className.indexOf('col-md-10') != -1) {
                    breakPoint1 = false;
                    item5.classList.toggle('col-md-4');
                    item5.classList.toggle('col-md-10');
                }
                if (item5.className.indexOf('col-sm-9') != -1) {
                    breakPoint2 = false;
                    item5.classList.toggle('col-sm-4');
                    item5.classList.toggle('col-sm-9');
                }
                if (item5.className.indexOf('col-9') != -1) {
                    breakPoint3 = false;
                    item5.classList.toggle('col-4');
                    item5.classList.toggle('col-9');
                }
                let item5All = document.getElementsByClassName('item5All')[0];
                if (item5All.className.indexOf('padding-right-48') == -1) {
                    item5All.classList.toggle('padding-right-48');
                }
                let item51 = document.getElementsByClassName('item5-1')[0];
                if (item51.className.indexOf('col-lg-12') != -1) {
                    item51.classList.toggle('col-lg-6');
                    item51.classList.toggle('col-lg-12');
                }
                if (item51.className.indexOf('box-input-search') == -1) {
                    item51.classList.toggle('box-input-search');
                }
                if (item51.className.indexOf('col-md-12') != -1) {
                    item51.classList.toggle('col-md-6');
                    item51.classList.toggle('col-md-12');
                }
                if (item51.className.indexOf('col-sm-12') != -1) {
                    item51.classList.toggle('col-sm-6');
                    item51.classList.toggle('col-sm-12');
                }
                if (item51.className.indexOf('col-12') != -1) {
                    item51.classList.toggle('col-6');
                    item51.classList.toggle('col-12');
                }
                document.getElementsByClassName('item5-3')[0].removeAttribute('style');
                document.getElementsByClassName('item5-4')[0].removeAttribute('style');
                document.getElementsByClassName('item5-5')[0].removeAttribute('style');
                document.getElementsByClassName('item5-6')[0].removeAttribute('style');
                let item6 = document.getElementsByClassName('item6')[0];
                if (item6.className.indexOf('hide-Cancel') == -1) {
                    item6.classList.toggle('hide-Cancel');
                    item6.classList.toggle('show-Cancel');
                }

                if (item6.className.indexOf('col-md-2') != -1) {
                    item6.classList.toggle('col-md-1');
                    item6.classList.toggle('col-md-2');
                }
                if (item6.className.indexOf('col-sm-3') != -1) {
                    item6.classList.toggle('col-sm-3');
                    item6.classList.toggle('col-sm-1');
                }
                if (item6.className.indexOf('col-3') != -1) {
                    item6.classList.toggle('col-1');
                    item6.classList.toggle('col-3');
                }
                breakPoint4 = true;
                cancelBtn = false;
                clickGlassSearch = false;
                clickSearch = false;
                console.log('break1 ', breakPoint1);
                console.log('break4 ', breakPoint4);
                console.log('click ', clickSearch);
            }
            else if (!x5.matches && clickSearch == false && cancelBtn == true) {
                console.log(2);
                document.getElementsByClassName('item1')[0].removeAttribute('style');
                document.getElementsByClassName('item2')[0].removeAttribute('style');
                document.getElementsByClassName('item3')[0].removeAttribute('style');
                document.getElementsByClassName('item4')[0].removeAttribute('style');
                let item5 = document.getElementsByClassName('item5')[0];
                if (item5.className.indexOf('padding-left-48') != -1) {
                    item5.classList.toggle('padding-left-48');
                }
                if (item5.className.indexOf('col-lg-10') != -1) {
                    item5.classList.toggle('col-lg-4');
                    item5.classList.toggle('col-lg-10');
                }
                if (item5.className.indexOf('col-md-10') != -1) {
                    breakPoint1 = false;
                    item5.classList.toggle('col-md-4');
                    item5.classList.toggle('col-md-10');
                }
                if (item5.className.indexOf('col-sm-9') != -1) {
                    breakPoint2 = false;
                    item5.classList.toggle('col-sm-4');
                    item5.classList.toggle('col-sm-9');
                }
                if (item5.className.indexOf('col-9') != -1) {
                    breakPoint3 = false;
                    item5.classList.toggle('col-4');
                    item5.classList.toggle('col-9');
                }
                let item5All = document.getElementsByClassName('item5All')[0];
                if (item5All.className.indexOf('padding-right-48') == -1) {
                    item5All.classList.toggle('padding-right-48');
                }
                let item51 = document.getElementsByClassName('item5-1')[0];
                if (item51.className.indexOf('col-lg-12') != -1) {
                    item51.classList.toggle('col-lg-6');
                    item51.classList.toggle('col-lg-12');
                }
                if (item51.className.indexOf('box-input-search') == -1) {
                    item51.classList.toggle('box-input-search');
                }
                if (item51.className.indexOf('col-md-12') != -1) {
                    item51.classList.toggle('col-md-6');
                    item51.classList.toggle('col-md-12');
                }
                if (item51.className.indexOf('col-sm-12') != -1) {
                    item51.classList.toggle('col-sm-6');
                    item51.classList.toggle('col-sm-12');
                }
                if (item51.className.indexOf('col-12') != -1) {
                    item51.classList.toggle('col-6');
                    item51.classList.toggle('col-12');
                }
                document.getElementsByClassName('item5-3')[0].removeAttribute('style');
                document.getElementsByClassName('item5-4')[0].removeAttribute('style');
                document.getElementsByClassName('item5-5')[0].removeAttribute('style');
                document.getElementsByClassName('item5-6')[0].removeAttribute('style');
                let item6 = document.getElementsByClassName('item6')[0];
                if (item6.className.indexOf('hide-Cancel') == -1) {
                    item6.classList.toggle('hide-Cancel');
                    item6.classList.toggle('show-Cancel');
                }
                if (item6.className.indexOf('col-md-2') != -1) {
                    item6.classList.toggle('col-md-1');
                    item6.classList.toggle('col-md-2');
                }
                if (item6.className.indexOf('col-sm-3') != -1) {
                    item6.classList.toggle('col-sm-3');
                    item6.classList.toggle('col-sm-1');
                }
                if (item6.className.indexOf('col-3') != -1) {
                    item6.classList.toggle('col-1');
                    item6.classList.toggle('col-3');
                }
                cancelBtn = false;
                clickGlassSearch = false;
                clickSearch = false;
                breakPoint1 = false;
                breakPoint2 = false;
                breakPoint3 = false;
                breakPoint4 = true;
            }
        }
        var x5 = window.matchMedia("(min-width:992px)")
        myFunctionCancel4(x5) // Call listener function at run time
        x5.addListener(myFunctionCancel4) // Attach listener function on state changes
    });

}

controller.functionExpandOption = () => {
    document.getElementById('expandOption').addEventListener('click', () => {
        let classMobileShow = document.getElementsByClassName('pre-mobile-menu')[0];
        if (classMobileShow.className.indexOf('pre-mobile-show') == -1) {
            classMobileShow.classList.toggle('pre-mobile-hide');
            classMobileShow.classList.toggle('pre-mobile-show');
        }
    });

}

controller.functionCloseExpand = () => {
    document.getElementById('close-expand-mobile').addEventListener('click', () => {
        let classMobileShow = document.getElementsByClassName('pre-mobile-menu')[0];
        if (classMobileShow.className.indexOf('pre-mobile-show') !== -1) {
            classMobileShow.className = classMobileShow.className.replace(' pre-mobile-show', '')
            classMobileShow.className += ' pre-mobile-hide';
        }
    })
}
controller.logout = (idLogout) => {
    document.getElementById(idLogout).addEventListener("click", () => {
        let value = document.getElementById('body');
        if(value.className.indexOf('hide-padding') == -1){
            value.classList.toggle('hide-padding');
        }
    });
    document.getElementById('quitePage').addEventListener('click', () => {
        model.getLogout();
        let value = document.getElementById('body');
        if(value.className.indexOf('hide-padding') != -1){
            value.classList.toggle('hide-padding');
        }
    })
};

controller.scrollBtn = () => {
    var left = document.querySelector('.slider');
    var right = document.querySelector('.slider');

    left.addEventListener('scroll', () => {
        if (left.scrollLeft !== 0 && left.scrollLeft !== 2968) {
            document.getElementById("prev-btn").disabled = false;
            document.getElementById("next-btn").disabled = false;
        }
        else if (left.scrollLeft === 2968) {
            document.getElementById("next-btn").disabled = true;
        }
        else if (left.scrollLeft === 0) {
            document.getElementById("prev-btn").disabled = true;
        }

    })

    if (left.scrollLeft === 0 && right.scrollLeft === 0) {
        document.getElementById("prev-btn").disabled = true;
        document.getElementById("next-btn").disabled = false;
    }
    else {
        document.getElementById("prev-btn").disabled = false;
        document.getElementById("next-btn").disabled = true;
    }
    document.getElementById('prev-btn').addEventListener('click', () => {
        if (left.scrollLeft === 430) {
            left.scrollBy(-430, 0);
        }
        else {
            left.scrollBy(-423, 0);
        }
    })
    document.getElementById('next-btn').addEventListener('click', () => {
        if (left.scrollLeft === 0) {
            right.scrollBy(430, 0);
        }
        else {
            right.scrollBy(423, 0);
        }
    })
}
controller.stickyHeadMenShoes = () => {
    let fixedNavbar = document.getElementsByClassName('men-shoes-slidebar')[0];

    let positionNvabar1 = document.querySelector('.logo-nvabar');
    let positionNvabar2 = document.querySelector('.pre-header2');
    let positionNvabar3 = document.querySelector('.format-text-title');
    let positionNvabar4 = document.querySelector('.out-box-footer');

    const moveNavbar1 = (e) => {

        if (!e[0].isIntersecting) {

            fixedNavbar.style.marginTop = '-100px';
            fixedNavbar.style.position = 'fixed';
        }
        else {
            fixedNavbar.removeAttribute('style');
        }
    }
    const moveNavbar2 = (e) => {

        if (!e[0].isIntersecting) {

            fixedNavbar.style.marginTop = '-200px';
            fixedNavbar.style.position = 'fixed';
        }
        else {
            fixedNavbar.removeAttribute('style');
        }
    }
    const moveNavbar3 = (e) => {
        if (!e[0].isIntersecting) {
            fixedNavbar.style.marginTop = '-300px';
            fixedNavbar.style.position = 'fixed';
        }
        else {
            fixedNavbar.removeAttribute('style');
        }
    }
    const moveNavbar4 = (e) => {
        if (e[0].isIntersecting) {
            fixedNavbar.removeAttribute('style');
        }
        else {
            // fixedNavbar.style.marginTop = '-250px';
            //fixedNavbar.style.position = 'fixed';
        }

    }
    let moveNavbarIntersectionObs1 = new IntersectionObserver(moveNavbar1);
    moveNavbarIntersectionObs1.observe(positionNvabar1);
    let moveNavbarIntersectionObs2 = new IntersectionObserver(moveNavbar2);
    moveNavbarIntersectionObs2.observe(positionNvabar2);
    let moveNavbarIntersectionObs3 = new IntersectionObserver(moveNavbar3);
    moveNavbarIntersectionObs3.observe(positionNvabar3);
    let moveNavbarIntersectionObs4 = new IntersectionObserver(moveNavbar4);
    moveNavbarIntersectionObs4.observe(positionNvabar4);
}

// -----------------------Start Sort By ---------------------------------//
let checkSortByOpen = false;
controller.displaySortBy = () => {
    let idSortBy = document.getElementById('sortBy');
    idSortBy.addEventListener('click', () => {
        if (checkSortByOpen === false) {
            let classDropdownOptions = document.getElementsByClassName('dropdown__options-list')[0];
            classDropdownOptions.style.transform = 'translateY(0%)';
            classDropdownOptions.style.visibility = 'visible';
            checkSortByOpen = true;
        }
        else {
            let classDropdownOptions = document.getElementsByClassName('dropdown__options-list')[0];
            classDropdownOptions.removeAttribute('style');
            checkSortByOpen = false;
        }
    });
}
controller.sortLowToHight = async (collect,doc,arr) => {
    let arrFvorite = [];
    let arrBag = [];
    if (firebase.auth().currentUser !== null) {
        let keyDoc = firebase.auth().currentUser.uid;
        const accessFavorite = firebase.firestore().collection('Favorite').doc(keyDoc);
        await accessFavorite.get().then((doc) => {
            if (doc.exists) {
                arrFvorite = doc.data().favorite;

            } else {

            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
        const accessBag = firebase.firestore().collection('Bag').doc(keyDoc);
        await accessBag.get().then((doc) => {
            if (doc.exists) {
                arrBag = doc.data().bag;

            } else {
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    }
    //console.log(arrFvorite);
    let idPriceLowHigh = document.getElementById('priceLowHigh');
    idPriceLowHigh.addEventListener('click', () => {

        let lowHighPriceProducts = quickSortIncrease(arr);
        view.setMenShoesImg(collect,doc,lowHighPriceProducts, arrFvorite, arrBag)
    });
}
controller.sortHightLow = async (collect,doc,arr) => {
    let arrFvorite = [];
    let arrBag = [];
    if (firebase.auth().currentUser !== null) {
        let keyDoc = firebase.auth().currentUser.uid;
        const accessFavorite = firebase.firestore().collection('Favorite').doc(keyDoc);
        await accessFavorite.get().then((doc) => {
            if (doc.exists) {
                arrFvorite = doc.data().favorite;

            } else {
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
        const accessBag = firebase.firestore().collection('Bag').doc(keyDoc);
        await accessBag.get().then((doc) => {
            if (doc.exists) {
                arrBag = doc.data().bag;

            } else {
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    }
    //console.log(arrFvorite);
    let idPriceHighLow = document.getElementById('priceHighLow');
    idPriceHighLow.addEventListener('click', () => {
        let highLowPriceProducts = quickSortDecrease(arr);
        view.setMenShoesImg(collect,doc,highLowPriceProducts, arrFvorite, arrBag);
    });
}
// -----------------------End Sort By ---------------------------------//
let quickSortIncrease = (arr) => {

    if (arr.length < 2) return arr;

    // *** lấy phần tử cuối của 'arr' làm 'pivot'
    const pivotIndex = arr.length - 1;
    const pivot = arr[pivotIndex].numprice;
    const valuePivot = arr[pivotIndex];
    const left = [];
    const right = [];

    let currentItem;
    let allCurrentItem;
    // *** 'i < pivotIndex' => chúng ta sẽ không loop qua 'pivot' nữa
    for (let i = 0; i < pivotIndex; i++) {
        currentItem = arr[i].numprice;
        allCurrentItem = arr[i];
        // console.log(i, allCurrentItem);
        if (currentItem <= pivot) {
            left.push(allCurrentItem);
        } else {
            right.push(allCurrentItem);
        }
    }

    return [...quickSortIncrease(left), valuePivot, ...quickSortIncrease(right)];
}

let quickSortDecrease = (arr) => {

    if (arr.length < 2) return arr;

    // *** lấy phần tử cuối của 'arr' làm 'pivot'
    const pivotIndex = arr.length - 1;
    const pivot = arr[pivotIndex].numprice;
    const valuePivot = arr[pivotIndex];
    const left = [];
    const right = [];

    let currentItem;
    let allCurrentItem;
    // *** 'i < pivotIndex' => chúng ta sẽ không loop qua 'pivot' nữa
    for (let i = 0; i < pivotIndex; i++) {
        currentItem = arr[i].numprice;
        allCurrentItem = arr[i];

        if (currentItem <= pivot) {
            left.push(allCurrentItem);
        } else {
            right.push(allCurrentItem);
        }
    }

    return [...quickSortDecrease(right), valuePivot, ...quickSortDecrease(left)];
}

//----------------------------Start Favorite------------------------------//

controller.clickFavorite = (collect,doc) => {
    let idFavorite;
    let indexcolour;
    let boolF;
    var classMainImg = document.getElementsByClassName('main-img');
    let targetId = document.querySelectorAll('.favorite-btn');
    for (let i = 0; i < targetId.length; i++) {
        targetId[i].addEventListener('click', async () => {
            if (firebase.auth().currentUser !== null) {
                let newArr = await model.readInforFavoriteAndMenShoes(collect, doc, 'Favorite');
                if (newArr[i].hasOwnProperty('status')) {
                    if (newArr[i].hasOwnProperty('thumburl')) {
                        if (classMainImg[i].src == newArr[i].url) {
                            let obj = {
                                ...newArr[i],
                                indexV: 0
                            }
                            model.deleteItemsInValueFavoriteFromFirebase(obj);
                            view.clickFavorite(targetId[i]);
                            let value1 = document.getElementsByClassName('content-information1')[i];
                            value1.innerText = "Remove From Favourite";
                            value1.style.color = "white";
                            let value = document.getElementsByClassName('box-notificaton1')[i];
                            value.style.transform = 'scale(1)';
                            value.style.backgroundColor = "black";
                            setTimeout(() => {
                                value.removeAttribute('style');
                                value1.removeAttribute('style');
                            }, 3000);
                        }
                        else {
                            let index;
                            let check = false;
                            for (let j = 0; j < newArr[i].thumburl.length; j++) {
                                if (classMainImg[i].src == newArr[i].thumburl[j]) {
                                    if (newArr[i].arrindex.indexOf(j + 1) !== -1) {
                                        index = j + 1;
                                        check = true;
                                        break;
                                    }
                                }
                            }
                            if (check == true) {
                                let obj = {
                                    ...newArr[i],
                                    indexV: index
                                }
                                model.deleteItemsInValueFavoriteFromFirebase(obj);
                                view.clickFavorite(targetId[i]);
                                let value1 = document.getElementsByClassName('content-information1')[i];
                                value1.innerText = "Remove From Favourite";
                                value1.style.color = "white";
                                let value = document.getElementsByClassName('box-notificaton1')[i];
                                value.style.transform = 'scale(1)';
                                value.style.backgroundColor = "black";
                                setTimeout(() => {
                                    value.removeAttribute('style');
                                    value1.removeAttribute('style');
                                }, 3000);
                            }
                            else {
                                indexcolour = newArr[i].thumburl.indexOf(classMainImg[i].src) + 1;
                                idFavorite = newArr[i].id;
                                boolF = true;
                                model.setValueFavoriteToFirebase(idFavorite, boolF, indexcolour);
                                view.clickFavorite(targetId[i]);
                                document.getElementsByClassName('content-information1')[i].innerText = "Add To Favourite";
                                let value = document.getElementsByClassName('box-notificaton1')[i];
                                value.style.transform = 'scale(1)';
                                setTimeout(() => {
                                    value.removeAttribute('style')
                                }, 3000);
                            }
                        }
                    }
                    else {
                        model.deleteValueFavoriteFromFirebase(newArr[i].id);
                        view.clickFavorite(targetId[i]);
                        let value1 = document.getElementsByClassName('content-information1')[i];
                        value1.innerText = "Remove From Favourite";
                        value1.style.color = "white";
                        let value = document.getElementsByClassName('box-notificaton1')[i];
                        value.style.transform = 'scale(1)';
                        value.style.backgroundColor = "black";
                        setTimeout(() => {
                            value.removeAttribute('style');
                            value1.removeAttribute('style');
                        }, 3000);
                    }
                }
                else {
                    if (classMainImg[i].src == newArr[i].url) {
                        indexcolour = 0;
                    }
                    else {
                        indexcolour = newArr[i].thumburl.indexOf(classMainImg[i].src) + 1;
                    }
                    idFavorite = newArr[i].id;
                    boolF = true;
                    if (idFavorite != 0) {
                        model.setValueFavoriteToFirebase(idFavorite, boolF, indexcolour);
                        view.clickFavorite(targetId[i]);
                        document.getElementsByClassName('content-information1')[i].innerText = "Add To Favourite";
                        let value = document.getElementsByClassName('box-notificaton1')[i];
                        value.style.transform = 'scale(1)';
                        setTimeout(() => {
                            value.removeAttribute('style')
                        }, 3000);
                    }
                }
            }
            else {
                view.selectWebPage('singinPage');
            }
        })
    }
}

controller.deleteFavorite = async () => {
    let data = await model.getInforFavorite('Image', 'menShoes', 'Favorite');
    view.setInforFavorite(data);
    let targetId = document.getElementsByClassName('favorite-btn');
    for (let i = 0; i < targetId.length; i++) {
        targetId[i].addEventListener('click', async () => {
            if (firebase.auth().currentUser !== null) {
                await model.deleteItemsFavorite(data[i])
                view.clickFavorite(targetId[i]);
                controller.deleteFavorite();
            }
            else {
                view.selectWebPage('singinPage');
            }
        })
    }
}

controller.clickBag = async (collect,doc) => {
    let idBag = 0;
    let indexcolour;
    let boolB;
    var classMainImg = document.getElementsByClassName('main-img');
    let targetId = document.querySelectorAll('.bag-btn');

    for (let i = 0; i < targetId.length; i++) {
        targetId[i].addEventListener('click', async () => {
            if (firebase.auth().currentUser !== null) {
                let newArr = await model.readInforBagAndMenShoes(collect,doc, 'Bag');
                if (newArr[i].hasOwnProperty('status')) {
                    if (newArr[i].hasOwnProperty('thumburl')) {
                        if (classMainImg[i].src == newArr[i].url) {
                            let obj = {
                                ...newArr[i],
                                indexV: 0
                            }
                            model.deleteItemsInValueBagFromFirebase(obj);
                            view.clickBag(targetId[i]);
                            let value1 = document.getElementsByClassName('content-information1')[i];
                            value1.innerText = "Remove From Bag";
                            value1.style.color = "white";
                            let value = document.getElementsByClassName('box-notificaton1')[i];
                            value.style.transform = 'scale(1)';
                            value.style.backgroundColor = "black";
                            setTimeout(() => {
                                value.removeAttribute('style');
                                value1.removeAttribute('style');
                            }, 3000);
                        }
                        else {
                            let index;
                            let check = false;
                            for (let j = 0; j < newArr[i].thumburl.length; j++) {
                                if (classMainImg[i].src == newArr[i].thumburl[j]) {
                                    if (newArr[i].arrindex.indexOf(j + 1) !== -1) {
                                        index = j + 1;
                                        check = true;
                                        break;
                                    }
                                }
                            }
                            if (check == true) {
                                let obj = {
                                    ...newArr[i],
                                    indexV: index
                                }
                                model.deleteItemsInValueBagFromFirebase(obj);
                                view.clickBag(targetId[i]);
                                let value1 = document.getElementsByClassName('content-information1')[i];
                                value1.innerText = "Remove From Bag";
                                value1.style.color = "white";
                                let value = document.getElementsByClassName('box-notificaton1')[i];
                                value.style.transform = 'scale(1)';
                                value.style.backgroundColor = "black";
                                setTimeout(() => {
                                    value.removeAttribute('style');
                                    value1.removeAttribute('style');
                                }, 3000);
                            }
                            else {
                                console.log(3);
                                indexcolour = newArr[i].thumburl.indexOf(classMainImg[i].src) + 1;
                                idBag = newArr[i].id;
                                boolB = true;
                                model.setValueBagToFirebase(idBag, boolB, indexcolour);
                                view.clickBag(targetId[i]);
                                document.getElementsByClassName('content-information1')[i].innerText = "Add To Bag";
                                let value = document.getElementsByClassName('box-notificaton1')[i];
                                value.style.transform = 'scale(1)';
                                setTimeout(() => {
                                    value.removeAttribute('style')
                                }, 3000);
                            }
                        }
                    }
                    else {
                        model.deleteValueBagFromFirebase(newArr[i].id, 'Image', 'manShoes');
                        view.clickBag(targetId[i]);
                        let value1 = document.getElementsByClassName('content-information1')[i];
                        value1.innerText = "Remove From Bag";
                        value1.style.color = "white";
                        let value = document.getElementsByClassName('box-notificaton1')[i];
                        value.style.transform = 'scale(1)';
                        value.style.backgroundColor = "black";
                        setTimeout(() => {
                            value.removeAttribute('style');
                            value1.removeAttribute('style');
                        }, 3000);
                    }
                }
                else {
                    if (classMainImg[i].src == newArr[i].url) {
                        indexcolour = 0;
                    }
                    else {
                        indexcolour = newArr[i].thumburl.indexOf(classMainImg[i].src) + 1;
                    }
                    idBag = newArr[i].id;
                    boolB = true;
                    if (idBag != 0) {
                        model.setValueBagToFirebase(idBag, boolB, indexcolour);
                        view.clickBag(targetId[i]);
                        document.getElementsByClassName('content-information1')[i].innerText = "Add To Bag";
                        let value = document.getElementsByClassName('box-notificaton1')[i];
                        value.style.transform = 'scale(1)';
                        setTimeout(() => {
                            value.removeAttribute('style')
                        }, 3000);
                    }
                }
            }
            else {
                view.selectWebPage('singinPage');
            }
        })
    }
}

//----------------------------End Favorite------------------------------//
controller.increaseBtn = async () => {
    let data = await model.readInforBag('Image', 'menShoes', 'Bag');
    view.setInforBag(data);
    let classIncrease = document.getElementsByClassName('increase-quantity');
    let classAmount = document.getElementsByClassName('amount');
    let classPrice = document.getElementsByClassName('price');
    for (let i = 0; i < classIncrease.length; i++) {
        classIncrease[i].addEventListener('click', async () => {
            let data = await model.readInforBag('Image', 'menShoes', 'Bag');
            let cloneArr = JSON.parse(JSON.stringify(data));
            cloneArr[i].count = cloneArr[i].count + 1;
            classAmount[i].innerText = `${cloneArr[i].count}`;
            let itemPrice = cloneArr[i].count * cloneArr[i].numprice;
            let strItemPrice = formatCash(itemPrice.toString());
            classPrice[i].innerText = strItemPrice;
            let totalBag = 0;
            let totalPrice = 0;
            for (let i in cloneArr) {
                totalBag += cloneArr[i].count;
                totalPrice += (cloneArr[i].count * cloneArr[i].numprice);
            }
            let strTotalPrice = formatCash(totalPrice.toString());
            let obj = cloneArr[i];
            view.setSumCountOfBag(totalBag);
            view.setTotalPrice(strTotalPrice);
            model.setCountProductToBag(obj);
            model.setNewTotalPrice(totalPrice);
        })
    }

    let classDecrease = document.getElementsByClassName('decrease-quantity');
    for (let i = 0; i < classDecrease.length; i++) {
        classDecrease[i].addEventListener('click', async () => {
            let data = await model.readInforBag('Image', 'menShoes', 'Bag');
            let cloneArr = JSON.parse(JSON.stringify(data));
            if (cloneArr[i].count >= 1) {
                cloneArr[i].count = cloneArr[i].count - 1;
            }
            else {
                cloneArr[i].count = 0;
            }
            classAmount[i].innerText = `${cloneArr[i].count}`;
            let itemPrice = cloneArr[i].count * cloneArr[i].numprice;
            let strItemPrice = formatCash(itemPrice.toString());
            classPrice[i].innerText = strItemPrice;
            let totalBag = 0;
            let totalPrice = 0;
            for (let i in cloneArr) {
                totalBag += cloneArr[i].count;
                totalPrice += (cloneArr[i].count * cloneArr[i].numprice);
            }
            let strTotalPrice = formatCash(totalPrice.toString());
            let obj = cloneArr[i];
            view.setSumCountOfBag(totalBag);
            view.setTotalPrice(strTotalPrice);
            model.setCountProductToBag(obj);
            model.setNewTotalPrice(totalPrice);
        })
    }
    // -----------------------Select Size-------------------------------//
    let classSize = document.getElementsByClassName('size-bag');
    for (let i = 0; i < classSize.length; i++) {
        classSize[i].addEventListener('click', async () => {
            let data = await model.readInforBag('Image', 'menShoes', 'Bag');
            let cloneArr = JSON.parse(JSON.stringify(data));
            let sizeValue = classSize[i].value;
            let obj = cloneArr[i];
            obj.size = Number(sizeValue);
            console.log(obj);
            await model.writeSizeToBag(obj);
        })
    }
    // -----------------------Delete Btn-------------------------------//
    let deleteBtn = document.querySelectorAll('.delete-btn');
    for (let i = 0; i < deleteBtn.length; i++) {
        deleteBtn[i].addEventListener('click', async () => {
            let data = await model.readInforBag('Image', 'menShoes', 'Bag');
            let cloneArr = JSON.parse(JSON.stringify(data));
            let obj = cloneArr[i];
            cloneArr.splice(i, 1);
            let totalBag = 0;
            let totalPrice = 0;
            for (let i in cloneArr) {
                totalBag += cloneArr[i].count;
                totalPrice += (cloneArr[i].count * cloneArr[i].numprice);
            }
            let strTotalPrice = formatCash(totalPrice.toString());
            view.setSumCountOfBag(totalBag);
            view.setTotalPrice(strTotalPrice);
            await model.deleteItems(obj);
            await controller.increaseBtn();
        })
    }
}

controller.clickRemoveFromBag = async () => {
    let data = await model.readInforBagAndSize('Image', 'menShoes', 'Bag');
    view.setInforBagToCheckout(data);
    let cloneArr = JSON.parse(JSON.stringify(data));
    let classremove = document.getElementsByClassName('delete-btn');
    for (let i = 0; i < classremove.length; i++) {
        classremove[i].addEventListener('click', async () => {
            let obj = cloneArr[i];
            cloneArr.splice(i, 1);
            let totalBag = 0;
            let totalPrice = 0;
            for (let i in cloneArr) {
                totalBag += cloneArr[i].count;
                totalPrice += (cloneArr[i].count * cloneArr[i].numprice);
            }
            console.log(totalBag);
            let strTotalPrice = formatCash(totalPrice.toString());
            view.setTotalPrice(strTotalPrice);
            await model.newDeleteItems(obj);
            await controller.clickRemoveFromBag();
        })
    }
}

controller.getAddress = async () => {
    let apiURL = `https://provinces.open-api.vn/api/?depth=3`;
    var data = await fetch(apiURL).then(res => res.json());
    var dataCity = [];
    var arrayNameDistricts = [];
    var dataDistricts = [];
    var divData = '';
    for (let i = 0; i < data.length; i++) {
        dataCity.push(data[i].name);
        divData +=
            `<option value="${data[i].name}">${data[i].name}</option>`
    }
    document.getElementById('selectCity').innerHTML = divData;
    var nameCity = '';
    var nameDistrict = '';
    var nameWard = '';
    let index1;
    let index2;
    document.getElementById('selectCity').addEventListener('click', () => {
        nameCity = document.getElementById('selectCity').value;
        index1 = dataCity.indexOf(nameCity);
        var divData2 = '';
        for (let i = 0; i < (data[index1].districts).length; i++) {
            arrayNameDistricts.push((data[index1].districts)[i].name);
            dataDistricts.push((data[index1].districts)[i]);
            divData2 +=
                `<option value="${(data[index1].districts)[i].name}">${(data[index1].districts)[i].name}</option>`
        }
        document.getElementById('selectDistrict').innerHTML = divData2;
        document.getElementById('selectDistrict').addEventListener('click', () => {
            nameDistrict = document.getElementById('selectDistrict').value;
            index2 = arrayNameDistricts.indexOf(nameDistrict);
            var divData3 = '';
            for (let i = 0; i < (dataDistricts[index2].wards).length; i++) {
                divData3 +=
                    `<option value="${(dataDistricts[index2].wards)[i].name}">${(dataDistricts[index2].wards)[i].name}</option>`
            }
            document.getElementById('selectWard').innerHTML = divData3;
            nameWard = document.getElementById('selectWard').value
        })
    });
}
controller.clickChooseImg = async () => {
    var input = document.createElement('input');
    var avatar = document.getElementById('avatar');
    input.type = 'file';
    function GetFileExt(file) {
        var temp = file.name.split('.');
        var ext = temp.slice((temp.length - 1), (temp.length));
        return "." + ext[0];
    }
    function GetFileName(file) {
        var temp = file.name.split('.');
        var fname = temp.splice(0, 1).join('.');
        return fname;
    }
    var files = [];
    var reader = new FileReader();
    var extention;
    var nameimg;
    input.onchange = (e) => {
        files = e.target.files;
        console.log(files);
        extention = GetFileExt(files[0]);
        nameimg = GetFileName(files[0]);
        reader.readAsDataURL(files[0]);
    }
    reader.onload = function () {
        avatar.src = reader.result;
    }
    document.getElementById('chosesImg').addEventListener('click', async () => {
        input.click();
        input.onchange = async (e) => {
            files = await e.target.files;
            extention = GetFileExt(files[0]);
            nameimg = GetFileName(files[0]);
            reader.readAsDataURL(files[0]);
            await model.setAvatar(nameimg, extention, files);
        }

    })
}
controller.forgotPassword = () => {
    document.getElementById('resetPassword').addEventListener('click', async () => {
        let email = document.getElementById('inputEmailReset').value;
        await model.forgotPassword(email);
    })
}
controller.search = async () => {
    let keyword = document.getElementById('inputSearch');
    keyword.addEventListener('input', async () => {

        if (keyword.value !== '') {
            let newPreSearch = document.getElementsByClassName('new-pre-l-search')[0];
            if (newPreSearch.className.indexOf('hide-product-search') != -1) {
                newPreSearch.classList.toggle('hide-product-search');
                newPreSearch.classList.toggle('show-product-search');
            }
            let data = await model.searchShoes(keyword.value);
            await view.showSearch(data);
        }
        else {
            document.getElementById('shoesSearch').innerHTML = '';
            let newPreSearch = document.getElementsByClassName('new-pre-l-search')[0];
            if (newPreSearch.className.indexOf('hide-product-search') == -1) {
                newPreSearch.classList.toggle('hide-product-search');
                newPreSearch.classList.toggle('show-product-search');
            }
        }
    });
}
// Checkout
controller.clickChat = async (idUser, idInputMessage) => {
    document.getElementById('idChat').addEventListener('click', async () => {
        if (auth.currentUser.email == 'thienbinh1155@gmail.com') {
            view.selectWebPage('chatPage');
        }
        else {

            let value = document.getElementsByClassName('form-chat')[0];
            value.style.visibility = 'visible';
            value.style.opacity = '1';
            value.style.transform = 'translateY(0px)';
            model.createNewMessage();
            await model.renderMessage(idUser);
            document.getElementById('sendMessage').addEventListener('click', async () => {
                await model.sendMessageToFirestore(idInputMessage);
                document.getElementById('inputMessage').value = '';
            });
            var input = document.getElementById("inputMessage");
            input.addEventListener("keypress", function (event) {
                if (event.key === "Enter") {
                    event.preventDefault();
                    model.sendMessageToFirestore(idInputMessage);
                    document.getElementById('inputMessage').value = '';
                }
            });
        }
    })
}
controller.idMessage = '';
controller.readMessages = (idUser) => {
    let targetId = document.querySelectorAll(".sideBar-body");
    console.log(targetId);
    for (let i = 0; i < targetId.length; i++) {
        targetId[i].addEventListener("click", async () => {
            controller.idMessage = targetId[i].id
            view.initialMessage(idUser);
            await model.getMessagesFromFirestore(targetId[i].id, idUser);
            await model.getNameGuess(targetId[i].id);
        })
    }
}
controller.clickSendMessage = (idInputMessage) => {
    document.getElementById('send-btn').addEventListener('click', () => {
        model.sendMessageToFirestore(idInputMessage);
        document.getElementById('comment').value = '';
    })
    var input = document.getElementById("comment");

    input.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            model.sendMessageToFirestore(idInputMessage);
            document.getElementById('comment').value = '';
        }
    });
}
controller.generateKeywords = (nameData) => {
    const name = displayName.split(' ').filter((word) => word);
    console.log(name);

    const length = name.length;
    let flagArray = [];
    let result = [];
    let stringArray = [];
    for (let i = 0; i < length; i++) {
        flagArray[i] = false;
    }

    const createKeywords = (name) => {
        const arrName = [];
        let curName = '';
        name.split('').forEach((letter) => {
            curName += letter;
            arrName.push(curName);
        });
        return arrName;
    };

    function findPermutation(k) {
        for (let i = 0; i < length; i++) {
            if (!flagArray[i]) {
                flagArray[i] = true;
                result[k] = name[i];

                if (k === length - 1) {
                    stringArray.push(result.join(' '));
                }

                findPermutation(k + 1);
                flagArray[i] = false;
            }
        }
    }

    findPermutation(0);

    const keywords = stringArray.reduce((acc, cur) => {
        const words = createKeywords(cur);
        console.log(acc);
        return [...acc, ...words];
    }, []);

    return keywords;
}
controller.submitBuy = async (data) => {
    if (data.firstname != '' && data.lastname != '' && data.city != '' && data.district != '' && data.ward != '' && data.country != '') {
        await model.writeHistoryOfBuy(data);
        document.getElementById('contentInformation2').innerText = 'Submit Success';
        let value = document.getElementsByClassName('box-notificaton2')[0];
        value.style.transform = 'scale(1)';
        setTimeout(() => {
            value.removeAttribute('style');
        }, 3000);
        console.log(data);
    }
}
// ReviewPage
controller.clicReview = () => {
    document.getElementById('detailReview').addEventListener('click', async () => {
        document.getElementsByClassName('box-detail-review')[0].style.borderBottom = 'none';
        let value = document.getElementsByClassName('star-rating');
        for (let i = 0; i < value.length; i++) {
            if (value[i].className.indexOf('hide-rating') != -1) {
                value[i].classList.toggle('hide-rating');
                value[i].classList.toggle('show-rating');
            }
        };
        let url = document.getElementsByClassName('mainImg')[0].src;
        let data = await model.readReview(url);
        console.log(data);
        if (data.check == true) {
            if (data.content.length > 3) {
                let moreRevies = document.getElementsByClassName('more-review')[0];
                if (moreRevies.className.indexOf('hide-rating') != -1) {
                    moreRevies.classList.toggle('hide-rating');
                    moreRevies.classList.toggle('show-rating');
                }
                var divData = '';
                for (let i = 0; i < 3; i++) {
                    switch (data.content[i].star) {
                        case 1:
                            divData +=
                                `<div class="detail-review">
                                <i class="fa-regular fa-star fill-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <span class="text-user padding-left-10">&ensp;${data.content[i].username}&ensp;${data.content[i].time}</span>
                                <br>
                                <span class="text-content-review">${data.content[i].comment}</span>
                            </div>`
                            break;
                        case 2:
                            divData +=
                                `<div class="detail-review">
                                    <i class="fa-regular fa-star fill-star"></i>
                                    <i class="fa-regular fa-star fill-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <span class="text-user padding-left-10">&ensp;${data.content[i].username}&ensp;${data.content[i].time}</span>
                                    <br>
                                    <span class="text-content-review">${data.content[i].comment}</span>
                                </div>`
                            break;
                        case 3:
                            divData +=
                                `<div class="detail-review">
                                    <i class="fa-regular fa-star fill-star"></i>
                                    <i class="fa-regular fa-star fill-star"></i>
                                    <i class="fa-regular fa-star fill-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <span class="text-user padding-left-10">&ensp;${data.content[i].username}&ensp;${data.content[i].time}</span>
                                    <br>
                                    <span class="text-content-review">${data.content[i].comment}</span>
                                </div>`
                            break;
                        case 4:
                            divData +=
                                `<div class="detail-review">
                                    <i class="fa-regular fa-star fill-star"></i>
                                    <i class="fa-regular fa-star fill-star"></i>
                                    <i class="fa-regular fa-star fill-star"></i>
                                    <i class="fa-regular fa-star fill-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <span class="text-user padding-left-10">&ensp;${data.content[i].username}&ensp;${data.content[i].time}</span>
                                    <br>
                                    <span class="text-content-review">${data.content[i].comment}</span>
                                </div>`
                            break;
                        case 5:
                            divData +=
                                `<div class="detail-review">
                                <i class="fa-regular fa-star fill-star"></i>
                                <i class="fa-regular fa-star fill-star"></i>
                                <i class="fa-regular fa-star fill-star"></i>
                                <i class="fa-regular fa-star fill-star"></i>
                                <i class="fa-regular fa-star fill-star"></i>
                                <span class="text-user padding-left-10">&ensp;${data.content[i].username}&ensp;${data.content[i].time}</span>
                                <br>
                                <span class="text-content-review">${data.content[i].comment}</span>
                            </div>`
                            break;
                    }
                }
                document.getElementById('idReview').innerHTML = divData;
            }
            else {
                var divData = '';
                for (let i = 0; i < data.content.length; i++) {
                    switch (data.content[i].star) {
                        case 1:
                            divData +=
                                `<div class="detail-review">
                                <i class="fa-regular fa-star fill-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <span class="text-user padding-left-10">&ensp;${data.content[i].username}&ensp;${data.content[i].time}</span>
                                <br>
                                <span class="text-content-review">${data.content[i].comment}</span>
                            </div>`
                            break;
                        case 2:
                            divData +=
                                `<div class="detail-review">
                                    <i class="fa-regular fa-star fill-star"></i>
                                    <i class="fa-regular fa-star fill-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <span class="text-user padding-left-10">&ensp;${data.content[i].username}&ensp;${data.content[i].time}</span>
                                    <br>
                                    <span class="text-content-review">${data.content[i].comment}</span>
                                </div>`
                            break;
                        case 3:
                            divData +=
                                `<div class="detail-review">
                                    <i class="fa-regular fa-star fill-star"></i>
                                    <i class="fa-regular fa-star fill-star"></i>
                                    <i class="fa-regular fa-star fill-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <span class="text-user padding-left-10">&ensp;${data.content[i].username}&ensp;${data.content[i].time}</span>
                                    <br>
                                    <span class="text-content-review">${data.content[i].comment}</span>
                                </div>`
                            break;
                        case 4:
                            divData +=
                                `<div class="detail-review">
                                    <i class="fa-regular fa-star fill-star"></i>
                                    <i class="fa-regular fa-star fill-star"></i>
                                    <i class="fa-regular fa-star fill-star"></i>
                                    <i class="fa-regular fa-star fill-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <span class="text-user padding-left-10">&ensp;${data.content[i].username}&ensp;${data.content[i].time}</span>
                                    <br>
                                    <span class="text-content-review">${data.content[i].comment}</span>
                                </div>`
                            break;
                        case 5:
                            divData +=
                                `<div class="detail-review">
                                <i class="fa-regular fa-star fill-star"></i>
                                <i class="fa-regular fa-star fill-star"></i>
                                <i class="fa-regular fa-star fill-star"></i>
                                <i class="fa-regular fa-star fill-star"></i>
                                <i class="fa-regular fa-star fill-star"></i>
                                <span class="text-user padding-left-10">&ensp;${data.content[i].username}&ensp;${data.content[i].time}</span>
                                <br>
                                <span class="text-content-review">${data.content[i].comment}</span>
                            </div>`
                            break;
                    }
                }
                document.getElementById('idReview').innerHTML = divData;
            }
        };
    });
}
controller.clickMoreDetail = () => {
    document.getElementById('viewProductDetail').addEventListener('click', async () => {
        document.getElementsByClassName('smallImg')[0].src = document.getElementsByClassName('mainImg')[0].src;
        document.getElementById('exampleModal').classList.add('padding-hide');
        document.getElementById('body').classList.add('padding-hide');
    });
}
controller.clickWriteReview = () => {
    document.getElementById('writeReview').addEventListener('click', () => {
        let inputComment = document.getElementsByClassName('input-comment')[0];
        if (inputComment.className.indexOf('hide-input-comment') != -1) {
            inputComment.classList.toggle('hide-input-comment');
            inputComment.classList.toggle('show-input-comment');
        }
        else {
            inputComment.classList.toggle('hide-input-comment');
            inputComment.classList.toggle('show-input-comment');
        }
        let submitComment = document.getElementsByClassName('submit-comment')[0];
        if (submitComment.className.indexOf('hide-submit-comment') != -1) {
            submitComment.classList.toggle('hide-submit-comment');
            submitComment.classList.toggle('show-submit-comment');
        }
        else {
            submitComment.classList.toggle('hide-submit-comment');
            submitComment.classList.toggle('show-submit-comment');
        }
        let star = document.getElementsByClassName('click-star')[0];
        if (star.className.indexOf('hide-star-rating') != -1) {
            star.classList.toggle('hide-star-rating');
            star.classList.toggle('show-star-rating');
        }
        else {
            star.classList.toggle('hide-star-rating');
            star.classList.toggle('show-star-rating');
        }
    })
}
controller.clickStar = () => {
    let star = document.getElementsByClassName('class-star');
    for (let i = 0; i < star.length; i++) {
        star[i].addEventListener('click', () => {
            if (star[i].className.indexOf('fill-star') == -1) {
                star[i].classList.toggle('fill-star');
            }
            else {
                star[i].classList.toggle('fill-star');
            }

        })
    }
}
controller.checkStar = async (data) => {
    if (auth.currentUser != null) {
        if (data.countstar == 0) {
            let inforStar = document.getElementsByClassName('error-star')[0];
            if (inforStar.className.indexOf('hide-error') != -1) {
                inforStar.classList.toggle('hide-error');
                inforStar.classList.toggle('show-error');
                document.getElementById('errorStar').innerText = "Please select an overall rating";
            }
        }
        data.comment == "" ? (document.getElementById('errorComment').innerText = 'Please type a new comment') : (document.getElementById('errorComment').innerText = '');
        if (data.countstar > 0 && data.comment != "") {
            await model.wirteReview(data);
            document.getElementById('contentInformation2').innerText = 'Submit Success';
            let value = document.getElementsByClassName('box-notificaton2')[0];
            value.style.transform = 'scale(1)';
            setTimeout(() => {
                value.removeAttribute('style');
            }, 3000);
        }
    }
    else {
        view.selectWebPage('singinPage');
    }
}
controller.hoverThumbImg = (cls, mainImg) => {
    var allCls = document.getElementsByClassName(cls);
    for (let i = 0; i < allCls.length; i++) {
        allCls[i].addEventListener('mouseover', () => {
            document.getElementsByClassName(mainImg)[0].src = allCls[i].src;
        });
    }
}
controller.clickMoreReview = () => {
    document.getElementById('moreReviews').addEventListener('click', async () => {
        document.getElementsByClassName('smallImgMoreRivew')[0].src = document.getElementsByClassName('mainImg')[0].src;
        let url = document.getElementsByClassName('mainImg')[0].src;
        let data = await model.readReview(url);
        if (data.check == true) {
            var divData = '';
            for (let i = 0; i < data.content.length; i++) {
                switch (data.content[i].star) {
                    case 1:
                        divData +=
                            `
                        <div class="row format-row padding-top-20">
                            <div class="col-lg-2 col-md-3 col-sm-4 col-5 padding-0-567">
                                <i class="fa-regular fa-star fill-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                            </div>
                            <div class="col-lg-10 col-md-9 col-sm-8 col-7 padding-r-0-567">
                                <span class="text-user">${data.content[i].username}&ensp;${data.content[i].time}</span>
                                <br>
                                <span class="text-content-review">${data.content[i].comment}</span>
                            </div>
                        </div>
                        `
                        break;
                    case 2:
                        divData +=
                            `
                        <div class="row format-row padding-top-20">
                            <div class="col-lg-2 col-md-3 col-sm-4 col-5 padding-0-567">
                                <i class="fa-regular fa-star fill-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                            </div>
                            <div class="col-lg-10 col-md-9 col-sm-8 col-7 padding-r-0-567">
                                <span class="text-user">${data.content[i].username}&ensp;${data.content[i].time}</span>
                                <br>
                                <span class="text-content-review">${data.content[i].comment}</span>
                            </div>
                        </div>
                        `
                        break;
                    case 3:
                        divData +=
                            `
                        <div class="row format-row padding-top-20">
                            <div class="col-lg-2 col-md-3 col-sm-4 col-5 padding-0-567">
                                <i class="fa-regular fa-star fill-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                            </div>
                            <div class="col-lg-10 col-md-9 col-sm-8 col-7 padding-r-0-567">
                                <span class="text-user">${data.content[i].username}&ensp;${data.content[i].time}</span>
                                <br>
                                <span class="text-content-review">${data.content[i].comment}</span>
                            </div>
                        </div>
                        `
                        break;
                    case 4:
                        divData +=
                            `
                        <div class="row format-row padding-top-20">
                            <div class="col-lg-2 col-md-3 col-sm-4 col-5 padding-0-567">
                                <i class="fa-regular fa-star fill-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                            </div>
                            <div class="col-lg-10 col-md-9 col-sm-8 col-7 padding-r-0-567">
                                <span class="text-user">${data.content[i].username}&ensp;${data.content[i].time}</span>
                                <br>
                                <span class="text-content-review">${data.content[i].comment}</span>
                            </div>
                        </div>
                        `
                        break;
                    case 5:
                        divData +=
                            `
                        <div class="row format-row padding-top-20">
                            <div class="col-lg-2 col-md-3 col-sm-4 col-5 padding-0-567">
                                <i class="fa-regular fa-star fill-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                            </div>
                            <div class="col-lg-10 col-md-9 col-sm-8 col-7 padding-r-0-567">
                                <span class="text-user">${data.content[i].username}&ensp;${data.content[i].time}</span>
                                <br>
                                <span class="text-content-review">${data.content[i].comment}</span>
                            </div>
                        </div>
                        `
                        break;
                }
            }
            document.getElementById('personReview').innerHTML = divData;
        };
    });
}
controller.addToBagFromReviewPage = async () => {
    document.getElementById('addToBag').addEventListener('click', async () => {
        if (auth.currentUser != null) {
            let arrPro = await model.readAllProductFromFirestore();
            console.log(arrPro);
            let arrProInBag = await model.readBag();
            let idImgBag = [];
            for (let i in arrProInBag) {
                let obj = {
                    id: arrProInBag[i].id,
                    indexcolor: arrProInBag[i].index
                }
                idImgBag.push(obj);
            }
            let nameUrl = [];
            for (let i in arrPro) {
                nameUrl.push(arrPro[i].url);
            }
            let boolB = true;
            let thumb = document.getElementById('thumbImg');
            let sourceImg = document.getElementsByClassName('mainImg')[0].src;
            let color = 0;
            if (thumb.className.indexOf('show-thumb-img') != -1) {
                let arrColor = document.getElementsByClassName('thumb-color');
                for (let i = 0; i < arrColor.length; i++) {
                    if (arrColor[i].src == sourceImg) {
                        color = i;
                    }
                }
            }
            else {
                color = 0;
            }
            let check = false;
            let idB;
            arrPro.forEach((item)=>{
                if(item.url == sourceImg){
                    idB = item.id;
                }
                else{
                    if(item.hasOwnProperty('thumburl') == true){
                        if(item.thumburl.indexOf(sourceImg) != -1){
                            idB = item.id;
                        }
                    }
                }
            })
            
            for (let i in idImgBag) {
                if (idB == idImgBag[i].id) {
                    for (let j in idImgBag[i].indexcolor) {
                        if (color == idImgBag[i].indexcolor[j]) {
                            check = true;
                        }
                    }
                }
            }
            if (check == false) {
                await model.setValueBagToFirebase(idB, boolB, color);
                document.getElementById('contentInformation').innerText = 'Add To Bag';
                let value = document.getElementsByClassName('box-notificaton')[0];
                value.style.transform = 'scale(1)';
                setTimeout(() => {
                    value.removeAttribute('style');
                }, 3000);

            }
            else {
                document.getElementById('contentInformation').innerText = 'Product Already In The Bag';
                let value = document.getElementsByClassName('box-notificaton')[0];
                value.style.transform = 'scale(1)';
                setTimeout(() => {
                    value.removeAttribute('style');
                }, 3000);

            }
        }
        else {
            view.selectWebPage('singinPage');
        }
    });
    document.getElementById('addToFavourite').addEventListener('click', async () => {
        if (auth.currentUser != null) {
            let arrPro = await model.readAllProductFromFirestore();
            let arrProFavourite = await model.readFavourite();
            let idImgFavourite = [];
            for (let i in arrProFavourite) {
                let obj = {
                    id: arrProFavourite[i].id,
                    indexcolor: arrProFavourite[i].index
                }
                idImgFavourite.push(obj);
            }
            let nameUrl = [];
            for (let i in arrPro) {
                nameUrl.push(arrPro[i].url);
            }
            let boolF = true;
            let thumb = document.getElementById('thumbImg');
            let sourceImg = document.getElementsByClassName('mainImg')[0].src;
            let color = 0;
            if (thumb.className.indexOf('show-thumb-img') != -1) {
                let arrColor = document.getElementsByClassName('thumb-color');
                for (let i = 0; i < arrColor.length; i++) {
                    if (arrColor[i].src == sourceImg) {
                        color = i;
                    }
                }
            }
            else {
                color = 0;
            }
            let check = false;
            let idF;
            arrPro.forEach((item)=>{
                if(item.url == sourceImg){
                    idF = item.id;
                }
                else{
                    if(item.hasOwnProperty('thumburl') == true){
                        if(item.thumburl.indexOf(sourceImg) != -1){
                            idF = item.id;
                        }
                    }
                }
            })
            for (let i in idImgFavourite) {
                if (idF == idImgFavourite[i].id) {
                    for (let j in idImgFavourite[i].indexcolor) {
                        if (color == idImgFavourite[i].indexcolor[j]) {
                            check = true;
                        }
                    }
                }
            }
            if (check == false) {
                await model.setValueFavoriteToFirebase(idF, boolF, color);
                document.getElementById('contentInformation').innerText = 'Add To Favourite';
                let value = document.getElementsByClassName('box-notificaton')[0];
                value.style.transform = 'scale(1)';
                setTimeout(() => {
                    value.removeAttribute('style');
                }, 3000);
            }
            else {
                document.getElementById('contentInformation').innerText = 'Product Already In The Favourite';
                let value = document.getElementsByClassName('box-notificaton')[0];
                value.style.transform = 'scale(1)';
                setTimeout(() => {
                    value.removeAttribute('style');
                }, 3000);

            }

        }
        else {
            view.selectWebPage('singinPage');
        }
    });
}
// Mobile
// Men
controller.clickGotoMen = () => {
    document.getElementById('gotoMen').addEventListener('click', () => {

        let classMobileShow = document.getElementsByClassName('pre-mobile-menu')[0];
        if (classMobileShow.className.indexOf('pre-mobile-show') !== -1) {
            classMobileShow.classList.toggle('pre-mobile-hide');
            classMobileShow.classList.toggle('pre-mobile-show');
        }
        let classMobileShowMen = document.getElementsByClassName('pre-mobile-menu-men')[0];
        if (classMobileShowMen.className.indexOf('pre-mobile-show-men') == -1) {
            classMobileShowMen.classList.toggle('pre-mobile-hide-men');
            classMobileShowMen.classList.toggle('pre-mobile-show-men');
        }
    });
}
controller.clickExpandMobileMen = () => {
    document.getElementById('closeExpandMobileMen').addEventListener('click', () => {
        let classMobileShowMen = document.getElementsByClassName('pre-mobile-menu-men')[0];
        if (classMobileShowMen.className.indexOf('pre-mobile-show-men') !== -1) {
            classMobileShowMen.classList.toggle('pre-mobile-hide-men');
            classMobileShowMen.classList.toggle('pre-mobile-show-men');
        }
    });
}
controller.clickGobackAllMen = () => {
    document.getElementById('gobackAllMen').addEventListener('click', () => {
        let classMobileShowMen = document.getElementsByClassName('pre-mobile-menu-men')[0];
        if (classMobileShowMen.className.indexOf('pre-mobile-show-men') !== -1) {
            classMobileShowMen.classList.toggle('pre-mobile-hide-men');
            classMobileShowMen.classList.toggle('pre-mobile-show-men');
        }
        let classMobileShow = document.getElementsByClassName('pre-mobile-menu')[0];
        if (classMobileShow.className.indexOf('pre-mobile-show') == -1) {
            classMobileShow.classList.toggle('pre-mobile-hide');
            classMobileShow.classList.toggle('pre-mobile-show');
        }
    });
}
// Women
controller.clickGotoWomen = () => {
    document.getElementById('gotoWomen').addEventListener('click', () => {
        let classMobileShow = document.getElementsByClassName('pre-mobile-menu')[0];
        if (classMobileShow.className.indexOf('pre-mobile-show') !== -1) {
            classMobileShow.classList.toggle('pre-mobile-hide');
            classMobileShow.classList.toggle('pre-mobile-show');
        }
        let classMobileShowWomen = document.getElementsByClassName('pre-mobile-menu-women')[0];
        if (classMobileShowWomen.className.indexOf('pre-mobile-show-women') == -1) {
            classMobileShowWomen.classList.toggle('pre-mobile-hide-women');
            classMobileShowWomen.classList.toggle('pre-mobile-show-women');
        }
    });
}
controller.clickExpandMobileWomen = () => {
    document.getElementById('closeExpandMobileWomen').addEventListener('click', () => {
        let classMobileShowMen = document.getElementsByClassName('pre-mobile-menu-women')[0];
        if (classMobileShowMen.className.indexOf('pre-mobile-show-women') !== -1) {
            classMobileShowMen.classList.toggle('pre-mobile-hide-women');
            classMobileShowMen.classList.toggle('pre-mobile-show-women');
        }
    });
}
controller.clickGobackAllWomen = () => {
    document.getElementById('gobackAllWomen').addEventListener('click', () => {
        let classMobileShowMen = document.getElementsByClassName('pre-mobile-menu-women')[0];
        if (classMobileShowMen.className.indexOf('pre-mobile-show-women') !== -1) {
            classMobileShowMen.classList.toggle('pre-mobile-hide-women');
            classMobileShowMen.classList.toggle('pre-mobile-show-women');
        }
        let classMobileShow = document.getElementsByClassName('pre-mobile-menu')[0];
        if (classMobileShow.className.indexOf('pre-mobile-show') == -1) {
            classMobileShow.classList.toggle('pre-mobile-hide');
            classMobileShow.classList.toggle('pre-mobile-show');
        }
    })
}
// Kids
controller.clickGotoKids = () => {
    document.getElementById('gotoKids').addEventListener('click', () => {
        let classMobileShow = document.getElementsByClassName('pre-mobile-menu')[0];
        if (classMobileShow.className.indexOf('pre-mobile-show') !== -1) {
            classMobileShow.classList.toggle('pre-mobile-hide');
            classMobileShow.classList.toggle('pre-mobile-show');
        }
        let classMobileShowWomen = document.getElementsByClassName('pre-mobile-menu-kids')[0];
        if (classMobileShowWomen.className.indexOf('pre-mobile-show-kids') == -1) {
            classMobileShowWomen.classList.toggle('pre-mobile-hide-kids');
            classMobileShowWomen.classList.toggle('pre-mobile-show-kids');
        }
    });
}
controller.clickExpandMobileKids = () => {
    document.getElementById('closeExpandMobileKids').addEventListener('click', () => {
        let classMobileShowMen = document.getElementsByClassName('pre-mobile-menu-kids')[0];
        if (classMobileShowMen.className.indexOf('pre-mobile-show-kids') !== -1) {
            classMobileShowMen.classList.toggle('pre-mobile-hide-kids');
            classMobileShowMen.classList.toggle('pre-mobile-show-kids');
        }
    });
}
controller.clickGobackAllKids = () => {
    document.getElementById('gobackAllKids').addEventListener('click', () => {
        let classMobileShowMen = document.getElementsByClassName('pre-mobile-menu-kids')[0];
        if (classMobileShowMen.className.indexOf('pre-mobile-show-kids') !== -1) {
            classMobileShowMen.classList.toggle('pre-mobile-hide-kids');
            classMobileShowMen.classList.toggle('pre-mobile-show-kids');
        }
        let classMobileShow = document.getElementsByClassName('pre-mobile-menu')[0];
        if (classMobileShow.className.indexOf('pre-mobile-show') == -1) {
            classMobileShow.classList.toggle('pre-mobile-hide');
            classMobileShow.classList.toggle('pre-mobile-show');
        }
    });
}

function formatCash(str) {
    return str.split('').reverse().reduce((prev, next, index) => {
        return ((index % 3) ? next : (next + ',')) + prev
    })
}

export { validateEmail, formatCash, changeclickSearch, changeclickGlassSearch, changecancelBtn, changebreakPoint1, changebreakPoint2, changebreakPoint3, changebreakPoint4 };
export default controller;