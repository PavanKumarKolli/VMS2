import "./AddReceptionlist.css";

import { CiMail } from "react-icons/ci";
import { AiOutlineLock } from "react-icons/ai";
import { GoPerson } from "react-icons/go";
import { PiPhoneCallBold } from "react-icons/pi";
import { FiImage } from "react-icons/fi";
import { motion } from "framer-motion";

const AddReceptionlist = () => {
  const container = {
    offscreen: { opacity: 1, scale: 0 },
    onscreen: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 1,
        staggerChildren: 0.2,
      },
    },
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <motion.div
        initial="offscreen"
        whileInView={"onscreen"}
        variants={container}
        style={{ position: "relative" }}
        className="Addrecplist-mainform-div"
      >
        <form className="Addrecplist-form-controller">
          <h2>Add Receptionlist</h2>
          <div className="Addrecplist-labels-container">
            <div>
              <span>
                {" "}
                <input
                  className=""
                  type="text"
                  placeholder="Enter Email/User name"
                />
                <CiMail />
              </span>
            </div>
            <div>
              <span>
                {" "}
                <input type="password" placeholder="Enter Password" />
                <AiOutlineLock />
              </span>
            </div>
            <div>
              <span>
                {" "}
                <input type="text" placeholder="Enter Name" />
                <GoPerson />
              </span>
            </div>
            <div>
              <span>
                {" "}
                <input type="text" placeholder="Enter Phone number" />
                <PiPhoneCallBold />
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
                  marginTop: "12px",
                  height: "35px",
                  backgroundColor: "blue",
                  outlineStyle: "none",
                  color: "white",
                  border: "none",
                  borderRadius: "3px",
                }}
              >
                Add Receptionlist
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
      </motion.div>
    </div>
  );
};
export default AddReceptionlist;
