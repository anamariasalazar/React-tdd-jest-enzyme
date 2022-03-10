import React, { useState } from 'react';
import  {Grid,Paper,TextField} from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import './login.scss';
import { useNavigate } from 'react-router-dom';


const Login=()=>{    
    const Style={padding :30,height:'50vh',width:260, margin:"35px auto"};
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate = useNavigate();
    const handleChange = (e) =>{
      e.preventDefault();
      const document = new FormData(e.currentTarget);
      setEmail(document.get('email'));
      setPassword(document.get('password'));
      console.log(email);
      console.log(password);
      fetch("http://localhost:8080/v1/auth",{
        mode:'cors',
        method:'POST',
        body: JSON.stringify({
          "email":email,
          "password":password
        }),
        headers:{
          "Content-type": "application/json"
        }
      }).then(response => response.json())
      .then(myJson =>{
        console.log(myJson);
        window.$token=myJson.token;
        window.$tokenDueDate=myJson.expirationDate;
        console.log(window.$token);
        console.log(window.$tokenDueDate);
        navigate("../TaskPlanner")
      })
    }
    return( 
        
        <Grid>
            <form onSubmit={handleChange}> 
                <Paper style = {Style} > 
                    <h1>Inicie sesión </h1> 
                    <div> 
                      <div>  
                       <TextField id='email' className='email' name='email' type='email'  variant='outlined' label='Email' value={email?.email }/> 
                      </div>
                      <br/>
                      <div>
                        <FormControl> 
                          <InputLabel id="password" className='password' htmlFor='outlined-adornment-password' variant='outlined' >
                            password
                          </InputLabel>
                          <OutlinedInput fullWidth label="Password"
                                    id="outlined-password"
                                    type= 'password'
                                    name="password"
                                />
                        </FormControl>
                      </div>
                    </div> 
                    <br></br>
                    <button type='submit' variant='contained' className='boton'> Login </button>
                </Paper>
            </form>
        </Grid>
    );
}   
export default Login; 