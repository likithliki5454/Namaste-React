import reactDOM from "react-dom/client";
const root = reactDOM.createRoot(document.getElementById("root"));
import "./app.css";
import { useState } from "react";
import mockData from "./config/mockData";
import Header from "./components/Header";
import Body from "./components/Body";

// Creating App Layout //
const AppLayout = () => {
  const [data, setData] = useState(mockData);
  return (
    <div>
      <Header />
      <Body data={data} setData={setData} />
    </div>
  );
};

root.render(<AppLayout />);
