import React, { useState } from 'react'
import styled from 'styled-components'

// This is our styled-component 
const Wrapper = styled.section`

.Login{
  display : flex ;
  justify-content: center;
  margin-top : 5rem;
  margin-right : 10rem ;
  margin-left : 10rem ;
  background-color : white ;
  border-radius : 1rem ;
  border : 0.1rem solid black ;

 
 
  

}

.btn{
  color : white ;
  background-color : #0492C2 ;
  width : 30rem ;
  margin-left : 5rem ;

 

}

.register{
  display : flex ;
  justify-content : center ;
  align-item : center ;
}

.loginid{
  width : 40rem
}
.password{
  width : 40rem 
}
.changepassword{
  display : flex ;
  justify-content : end ;
  align-item : end
}

.form{
  margin-top :4rem
 

}
.heading{
  font-size : 2rem ;
  font-weight : bold ;
  text-align : center
  }

  @media screen and (max-width : 950px){
    display : flex ;
    justify-content: center;
    // margin-top : 5rem;
    // margin-right : 10rem ;
    margin-left : 5rem ;
    width : 15rem ;


    .btn{
      width : 15rem ;
     margin-left : 4rem;
     
      
    }
    .Login{
      width : 400px;
      height : 500px;
   
  }
  .loginid{
    width : 21rem;
    margin-left : 0.5rem;
    margin-right : 0.5rem
  }
  .password{
    width : 21rem;
    margin-left : 0.5rem;
 margin-right : 0.5rem }

 .changepassword{
  margin-right : 0.5rem
 }
 

  
}

`




































export default function App() {
  const [loginid, setloginid] = useState('')
  const [password, setpassword] = useState('')
  const [authenticated, setauthenticated] = useState(false)

  const data = [{ loginid: "xzc@gmail.com", password: "poywoy" },
  { loginid: "qwerty@gmail.com", password: "toywoy" }, {
    loginid: "lkj@gmail.com", password: "mnbytr"
  }]

  const authen = () => {
    const datas = data.find((datas) => datas.loginid === loginid && datas.password === password)
    if (datas) {
      setauthenticated(true)
      alert("Login Successfully")
    }
    else {
      alert("Invalid LoginId or Password")
    }
  }


  return (
    <Wrapper>

      <div className="Login">


        <form className='form'>
          <h1 className='heading'>Login</h1>
          <h5>Login ID</h5>
          <input className='loginid' type='text' placeholder='Enter Login ID' value={loginid} onChange={(e) => setloginid(e.target.value)} /><br />
          <h5>Password</h5>
          <input className='password' type='password' placeholder='Enter Password' value={password} onChange={(e) => setpassword(e.target.value)} />
          <br />
          <p className='changepassword'>Change Password</p>

          <input className='checkbox' type='checkbox' /> Remember Me
          <br />
          <input className="checkbox" type='checkbox' /> Agree to Terms & Conditions
          <br /><br />
          <button className='btn' onClick={authen}>Login</button>
          <br /><br />
          <p className='register'>Don't have an account? Register Here</p>



        </form>
      </div>
    </Wrapper>
  )
}
