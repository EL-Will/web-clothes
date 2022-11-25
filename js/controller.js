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
// controller.clickGlassSearch = () => {
//     let search = document.getElementsByClassName('pre-search-btn');
//     search[0].addEventListener('click', () => {
        
//         document.getElementById('visual-search').style.display = 'block';
//         document.getElementsByClassName('pre-search-btn')[0].style.left = '2px';
//         document.getElementsByClassName('pre-1-logo')[0].style.display = 'none';
//         clickSearch = true;
//         let classNvabarFrame = document.getElementsByClassName('nvabar-frame')[0];
//         classNvabarFrame.style.display = 'none';

//         let classHeader = document.getElementsByClassName('pre-1-header')[0];
//         if (classHeader.className.indexOf('vs-is-open') == -1) {
//             classHeader.className += ' vs-is-open';
//         }
//         let classPreCart = document.getElementsByClassName('pre-cart')[0];
//         classPreCart.style.display = 'none';

//         let classPreSearchContain = document.getElementsByClassName('pre-l-search-contain')[0];
//         classPreSearchContain.style.float = 'none';
//         classPreSearchContain.style.display = 'flex';
//         classPreSearchContain.style.justifyContent = 'center';
//         let classPreSearchInputbox = document.getElementsByClassName('pre-l-search-input-box')[0];
//         classPreSearchInputbox.style.float = 'none';
//         classPreSearchInputbox.style.width = '100%';

//         let preCancelBtn = document.getElementsByClassName('pre-cancel-btn')[0];
//         preCancelBtn.style.display = 'block';
//     })
//     document.getElementById('pre-cancel-search').addEventListener('click', () => {
//         document.getElementById('visual-search').removeAttribute('style');
//         document.getElementsByClassName('pre-search-btn')[0].removeAttribute('style');
//         document.getElementsByClassName('pre-1-logo')[0].style.display = 'block';
//     })
// }
controller.functionVisualSearch = () => {
    document.getElementById("visual-search").addEventListener("input", () => {
        let visualSearch = document.getElementById('visual-search').value;
        let clearBtn = document.getElementsByClassName('pre-clear-search')[0];
        if (visualSearch !== "" && clearBtn.className.indexOf('pre-clear-search-show') == -1) {
            clearBtn.className = clearBtn.className.replace(' pre-clear-search-hide', '')
            clearBtn.className += ' pre-clear-search-show';
        }
        if (visualSearch === "" && clearBtn.className.indexOf('pre-clear-search-hide') == -1) {
            clearBtn.className = clearBtn.className.replace(' pre-clear-search-show', '')
            clearBtn.className += ' pre-clear-search-hide';
        }
    })
}
let clickSearch = false;
controller.clearSearch = () => {
    document.getElementById("clear-btn").addEventListener("click", () => {
        document.getElementById('visual-search').value = '';
        document.getElementById('shoesSearch').innerHTML = ''
        let visualSearch = document.getElementById('visual-search').value;
        let clearBtn = document.getElementsByClassName('pre-clear-search')[0];
        if (visualSearch === "" && clearBtn.className.indexOf('pre-clear-search-hide') == -1) {
            clearBtn.className = clearBtn.className.replace(' pre-clear-search-show', '')
            clearBtn.className += ' pre-clear-search-hide';
        }
    })
}

