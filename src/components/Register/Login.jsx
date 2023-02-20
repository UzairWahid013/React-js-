import { useState, useContext } from "react";
import {AuthContext} from '../../context/AuthContext'
import "../Register/style.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const LogIn = () => {
  const naviagte = useNavigate();
  const [username, setUserName] = useState("");
  const [pass, setPass] = useState("");
  const { setToken } = useContext(AuthContext);
  const [loading,setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios({
      url: "https://fakestoreapi.com/auth/login",
      method: "POST",
      data: {
        username: username,
        password: pass,
      },
    })
      .then((res) => {
        const token = res.data.token;
        setToken(token);
        localStorage.setItem("userToken", token);
        console.log("Token ID in Login  :", token);
        naviagte("./products");
      })
      .catch((err) => {
        console.log(err.response);
      })
      .finally(() => {
        setLoading(false);
      });

      
      

  };

  return (
    <div className="main-contain2">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          placeholder="User Name"
          onChange={(e) => setUserName(e.target.value)}
        />{" "}
        <br />
        <input
          type="password"
          value={pass}
          placeholder="Password"
          onChange={(e) => setPass(e.target.value)}
        />{" "}
        <br />
        <button>{loading ? "Laoding" : "Login"}</button> <br />
      </form>
    </div>
  );
};

export default LogIn;
