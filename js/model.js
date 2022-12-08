import view from "./view.js";
import controller from "./controller.js";
import { validateEmail, formatCash } from "./controller.js";


const model = {};

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBj5YV8iuaGzL1AfFLsMOMwEAXueMbuzHY",
    authDomain: "clothes-project-5d71c.firebaseapp.com",
    projectId: "clothes-project-5d71c",
    storageBucket: "clothes-project-5d71c.appspot.com",
    messagingSenderId: "268117909221",
    appId: "1:268117909221:web:625cb49748d5154a8d7e0c"
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

model.getSingup = async (data) => {
    try {
        let respone = await auth.createUserWithEmailAndPassword(data.email, data.password);
        auth.currentUser.sendEmailVerification();
        let keyDoc = await firebase.auth().currentUser.uid;
        firebase.auth().currentUser.updateProfile({
            displayName: data.lastname + ' ' + data.firstname
        });
        let ref = db.collection('users').doc(keyDoc);
        await ref.get().then((doc) => {
            if (doc.exists) {

            }
            else {
                db.collection("users").doc(keyDoc).set({
                    firstname: data.firstname,
                    lastname: data.lastname,
                    username: data.username,
                    email: data.email,
                    uid: auth.currentUser.uid,
                    pass: data.password
                })
                    .then(() => {
                        console.log("Document successfully written!");
                    })
                    .catch((error) => {
                        console.error("Error writing document: ", error);
                    });
            }

        })
        // view.selectWebPage('singinPage');
    }
    catch (error) {
        const errorMessage = error.message;
        alert(errorMessage)
    }

}
model.getSingin = async (data) => {
    try {
        let res = await auth.signInWithEmailAndPassword(data.email, data.password);
        await db.collection('users').doc(auth.currentUser.uid).update({
            pass: data.password
        });
        view.selectWebPage('homePageSingIn');
        await model.getInforUser();
    }
    catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        view.setErrorMessagge('input-pass', 'err-pass', 'Email or password is not correct');
    }
}
model.getLogout = async () => {
    try {
        let res = await auth.signOut();
        // alert("Do you want to quit of this page");
    }
    catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
    }
}

model.getInforUser = async () => {
    if (auth.currentUser !== null) {
        // let res = await firebase.auth().currentUser.email;
        // await db.collection("users").get().then((querySnapshot) => {
        //     querySnapshot.forEach((doc) => {
        //         let temporaryObj = JSON.parse(JSON.stringify(doc.data()))
        //         if (temporaryObj.email === res) {
        //             firebase.auth().currentUser.updateProfile({
        //                 displayName: temporaryObj.lastname + ' ' + temporaryObj.firstname
        //             });
        //         }
        //     });
        // });
        await view.setProfileName(auth.currentUser.displayName);
    }
}

model.getInforUserNew = async () => {
    if (auth.currentUser !== null) {
        let res = await firebase.auth().currentUser.email;
        await db.collection("users").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                let temporaryObj = JSON.parse(JSON.stringify(doc.data()))
                if (temporaryObj.email === res) {
                    firebase.auth().currentUser.updateProfile({
                        displayName: temporaryObj.lastname + ' ' + temporaryObj.firstname
                    });
                }

            });

        });
    }
    return auth.currentUser.displayName;
}

model.getUrlFileImage = async (path, idImg) => {
    var storageRef = firebase.storage().ref();
    var starsRef = await storageRef.child(path);
    await starsRef.getDownloadURL()
        .then((url) => {
            view.setUrlFileImage(url, idImg);
        })
        .catch((error) => {
            // A full list of error codes is available at
            // https://firebase.google.com/docs/storage/web/handle-errors
            switch (error.code) {
                case 'storage/object-not-found':
                    // File doesn't exist
                    console.log(`File doesn't exist`);
                    break;
                case 'storage/unauthorized':
                    // User doesn't have permission to access the object
                    console.log(`User doesn't have permission to access the object`);
                    break;
                case 'storage/canceled':
                    // User canceled the upload
                    console.log(`User canceled the upload`);
                    break;
                case 'storage/unknown':
                    // Unknown error occurred, inspect the server response
                    console.log(`Unknown error occurred, inspect the server response`)
                    break;
            }
        });
}

