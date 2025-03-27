import {useState} from "react";
import axios from "axios";
import {useDispatch} from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import {BASE_URL} from "../utils/constants";

const Login = () =>{
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [isLoginForm, setIsLoginForm] =useState(true);
  const dispatch = useDispatch();
  const navigate= useNavigate();
  const [err,setErr] = useState("");

  const handleLogin = async () =>{
    try{
      const res= await axios.post(BASE_URL + "/login",
          {email,password},{withCredentials:true}
      );
      dispatch(addUser(res.data));
      return navigate("/");
    }
    catch(err)
    {
      setErr(err?.response?.data);
      console.error(err);
    }
  }

  const handleSignUp = async () =>{
    try{
      const res= await axios.post(BASE_URL + "/signup",
          {firstName,lastName,email,password},{withCredentials:true}
      );
      dispatch(addUser(res?.data?.data));
      return navigate("/profile");
    }
    catch(err)
    {
      setErr(err?.response?.data);
      console.error(err);
    }
  }

  return(
    <div className="flex justify-center mt-10 mb-10">
      <div className="card bg-gray-800 w-94 shadow-2xl ">
        <div className="card-body">
          <h2 className="card-title flex justify-center text-2xl mb-3">{isLoginForm? "Login":"SignUp"}</h2>

          {!isLoginForm && <><label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text mb-2">First Name:</span>
            </div>
            <input type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)} className="input input-bordered w-76 p-5" />
            <div className="label">
            </div>
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text mb-2">Last Name:</span>
            </div>
            <input type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)} className="input input-bordered w-76 p-5" />
            <div className="label">
            </div>
          </label></>}

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text mb-2">Enter Email</span>
            </div>
            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className="input input-bordered w-76 p-5" />
            <div className="label">
            </div>
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text mb-2">Enter Password</span>
            </div>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="input input-bordered w-76 p-5" />
            <div className="label">
            </div>
          </label>

          <p className="text-red-500">{err }</p>
          <div className="card-actions justify-center mt-2">
            <button className="btn btn-primary shadow-2xl" onClick={isLoginForm? handleLogin:handleSignUp}>{isLoginForm? "Login":"SignUp"}</button>
          </div>
          <p className="m-auto py-3" onClick={()=>setIsLoginForm((value)=>!value)}>{isLoginForm? "New User? SignUp Here":"Existing User? Login Here"}</p>
        </div>
      </div>
    </div>
  )
}
export default Login;