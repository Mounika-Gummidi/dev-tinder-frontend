import axios from "axios";
import {BASE_URL} from "../utils/constants";
import {useDispatch} from "react-redux";
import { removeUserFromFeed } from "../utils/feedSlice";

const UserCard = ( {user} ) =>{
  const dispatch = useDispatch();
  // console.log(user);
  if (!user) return null;
  const {_id,firstName, lastName,age,gender,skills,about,photoUrl} = user;
  
  const handleSendRequest = async (status,userId) => {
    try{
      const res= await axios.post(BASE_URL+"/request/send/"+status+"/"+userId,
        {},{withCredentials:true},);
      console.log(res);
      dispatch(removeUserFromFeed(userId));

    }
    catch(err)
    {
      console.error(err);
    }
  }

  return(
    <div>
      <div className="card bg-base-300 w-90 shadow-sm pt-4">
      <figure>
        <img className="w-50"
          src={photoUrl}
          alt="photo" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName+" "+lastName}</h2>
        <p>{about}</p>
        {age && gender && <p>{age+","+gender}</p>}
        {skills && <p>{"Skills: "+skills}</p>}
        <div className="card-actions justify-end py-2 pb-0">
          <button className="btn btn-secondary" onClick={()=>handleSendRequest("ignored",_id)}>Ignore</button>
          <button className="btn btn-primary"onClick={()=>handleSendRequest("intrested",_id)}>Interested</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default UserCard;