import axios from "axios";
import {BASE_URL} from "../utils/constants";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { addRequests } from "../utils/requestSlice";

const Requests = () =>{
  const requests = useSelector((store)=>store.requests);
  const dispatch = useDispatch();
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

  return requests && (
    <div className="">
      <h1 className="text-center text-bold text-2xl my-5 text-white">Requests</h1>
      {requests.map((request) => 
      {
        const {_id,firstName,lastName,photoUrl,age,gender,about} = request.fromUserId;
        return (
          <div key={_id} className="my-3">
            <ul className="list bg-base-200 mx-auto max-w-3xl rounded-box shadow-md">
            <li className="list-row">
              <div><img className="size-10 rounded-box" src={photoUrl}/></div>
              <div>
                <div>{firstName+" "+lastName}</div>
                {age && gender && <div className="text-xs uppercase font-semibold opacity-60">{age+", "+gender}</div>}
              </div>
              <p className="list-col-wrap text-xs">
                {about}
              </p>
              
              <button className="btn btn-square btn-ghost">
                <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>
              </button>
            </li>
          </ul>
          </div>
        )
      })}

      
    </div>
  )
}
export default Requests;