controller.catchClickEvent = () => {
    document.getElementById('visual-search').addEventListener('click', () => {
        if(clickSearch == false){
        clickSearch = true;
        let classNvabarFrame = document.getElementsByClassName('nvabar-frame')[0];
        classNvabarFrame.style.display = 'none';

        let classHeader = document.getElementsByClassName('pre-1-header')[0];
        if (classHeader.className.indexOf('vs-is-open') == -1) {
            classHeader.className += ' vs-is-open';
        }

        let classBoxMen = document.getElementsByClassName('box-men')[0];
        classBoxMen.style.display = 'none';

        let classBoxWomen = document.getElementsByClassName('box-women')[0];
        classBoxWomen.style.display = 'none';

        let classBoxKids = document.getElementsByClassName('box-kids')[0];
        classBoxKids.style.display = 'none';

        let classPreCart = document.getElementsByClassName('pre-cart')[0];
        classPreCart.style.display = 'none';

        let classPreSearchContain = document.getElementsByClassName('pre-l-search-contain')[0];
        classPreSearchContain.style.float = 'none';
        classPreSearchContain.style.display = 'flex';
        classPreSearchContain.style.justifyContent = 'center';
        let classPreSearchInputbox = document.getElementsByClassName('pre-l-search-input-box')[0];
        classPreSearchInputbox.style.float = 'none';

        const mediaQuery = window.matchMedia('(min-width: 890px)')
        function handleTabletChange(e, bool) {
            // Check if the media query is true
            if (e.matches && bool === true) {
                let classPreSearchInputbox = document.getElementsByClassName('pre-l-search-input-box')[0];
                classPreSearchInputbox.style.width = '656px';

            }
            if (!e.matches && bool === true) {
                let classPreSearchInputbox = document.getElementsByClassName('pre-l-search-input-box')[0];
                classPreSearchInputbox.style.width = '300px';

            }
        }
        // Register event listener
        mediaQuery.addListener(handleTabletChange);

        // Initial check
        handleTabletChange(mediaQuery, clickSearch);

        let preCancelBtn = document.getElementsByClassName('pre-cancel-btn')[0];
        preCancelBtn.style.display = 'block';
        let boxProductSearch = document.getElementById('productSearch');
        boxProductSearch.classList.remove('hide-product-search');
        boxProductSearch.classList.add('show-product-search');
    }
    })
}

controller.cancelSearch = () => {
    document.getElementById('pre-cancel-search').addEventListener('click', () => {
        clickSearch = false;
        let classNvabarFrame = document.getElementsByClassName('nvabar-frame')[0];
        classNvabarFrame.removeAttribute('style');

        let classHeader = document.getElementsByClassName('pre-1-header')[0];
        if (classHeader.className.indexOf('vs-is-open') !== -1) {
            classHeader.className = classHeader.className.replace(' vs-is-open', '');
        }

        let classBoxMen = document.getElementsByClassName('box-men')[0];
        classBoxMen.removeAttribute('style');

        let classBoxWomen = document.getElementsByClassName('box-women')[0];
        classBoxWomen.removeAttribute('style');

        let classBoxKids = document.getElementsByClassName('box-kids')[0];
        classBoxKids.removeAttribute('style');

        let classPreCart = document.getElementsByClassName('pre-cart')[0];
        classPreCart.removeAttribute('style');

        let classPreSearchContain = document.getElementsByClassName('pre-l-search-contain')[0];
        classPreSearchContain.removeAttribute('style');

        let classPreSearchInputbox = document.getElementsByClassName('pre-l-search-input-box')[0];
        classPreSearchInputbox.removeAttribute('style');

        let preCancelBtn = document.getElementsByClassName('pre-cancel-btn')[0];
        preCancelBtn.removeAttribute('style');

        let boxProductSearch = document.getElementById('productSearch');
        boxProductSearch.classList.add('hide-product-search');
        boxProductSearch.classList.remove('show-product-search');
    })
}

