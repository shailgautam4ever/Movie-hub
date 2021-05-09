import logo from "./logo.svg";
import "./App.css";
import Todos from "./components/todos";
import Home from "./components/Home/Home.jsx";
import { useEffect, useState } from "react";
import { getPosition, getAddress } from "./Services/googleService";

function App() {
  useEffect(() => {
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(async (position) => {
        try {
          let lat = position.coords.latitude;
          let long = position.coords.longitude;

          const data = await getPosition(lat, long);
          const { state, address } = getAddress(data);
          localStorage.setItem("add", address);
          localStorage.setItem("state", state);
        } catch (error) {
          console.log("error", error);
        }
      });
    }
  }, []);

  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