model.getInforImage = async (collect, document) => {
    var arrInforImg;
    const accessInforImg = db.collection(collect).doc(document);
    await accessInforImg.get().then((doc) => {
        if (doc.exists) {
            arrInforImg = doc.data().image
            //console.log(doc.data().image);
        } else {

        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
    view.setHighLigthImg(arrInforImg)
}

model.getInforImageOfMenshoes = async (collect, document) => {
    var arrInforImg;
    var arrFvorite = [];
    var arrBag = [];
    let checkImg = false;
    const accessInforImg = db.collection(collect).doc(document);
    await accessInforImg.get().then((doc) => {
        if (doc.exists) {
            arrInforImg = doc.data().image
            checkImg = true;
        } else {
            checkImg = false;
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
    if (auth.currentUser !== null) {
        let keyDoc = auth.currentUser.uid;
        const accessFavorite = db.collection('Favorite').doc(keyDoc);
        await accessFavorite.get().then((doc) => {
            if (doc.exists) {
                arrFvorite = doc.data().favorite;
            } else {
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    }
    if (auth.currentUser !== null) {
        let keyDoc = auth.currentUser.uid;
        const accessBag = db.collection('Bag').doc(keyDoc);
        await accessBag.get().then((doc) => {
            if (doc.exists) {
                arrBag = doc.data().bag;

            } else {

            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    }
    if (checkImg == true) {
        view.setMenShoesImg(collect, document, arrInforImg, arrFvorite, arrBag);
    }
}
model.readDataBagFavoriteImage = async (arr, iValue, z, classBagBtn, classMainImg, classThumbColour, classFavorBtn) => {
    var arrFvorite = [];
    var arrBag = [];
    if (auth.currentUser !== null) {
        let keyDoc = auth.currentUser.uid;
        const accessFavorite = db.collection('Favorite').doc(keyDoc);
        await accessFavorite.get().then((doc) => {
            if (doc.exists) {
                arrFvorite = doc.data().favorite;
            } else {
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    }
    if (auth.currentUser !== null) {
        let keyDoc = auth.currentUser.uid;
        const accessBag = db.collection('Bag').doc(keyDoc);
        await accessBag.get().then((doc) => {
            if (doc.exists) {
                arrBag = doc.data().bag;

            } else {

            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    }
    let temporaryF = [];
    let temporaryB = [];
    for (let i in arrFvorite) {
        temporaryF.push(arrFvorite[i].id);
    }
    for (let i in arrBag) {
        temporaryB.push(arrBag[i].id);
    }

    if (temporaryB.length > 0) {
        console.log(1);
        if (temporaryB.indexOf(arr[iValue].id) !== -1) {
            console.log(2);
            let indexBag = arrBag[temporaryB.indexOf(arr[iValue].id)].index;

            if (indexBag.indexOf(z) == -1) {
                classBagBtn[iValue].classList.remove('fill--bag');
            }
            else {
                classBagBtn[iValue].classList.add('fill--bag');
            }
        }
        if (temporaryF.indexOf(arr[iValue].id) !== -1) {
            console.log(3);
            let indexFavor = arrFvorite[temporaryF.indexOf(arr[iValue].id)].index;
            if (indexFavor.indexOf(z) == -1) {
                classFavorBtn[iValue].classList.remove('fill--favorite');
            }
            else {
                classFavorBtn[iValue].classList.add('fill--favorite');
            }
        }
        // classMainImg[iValue].src = classThumbColour[z].children[0].currentSrc;
        // console.log(classThumbColour[z].children[0].currentSrc);
    }
    classMainImg[iValue].src = classThumbColour[z].children[0].currentSrc;
}
model.getValueAndSortIncreaseInforImage = async (collect, document) => {
    var arrInforImg;
    const accessInforImg = db.collection(collect).doc(document);
    await accessInforImg.get().then((doc) => {
        if (doc.exists) {
            arrInforImg = doc.data().image;
        } else {

        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
    controller.sortLowToHight(collect, document, arrInforImg)
}

model.getValueAndSortDecreaseInforImage = async (collect, document) => {
    var arrInforImg;
    const accessInforImg = db.collection(collect).doc(document);
    await accessInforImg.get().then((doc) => {
        if (doc.exists) {
            arrInforImg = doc.data().image;
        } else {

        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
    controller.sortHightLow(collect, document, arrInforImg)
}

model.setValueFavoriteToFirebase = async (idF, boolF, indexcolor) => {
    let keyDoc = await firebase.auth().currentUser.uid;
    let accessListFavorite = db.collection('Favorite').doc(keyDoc);
    accessListFavorite.get().then((doc) => {
        if (doc.exists) {
            let favorRef = [];
            favorRef = doc.data().favorite;
            if (favorRef.length != 0) {
                for (let i in favorRef) {
                    if (idF == favorRef[i].id) {
                        if (favorRef[i].index.indexOf(indexcolor) === -1) {
                            favorRef[i].index.push(indexcolor);
                            db.collection("Favorite").doc(keyDoc).update({
                                favorite: favorRef
                            })
                                .then(() => {
                                    console.log("Document successfully removed!");
                                });
                        }
                    }
                    else {
                        db.collection("Favorite").doc(keyDoc).update({
                            favorite: firebase.firestore.FieldValue.arrayUnion({
                                id: Number(idF),
                                status: boolF,
                                index: [indexcolor]
                            })
                        })
                            .then(() => {
                                console.log("Document successfully removed!");
                            });
                    }
                }
            }
            else {
                db.collection("Favorite").doc(keyDoc).set({
                    favorite: [
                        {
                            id: Number(idF),
                            status: boolF,
                            index: [indexcolor]
                        }
                    ]
                })
                    .then(() => {
                        console.log("Document successfully written!");
                    })
                    .catch((error) => {
                        console.error("Error writing document: ", error);
                    });
            }
        } else {
            db.collection("Favorite").doc(keyDoc).set({
                favorite: [
                    {
                        id: Number(idF),
                        status: boolF,
                        index: [indexcolor]
                    }
                ]
            })
                .then(() => {
                    console.log("Document successfully written!");
                })
                .catch((error) => {
                    console.error("Error writing document: ", error);
                });
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}

model.setValueBagToFirebase = async (idB, boolB, indexcolor) => {
    let keyDoc = await firebase.auth().currentUser.uid;
    let accessListBag = db.collection('Bag').doc(keyDoc);
    accessListBag.get().then((doc) => {
        if (doc.exists) {
            let bagRef = [];
            bagRef = doc.data().bag;
            if (bagRef.length != 0) {
                for (let i in bagRef) {
                    if (idB == bagRef[i].id) {
                        if (bagRef[i].index.indexOf(indexcolor) === -1) {
                            console.log(11);
                            bagRef[i].index.push(indexcolor);
                            bagRef[i].count.push(1);
                            bagRef[i].size.push(40);
                            db.collection("Bag").doc(keyDoc).update({
                                bag: bagRef
                            })
                                .then(() => {
                                    console.log("Document successfully removed!");
                                });
                            model.getCountFromBag();
                        }
                    }
                    else {
                        console.log(12);
                        db.collection("Bag").doc(keyDoc).update({
                            bag: firebase.firestore.FieldValue.arrayUnion({
                                id: Number(idB),
                                status: boolB,
                                count: [1],
                                index: [indexcolor],
                                size: [40]
                            })
                        })
                            .then(() => {
                                console.log("Document successfully removed!");
                            });
                        model.getCountFromBag();
                    }
                }
            }
            else {
                console.log(13);
                db.collection("Bag").doc(keyDoc).set({
                    bag: [
                        {
                            id: Number(idB),
                            status: boolB,
                            count: [1],
                            index: [indexcolor],
                            size: [40]
                        }
                    ]
                })
                    .then(() => {
                        console.log("Document successfully written!");
                    })
                    .catch((error) => {
                        console.error("Error writing document: ", error);
                    });
                model.getCountFromBag();
            }
        } else {
            db.collection("Bag").doc(keyDoc).set({
                bag: [
                    {
                        id: Number(idB),
                        status: boolB,
                        count: [1],
                        index: [indexcolor],
                        size: [40]
                    }
                ]
            })
                .then(() => {
                    console.log("Document successfully written!");
                })
                .catch((error) => {
                    console.error("Error writing document: ", error);
                });
            model.getCountFromBag();
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
    // Check count in the Bag and caculate Sum Price
    let sumPrice = await model.caculatePriceFromBag();
    // Write TotalBag to firebase
    await model.writePriceToBag(sumPrice);
}

model.deleteValueBagFromFirebase = async (idB) => {
    // delete item bag
    let keyDoc = await firebase.auth().currentUser.uid;
    let accessListBag = db.collection('Bag').doc(keyDoc);
    await accessListBag.get().then((doc) => {
        if (doc.exists) {
            let bagRef = doc.data().bag;
            for (let i in bagRef) {
                if (bagRef[i].id == idB) {
                    const obj = bagRef[i];
                    db.collection("Bag").doc(keyDoc).update({
                        bag: firebase.firestore.FieldValue.arrayRemove(
                            obj
                        )
                    })
                        .then(() => {
                            console.log("Document successfully removed!");
                        });
                    model.getCountFromBag('Bag');
                }
            }
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
    // Check count in the Bag and caculate Sum Price
    let sumPrice = await model.caculatePriceFromBag();
    // Write TotalBag to firebase
    await model.writePriceToBag(sumPrice);
}
model.deleteValueFavoriteFromFirebase = async (idF) => {
    // delete item bag
    let keyDoc = await firebase.auth().currentUser.uid;
    let accessListFavorite = db.collection('Favorite').doc(keyDoc);
    await accessListFavorite.get().then((doc) => {
        if (doc.exists) {
            let favorRef = doc.data().favorite;
            for (let i in favorRef) {
                if (favorRef[i].id == idF) {
                    const obj = favorRef[i];
                    db.collection("Favorite").doc(keyDoc).update({
                        favorite: firebase.firestore.FieldValue.arrayRemove(
                            obj
                        )
                    })
                        .then(() => {
                            console.log("Document successfully removed!");
                        });
                }
            }
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}

model.deleteItemsInValueBagFromFirebase = async (obj) => {
    // delete item bag
    let keyDoc = await firebase.auth().currentUser.uid;
    let accessListBag = db.collection('Bag').doc(keyDoc);
    await accessListBag.get().then((doc) => {
        if (doc.exists) {
            let bagRef = doc.data().bag;
            for (let i in bagRef) {
                if (bagRef[i].id == obj.id) {
                    if (bagRef[i].index.length == 1) {
                        bagRef.splice(i, 1);
                    }
                    else {
                        let k = bagRef[i].index.indexOf(obj.indexV);
                        bagRef[i].index.splice(k, 1);
                        bagRef[i].count.splice(k, 1);
                    }
                }
            }
            console.log(bagRef);
            db.collection("Bag").doc(keyDoc).update({
                bag: bagRef
            })
                .then(() => {
                    console.log("Document successfully removed!");
                });

        }

    }).catch((error) => {
        console.log("Error getting document:", error);
    });

    await model.getCountFromBag();
    // Check count in the Bag and caculate Sum Price
    let sumPrice = await model.caculatePriceFromBag();
    // Write TotalBag to firebase
    await model.writePriceToBag(sumPrice);
}
model.deleteItemsInValueFavoriteFromFirebase = async (obj) => {
    // delete item bag
    let keyDoc = await firebase.auth().currentUser.uid;
    let accessListFavorite = db.collection('Favorite').doc(keyDoc);
    await accessListFavorite.get().then((doc) => {
        if (doc.exists) {
            let favorRef = doc.data().favorite;
            for (let i in favorRef) {
                if (favorRef[i].id == obj.id) {
                    if (favorRef[i].index.length == 1) {
                        favorRef.splice(i, 1);
                    }
                    else {
                        let k = favorRef[i].index.indexOf(obj.indexV);
                        favorRef[i].index.splice(k, 1);
                    }
                }
            }
            db.collection("Favorite").doc(keyDoc).update({
                favorite: favorRef
            })
                .then(() => {
                    console.log("Document successfully removed!");
                });

        }

    }).catch((error) => {
        console.log("Error getting document:", error);
    });

}

model.deleteItems = async (obj) => {
    // delete item bag
    let keyDoc = await firebase.auth().currentUser.uid;
    let accessListBag = db.collection('Bag').doc(keyDoc);
    await accessListBag.get().then((doc) => {
        if (doc.exists) {
            let bagRef = doc.data().bag;
            for (let i in bagRef) {
                if (bagRef[i].id == obj.id) {
                    if (bagRef[i].index.length == 1) {
                        bagRef.splice(i, 1);
                    }
                    else {
                        let k = bagRef[i].index.indexOf(obj.index);
                        bagRef[i].index.splice(k, 1);
                        bagRef[i].count.splice(k, 1);
                    }
                }
            }
            db.collection("Bag").doc(keyDoc).update({
                bag: bagRef
            })
                .then(() => {
                    console.log("Document successfully removed!");
                });

        }

    }).catch((error) => {
        console.log("Error getting document:", error);
    });
    await model.getCountFromBag();
    // Check count in the Bag and caculate Sum Price
    let sumPrice = await model.caculatePriceFromBag();
    // Write TotalBag to firebase
    await model.writePriceToBag(sumPrice);
}

model.deleteItemsFavorite = async (obj) => {
    // delete item bag
    let keyDoc = await firebase.auth().currentUser.uid;
    let accessListFavorite = db.collection('Favorite').doc(keyDoc);
    await accessListFavorite.get().then((doc) => {
        if (doc.exists) {
            console.log(1);
            let favoriteRef = doc.data().favorite;
            console.log(favoriteRef);
            console.log(obj);
            for (let i in favoriteRef) {
                if (favoriteRef[i].id == obj.id) {
                    console.log(2);
                    if (favoriteRef[i].index.length == 1) {
                        favoriteRef.splice(i, 1);
                    }
                    else {
                        console.log(3);
                        let k = favoriteRef[i].index.indexOf(obj.index);
                        favoriteRef[i].index.splice(k, 1);
                    }
                }
            }
            db.collection("Favorite").doc(keyDoc).update({
                favorite: favoriteRef
            })
                .then(() => {
                    console.log("Document successfully removed!");
                });

        }

    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}
model.getCountFromBag = async () => {
    let sumCount = 0;
    let keyDoc = await firebase.auth().currentUser.uid;
    const accessListBag = db.collection('Bag').doc(keyDoc);
    await accessListBag.get().then((doc) => {
        if (doc.exists) {
            let bagRef = doc.data().bag;
            for (let i in bagRef) {
                for (let j in bagRef[i].count) {
                    sumCount += bagRef[i].count[j];
                }
            }
            view.setSumCountOfBag(sumCount);
        } else {

        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}
model.newDeleteItems = async (obj) => {
    // delete item bag
    let keyDoc = await firebase.auth().currentUser.uid;
    let accessListBag = db.collection('Bag').doc(keyDoc);
    await accessListBag.get().then((doc) => {
        if (doc.exists) {
            let bagRef = doc.data().bag;
            for (let i in bagRef) {
                if (bagRef[i].id == obj.id) {
                    if (bagRef[i].index.length == 1) {
                        bagRef.splice(i, 1);
                    }
                    else {
                        let k = bagRef[i].index.indexOf(obj.index);
                        bagRef[i].index.splice(k, 1);
                        bagRef[i].count.splice(k, 1);
                    }
                }
            }
            db.collection("Bag").doc(keyDoc).update({
                bag: bagRef
            })
                .then(() => {
                    console.log("Document successfully removed!");
                });

        }

    }).catch((error) => {
        console.log("Error getting document:", error);
    });
    await model.newGetCountFromBag();
    // Check count in the Bag and caculate Sum Price
    let sumPrice = await model.caculatePriceFromBag();
    // Write TotalBag to firebase
    await model.writePriceToBag(sumPrice);
}
model.newGetCountFromBag = async () => {
    let sumCount = 0;
    let keyDoc = await firebase.auth().currentUser.uid;
    const accessListBag = db.collection('Bag').doc(keyDoc);
    await accessListBag.get().then((doc) => {
        if (doc.exists) {
            let bagRef = doc.data().bag;
            for (let i in bagRef) {
                for (let j in bagRef[i].count) {
                    sumCount += bagRef[i].count[j];
                }
            }
        } else {

        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}
model.caculatePriceFromBag = async () => {
    var arrInforImg = [];
    var arrInforShoes = [];
    var arrInforImgHL = [];
    const accessInforImg = db.collection('Image').doc('menShoes');
    await accessInforImg.get().then((doc) => {
        if (doc.exists) {
            arrInforShoes = doc.data().image;
        } else {

        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
    // HightLigth//
    const accessInforImgHL = db.collection('Image').doc('hightligths');
    await accessInforImgHL.get().then((doc) => {
        if (doc.exists) {
            arrInforImgHL = doc.data().image;
        } else {

        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
    // Jordan//
    var arrInforImgJordan = [];
    const accessInforImgJordan = db.collection('Image').doc('menJordan');
    await accessInforImgJordan.get().then((doc) => {
        if (doc.exists) {
            arrInforImgJordan = doc.data().image;
        } else {
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
    arrInforImg = arrInforShoes.concat(arrInforImgHL, arrInforImgJordan);
    // ---------//
    var arrBag = [];
    let keyDoc = await firebase.auth().currentUser.uid;
    let accessListBag = db.collection('Bag').doc(keyDoc);
    await accessListBag.get().then((doc) => {
        if (doc.exists) {
            arrBag = doc.data().bag;
        } else {

        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
    let tempIdBag = [];
    let tempIdImg = []
    for (let i in arrBag) {
        tempIdBag.push(arrBag[i].id);
    }
    for (let i in arrInforImg) {
        tempIdImg.push(arrInforImg[i].id);
    }
    let newArr = []
    for (let i in tempIdBag) {
        if (tempIdImg.indexOf(tempIdBag[i]) !== -1) {
            let obj = {
                ...arrInforImg[tempIdImg.indexOf(tempIdBag[i])],
                count: arrBag[i].count
            }
            newArr.push(obj);
        }
    }
    let sumPrice = 0;
    for (let i in newArr) {
        for (let j in newArr[i].count) {
            sumPrice += newArr[i].count[j] * newArr[i].numprice;
        }
    }
    return sumPrice;
}
model.writePriceToBag = async (sumPrice) => {
    let keyDoc = await firebase.auth().currentUser.uid;
    let accessListBag = db.collection('Bag').doc(keyDoc);
    await accessListBag.get().then((doc) => {
        if (doc.exists) {
            let bagRef = doc.data().TotalPrice;
            if (!bagRef) {
                db.collection("Bag").doc(keyDoc).update({
                    TotalPrice: sumPrice
                })
                    .then(() => {
                        console.log("Document successfully written!");
                    })
                    .catch((error) => {
                        console.error("Error writing document: ", error);
                    });
            }
            else {
                db.collection("Bag").doc(keyDoc).update({
                    TotalPrice: sumPrice
                })
                    .then(() => {
                        console.log("Document successfully written!");
                    })
                    .catch((error) => {
                        console.error("Error writing document: ", error);
                    });
            }
        } else {
            db.collection("Bag").doc(keyDoc).update({
                TotalPrice: sumPrice
            })
                .then(() => {
                    console.log("Document successfully written!");
                })
                .catch((error) => {
                    console.error("Error writing document: ", error);
                });
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}

model.getInforBag = async (collect1, document, collect2) => {
    var arrInforImg = [];
    var arrInforShoes = [];
    var arrBag = [];
    const accessInforImg = db.collection(collect1).doc(document);
    await accessInforImg.get().then((doc) => {
        if (doc.exists) {
            arrInforShoes = doc.data().image
            checkImg = true;
        } else {
            checkImg = false;
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
    // HightLigth//
    var arrInforImgHL = [];
    const accessInforImgHL = db.collection('Image').doc('hightligths');
    await accessInforImgHL.get().then((doc) => {
        if (doc.exists) {
            arrInforImgHL = doc.data().image;
        } else {

        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
    // Jordan//
    var arrInforImgJordan = [];
    const accessInforImgJordan = db.collection('Image').doc('menJordan');
    await accessInforImgJordan.get().then((doc) => {
        if (doc.exists) {
            arrInforImgJordan = doc.data().image;
        } else {
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
    arrInforImg = arrInforShoes.concat(arrInforImgHL, arrInforImgJordan);
    // ---------//
    let keyDoc = await firebase.auth().currentUser.uid;
    const accessListBag = db.collection(collect2).doc(keyDoc);
    await accessListBag.get().then((doc) => {
        if (doc.exists) {
            arrBag = doc.data().bag;
        } else {

        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });

    let tempIdBag = [];
    let tempIdImg = []
    for (let i in arrBag) {
        tempIdBag.push(arrBag[i].id);
    }
    for (let i in arrInforImg) {
        tempIdImg.push(arrInforImg[i].id);
    }
    let newArr = []
    for (let i in tempIdBag) {
        if (tempIdImg.indexOf(tempIdBag[i]) !== -1) {
            let bagIndex = arrBag[i].index;
            for (let j in bagIndex) {
                if (bagIndex[j] == 0) {
                    let obj = {
                        url: arrInforImg[tempIdImg.indexOf(tempIdBag[i])].url,
                        count: arrBag[i].count[j],
                        index: arrBag[i].index[j],
                        color: arrInforImg[tempIdImg.indexOf(tempIdBag[i])].color[0],
                        numprice: arrInforImg[tempIdImg.indexOf(tempIdBag[i])].numprice,
                        name: arrInforImg[tempIdImg.indexOf(tempIdBag[i])].name,
                        gender: arrInforImg[tempIdImg.indexOf(tempIdBag[i])].gender
                    }
                    newArr.push(obj);
                }
                else {
                    let obj = {
                        url: arrInforImg[tempIdImg.indexOf(tempIdBag[i])].thumburl[bagIndex[j] - 1],
                        count: arrBag[i].count[j],
                        index: arrBag[i].index[j],
                        color: arrInforImg[tempIdImg.indexOf(tempIdBag[i])].color[bagIndex[j]],
                        numprice: arrInforImg[tempIdImg.indexOf(tempIdBag[i])].numprice,
                        name: arrInforImg[tempIdImg.indexOf(tempIdBag[i])].name,
                        gender: arrInforImg[tempIdImg.indexOf(tempIdBag[i])].gender
                    }
                    newArr.push(obj);
                }
            }
        }
    }
    return newArr;
}

model.readInforBag = async (collect1, document, collect2) => {
    var arrInforImg = [];
    var arrInforImgHL = [];
    var arrInforImgJordan = [];
    var arrBag = [];
    const accessInforImg = db.collection(collect1).doc(document);
    await accessInforImg.get().then((doc) => {
        if (doc.exists) {
            arrInforImg = doc.data().image;
        } else {
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
    // hightligths//
    const accessInforImgHL = db.collection('Image').doc('hightligths');
    await accessInforImgHL.get().then((doc) => {
        if (doc.exists) {
            arrInforImgHL = doc.data().image;
        } else {
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
    // Jordan//
    const accessInforImgJordan = db.collection('Image').doc('menJordan');
    await accessInforImgJordan.get().then((doc) => {
        if (doc.exists) {
            arrInforImgJordan = doc.data().image;
        } else {
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
    let allProduct = arrInforImg.concat(arrInforImgHL, arrInforImgJordan);
    // ----------//
    let keyDoc = await firebase.auth().currentUser.uid;
    const accessListBag = db.collection(collect2).doc(keyDoc);
    await accessListBag.get().then((doc) => {
        if (doc.exists) {
            arrBag = doc.data().bag;
        } else {

        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });

    let tempIdBag = [];
    let tempIdImg = [];

    for (let i in arrBag) {
        tempIdBag.push(arrBag[i].id);
    }
    for (let i in allProduct) {
        tempIdImg.push(allProduct[i].id);
    }
    let newArr = []
    for (let i in tempIdBag) {
        if (tempIdImg.indexOf(tempIdBag[i]) !== -1) {
            let bagIndex = arrBag[i].index;
            for (let j in bagIndex) {
                if (bagIndex[j] == 0) {
                    let obj = {
                        id: arrBag[i].id,
                        url: allProduct[tempIdImg.indexOf(tempIdBag[i])].url,
                        count: arrBag[i].count[j],
                        index: arrBag[i].index[j],
                        color: allProduct[tempIdImg.indexOf(tempIdBag[i])].color[0],
                        numprice: allProduct[tempIdImg.indexOf(tempIdBag[i])].numprice,
                        name: allProduct[tempIdImg.indexOf(tempIdBag[i])].name,
                        gender: allProduct[tempIdImg.indexOf(tempIdBag[i])].gender
                    }
                    newArr.push(obj);
                }
                else {
                    let obj = {
                        id: arrBag[i].id,
                        url: allProduct[tempIdImg.indexOf(tempIdBag[i])].thumburl[bagIndex[j] - 1],
                        count: arrBag[i].count[j],
                        index: arrBag[i].index[j],
                        color: allProduct[tempIdImg.indexOf(tempIdBag[i])].color[bagIndex[j]],
                        numprice: allProduct[tempIdImg.indexOf(tempIdBag[i])].numprice,
                        name: allProduct[tempIdImg.indexOf(tempIdBag[i])].name,
                        gender: allProduct[tempIdImg.indexOf(tempIdBag[i])].gender
                    }
                    newArr.push(obj);
                }
            }
        }
    }
    return newArr;
}

model.readInforBagAndSize = async (collect1, document, collect2) => {
    var arrInforImg = [];
    var arrInforShoes = [];
    var arrBag = [];
    const accessInforImg = db.collection(collect1).doc(document);
    await accessInforImg.get().then((doc) => {
        if (doc.exists) {
            arrInforShoes = doc.data().image;
        } else {
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
    // HightLigth//
    var arrInforImgHL = [];
    const accessInforImgHL = db.collection('Image').doc('hightligths');
    await accessInforImgHL.get().then((doc) => {
        if (doc.exists) {
            arrInforImgHL = doc.data().image;
        } else {

        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
    // Jordan//
    var arrInforImgJordan = [];
    const accessInforImgJordan = db.collection('Image').doc('menJordan');
    await accessInforImgJordan.get().then((doc) => {
        if (doc.exists) {
            arrInforImgJordan = doc.data().image;
        } else {
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
    arrInforImg = arrInforShoes.concat(arrInforImgHL, arrInforImgJordan);
    // ---------//
    let keyDoc = await firebase.auth().currentUser.uid;
    const accessListBag = db.collection(collect2).doc(keyDoc);
    await accessListBag.get().then((doc) => {
        if (doc.exists) {
            arrBag = doc.data().bag;
        } else {

        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });

    let tempIdBag = [];
    let tempIdImg = []
    for (let i in arrBag) {
        tempIdBag.push(arrBag[i].id);
    }
    for (let i in arrInforImg) {
        tempIdImg.push(arrInforImg[i].id);
    }
    let newArr = []
    for (let i in tempIdBag) {
        if (tempIdImg.indexOf(tempIdBag[i]) !== -1) {
            let bagIndex = arrBag[i].index;
            for (let j in bagIndex) {
                if (bagIndex[j] == 0) {
                    let obj = {
                        id: arrBag[i].id,
                        url: arrInforImg[tempIdImg.indexOf(tempIdBag[i])].url,
                        count: arrBag[i].count[j],
                        index: arrBag[i].index[j],
                        color: arrInforImg[tempIdImg.indexOf(tempIdBag[i])].color[0],
                        numprice: arrInforImg[tempIdImg.indexOf(tempIdBag[i])].numprice,
                        price: arrInforImg[tempIdImg.indexOf(tempIdBag[i])].price,
                        name: arrInforImg[tempIdImg.indexOf(tempIdBag[i])].name,
                        gender: arrInforImg[tempIdImg.indexOf(tempIdBag[i])].gender,
                        size: arrBag[i].size[j]
                    }
                    newArr.push(obj);
                }
                else {
                    let obj = {
                        id: arrBag[i].id,
                        url: arrInforImg[tempIdImg.indexOf(tempIdBag[i])].thumburl[bagIndex[j] - 1],
                        count: arrBag[i].count[j],
                        index: arrBag[i].index[j],
                        color: arrInforImg[tempIdImg.indexOf(tempIdBag[i])].color[bagIndex[j]],
                        numprice: arrInforImg[tempIdImg.indexOf(tempIdBag[i])].numprice,
                        price: arrInforImg[tempIdImg.indexOf(tempIdBag[i])].price,
                        name: arrInforImg[tempIdImg.indexOf(tempIdBag[i])].name,
                        gender: arrInforImg[tempIdImg.indexOf(tempIdBag[i])].gender,
                        size: arrBag[i].size[j]
                    }
                    newArr.push(obj);
                }
            }
        }
    }
    return newArr;
}

model.readInforBagAndMenShoes = async (collect1, document, collect2) => {
    var arrInforImg = [];
    var arrInforShoes = [];
    var arrBag = [];
    const accessInforImg = db.collection(collect1).doc(document);
    await accessInforImg.get().then((doc) => {
        if (doc.exists) {
            arrInforShoes = doc.data().image;
        } else {
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
    // HightLigth//
    var arrInforImgHL = [];
    const accessInforImgHL = db.collection('Image').doc('hightligths');
    await accessInforImgHL.get().then((doc) => {
        if (doc.exists) {
            arrInforImgHL = doc.data().image;
        } else {

        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
    // Jordan//
    var arrInforImgJordan = [];
    const accessInforImgJordan = db.collection('Image').doc('menJordan');
    await accessInforImgJordan.get().then((doc) => {
        if (doc.exists) {
            arrInforImgJordan = doc.data().image;
        } else {
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
    arrInforImg = arrInforShoes.concat(arrInforImgHL, arrInforImgJordan);
    // ---------//
    let keyDoc = await firebase.auth().currentUser.uid;
    const accessListBag = db.collection(collect2).doc(keyDoc);
    await accessListBag.get().then((doc) => {
        if (doc.exists) {
            arrBag = doc.data().bag;
        } else {

        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });

    let tempIdBag = [];
    let tempIdImg = []
    for (let i in arrBag) {
        tempIdBag.push(arrBag[i].id);
    }
    for (let i in arrInforImg) {
        tempIdImg.push(arrInforImg[i].id);
    }
    let newArr = []
    for (let i in tempIdImg) {
        if (tempIdBag.indexOf(tempIdImg[i]) !== -1) {
            let index = tempIdBag.indexOf(tempIdImg[i]);
            let obj = {
                ...arrInforImg[i],
                count: arrBag[index].count,
                arrindex: arrBag[index].index,
                status: arrBag[index].status
            }
            newArr.push(obj);
        }
        else {
            let obj = {
                ...arrInforImg[i]
            }
            newArr.push(obj);
        }
    }
    return newArr;
}

model.readInforFavoriteAndMenShoes = async (collect1, document, collect2) => {
    var arrInforImg = [];
    var arrInforShoes = [];
    var arrFavorite = [];
    const accessInforImg = db.collection(collect1).doc(document);
    await accessInforImg.get().then((doc) => {
        if (doc.exists) {
            arrInforShoes = doc.data().image;
        } else {
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
    // HightLigth//
    var arrInforImgHL = [];
    const accessInforImgHL = db.collection('Image').doc('hightligths');
    await accessInforImgHL.get().then((doc) => {
        if (doc.exists) {
            arrInforImgHL = doc.data().image;
        } else {

        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
    // Jordan//
    var arrInforImgJordan = [];
    const accessInforImgJordan = db.collection('Image').doc('menJordan');
    await accessInforImgJordan.get().then((doc) => {
        if (doc.exists) {
            arrInforImgJordan = doc.data().image;
        } else {
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
    arrInforImg = arrInforShoes.concat(arrInforImgHL, arrInforImgJordan);
    // ---------//
    let keyDoc = await firebase.auth().currentUser.uid;
    const accessListFavorite = db.collection(collect2).doc(keyDoc);
    await accessListFavorite.get().then((doc) => {
        if (doc.exists) {
            arrFavorite = doc.data().favorite;
        } else {

        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });

    let tempIdFavorite = [];
    let tempIdImg = []
    for (let i in arrFavorite) {
        tempIdFavorite.push(arrFavorite[i].id);
    }
    for (let i in arrInforImg) {
        tempIdImg.push(arrInforImg[i].id);
    }
    let newArr = []
    for (let i in tempIdImg) {
        if (tempIdFavorite.indexOf(tempIdImg[i]) !== -1) {
            let index = tempIdFavorite.indexOf(tempIdImg[i]);
            let obj = {
                ...arrInforImg[i],
                arrindex: arrFavorite[index].index,
                status: arrFavorite[index].status
            }
            newArr.push(obj);
        }
        else {
            let obj = {
                ...arrInforImg[i]
            }
            newArr.push(obj);
        }
    }
    return newArr;
}

model.setTotalPrice = async (collect, document) => {
    var arrInforImg = [];
    var arrInforShoes = [];
    const accessInforImg = db.collection(collect).doc(document);
    await accessInforImg.get().then((doc) => {
        if (doc.exists) {
            arrInforShoes = doc.data().image;
        } else {

        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
    // HightLigth//
    var arrInforImgHL = [];
    const accessInforImgHL = db.collection('Image').doc('hightligths');
    await accessInforImgHL.get().then((doc) => {
        if (doc.exists) {
            arrInforImgHL = doc.data().image;
        } else {

        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
    // Jordan//
    var arrInforImgJordan = [];
    const accessInforImgJordan = db.collection('Image').doc('menJordan');
    await accessInforImgJordan.get().then((doc) => {
        if (doc.exists) {
            arrInforImgJordan = doc.data().image;
        } else {
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
    arrInforImg = arrInforShoes.concat(arrInforImgHL, arrInforImgJordan);
    // ---------//
    var arrBag = [];
    let keyDoc = await firebase.auth().currentUser.uid;
    let accessListBag = db.collection('Bag').doc(keyDoc);
    await accessListBag.get().then((doc) => {
        if (doc.exists) {
            arrBag = doc.data().bag;
        } else {

        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });

    let tempIdBag = [];
    let tempIdImg = []
    for (let i in arrBag) {
        tempIdBag.push(arrBag[i].id);
    }
    for (let i in arrInforImg) {
        tempIdImg.push(arrInforImg[i].id);
    }
    let newArr = []
    for (let i in tempIdBag) {
        if (tempIdImg.indexOf(tempIdBag[i]) !== -1) {
            let obj = {
                ...arrInforImg[tempIdImg.indexOf(tempIdBag[i])],
                count: arrBag[i].count
            }
            newArr.push(obj);
        }
    }
    let sumPrice = 0;
    for (let i in newArr) {
        sumPrice += newArr[i].count * newArr[i].numprice;
    }
    // Write TotalBag to firebase
    accessListBag = db.collection('Bag').doc(keyDoc);
    await accessListBag.get().then((doc) => {
        if (doc.exists) {
            let bagRef = doc.data().TotalPrice;
            if (bagRef) {
                db.collection("Bag").doc(keyDoc).update({
                    TotalPrice: firebase.firestore.FieldValue.delete()
                })
                db.collection("Bag").doc(keyDoc).update({
                    TotalPrice: sumPrice
                })
                    .then(() => {
                        console.log("Document successfully written!");
                    })
                    .catch((error) => {
                        console.error("Error writing document: ", error);
                    });
            }
            else {
                db.collection("Bag").doc(keyDoc).update({
                    TotalPrice: sumPrice

                })
                    .then(() => {
                        console.log("Document successfully written!");
                    })
                    .catch((error) => {
                        console.error("Error writing document: ", error);
                    });
            }
        } else {
            db.collection("Bag").doc(keyDoc).update({
                TotalPrice: sumPrice
            })
                .then(() => {
                    console.log("Document successfully written!");
                })
                .catch((error) => {
                    console.error("Error writing document: ", error);
                });
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}

model.setNewTotalPrice = async (price) => {
    let keyDoc = await firebase.auth().currentUser.uid;
    let accessListBag = db.collection('Bag').doc(keyDoc);
    await accessListBag.get().then((doc) => {
        if (doc.exists) {
            let bagRef = doc.data().TotalPrice;
            if (bagRef) {
                db.collection("Bag").doc(keyDoc).update({
                    TotalPrice: firebase.firestore.FieldValue.delete()
                })
                db.collection("Bag").doc(keyDoc).update({
                    TotalPrice: price
                })
                    .then(() => {
                        console.log("Document successfully written!");
                    })
                    .catch((error) => {
                        console.error("Error writing document: ", error);
                    });
            }
            else {
                db.collection("Bag").doc(keyDoc).update({
                    TotalPrice: price

                })
                    .then(() => {
                        console.log("Document successfully written!");
                    })
                    .catch((error) => {
                        console.error("Error writing document: ", error);
                    });
            }
        } else {
            db.collection("Bag").doc(keyDoc).update({
                TotalPrice: price
            })
                .then(() => {
                    console.log("Document successfully written!");
                })
                .catch((error) => {
                    console.error("Error writing document: ", error);
                });
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}

model.getTotalPriceFromBag = async (collect) => {
    let keyDoc = await firebase.auth().currentUser.uid;
    let totalPrice = 0;
    let accessListBag = db.collection(collect).doc(keyDoc);
    await accessListBag.get().then((doc) => {
        if (doc.exists) {
            totalPrice = doc.data().TotalPrice;
        } else {
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
    let strSumPrice = '';
    strSumPrice = formatCash(totalPrice.toString());
    view.setTotalPrice(strSumPrice);
}
model.getTotalPriceAndProductFromBag = async (collect) => {
    let keyDoc = await firebase.auth().currentUser.uid;
    let totalPrice = 0;
    let accessListBag = db.collection(collect).doc(keyDoc);
    await accessListBag.get().then((doc) => {
        if (doc.exists) {
            totalPrice = doc.data().TotalPrice;
        } else {
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
    let strSumPrice = '';
    strSumPrice = formatCash(totalPrice.toString());
    return strSumPrice;
}
model.setCountProductToBag = async (obj) => {
    let keyDoc = await firebase.auth().currentUser.uid;
    let accessListBag = db.collection('Bag').doc(keyDoc);
    await accessListBag.get().then((doc) => {
        if (doc.exists) {
            let data = doc.data().bag;
            for (let i in data) {
                if (data[i].id == obj.id) {
                    data[i].count[obj.index] = obj.count;
                }
            }
            db.collection("Bag").doc(keyDoc).update({
                bag: data
            })
                .then(() => {
                    console.log("Document successfully updated!");
                });
        } else {
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}
model.writeSizeToBag = async (obj) => {
    let keyDoc = await firebase.auth().currentUser.uid;
    let accessListBag = db.collection('Bag').doc(keyDoc);
    await accessListBag.get().then((doc) => {
        if (doc.exists) {
            let data = doc.data().bag;
            for (let i in data) {
                if (data[i].id == obj.id) {
                    if (data[i].index.length == 1) {
                        data[i].size[0] = obj.size;
                    }
                    else {
                        data[i].size[obj.index] = obj.size;
                    }
                }
            }
            db.collection("Bag").doc(keyDoc).update({
                bag: data
            })
                .then(() => {
                    console.log("Document successfully updated!");
                });
        } else {
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}
model.getInforFavorite = async (collect1, document, collect2) => {
    var arrInforImg = [];
    var arrInforShoes = [];
    var arrFavorite = [];
    const accessInforImg = db.collection(collect1).doc(document);
    await accessInforImg.get().then((doc) => {
        if (doc.exists) {
            arrInforShoes = doc.data().image;
        } else {
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
    // HightLight
    var arrInforImgHL = [];
    const accessInforImgHL = db.collection(collect1).doc('hightligths');
    await accessInforImgHL.get().then((doc) => {
        if (doc.exists) {
            arrInforImgHL = doc.data().image;
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
    // MenJordan
    var arrInforImgJordan = [];
    const accessInforImgJordan = db.collection(collect1).doc('menJordan');
    await accessInforImgJordan.get().then((doc) => {
        if (doc.exists) {
            arrInforImgJordan = doc.data().image;
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
    arrInforImg = arrInforShoes.concat(arrInforImgHL, arrInforImgJordan);
    let keyDoc = await firebase.auth().currentUser.uid;
    const accessListFavorite = db.collection(collect2).doc(keyDoc);
    await accessListFavorite.get().then((doc) => {
        if (doc.exists) {
            arrFavorite = doc.data().favorite;
        } else {

        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });

    let tempFavorite = [];
    let tempIdImg = []
    for (let i in arrFavorite) {
        tempFavorite.push(arrFavorite[i].id);
    }
    for (let i in arrInforImg) {
        tempIdImg.push(arrInforImg[i].id);
    }
    let newArr = []
    for (let i in tempFavorite) {
        if (tempIdImg.indexOf(tempFavorite[i]) !== -1) {
            let favoriteIndex = arrFavorite[i].index;
            for (let j in favoriteIndex) {
                if (favoriteIndex[j] == 0) {
                    let obj = {
                        id: arrFavorite[i].id,
                        url: arrInforImg[tempIdImg.indexOf(tempFavorite[i])].url,
                        index: arrFavorite[i].index[j],
                        color: arrInforImg[tempIdImg.indexOf(tempFavorite[i])].color[0],
                        numprice: arrInforImg[tempIdImg.indexOf(tempFavorite[i])].numprice,
                        name: arrInforImg[tempIdImg.indexOf(tempFavorite[i])].name,
                        gender: arrInforImg[tempIdImg.indexOf(tempFavorite[i])].gender
                    }
                    newArr.push(obj);
                }
                else {
                    let obj = {
                        id: arrFavorite[i].id,
                        url: arrInforImg[tempIdImg.indexOf(tempFavorite[i])].thumburl[favoriteIndex[j] - 1],
                        index: arrFavorite[i].index[j],
                        color: arrInforImg[tempIdImg.indexOf(tempFavorite[i])].color[0],
                        numprice: arrInforImg[tempIdImg.indexOf(tempFavorite[i])].numprice,
                        name: arrInforImg[tempIdImg.indexOf(tempFavorite[i])].name,
                        gender: arrInforImg[tempIdImg.indexOf(tempFavorite[i])].gender
                    }
                    newArr.push(obj);
                }
            }
        }
    }
    return newArr;
    view.setInforFavorite(newArr);
}
model.getPassword = async () => {
    let oldpassword;
    if (auth.currentUser !== null) {
        let res = await firebase.auth().currentUser.email;
        await db.collection("users").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                let temporaryObj = JSON.parse(JSON.stringify(doc.data()))
                if (temporaryObj.email === res) {
                    oldpassword = temporaryObj.pass;
                }
            });
        });
    }
    return oldpassword;
}
model.updatepassWord = async (newpass, oldpassword) => {
    let keyDoc = firebase.auth().currentUser.uid;
    await firebase.auth()
        .signInWithEmailAndPassword(auth.currentUser.email, oldpassword)
        .then(() => {
            firebase.auth().currentUser.updatePassword(newpass)
                .then(async function () {
                    await db.collection('users').doc(auth.currentUser.uid).update({
                        pass: newpass
                    })
                    await model.getLogout();
                })
                .catch(function (err) {
                    console.log(err.message);
                });
        })
        .then(() => {
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
}

model.raedInforUser = async () => {
    let value = {};
    let keyDoc = auth.currentUser.uid;
    let docRef = db.collection('users').doc(keyDoc);
    await docRef.get().then((doc) => {
        if (doc.exists) {
            value = doc.data();
        }
    })
    return value;
}

model.setAvatar = async (name, extention, files) => {
    var ImgToUpload = files[0];
    var ImgName = name + extention;
    let user = firebase.auth().currentUser;
    var storageRef = firebase.storage().ref();
    var uploadTask = storageRef.child(`Avatar/${user.uid}/` + ImgName).put(ImgToUpload);
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
        (snapshot) => {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            //var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            //proglab.innerHTML = "Upload is " + progress + '% done'
            //console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED: // or 'paused'
                    console.log('Upload is paused');
                    break;
                case firebase.storage.TaskState.RUNNING: // or 'running'
                    console.log('Upload is running');
                    break;
            }
        },
        (error) => {
            // A full list of error codes is available at
            // https://firebase.google.com/docs/storage/web/handle-errors
            switch (error.code) {
                case 'storage/unauthorized':
                    // User doesn't have permission to access the object
                    break;
                case 'storage/canceled':
                    // User canceled the upload
                    break;

                // ...

                case 'storage/unknown':
                    // Unknown error occurred, inspect error.serverResponse
                    break;
            }
        },
        () => {
            // Upload completed successfully, now we can get the download URL
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                user.updateProfile({
                    photoURL: downloadURL       // <- URL from uploaded photo.
                }).then(function () {
                    db.collection('users').doc(auth.currentUser.uid).update({
                        photoUri: downloadURL
                    });
                    db.collection('listchat').doc(auth.currentUser.uid).update({
                        photoUrl1: downloadURL
                    });
                });
            });
        }
    );
}

model.forgotPassword = async (email) => {
    console.log(email);
    firebase.auth().sendPasswordResetEmail(email)
        .then(() => {
            console.log('OK');
            // Password reset email sent!
            // ..
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage);
            // ..
        });

}

model.searchShoes = async (keyword) => {
    let data = [];
    let data1 = [];
    let data2 = [];
    let data3 = [];
    let res1 = db.collection('Image').doc('menShoes');
    await res1.get().then((doc) => {
        if (doc.exists) {
            data1 = doc.data().image;
        }
    });
    let res2 = db.collection('Image').doc('menJordan');
    await res2.get().then((doc) => {
        if (doc.exists) {
            data2 = doc.data().image;
        }
    });
    let res3 = db.collection('Image').doc('hightligths');
    await res3.get().then((doc) => {
        if (doc.exists) {
            data3 = doc.data().image;
        }
    });
    data = data1.concat(data2, data3);
    let nameProArr = data.reduce((arr, item) => {
        return [...arr, item.name]
    }, []);
    let index = [];
    nameProArr.filter((item, i) => {
        if (item.indexOf(keyword) != -1) {
            index.push(i);
        }
    }, []);
    let newData = [];
    for (let i in index) {
        newData.push(data[index[i]]);
    }
    return newData;
}

model.getAgaintInforFavorite = async (collect1, document, collect2) => {
    var arrInforImg = [];
    var arrFavorite = [];
    var arrBag = [];
    let checkImg = false;
    let checkF = false;
    const accessInforImg = db.collection(collect1).doc(document);
    await accessInforImg.get().then((doc) => {
        if (doc.exists) {
            arrInforImg = doc.data().image
            checkImg = true;
        } else {
            checkImg = false;
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });

    let keyDoc = await firebase.auth().currentUser.uid;
    const accessListFavorite = db.collection(collect2).doc(keyDoc);
    await accessListFavorite.get().then((doc) => {
        if (doc.exists) {
            arrFavorite = doc.data().favorite;
        } else {

        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });

    let tempFavorite = [];
    let tempIdImg = []
    for (let i in arrFavorite) {
        tempFavorite.push(arrFavorite[i].id);
    }
    for (let i in arrInforImg) {
        tempIdImg.push(arrInforImg[i].id);
    }
    let newArr = []
    for (let i in tempFavorite) {
        if (tempIdImg.indexOf(tempFavorite[i]) !== -1) {
            let obj = {
                ...arrInforImg[tempIdImg.indexOf(tempFavorite[i])],
            }
            newArr.push(obj);
        }
    }
    view.setAgaintInforFavorite(newArr);
}
model.getListChat = async (idUser) => {
    let email = auth.currentUser.email;
    let currentId = auth.currentUser.uid;
    if (email == 'thienbinh1155@gmail.com') {
        try {
            
            // const docRef = db.collection("listchat");
            // const snapshot = await docRef.get();
            // snapshot.forEach((doc) => {
            //     let temporaryObj = JSON.parse(JSON.stringify(doc.data()));
            //     let objUser = {
            //         ...temporaryObj,
            //         id: doc.id
            //     }
            //     arr.push(objUser);
            // });
            const docRef = await db.collection("listchat")
                .onSnapshot((snapshot) => {
                    let arr = [];
                    snapshot.forEach((doc) => {
                        let temporaryObj = JSON.parse(JSON.stringify(doc.data()));
                        let objUser = {
                            ...temporaryObj,
                            id: doc.id
                        }
                        arr.push(objUser);
                    })
                    view.displayListChat(currentId, arr);
                    controller.readMessages(idUser);
                }, (error) => {

                })
            // view.displayListChat(currentId, arr);
            // controller.readMessages(idUser);
        }
        catch (error) {
            console.log(error.message);
        }
    }
}
model.writeNewMessage = async (namecollect, Obj) => {
    try {
        db.collection(namecollect).doc(auth.currentUser.uid).set({
            ...Obj
        })
    }
    catch (error) {
        console.log(error.message);
    }
}
model.createNewMessage = async () => {
    let arr1 = [], arr2 = [], arr3 = [];
    let uid2 = '';
    let usernameGuess = '';
    let usernameOwner = auth.currentUser.displayName;
    let currentId = firebase.auth().currentUser.uid;
    let urlGuess = '';
    let urladmin = '';
    const accessUser = db.collection('users');
    const readUser = await accessUser.get();
    readUser.forEach((doc) => {
        let temporaryObj = JSON.parse(JSON.stringify(doc.data()));
        arr1.push(temporaryObj);
    })
    let checkUser = false;
    for (let i in arr1) {
        if (arr1[i].email == 'thienbinh1155@gmail.com') {
            checkUser = true;
            uid2 = arr1[i].uid;
            usernameGuess = 'Admin';
            if (arr1[i].hasOwnProperty('photoUri')) {
                urladmin = arr1[i].photoUri;
            }
            else {
                urladmin = 'https://bootdey.com/img/Content/avatar/avatar1.png';
            }
        }
        if (arr1[i].uid == currentId) {
            if (arr1[i].hasOwnProperty('photoUri')) {
                urlGuess = arr1[i].photoUri
            }
            else {
                urlGuess = 'https://bootdey.com/img/Content/avatar/avatar6.png';
            }
        }
    }
    if (checkUser == true) {
        const accessListChat = db.collection('listchat');
        const readListChat = await accessListChat.get();
        readListChat.forEach((doc) => {
            let temporaryObj = JSON.parse(JSON.stringify(doc.data()));
            arr2.push(temporaryObj);
        })
        if (arr2.length == 0) {
            let dayKu = new Date();
            let times = `${dayKu.getFullYear()} ${dayKu.getMonth() + 1} ${dayKu.getDate()} AT ${dayKu.getHours()}:${dayKu.getMinutes()}`;
            let objListChat = {
                username1: usernameOwner,
                uId1: currentId,
                username2: usernameGuess,
                uId2: uid2,
                time: times,
                photoUrl1: urlGuess,
                photoUrl2: urladmin,
                createAt: dayKu.toString()
            }
            model.writeNewMessage("listchat", objListChat)
        }
        else {
            let checkUid = false;
            for (let i in arr2) {
                if (currentId == arr2[i].uId1) {
                    checkUid = true;

                }
            }
            if (checkUid == false) {
                let dayKu = new Date();
                let times = `${dayKu.getFullYear()} ${dayKu.getMonth() + 1} ${dayKu.getDate()} AT ${dayKu.getHours()}:${dayKu.getMinutes()}`;
                let objListChat = {
                    username1: usernameOwner,
                    uId1: currentId,
                    username2: usernameGuess,
                    uId2: uid2,
                    time: times,
                    photoUrl1: urlGuess,
                    photoUrl2: urladmin,
                    createAt: dayKu.toString()
                }
                model.writeNewMessage("listchat", objListChat)
            }
        }
    }
    else {
        alert("Email is not exists, Please sing up with this email")
    }
}
model.sendMessageToFirestore = async (idInputMessage) => {
    let addEmail = '';
    let textMessages = '';
    textMessages = view.getSendMessages(idInputMessage);
    addEmail = await firebase.auth().currentUser.email;
    let dayKu = new Date();
    let time = `${dayKu.getFullYear()}-${dayKu.getMonth() + 1}-${dayKu.getDate()} AT ${dayKu.getHours()}:${dayKu.getMinutes()}`;
    let user = auth.currentUser.displayName;
    let keyDoc;
    if (addEmail == 'thienbinh1155@gmail.com') {
        keyDoc = controller.idMessage;
    }
    else {
        keyDoc = await firebase.auth().currentUser.uid;
    }
    let data = {
        email: addEmail,
        name: user,
        textMessage: textMessages,
        realtime: dayKu.toString(),
        timestamp: time
    }
    if (textMessages != '' && textMessages != " ") {
        const accessListMessage = db.collection('listmessage').doc(keyDoc);
        accessListMessage.get().then((doc) => {
            if (doc.exists) {
                db.collection("listmessage").doc(keyDoc).update({
                    message: firebase.firestore.FieldValue.arrayUnion(
                        {
                            email: data.email,
                            sender: data.name,
                            message: data.textMessage,
                            createAt: data.realtime,
                            time: data.timestamp
                        }
                    )
                })
                    .then(() => {
                        console.log("Document successfully updated!");
                    });
            } else {
                db.collection("listmessage").doc(keyDoc).set({
                    message: [
                        {
                            email: data.email,
                            sender: data.name,
                            message: data.textMessage,
                            createAt: data.realtime,
                            time: data.timestamp
                        }
                    ]
                })
                    .then(() => {
                        console.log("Document successfully written!");
                    })
                    .catch((error) => {
                        console.error("Error writing document: ", error);
                    });

            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    }
}
model.renderMessage = async (idUser) => {
    try {
        firebase.firestore().collection("listmessage").doc(auth.currentUser.uid)
            .onSnapshot((doc) => {
                if (doc.exists) {
                    let result = doc.data().message;
                    view.initialMessage(idUser);
                    view.displayMessages(result, firebase.auth().currentUser.email, idUser);
                }
                else {
                    console.log("No such document!");
                }
            });
    } catch (err) {
        console.log(err.message);
    }
}
model.getMessagesFromFirestore = async (idMessage, idUser) => {
    try {
        if (idMessage != "") {
            firebase.firestore().collection("listmessage").doc(idMessage)
                .onSnapshot((doc) => {
                    if (doc.exists) {
                        let result = doc.data().message;
                        view.initialMessage(idUser);
                        view.displayMessages(result, firebase.auth().currentUser.email, idUser);
                    }
                    else {
                        console.log("No such document!");
                    }
                });
        }
    } catch (err) {
        console.log(err.message);
    }
}
model.getNameGuess = async (idMess) => {
    try {
        let arr = []
        let id = auth.currentUser.uid;
        const listMess = db.collection('listchat');
        const snapshot = await listMess.get();
        snapshot.forEach((doc) => {
            let temporaryObj = JSON.parse(JSON.stringify(doc.data()));
            let objUser = {
                ...temporaryObj,
                id: doc.id
            }
            arr.push(objUser);
        })
        for (let i in arr) {
            if (idMess === arr[i].id) {
                if (id === arr[i].uId1) {
                    view.displayNameGuess(arr[i].username2);
                    view.displayAvatarGuess(arr[i].photoUrl2);
                }
                else {
                    view.displayNameGuess(arr[i].username1);
                    view.displayAvatarGuess(arr[i].photoUrl1);
                }
            }
        }
    } catch (error) {
        console.log(error.message);
    }

}
model.writeHistoryOfBuy = async (data) => {
    let keyDoc = await firebase.auth().currentUser.uid;
    let accessListBuy = db.collection('Buy').doc(keyDoc);
    await accessListBuy.get().then((doc) => {
        if (doc.exists) {
            let bagRef = [];
            bagRef = doc.data().buy;
            if (bagRef.length != 0) {
                console.log(data);
                db.collection("Buy").doc(keyDoc).update({
                    buy: firebase.firestore.FieldValue.arrayUnion({
                        ...data
                    })
                })
                    .then(() => {
                        console.log("Document successfully removed!");
                    });
            }
            else {
                db.collection("Buy").doc(keyDoc).set({
                    buy: [
                        {
                            ...data
                        }
                    ]
                })
                    .then(() => {
                        console.log("Document successfully written!");
                    })
                    .catch((error) => {
                        console.error("Error writing document: ", error);
                    });
            }
        } else {
            db.collection("Buy").doc(keyDoc).set({
                buy: [
                    {
                        ...data
                    }
                ]
            })
                .then(() => {
                    console.log("Document successfully written!");
                })
                .catch((error) => {
                    console.error("Error writing document: ", error);
                });
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}
model.wirteReview = async (obj) => {

    let accessReview = db.collection('Reviews').doc('DetailReview');
    await accessReview.get().then((doc) => {
        if (doc.exists) {
            let data = doc.data().reviews;
            let check = false;
            for (let i in data) {
                if (data[i].url == obj.url) {
                    let value = {
                        username: obj.username,
                        comment: obj.comment,
                        star: obj.countstar,
                        time: obj.time
                    }
                    data[i].content.push(value);
                    check = true;
                    break;
                }
            }
            if (check == false) {
                let data = [];
                let value = {
                    username: obj.username,
                    comment: obj.comment,
                    star: obj.countstar,
                    time: obj.time
                }
                data.push(value);
                db.collection("Reviews").doc('DetailReview').update({
                    reviews: firebase.firestore.FieldValue.arrayUnion(
                        {
                            url: obj.url,
                            content: data
                        }
                    )
                })
                    .then(() => {
                        console.log("Document successfully updated!");
                    });
            }
            else {
                db.collection("Reviews").doc('DetailReview').update({
                    reviews: data
                })
                    .then(() => {
                        console.log("Document successfully updated!");
                    });
            }

        }
        else {
            let data = [];
            let value = {
                username: obj.username,
                comment: obj.comment,
                star: obj.countstar,
                time: obj.time
            }
            data.push(value);
            db.collection("Reviews")
                .doc('DetailReview')
                .set({
                    reviews: [
                        {
                            url: obj.url,
                            content: data
                        }
                    ]
                })
                .then(() => {
                    console.log("Document successfully updated!");
                })
                .catch((error) => {
                    console.log("Error getting document:", error);
                });

        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}
model.readReview = async (url) => {
    let boolData = false;
    let value = {};
    let accessReview = db.collection('Reviews').doc('DetailReview');
    await accessReview.get().then((doc) => {
        if (doc.exists) {
            let data = doc.data().reviews;
            let check = false;
            for (let i in data) {
                if (data[i].url == url) {
                    boolData = true;
                    check = true;
                    value = {
                        ...data[i],
                        check: boolData
                    }
                    break;
                }
            }
            if (check == false) {
                value = {
                    check: boolData
                }
            }
        }
        else {
            value = {
                check: boolData
            }
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
    return value;
}
model.notifyMessageAudio = async () => {
    let audio = new Audio("../audio/Nhac-chuong-tin-nhan-1-tieng-www_tiengdong_com.mp3");
    if (auth.currentUser.email != 'thienbinh1155@gmail.com') {
        await db.collection('listmessage').doc(auth.currentUser.uid).onSnapshot(doc => {
            let data = doc.data().message;
            console.log(data);
            let lastMessage = data[data.length - 1];
            if (lastMessage != data[data.length] && lastMessage.email != auth.currentUser.email) {
                audio.play()
            }
        });
    }
    else {
        let email = auth.currentUser.email;
        let currentId = auth.currentUser.uid;
        try {
            let arr = [];
            const docRef = db.collection("listchat");
            const snapshot = await docRef.get();
            snapshot.forEach((doc) => {
                let temporaryObj = JSON.parse(JSON.stringify(doc.data()));
                let objUser = {
                    ...temporaryObj,
                    id: doc.id
                }
                arr.push(objUser);
            });
            for (let i in arr) {
                await db.collection('listmessage').doc(arr[i].id).onSnapshot(doc => {
                    let data = doc.data().message;
                    let lastMessage = data[data.length - 1];
                    if (lastMessage != data[data.length] && lastMessage.email != 'thienbinh1155@gmail.com') {
                        audio.play()
                    }
                });
            }
        }
        catch (error) {
            console.log(error.message);
        }

    }

}
model.readAllProductFromFirestore = async () => {
    let arr1 = [];
    let arr2 = [];
    let arr3 = [];
    await db.collection('Image').doc('hightligths').get()
        .then((doc) => {
            arr1 = doc.data().image;
        })
        .catch((error) => {
            console.log(error.message);
        });
    await db.collection('Image').doc('menShoes').get()
        .then((doc) => {
            arr2 = doc.data().image;
        })
        .catch((error) => {
            console.log(error.message);
        });
    await db.collection('Image').doc('menJordan').get()
        .then((doc) => {
            arr3 = doc.data().image;
        })
        .catch((error) => {
            console.log(error.message);
        });
    let allArr = arr1.concat(arr2, arr3);
    return allArr;
}
model.readBag = async () => {
    let arr1 = [];
    await db.collection('Bag').doc(auth.currentUser.uid).get()
        .then((doc) => {
            arr1 = doc.data().bag;
        })
        .catch((error) => {
            console.log(error.message);
        });
    return arr1;
}
model.readFavourite = async () => {
    let arr1 = [];
    await db.collection('Favorite').doc(auth.currentUser.uid).get()
        .then((doc) => {
            arr1 = doc.data().favorite;
        })
        .catch((error) => {
            console.log(error.message);
        });
    return arr1;
}
model.readHistoryBuy = async () => {
    let data = [];
    await db.collection('Buy').doc(auth.currentUser.uid).get()
        .then((doc) => {
            data = doc.data().buy;
        })
        .catch((err) => {
            console.log(err.message);
        });
    view.setHistoryBuy(data);
}
// 'images/hightligths/'
// model.getUrlListImage = async (path) => {
//     let arrIDimg = [];
//     let arrUrlImg = [];
//     let tempoUrlImg = [];
//     let arrObjImg = [];
//     var storageRef = firebase.storage().ref();
//     var listRef = await storageRef.child(path);
//     await listRef.listAll()
//         .then((res) => {
//             res.items.forEach((itemRef) => {
//                 var idImg = GetFileName(itemRef);
//                 arrIDimg.push(idImg);
//                 tempoUrlImg.push(itemRef);
//             });
//         }).catch((error) => {
//             console.log(error.message);
//         });
//     function GetFileName(file) {
//         var temp = file.name.split('.');
//         var fname = temp.splice(0, 1).join('.');
//         return Number(fname);
//     }
//     async function getURL (itemRef){
//         return await itemRef.getDownloadURL();
//     }
//     for(let i in tempoUrlImg){
//         let str = await getURL(tempoUrlImg[i]);
//         console.log(str);
//         arrUrlImg.push(str);
//     }
//     //1 [1,2,3,4,5,6,7,8,9,10]
//     //2 [1,10,2,3,4,5,6,7,8,9]
//     //3 [a,j,b,c,d,e,f,g,h,,i]
//     // index1 = 1, index2 = 2 => str = index3[1], index3[1]=index3[2], index3[2]=str;
//     let newArrIDimg = [...arrIDimg];
//     newArrIDimg.sort(function(a, b){return a - b});
//     for(let i in newArrIDimg){
//         if(newArrIDimg.indexOf(newArrIDimg[i]) !== arrIDimg.indexOf(newArrIDimg[i])){
//             arrObjImg.push({id: newArrIDimg[i], url: arrUrlImg[arrIDimg.indexOf(newArrIDimg[i])]})
//         }
//         else{
//             arrObjImg.push({id: newArrIDimg[i], url: arrUrlImg[i]})
//         }
//     }

// }
// model.getUrlListImage('images/hightligths/')

export { db, auth };
export default model;