controller.functionExpandOption = () => {
    document.getElementById('expand-option').addEventListener('click', () => {
        let classMobileShow = document.getElementsByClassName('pre-mobile-menu')[0];
        if (classMobileShow.className.indexOf('pre-mobile-hide') !== -1) {
            classMobileShow.className = classMobileShow.className.replace(' pre-mobile-hide', '')
            classMobileShow.className += ' pre-mobile-show';
        }
    })
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
controller.logout = () => {
    document.getElementById('logout-btn').addEventListener("click", () => {
        model.getLogout();
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

    let positionNvabar1 = document.querySelector('.pos-logo1');
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
            fixedNavbar.style.marginTop = '-250px';
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
controller.sortLowToHight = async (arr) => {
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
        view.setMenShoesImg(lowHighPriceProducts, arrFvorite, arrBag)
    });
}
controller.sortHightLow = async (arr) => {
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
        view.setMenShoesImg(highLowPriceProducts, arrFvorite, arrBag);
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

controller.clickFavorite = () => {
    // let targetId = document.querySelectorAll('.favorite-btn');
    // let idFavorite = 0;
    // let boolF;

    // for (let i = 0; i < targetId.length; i++) {
    //     targetId[i].addEventListener('click', () => {
    //         if (firebase.auth().currentUser !== null) {
    //             idFavorite = arr[i].id;
    //             boolF = true;
    //             if (idFavorite != 0) {
    //                 model.setValueFavoriteToFirebase(idFavorite, boolF);
    //                 view.clickFavorite(targetId[i]);
    //             }
    //         }
    //         else {
    //             view.selectWebPage('singinPage');
    //         }
    //     })
    // }
    let idFavorite;
    let indexcolour;
    let boolF;
    var classMainImg = document.getElementsByClassName('main-img');
    let targetId = document.querySelectorAll('.favorite-btn');
    for (let i = 0; i < targetId.length; i++) {
        targetId[i].addEventListener('click', async () => {
            if (firebase.auth().currentUser !== null) {
                let newArr = await model.readInforFavoriteAndMenShoes('Image', 'menShoes', 'Favorite');
                if (newArr[i].hasOwnProperty('status')) {
                    if (newArr[i].hasOwnProperty('thumburl')) {
                        if (classMainImg[i].src == newArr[i].url) {
                            let obj = {
                                ...newArr[i],
                                indexV: 0
                            }
                            model.deleteItemsInValueFavoriteFromFirebase(obj);
                            view.clickFavorite(targetId[i]);
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
                            }
                            else {
                                indexcolour = newArr[i].thumburl.indexOf(classMainImg[i].src) + 1;
                                idFavorite = newArr[i].id;
                                boolF = true;
                                model.setValueFavoriteToFirebase(idFavorite, boolF, indexcolour);
                                view.clickFavorite(targetId[i]);
                            }
                        }
                    }
                    else {
                        model.deleteValueFavoriteFromFirebase(newArr[i].id);
                        view.clickFavorite(targetId[i]);
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

controller.clickBag = async () => {
    let idBag = 0;
    let indexcolour;
    let boolB;
    var classMainImg = document.getElementsByClassName('main-img');
    let targetId = document.querySelectorAll('.bag-btn');

    for (let i = 0; i < targetId.length; i++) {
        targetId[i].addEventListener('click', async () => {
            if (firebase.auth().currentUser !== null) {
                let newArr = await model.readInforBagAndMenShoes('Image', 'menShoes', 'Bag');
                if (newArr[i].hasOwnProperty('status')) {
                    if (newArr[i].hasOwnProperty('thumburl')) {
                        if (classMainImg[i].src == newArr[i].url) {
                            let obj = {
                                ...newArr[i],
                                indexV: 0
                            }

                            model.deleteItemsInValueBagFromFirebase(obj);
                            view.clickBag(targetId[i]);
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
                            }
                            else {
                                console.log(3);
                                indexcolour = newArr[i].thumburl.indexOf(classMainImg[i].src) + 1;
                                idBag = newArr[i].id;
                                boolB = true;
                                model.setValueBagToFirebase(idBag, boolB, indexcolour);
                                view.clickBag(targetId[i]);
                            }
                        }
                    }
                    else {
                        model.deleteValueBagFromFirebase(newArr[i].id, 'Image', 'manShoes');
                        view.clickBag(targetId[i]);
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
    let keyword = document.getElementById('visual-search');
    keyword.addEventListener('input', async () => {
        if (keyword.value !== '') {
            let data = await model.searchShoes(keyword.value);
            await view.showSearch(data);
        }
        else{
            document.getElementById('shoesSearch').innerHTML = ''
        }
    });
}
controller.clickChat = async(idUser, idInputMessage)=>{
    document.getElementById('idChat').addEventListener('click',async()=>{
        if(auth.currentUser.email == 'thienbinh1155@gmail.com'){
            view.selectWebPage('chatPage');
        }
        else{
            let value = document.getElementsByClassName('form-chat')[0];
            value.style.visibility = 'visible';
            value.style.opacity = '1';
            value.style.transform = 'translateY(0px)';
            model.createNewMessage();
            await model.renderMessage(idUser);
            document.getElementById('sendMessage').addEventListener('click',async()=>{
                await model.sendMessageToFirestore(idInputMessage);
                document.getElementById('inputMessage').value = '';
            })
        }
    })
}
controller.idMessage = '';
controller.readMessages = (idUser) => {
    let targetId = document.querySelectorAll(".sideBar-body");
    console.log(targetId);
    for (let i = 0; i < targetId.length; i++) {
        targetId[i].addEventListener("click", async() => {
            controller.idMessage = targetId[i].id
            view.initialMessage(idUser);
            await model.getMessagesFromFirestore(targetId[i].id,idUser);
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
function formatCash(str) {
    return str.split('').reverse().reduce((prev, next, index) => {
        return ((index % 3) ? next : (next + ',')) + prev
    })
}
export { validateEmail, formatCash };
export default controller;