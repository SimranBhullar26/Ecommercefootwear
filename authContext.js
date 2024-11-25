import { createContext, useContext, useEffect } from "react";
import   {db} from  "./firebase/firebase";
import { collection, addDoc, onSnapshot } from "firebase/firestore";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const authContext = createContext();
export function useAuthValue() {
    const value = useContext(authContext)
    return value;
    
}


export function AuthContext({children}) {
    const[isLoggedIn, setLoggedIn] = useState(false);

    //user when logged in
    const [userLoggedIn, setUserLoggedIn] = useState(null);

    // list of users
    const [userList, setUserList] = useState([]);

useEffect(() => {
     const unsub=onSnapshot(collection(db, "skb"),
      (snapshot) => {
        const users = snapshot.docs.map((doc) =>{
            return{
                id: doc.id,
                ...doc.data()
            }
        });
        setUserList(users);
    })

       

}, [isLoggedIn]);


   async function createUser(data){
       
   
 
        const index = userList.findIndex((user) => user.email === data.email);
        if(index!==-1){
          toast.error("User already exists");
          return;
        }
        const docRef = await addDoc(collection(db, "skb"), {
       name: "data.name",
        email: "data.email", 
        password: "data.password",
        cart : [],
        orders: [],
    });
    toast.success("User created successfully");

    
}

async function signIn(data){
    const index = userList.findIndex((user) => user.email === data.email);
    if(index!== -1){
        toast.error("Email already exists");
        return;
    }
    if(userList[index].password === data.password){
        toast.success("SignInsuccessfully");
        setLoggedIn(true);
        setUserLoggedIn(userList[index]);
        window.localStorage.setItem("token", true);
        window.localStorage.setItem("user", JSON.stringify(userList[index]))
        return true;

    }
    else{
        toast.error("Incorrect Password");
        return false;
    }
}

async function signout(){
    window.localStorage.removeItem("token");
        window.localStorage.removeItem("index");

        setLoggedIn(false);
        setUserLoggedIn(null);
        toast.success("Signed out successfully, redirecting to signin");
        
}


return(
    <>
    <authContext.Provider value={{createUser,signIn,signOut,isLoggedIn,setLoggedIn,setUserLoggedIn}}>
        <ToastContainer/>

        
        
        
        {children}
        
        
        </authContext.Provider>
        </>
)


    }
    


