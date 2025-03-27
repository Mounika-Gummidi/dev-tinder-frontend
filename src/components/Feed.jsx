import axios from "axios";
import {BASE_URL} from "../utils/constants";
import {addFeed} from "../utils/feedSlice";
import {useDispatch,useSelector} from "react-redux";
import {useEffect} from "react";
import UserCard from "./UserCard";

const Feed =() =>{
  const feed = useSelector((store)=>store.feed);
  // console.log(feed);
  const dispatch = useDispatch();

  const getFeed = async () => {
    if(feed) return; 
    try{
      const res= await axios.get(BASE_URL+"/feed",{withCredentials:true});
      dispatch(addFeed(res?.data));
    }
    catch(err)
    {
      console.error(err);
    }  
  }
  useEffect(()=>{
    getFeed();
  },[])

 

  return feed && (
    <div className="flex flex-col items-center my-15 space-y-5">
      {feed.length > 0 ? (
        feed.map((user) => <UserCard key={user.id} user={user} />)
      ) : (
        <h1>No users found!</h1>
      )}
    </div>
  );

};

export default Feed;
