import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/apiCalls";
import "./login.css";
export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };


  return (
    <div className="containerLogin" >
      <div className="wrapper" >

        <h1 style={{ fontSize: '24px', fontWeight: '800', color: 'teal' }}>SIGN IN</h1>
        <form>


          <input
            style={{ padding: 10, marginBottom: 20 }}
            type="text"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            style={{ padding: 10, marginBottom: 20 }}
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleClick} style={{ padding: 10, width: 100 }}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;