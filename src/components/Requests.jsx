import axios from "axios";
import {BASE_URL} from "../utils/constants";
import { useEffect } from "react";

const Requests = () =>{
  const fetchRequests = async () => {
    try{
      const res = await axios.get(BASE_URL+"/user/requests/received",{withCredentials: true});
      console.log(res.data);
    }
    catch(err){
      console.error(err);
    }
  }

  useEffect(()=>{
    fetchRequests();
  },[]);

  return (
    <div>Requests</div>
  )
}
export default Requests;