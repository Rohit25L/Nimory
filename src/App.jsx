import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "../src/Routes/About";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header></Header>
      <Outlet />
      <Footer></Footer>
    </div>
  );
}

export default App;
