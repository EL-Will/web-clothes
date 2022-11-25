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

var files =[];
var reader = new FileReader();
var namebox = document.getElementById('namebox');
var extlab = document.getElementById('extlab');
var myimg = document.getElementById('myimg');
var proglab = document.getElementById('upprogress');
var SelBtn =document.getElementById('selbtn');
var UpBtn = document.getElementById('upbtn');
var UpThumbBtn = document.getElementById('upThumbbtn');
var DownBtn = document.getElementById('downbtn');
var input = document.createElement('input');

input.type = 'file';

input.onchange = (e)=>{
    files = e.target.files;
    console.log(files[0]);
     var extention = GetFileExt(files[0]);
     var name = GetFileName(files[0]);
    console.log(name);
     namebox.value = name;
     extlab.innerHTML = extention;
    console.log(extention);
     reader.readAsDataURL(files[0]);
}

reader.onload = function(){
    myimg.src = reader.result;
}

SelBtn.onclick = function(){
    input.click();
}

function GetFileExt(file){
    var temp = file.name.split('.');
    var ext = temp.slice((temp.length -1),(temp.length));
    return "."+ext[0];
}
function GetFileName(file){
    var temp = file.name.split('.');
    console.log(temp);
    var fname = temp.splice(0,1).join('.');
    return fname;
}

async function UploadProcess(){
    var ImgToUpload = files[0];
    var ImgName = namebox.value + extlab.innerHTML;
    console.log(ImgToUpload);
    console.log(ImgName);
    const metaData={
        contentType: ImgToUpload.type
    }

    var storageRef = firebase.storage().ref();
    var uploadTask = storageRef.child('images/menshoesthumb/' + ImgName).put(ImgToUpload);
    
    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
        (snapshot) => {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            proglab.innerHTML = "Upload is " + progress + '% done'
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
                //console.log('File available at', downloadURL);
                UploadThumbImg(downloadURL);
            });
        }
    );
};

UpBtn.onclick = UploadProcess;
UpThumbBtn.onclick = UploadProcess;
function writeInforImg (URL){
    var idProduct = document.getElementById('id-product').value;
    var nameProduct = document.getElementById('name-product').value;
    var genderProduct = document.getElementById('gender-product').value;
    var priceProduct = document.getElementById('price-product').value;
    var colorProduct = document.getElementById('color-product').value;
    const accessListImage = db.collection('Image').doc('menShoes');
    accessListImage.get().then((doc) => {
        if (doc.exists) {
            db.collection("Image").doc('menShoes').update({
                image: firebase.firestore.FieldValue.arrayUnion(
                    {
                        id: Number(idProduct),
                        name: nameProduct,
                        gender: genderProduct,
                        price: formatCash(priceProduct),
                        numprice: Number(priceProduct),
                        color: splitColorProduct(colorProduct),
                        numcolor: getTotalColor(colorProduct),
                        url: URL,
                        //keywords: generateKeywords(nameProduct)
                    }
                )
            })
                .then(() => {
                    console.log("Document successfully updated!");
                });
        } else {
            db.collection("Image").doc('menShoes').set({
                image: [
                    {
                        id: Number(idProduct),
                        name: nameProduct,
                        gender: genderProduct,
                        price: formatCash(priceProduct),
                        numprice: Number(priceProduct),
                        color: splitColorProduct(colorProduct),
                        numcolor: getTotalColor(colorProduct),
                        url: URL,
                        //keywords: generateKeywords(nameProduct)
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

function UploadThumbImg (URL){
    var idProduct = document.getElementById('id-product').value;
    const accessListImage = db.collection('Image').doc('menShoes');
    accessListImage.get().then((doc) => {
        if (doc.exists) {
            let value = doc.data().image;
            for(let i in value){
                if(Number(idProduct) == value[i].id){
                    if(value[i].thumburl){
                        value[i].thumburl.push(URL);
                    }
                    else{
                        value[i].thumburl = [URL];
                    }
                    db.collection("Image").doc('menShoes').update({
                        image:value
                    })
                    .then(() => {
                        console.log("Document successfully updated!");
                    });
                }
            }
           
        } else {
           
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}

function generateKeywords(displayName){
    const name = displayName.split(' ').filter((word) => word);
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
function getTotalColor(str){
    var arr = str.split(',');
    return arr.length;
}
function splitColorProduct(str){
    var newArr = str.split(',');
    return newArr;
}

// db.collection("Image").doc("hightligths").delete().then(() => {
//     console.log("Document successfully deleted!");
// }).catch((error) => {
//     console.error("Error removing document: ", error);
// });

// var storageRef = firebase.storage().ref();
// // var starsRef = storageRef.child('images/banners/banner1.webp');

// // Create a reference under which you want to list
// var listRef = storageRef.child('images/hightligths/');

// // Find all the prefixes and items.
// listRef.listAll()
//   .then((res) => {
//     res.prefixes.forEach((folderRef) => {
//         console.log(folderRef);
//       // All the prefixes under listRef.
//       // You may call listAll() recursively on them.
//     });
//     res.items.forEach((itemRef) => {
//         console.log(itemRef);
//         displayImage(itemRef)
//       // All the items under listRef.
//     });
//   }).catch((error) => {
//     // Uh-oh, an error occurred!
//     console.log(`Uh-oh, an error occurred!`);
//   });
//   function displayImage(imageRef) {
//     imageRef.getDownloadURL().then(function(url) {
//       console.log(url);
//     }).catch(function(error) {
//       // Handle any errors
//       console.log(`Handle any errors`);
//     });
//   }


// // Get the download URL
// starsRef.getDownloadURL()
// .then((url) => {
//     console.log(url);
//   // Insert url into an <img> tag to "download"
// })
// .catch((error) => {
//   // A full list of error codes is available at
//   // https://firebase.google.com/docs/storage/web/handle-errors
//   switch (error.code) {
//     case 'storage/object-not-found':
//       // File doesn't exist
//       console.log(`File doesn't exist`);
//       break;
//     case 'storage/unauthorized':
//       // User doesn't have permission to access the object
//       console.log(`User doesn't have permission to access the object`);
//       break;
//     case 'storage/canceled':
//       // User canceled the upload
//       console.log(`User canceled the upload`);
//       break;
//     case 'storage/unknown':
//       // Unknown error occurred, inspect the server response
//       console.log(`Unknown error occurred, inspect the server response`)
//       break;
//   }
// });



// // Create a reference to the file whose metadata we want to retrieve
// var forestRef = storageRef.child('images/banners/banner1.webp');

// // Get metadata properties
// forestRef.getMetadata()
//   .then((metadata) => {
//     console.log(metadata);
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });
