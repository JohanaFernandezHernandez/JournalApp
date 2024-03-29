import {Link as RouterLink} from 'react-router-dom'
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { starRegisterWithUser } from '../../store/auth/thunks'

const formData = {
  email: '',
  password: '',
  displayName: ''
}

const formValidations = {
  email: [ (value)=> value.includes('@'), 'el correo debe tener un @'],
  password: [ (value)=> value.length >= 6, 'el password debe contener minimo 6 caracteres'],
  displayName: [ (value)=> value.length >= 1, 'El Nombre es obligatorio'],
}


export const RegisterPage = () => {

  const dispatch = useDispatch();
  const {status, errorMessage} = useSelector(state => state.auth)


  const [formSubmitted, setFormSubmitted] = useState(false);
  const isCheckingAuthentication = useMemo( () => status === 'cheking', [status]);

  const {formState, displayName, email, password, onInputChange, 
  isFormValid, displayNameValid, emailValid, passwordValid } = useForm(formData, formValidations);


  const onSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    if (!isFormValid) return;

    dispatch(starRegisterWithUser(formState));

    
  }

  


  return ( 
     <AuthLayout title='crear Cuenta' >
        <form onSubmit={ onSubmit} className="animate__animated animate__fadeIn animate__faster">
            <Grid container>

            <Grid item xs={ 12 } sx={{mt: 2}}>
                <TextField
                  label="Nombre Completo"
                  type="text"
                  placeholder='Tu Nombre'
                  fullWidth
                  name= "displayName"
                  value= { displayName}
                  onChange={ onInputChange }
                  error={ !!displayNameValid && formSubmitted }
                  helperText= { displayNameValid }
                />
              </Grid>
              
              <Grid item xs={ 12 } sx={{mt: 2}}>
                <TextField
                  label="Correo"
                  type="email"
                  placeholder='correo@correo.com'
                  fullWidth
                  name= "email"
                  value= { email}
                  onChange={ onInputChange }
                  error={ !!emailValid && formSubmitted  }
                  helperText= { emailValid}
                />
              </Grid>

              <Grid item xs={ 12 } sx={{mt: 2}}>
                <TextField
                  label="Contraseña"
                  type="password"
                  placeholder='Tu password'
                  fullWidth
                  name= "password"
                  value= { password}
                  onChange={ onInputChange }
                  error={ !!passwordValid && formSubmitted }
                  helperText= { passwordValid}
                />
              </Grid>

              <Grid container spacing={2} sx={{ mb:2, mt: 1}}> 
                <Grid item xs={ 12 } sm={ 12 } display={ !!errorMessage ? '' : 'none'}>
                  <Alert severity='error'>{errorMessage}</Alert>
                </Grid>
                
                <Grid item xs={ 12 } sm={ 12 }>
                  <Button
                  disabled={isCheckingAuthentication}
                  type="submit" 
                  variant='contained' 
                  fullWidth>
                    crear Cuenta
                  </Button>
                </Grid>
                
              </Grid>

              <Grid container direction="row" justifyContent="end">
                <Typography sx={{ mr:1 }}>¿Ya tienes cuenta?</Typography>
                <Link component={ RouterLink } color='inherit' to="/auth/login">
                  Ingresar
                </Link>
              </Grid>

            </Grid>

          </form>
     </AuthLayout>

  )
}
