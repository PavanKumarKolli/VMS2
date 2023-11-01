import "./Receptionsignup.css";
import { MdOutlineMailOutline } from "react-icons/md";
import { AiOutlineLock } from "react-icons/ai";
import { Link } from "react-router-dom";

const Receptionsignup = () => {
  return (
    <div className="receptionsignup-main-totaldiv">
      <form className="receptionsignup-from-controller">
        <h2>
          <center>Reception SignIn</center>
        </h2>
        <div className="receptionsignup-label-container">
          <div>
            <label>Email Address:</label>
            <span>
              <input type="text" placeholder="Email address" />
              <MdOutlineMailOutline />
            </span>
          </div>
          <div>
            <label>Password:</label>
            <span>
              <input type="password" placeholder=" Password" />
              <AiOutlineLock />
            </span>
          </div>
        </div>
        <div className="receptionsignup-checkbox-container">
          <span>
            {" "}
            <input type="checkbox" id="checkbox" />
            <label for="checkbox">Remember me</label>
          </span>
          <span>Forgot Password?</span>
        </div>
        <button
          style={{
            border: "none",
            borderRadius: "3px",
            backgroundColor: "blue",
            color: "white",
            width: "90%",
            height: "30px",
          }}
        >
          Login
        </button>
        <div className="receptionsignup-donthaveaccount">
          <span>
            <span>Don't have an account?</span>
            <span>
              <Link to="/Receptionsignin">Sign Up/Register</Link>
            </span>
          </span>
        </div>
      </form>
    </div>
  );
};
export default Receptionsignup;
