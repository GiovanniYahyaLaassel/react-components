import React, {useState} from "react";
import Header from "./components/header";
import BlogPost from "./components/BlogPost";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <BlogPost/>
    </>
  )
}

export default App
