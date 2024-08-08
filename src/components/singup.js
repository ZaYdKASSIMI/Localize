import React , { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './footer';
import axios from 'axios';

function Register(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');


    const handleRegister = async (e) => {
        e.preventDefault();
    
        try {
          const response = await axios.post('http://localhost:8000/api/register', {
            name,
            email,
            password,
          });
    
          localStorage.setItem('token', response.data.access_token);
          setError('');
          alert('Registration successful!');
        } catch (err) {
          setError('Registration failed');
        }
      };
   

    return(
        <>
        <div class="container">

        <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0">
                
                <div class="row">
                    <div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
                    <div class="col-lg-7">
                        <div class="p-5">
                            <div class="text-center">
                                <h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>
                            </div>
                            <form class="user" onSubmit={handleRegister}>
                                <div class="form-group row">
                                    <div class="col-sm-6 mb-3 mb-sm-0">
                                        <input type="text" class="form-control form-control-user" id="exampleFulltName"
                                            placeholder="First Name" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
                                    </div>
                                    <div class="col-sm-6 mb-3 mb-sm-0">
                                        <input type="text" class="form-control form-control-user" id="exampleFulltName"
                                            placeholder="last Name" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
                                    </div>
                                    
                                </div>
                                <div class="form-group">
                                    <input type="email" class="form-control form-control-user" id="exampleInputEmail"
                                        placeholder="Email Address" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                </div>
                                <div class="form-group row">
                                    <div class="col-sm-6 mb-3 mb-sm-0">
                                        <input type="password" class="form-control form-control-user"
                                            id="exampleInputPassword" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                                    </div>
                                    {/* <div class="col-sm-6">
                                        <input type="password" class="form-control form-control-user"
                                            id="exampleRepeatPassword" name="password_confirmation" placeholder="Repeat Password"/>
                                    </div> */}
                                </div>
                                {error && <p>{error}</p>}
                                <button type="submit" class="btn btn-success btn-user ">
                                    Register Account
                                </button>
                                <hr/>
                                
                            </form>
                           
                            
                            <div class="text-center">
                                <a class="small" href="login.html">Already have an account? Login!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <Footer/>
    </>
    )
}
export default Register;