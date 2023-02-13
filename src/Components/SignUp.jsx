import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {createUserWithEmailAndPassword} from 'firebase/auth'
// import {auth , db} from '../FirebaseConfigs/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { auth, db } from '../FirebaseConfigs/firebaseConfig';

const SignUp = () => {
  const [userName, setUserName] = useState('')
  const [mobileNumber, setMobileNumber] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      const initialcartvalue = 0;
      console.log(user);
      addDoc(collection(db, "users"),{
        userName: userName, email: email, mobileNumber: mobileNumber, cart: initialcartvalue, password: password, uid:user.id 
      }).then(() => {
        setSuccess('Account created successfully')
        setUserName('') 
        setMobileNumber('')
        setEmail('')
        setPassword('')
        setError('')
        setTimeout(() => {
          navigate('/login')
        }, 4000);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage)
      });
    })
    .catch((error) => {
      const errorMessage = error.message;
      setError(errorMessage)
    });
  }


  return (
    <div>
    <div className="signup-container">
    <form action="" onSubmit={handleSubmit} className="signup-form">
      <p>Create Account</p>

      <label>Your Name</label>
      <input onChange={(e) => setUserName(e.target.value)} type="text" placeholder="Enter your name" />
      <br/>
      <label>Mobile Number</label>
      <input onChange={(e) => setMobileNumber(e.target.value)} type="number" placeholder="Enter your mobile number" />
      <br/>
      <label>Email</label>
      <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email" />
      <br/>
      <label>Password</label>
      <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter your password" />
      <br/>
      <button type="submit" className="signup-btn">Sign Up</button>
      <br/>
      <div>
        <span>Already have an account ?</span>
        <Link to="/login">Login</Link>
      </div>




    </form>
    </div>
    </div>
  )
}

export default SignUp
