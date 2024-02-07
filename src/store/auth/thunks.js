import { LoginWithEmailPassword, logoutFirebase, registerWithUser, singInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice";

export const checkingAuthentication = (email, password) => {
    return async(dispach ) => {
        dispach(checkingCredentials());

    }
}

export const startGoogleSignIn = () => {
    return async ( dispach )=> {
        dispach (checkingCredentials());

        const result = await singInWithGoogle();
        if (!result.ok ) return dispach( logout(result.errorMessage));

        dispach(login( result ));
    }
}

export const starRegisterWithUser = ({email, password, displayName}) => {
    return async ( dispach )=> {
        dispach (checkingCredentials());

        const {ok, uid, photoURL, errorMessage} = await registerWithUser({email, password, displayName});
        
        if (!ok ) return dispach( logout({errorMessage}));

        dispach(login( {uid, displayName, email, photoURL} ));
    }
}

export const starLoginWithEmailPassword = ({email, password}) => {
    return async (dispach)=> {

        dispach(checkingCredentials());

        const result = await LoginWithEmailPassword({email, password});
        
        if (!result.ok ) return dispach( logout(result));
        dispach(login( result )); 

    }

}

export const starLogout = () => {

    return async (dispach) => {
        
        await logoutFirebase();

        dispach(logout());
    }
}