import reactDOM from "react-dom/client";
const root = reactDOM.createRoot(document.getElementById("root"));
import "./app.css";
import { useState } from "react";
import mockData from "./config/mockData";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter ,Outlet,RouterProvider} from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import RestroMenu from "./components/RestroMenu";

// Creating App Layout //
const AppLayout = () => {
  return (
    <div>
      <Header />
    <Outlet/>
     
    </div>
  );
};

const appRouter=createBrowserRouter([
  {
path:'/',
element:<AppLayout/>,
children:[
  {
    path:'/',
    element:<Body/>
  },
  {
    path:'/About',
    element:<About/>
  },
  {
    path:'/ContactUs',
    element:<ContactUs/>
  },
  {
    path:'/RestroMenu/:resid',
    element:<RestroMenu/>
  }
]
},
])

root.render(<RouterProvider  router={appRouter} />);
