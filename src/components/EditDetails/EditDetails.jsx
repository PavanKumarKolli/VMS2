import "./EditDetails.css";

import { CiMail } from "react-icons/ci";
import { AiOutlineLock } from "react-icons/ai";
import { GoPerson, GoPeople } from "react-icons/go";
import { PiPhoneCallBold } from "react-icons/pi";
import { GiDetour } from "react-icons/gi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const EditDetails = () => {
  const container = {
    offscreen: { opacity: 1, scale: 0 },
    onscreen: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.6,
        staggerChildren: 0.2,
      },
    },
  };
  return (
    <div>
      <div>
        <div className="EditDetails-header-container">
          <div>
            <Link to="/">
              <img
                style={{ width: "150px", marginLeft: "20px" }}
                src="./vistormangementlogo.png"
                alt=""
              />
            </Link>
          </div>
          <div className="EditDetails-header-options-container">
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
      <motion.div
        initial="offscreen"
        whileInView={"onscreen"}
        variants={container}
        className="EditDetails-mainform-div"
      >
        <form className="EditDetails-form-controller">
          <h2>Edit Visitor Details</h2>
          <div className="EditDetails-labels-container">
            <div className="EditDetails__name__phone">
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
              <label> Reason For Visit:</label>
              <select>
                <option>Job</option>
                <option>Business</option>
                <option>Personal</option>
                {/* <input type="text" placeholder="Address" /> */}
                <GiDetour />
              </select>
            </div>

            <div className="EditDetails__name__phone">
              <div>
                <label> Date Of Visit:</label>
                <span>
                  {" "}
                  <input
                    style={{ width: "100%" }}
                    type="datetime-local"
                    placeholder="Enter Date"
                  />
                </span>
              </div>
              <div>
                <label> To meet:</label>
                <span>
                  {" "}
                  <input type="text" placeholder="To meet" />
                  <GoPeople />
                </span>
              </div>
            </div>
          </div>
          <div className="Editdetails-select-options">
            <label> Status:</label>
            <select>
              <option>Completed</option>
              <option>Incomplete</option>
              <option>Excepted</option>
              {/* <input type="text" placeholder="Address" /> */}
              <GiDetour />
            </select>
          </div>
          <div className="Edit__details--button">
            <button
              style={{
                marginTop: "12px",
                height: "35px",
                backgroundColor: "blue",
                outlineStyle: "none",
                color: "white",
                border: "none",
                width: "150px",
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
                width: "150px",
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};
export default EditDetails;
