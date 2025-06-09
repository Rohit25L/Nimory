import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "../src/Routes/About";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import { Provider } from "react-redux";
import appStore from "../utilis/appStore";
import Fetching from "../utilis/Fetching";


function App() {
  const [count, setCount] = useState(1);
  useEffect(()=>{
    setCount(2)
  },[])

  return (
    <Provider store={appStore}>
    <div>
      <Header></Header>
      {count===1 ? <Fetching/> :""}
      <Outlet />
      <Footer></Footer>
    </div>
    </Provider>
  );
}

export default App;
