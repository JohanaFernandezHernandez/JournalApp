import { Navigate, Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { JournalRoutes } from "../journal/routes/JournalRoutes"
import { CheckinAuth } from "../ui/"

import { useCkeckAuth } from "../hooks"

export const AppRouter = () => {

  const status = useCkeckAuth();

  if( status === 'ckecking') {
    return <CheckinAuth/>
  }

  return (
      <Routes>
        {
          (status === 'authenticaded')
          ? <Route path="/*" element={ <JournalRoutes/>}/>
          : <Route path="/auth/*" element={ <AuthRoutes/>}/>
        }

        <Route path="/*" element={ <Navigate to='/auth/login' /> }/>

      </Routes>
  )
}
