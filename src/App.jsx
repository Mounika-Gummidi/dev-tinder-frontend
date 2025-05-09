import {BrowserRouter, Routes,Route} from "react-router-dom";
import Body from "./components/Body";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Signup from "./components/Signup";
import { Provider } from "react-redux";
import Appstore from "./utils/Appstore";
import Feed from "./components/Feed";
import Connections from "./components/Connections";
import Requests from "./components/Requests";

function App() {
  return (
    <>
    <Provider store={Appstore}>
     <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body/>}>
              <Route path="/" element={<Feed/>}></Route>
              <Route path="/login" element={<Login/>}></Route>
              <Route path="/profile" element={<Profile/>}></Route>
              <Route path="/signup" element={<Signup/>}></Route>
              <Route path="/connections" element={<Connections/>}></Route>
              <Route path="/requests" element={<Requests/>}></Route>
          </Route>
        </Routes>
     </BrowserRouter>
    </Provider>
    </>
  )
}

export default App
