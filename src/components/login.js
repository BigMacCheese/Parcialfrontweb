import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FormattedMessage } from "react-intl";

function Login(){

    //const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState(false);
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };

    const validateEmail = (email) => {
      return email.includes('@');
    }

    const handleSubmit = async (e) => {
      e.preventDefault();

      if(validateEmail(email) && password.length >= 6){
        
        const data = {
          email: email,
          password: password
        };

        try{
          const response = await axios.post("http://localhost:3000/login", data);
          const {rol} = response.data;

          if(rol === 'Administrador'){
            navigate('/books');
          }
          else{
            navigate('/books');
          }

        } catch(error){
          console.error(error);
        }

        setEmail('');
        setPassword('');

      }
      else{
        setShowSuccess(false);
        setShowError(true);
      }
    };

    return(
        <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-xl-10">
            <div class="card rounded-3 text-black">
              <div class="row g-0">
                <div class="col-lg-6">
                  <div class="card-body p-md-5 mx-md-4">
    
                    <div class="text-center">
                      <h1 class="mt-1 mb-5 pb-1"> <FormattedMessage id="Your allied bookstore"/></h1>
                    </div>
    
                    <form onSubmit={handleSubmit}>  
                      <div class="form-outline mb-4">
                        <label class="mt-3 form-label" for="form2Example11"> <FormattedMessage id="Username or email"/> </label>
                        <input type="email" id="form2Example11" class="form-control" value={email} onChange={handleEmailChange}/>
                      </div>
    
                      <div class="form-outline mb-4">
                        <label class="form-label" for="form2Example22"> <FormattedMessage id="Password"/> </label>
                        <input type="password" id="form2Example22" class="form-control" value={password} onChange={handlePasswordChange}/>
                      </div>
    
                      <div class="text-center pt-1 mb-5 pb-1">
                        <button class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit">Sign in</button>
                      </div>
                    </form>
    
                  </div>
                </div>
                
                <div class="col-lg-6 d-flex align-items-center gradient-custom-2 section-container" style = {{ backgroundColor: "#72A0B4"}}>
                  <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                    <div class="image-container">
                     <img src="../assets/iconolibros.jpg" alt="logo"/>
                    </div>
                     <h4 class="mb-4"> <FormattedMessage id="Find even the book you weren't looking for"/></h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {showSuccess && (
        <div className="success-popup">
          <p> <FormattedMessage id="Succesful login!"/></p>
        </div>
        )}

        {showError && (
        <div className="error-popup">
          <p> <FormattedMessage id="Error: check your email and password"/> </p>
        </div>
        )}
      </div>
    );
}

export default Login;
