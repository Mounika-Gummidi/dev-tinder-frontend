import {useState} from "react";
import axios from "axios";
import {useDispatch} from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import {BASE_URL} from "../utils/constants";

const Login = () =>{
  const [email,setEmail] = useState("mouni@gmail.com");
  const [password,setPassword] = useState("Mouni@1234");
  const dispatch = useDispatch();
  const navigate= useNavigate();

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
      console.error(err);
    }
  }
  return(
    <div className="flex justify-center mt-16">
      <div className="card bg-gray-800 w-94 shadow-2xl ">
        <div className="card-body">
          <h2 className="card-title flex justify-center text-2xl mb-3">Login Page</h2>


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
            <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} className="input input-bordered w-76 p-5" />
            <div className="label">
            </div>
          </label>


          <div className="card-actions justify-center mt-2">
            <button className="btn btn-primary shadow-2xl" onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Login;