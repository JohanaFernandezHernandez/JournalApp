import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage, RegisterPage } from "../pages"


export const AuthRoutes = () => {
  return (
    <Routes>
        <Route path="login" element={ <LoginPage/>}/>
        <Route path="register" element={ <RegisterPage/>}/>


        {/* Esto es para cuando entren a otra pagina diferente a las 2 anteriores lo navega a etsa*/ }
        <Route path="/*" element={ <Navigate to="/auth/login"/>}/>  

        
    </Routes>
  )
}
