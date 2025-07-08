import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Body from "./components/Body";
import About from "../src/Routes/About";
import Anime from "./Routes/Anime.jsx";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import { lazy, Suspense } from "react";
import Simmer from "./components/Simmers.jsx";
import Chipsinput from "./components/Chipsinput.jsx";
import Bookmark from "./components/Bookmark.jsx";
import AnimatedBars from "./Routes/AnimatedBars.jsx";
import { TopAnimeApi } from "../utilis/constnce.jsx";
import Login from "./components/Login/Login.jsx";

const Manga = lazy(() => import("../src/Routes/Manga.jsx"));
const Movies = lazy(() => import("./Routes/Movies.jsx"));
const Topanime = lazy(() => import("./components/Topanime.jsx"));
let route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/movies",
        element: (
          <Suspense fallback={<h1>loading...</h1>}>
            <Movies />
          </Suspense>
        ),
      },
      {
        path: "/manga",
        element: (
          <Suspense fallback={<Simmer />}>
            <Manga />
          </Suspense>
        ),
      },
      {
        path: "/anime/:l_id",
        element: <Anime />,
      },
      {
        path: "/input",
        element: <Chipsinput />,
      },
      {
        path: "/bookmark",
        element: <Bookmark />,
      },
      {
        path: "/animatedbars",
        element: <AnimatedBars />,
      },
      {
        path: "/topanime",
        element: (
          <Suspense fallback={<Simmer/>}>
            <Topanime />
          </Suspense>
        ),
      },
    ],
  },
  {path: "/login",
    element:<Login />
  },
]);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={route}></RouterProvider>
);
