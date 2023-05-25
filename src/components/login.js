import { useState } from "react";

function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return;
    }

    if (password.length < 6) {
      return;
    }

    return(
        <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-xl-10">
            <div class="card rounded-3 text-black">
              <div class="row g-0">
                <div class="col-lg-6">
                  <div class="card-body p-md-5 mx-md-4">
    
                    <div class="text-center">
                      <h1 class="mt-1 mb-5 pb-1">Tu librería aliada</h1>
                    </div>
    
                    <form onSubmit={handleSubmit}>  
                      <div class="form-outline mb-4">
                        <label class="mt-3 form-label" for="form2Example11">Username or email</label>
                        <input type="email" id="form2Example11" class="form-control" value={email} onChange={(e) => setEmail(e.target.value)}/>
                      </div>
    
                      <div class="form-outline mb-4">
                        <label class="form-label" for="form2Example22">Password</label>
                        <input type="password" id="form2Example22" class="form-control" value={password} onChange={(e) => setPassword(e.target.value)}/>
                      </div>
    
                      <div class="text-center pt-1 mb-5 pb-1">
                        <button class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button">Sign in</button>
                      </div>
                    </form>
    
                  </div>
                </div>
                
                <div class="bg-primrary col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div class="text-black px-3 py-4 p-md-5 mx-md-4">
                     <img src="../Libros-codificados-300x262.jpg" style={{width:"100em"}} alt="logo"/>
                     <h4 class="mb-4">Encuentra hasta el libro que no estabas buscando</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
}
export default Login;
