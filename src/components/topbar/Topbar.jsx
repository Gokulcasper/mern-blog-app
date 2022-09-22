import "./topbar.css";
// import gokul from "./gokul.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Topbar = () => {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <div className="topLeft">
        <a href="https://www.linkedin.com/in/gokulraj-p-8a426820a/">
          <FaLinkedin className="facebook_T" />
        </a>
        <a href="https://github.com/Gokulcasper">
          <FaGithub className="github_T" />
        </a>
        <a href="mailto:gokulcasper@gmail.com">
          <FaEnvelope className="mail_T" />
        </a>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <Link className="link" to="/about">
            <li className="topListItem">ABOUT</li>
          </Link>
          {/* <li className="topListItem">CONTACT</li> */}
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/setting">
            <img className="topImg" src={PF + user.profilePic} alt="" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}

        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
};

export default Topbar;
