import axios from "axios";
import {BASE_URL} from "../utils/constants";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { addRequests, removeRequest } from "../utils/requestSlice";

const Requests = () =>{
  const requests = useSelector((store)=>store.requests);
  const dispatch = useDispatch();

  const reviewRequests = async (status , _id) =>{
    try {
      const res= await axios.post(BASE_URL+"/request/review/"+status+"/"+_id,
        {},{withCredentials:true},
      );
      console.log(res);
      dispatch(removeRequest(_id));
    } catch (err) {
      console.error(err);
    }
    
  }

  const fetchRequests = async () => {
    try{
      const res = await axios.get(BASE_URL+"/user/requests/received",{withCredentials: true});
      dispatch(addRequests(res?.data?.data));
    }
    catch(err){
      console.error(err);
    }
  }

  useEffect(()=>{
    fetchRequests();
  },[]);

  if(!requests) return;
  if(requests.length===0) return <h1 className="flex justify-center text-2xl">No Requests Found!!</h1>

  return requests && (
    <div className="mb-20">
      <h1 className="text-center text-bold text-2xl mt-5  text-white">Requests</h1>
      {requests.map((request) => 
      {
        const {_id,firstName,lastName,photoUrl,age,gender,about} = request.fromUserId;
        return (
          <div key={_id} className="my-3">
            <ul className="list bg-base-300 mx-auto max-w-2xl rounded-box shadow-md">
            <li className="list-row">
              <div><img className="size-12 rounded-box " src={photoUrl}/></div>
              <div>
                <div>{firstName+" "+lastName}</div>
                {age && gender && <div className="text-xs uppercase font-semibold opacity-60">{age+", "+gender}</div>}
              </div>
              <p className="list-col-wrap text-xs">
                {about}
              </p>

                  <button className="btn btn-active btn-primary " onClick={()=>reviewRequests("accepted",request._id)}>Accept</button>
                  <button className="btn btn-active btn-secondary"onClick={()=>reviewRequests("rejected",request._id)}>Reject</button>
              
            </li>
          </ul>
          </div>
        )
      })}

      
    </div>
  )
}
export default Requests;