import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyDsqapYLhZuksEsYQoqz15NQy7B0KXfXyU",
    authDomain: "employ-7e656.firebaseapp.com",
    databaseURL: "https://employ-7e656.firebaseio.com",
    projectId: "employ-7e656",
    storageBucket: "employ-7e656.appspot.com",
    messagingSenderId: "370471892194",
    appId: "1:370471892194:web:e09b53b55948b0ac6f1abb",
    measurementId: "G-QQ7DXZBLXJ"
  };



class Firebase {
    constructor() {
        if (!app.apps.length) {
            app.initializeApp(firebaseConfig);
          }
        this.auth = app.auth()
        this.db = app.database();
    }

    registerFirebaseUser = (email, password) => {
        return this.auth.createUserWithEmailAndPassword(email, password)
    }

    

    insertNewUser = (name, email, github, phone, motto, photo) => {
        return this.db.ref('users/').push().set({
            name: name,
            email: email,
            github: github,
            phone: phone,
            motto: motto,
            photo: photo,
        });
    }

    getAllUser = () => {
        var array = [];
        var rootRef = this.db.ref();
        var urlRef = rootRef.child("users");
        urlRef.once("value", function (snapshot) {
            snapshot.forEach(function (child) {
                // console.log(child.key + ": " + child.val());
                array.push(child.val())
            });
        });
        return array
    }

    deleteFirebaseUser = async (email) => {
        var id = '';
        var rootRef = this.db.ref();
        var urlRef = rootRef.child("users");
        await urlRef.once("value", function (snapshot) {
            snapshot.forEach(function (child) {
            //     console.log(child.key + ": " + child.val());
                if (child.val().email === email) {
                    console.log("found")
                    id = child.key
                }
            });
        });
        console.log("id", id)
        urlRef.child(id).delete()
    }

    editFirebaseUser = async (name, email, github, phone, motto, photo) => {
        var id = '';
        var rootRef = this.db.ref();
        var urlRef = rootRef.child("users");
        await urlRef.once("value", function (snapshot) {
            snapshot.forEach(function (child) {
            //     console.log(child.key + ": " + child.val());
                if (child.val().email === email) {
                    console.log("found")
                    id = child.key
                }
            });
        });
        console.log("id", id)
        urlRef.child(id).update({
            'name': name,
            'email': email,
            'github': github,
            'phone': phone,
            'motto': motto,
            'photo': photo    
        })
    }


}

export default Firebase