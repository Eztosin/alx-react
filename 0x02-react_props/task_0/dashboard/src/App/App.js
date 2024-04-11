import logo from "../assets/holberton-logo.jpg";
import "./App.css";
import React from "react"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login"
import { getFullYear, getFooterCopy } from "../utils/utils";


export default function App() {
    return (
	    <React.Fragment>
	    <Notification/>
	    <div className="App">
	    <Header/>
	    <Login/>
	    <Footer/>
	    </div>
	    </React.Fragment>
  );
}
