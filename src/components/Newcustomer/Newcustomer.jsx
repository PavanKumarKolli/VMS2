import "./Newcustomer.css";
import { MdOutlineMailOutline } from "react-icons/md";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

const Newcustomer = () => {
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(true);

  function NewValidate() {
    if (Email.toString() === "") {
      alert("Enter Name");
      return;
    }
    if (password.length <= 9) {
      alert("Enter Password in correct format");
      return;
      // } else if (password.length < 10 && password.length > 5) {
      //   alert("Enter Password in correct format");
    }
  }

  const showPassword = () => {
    setShowPass(false);
  };
  const showPassworda = () => {
    setShowPass(true);
  };

  const animation = {
    offscreen: {
      scale: 0.5,
    },
    onscreen: {
      scale: 1,
      transtion: {
        type: "string",
        duration: 2,
      },
    },
  };

  return (
    <div className="new-main-totaldiv">
      <motion.form
        className="new-from-controller"
        initial="offscreen"
        whileInView={"onscreen"}
        variants={animation}
      >
        <h2
          style={{
            margin: "0px",
          }}
        >
          <center>SIGN IN</center>
        </h2>
        <div className="new-label-container">
          <div>
            <label>Email Address:</label>
            <span>
              <input
                type="text"
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
              />
              <MdOutlineMailOutline />
            </span>
          </div>
          <div>
            <label>Password:</label>
            <span>
              <input
                type={showPass ? "password" : "text"}
                placeholder=" Minimum nine diits"
                onClick={(e) => setPassword(e.target.value)}
              />
              {showPass ? (
                <AiOutlineEye onClick={showPassword} />
              ) : (
                <AiOutlineEyeInvisible onClick={showPassworda} />
              )}
            </span>
          </div>
        </div>
        <div className="new-checkbox-container">
          <span>
            <input type="checkbox" id="checkbox" />
            <label for="checkbox">Remember me</label>
          </span>
          <span>Forgot Password?</span>
        </div>
        <button
          onClick={() => {
            NewValidate();
          }}
          style={{
            border: "none",
            borderRadius: "3px",
            backgroundColor: "blue",
            color: "white",
            width: "92%",
            height: "35px",
          }}
        >
          Login
        </button>
        <div className="new-donthaveaccount">
          <span>
            <span>Don't have an account?</span>
            <span>
              <Link to="/signup">Sign Up/Register</Link>
            </span>
          </span>
        </div>
      </motion.form>
    </div>
  );
};
export default Newcustomer;
