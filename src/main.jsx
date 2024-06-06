import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contect from "./components/contect/Contect.jsx";
import Github
// ,{ fetchUser } 
from "./components/Github/Github.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       { path: "", element: <Home /> },
//       { path: "about", element: <About /> },
//       { path: "contect", element: <Contect /> },
//       { loader: {fetchUser}, path: "github/:userid", element: <Github /> },
//       // { path: "/", element: <Home /> },
//     ],
//   },
// ]);
 
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element= {<App/>} >
    <Route path='' element= {<Home/>} />
    <Route path='about' element= {<About/>} />
    <Route path='contect' element= {<Contect/>} />
    <Route path='Github/:userid' 
    // loader={fetchUser} 
    element= {<Github/>} />

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
