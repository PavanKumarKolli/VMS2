import "./EditReceptionlist.css";
import { Link } from "react-router-dom";
import { CiMail } from "react-icons/ci";
import { AiOutlineLock } from "react-icons/ai";
import { GoPerson } from "react-icons/go";
import { PiPhoneCallBold } from "react-icons/pi";
import { FiImage } from "react-icons/fi";

const EditReceptionlist = () => {
  return (
    <div>
      <div>
        <div className="Editrecplist-header-container">
          <div>
            <Link to="/">
              <img
                style={{ width: "150px", marginLeft: "20px" }}
                src="./vistormangementlogo.png"
                alt=""
              />
            </Link>
          </div>
          <div className="Editrecplist-header-options-container">
            <span>Home</span>

            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/visitorlist"
            >
              Visitor List
            </Link>

            <span>My Profile</span>
            <Link
              to="/viewreceptionlist"
              style={{ textDecoration: "none", color: "white" }}
            >
              View ResceptionList
            </Link>
            <button>Logout</button>
          </div>
        </div>
      </div>
      <div className="Editrecplist-mainform-div">
        <form className="Editrecplist-form-controller">
          <h2>Edit Receptionlist</h2>
          <div className="Editrecplist-labels-container">
            <div>
              <label>Email Address:</label>
              <span>
                {" "}
                <input type="text" placeholder="Enter Email/User name" />
                <CiMail />
              </span>
            </div>
            <div>
              <label>Password:</label>
              <span>
                {" "}
                <input type="password" placeholder="Enter Password" />
                <AiOutlineLock />
              </span>
            </div>
            <div>
              <label>Name:</label>
              <span>
                {" "}
                <input type="text" placeholder="Enter Name" />
                <GoPerson />
              </span>
            </div>
            <div>
              <label>Phone Number:</label>
              <span>
                {" "}
                <input type="text" placeholder="Enter Phone number" />
                <PiPhoneCallBold />
              </span>
            </div>
            <div>
              <label> Profile pic:</label>
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
                  marginTop: "12px",
                  height: "35px",
                  backgroundColor: "blue",
                  outlineStyle: "none",
                  color: "white",
                  border: "none",
                  borderRadius: "3px",
                }}
              >
                Submit
              </button>
              <button
                style={{
                  marginTop: "12px",
                  height: "35px",
                  backgroundColor: "grey",
                  outlineStyle: "none",
                  color: "white",
                  border: "none",
                  borderRadius: "3px",
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default EditReceptionlist;
