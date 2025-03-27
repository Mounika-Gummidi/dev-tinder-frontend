import {useState} from "react";
import UserCard from "./UserCard";
import { useDispatch } from "react-redux";
import {addUser} from "../utils/userSlice";
import axios from "axios";
import {BASE_URL} from "../utils/constants";

const EditProfile =({user}) => {
  const [firstName,setFirstName] = useState(user.firstName);
  const [lastName,setLastName] = useState(user.lastName);
  const [photoUrl,setPhotoUrl] = useState(user.photoUrl);
  const [age,setAge] = useState(user.age|| "");
  const [gender,setGender] = useState(user.gender || "");
  const [about,setAbout] = useState(user.about|| "");
  const [skills,setSkills] = useState(user.skills ||"");
  const [showToast,setShowToast] = useState(false);
  const [err,setErr] = useState("");
  const dispatch = useDispatch();
  

  const saveProfile = async() => {
    setErr("");
    try{
      const res = await axios.patch(BASE_URL+"/profile/edit",
        {firstName,lastName,photoUrl,age,gender,about,skills},
        {withCredentials: true}
      );
      console.log(res.data);
      dispatch(addUser(res?.data?.data));
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    }
    catch(err){
      setErr(err.response.data);
    }
    

  }
  return(
    <>
      <div className="flex justify-center mt-12 ">
        <div className="flex justify-center mx-10 ">
          <div className="card bg-gray-800 w-94 shadow-2xl ">
            <div className="card-body">
              <h2 className="card-title flex justify-center text-2xl mb-3">Edit Profile</h2>


              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text mb-2">FirstName:</span>
                </div>
                <input type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)} className="input input-bordered w-76 p-5" />
                <div className="label">
                </div>
              </label>

              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text mb-2">LastName:</span>
                </div>
                <input type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)} className="input input-bordered w-76 p-5" />
                <div className="label">
                </div>
              </label>

              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text mb-2">Age:</span>
                </div>
                <input type="text" value={age} onChange={(e)=>setAge(e.target.value)} className="input input-bordered w-76 p-5" />
                <div className="label">
                </div>
              </label>

              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text mb-2">PhotoURL:</span>
                </div>
                <input type="text" value={photoUrl} onChange={(e)=>setPhotoUrl(e.target.value)} className="input input-bordered w-76 p-5" />
                <div className="label">
                </div>
              </label>

              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text mb-2">Gender:</span>
                </div>
                <input type="text" value={gender} onChange={(e)=>setGender(e.target.value)} className="input input-bordered w-76 p-5" />
                <div className="label">
                </div>
              </label>

              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text mb-2">About:</span>
                </div>
                <input type="text" value={about} onChange={(e)=>setAbout(e.target.value)} className="input input-bordered w-76 p-5" />
                <div className="label">
                </div>
              </label>

              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text mb-2">Skills:</span>
                </div>
                <input type="text" value={skills} onChange={(e)=>setSkills(e.target.value)} className="input input-bordered w-76 p-5" />
                <div className="label">
                </div>
              </label>

              <p className="text-red-500">{err}</p>
              <div className="card-actions justify-center mt-2">
                <button className="btn btn-primary shadow-2xl" onClick={saveProfile}>Save Profile</button>
              </div>
            </div>
          </div>
        </div>
        <UserCard user={{firstName,lastName,photoUrl,age,gender,about,skills}}/>
      </div>

      {showToast && <div className="toast toast-top toast-center">
        <div className="alert alert-success">
          <span className="text-base-200">Profile saved successfully.</span>
        </div>
      </div>}
    </>
  );
};

export default EditProfile;