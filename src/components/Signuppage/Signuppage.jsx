import "./Signuppage.css";
import { Link } from "react-router-dom";
import { CiMail } from "react-icons/ci";
import { AiOutlineLock } from "react-icons/ai";
import { GoPerson } from "react-icons/go";
import { PiPhoneCallBold } from "react-icons/pi";
import { FaRegAddressCard } from "react-icons/fa";
import { FiImage } from "react-icons/fi";
const Signuppage = () => {
  return (
    <div>
      <div className="singup-mainform-div">
        <form className="signup-form-controller">
          <h2
            style={{
              margin: "0px",
            }}
          >
            SIGN UP
          </h2>
          <div className="signup-labels-container">
            <div>
              <span>
                <input
                  className="input__pad"
                  type="text"
                  placeholder="Enter Email/User name"
                />
                <CiMail />
              </span>
            </div>
            <div>
              <span>
                <input
                  className="input__pad"
                  type="password"
                  placeholder="Enter Password"
                />
                <AiOutlineLock />
              </span>
            </div>
            <div className="signup__name__phone">
              <div>
                <span>
                  <input
                    className="input__pad"
                    type="text"
                    placeholder="Enter Name"
                  />
                  <GoPerson />
                </span>
              </div>
              <div>
                <span>
                  <input
                    className="input__pad"
                    type="text"
                    placeholder="Enter Phone number"
                  />
                  <PiPhoneCallBold />
                </span>
              </div>
            </div>
            <div>
              <span>
                {" "}
                <textarea
                  cols="80"
                  rows="4"
                  type="text"
                  placeholder="Address"
                  style={{
                    border: "none",
                    outline: "none",
                  }}
                ></textarea>
                <FaRegAddressCard />
              </span>
            </div>
            <div>
              <span>
                {" "}
                <input
                  style={{
                    border: "none",
                    outlineStyle: "none",
                    background: "transparent",
                    display: "flex",
                    alignItems: "center",
                  }}
                  type="File"
                />
                <FiImage />
              </span>
            </div>
            <div>
              <button
                style={{
                  // marginTop: "12px",
                  height: "35px",
                  backgroundColor: "blue",
                  outlineStyle: "none",
                  color: "white",
                  border: "none",
                  borderRadius: "3px",
                }}
              >
                Sign Up/Register
              </button>
              <p
                style={{
                  margin: "0px",
                }}
              >
                <center>
                  Already have an account?/<Link to="/login"> Login</Link>
                </center>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Signuppage;
