// import "./App2.css";
import Sidebar from "./component/Sidebar";
import Twitts from "./component/Twitts";
import Trands from "./component/Trands";
import { FaThemeco } from "react-icons/fa";

import User2 from "./component/User2";
function App() {
  return (
    <>
    
      <div className="Twitter">
     
        {/* <Sidebar /> */}
        <User2/><br />
        {/* <Twitts /> */}
        <Trands />
      
      </div>
    </>
  );
}

export default App;
