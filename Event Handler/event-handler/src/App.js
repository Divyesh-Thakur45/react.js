import { useState } from "react";
import "./App.css";
import HandleChange from "./Eventhandler";

function App() {
  const [posts, setPosts] = useState(false);


  return <div className="App">
      <button onClick={()=>setPosts(!posts)} className="toggleButton">
        {posts ?  "HIDE POSTS" : "GET POSTS" }
      </button>
      { posts ? <HandleChange /> : ""}
  </div>;
}

export default App;
