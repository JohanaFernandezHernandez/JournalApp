import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FirebaseAuth } from "../firebase/config";
import { login, logout } from "../store/auth/authSlice";
import { startLodingNotes } from "../store/journal/thunks";


export const useCkeckAuth = () => {

    const {status} = useSelector(state => state.auth);
    const dispach = useDispatch()
  
    useEffect(() => {
  
      onAuthStateChanged( FirebaseAuth, async( user) => {
        if (!user) return dispach(logout());

        const {uid, email, displayName, photoURL} = user;
        dispach(login({uid, email, displayName, photoURL}));
        dispach(startLodingNotes());
      })
    }, []);

    return status;
  
}
