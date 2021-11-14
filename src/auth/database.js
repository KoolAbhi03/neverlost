import { db } from "./firebase";
import { getFirestore, collection, query, where, getDocs ,addDoc,setDoc,doc} from "firebase/firestore";
import { async } from "@firebase/util";

const createUserDatabase = async ({ name, email,uid }) => {
    const user = {
        "name": name.toUpperCase(),
        "email": email.toLowerCase(),
        "uid": uid,
        "photoURL": "",
        "status": "I was a TRACTOR!",
        "phone":  '-',
        "recentSearchList": [],
        "friendList": [],
        "pendingRequestList": [],
        'latitude': 0.0,
        'longitude': 0.0,
        'isShare': true
    };
    findUserWithEmail(email).then(async(data) => {
        if (data===null) {
            await setDoc(doc(db, "users", uid), user);
        }
        else {
            return alert('user already exist')
        }

    })
    return user
}

const findUserWithEmail = async email => {
    const q = query(collection(db, "users"), where("email", "==", email));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.size===0) {
        return null
    }
   return querySnapshot.docs[0].data();
}

export {findUserWithEmail,createUserDatabase}