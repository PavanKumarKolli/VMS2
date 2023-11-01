import { useState } from "react";
import Footer from "../Footer/Footer";
import "./Login.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Login = () => {
  const [isShowMore, setIsShowMore] = useState(false);

  const transition = { type: "spring", duration: 3 };

  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };
  return (
    <>
      <div>
        <div className="login-background-div">
          <div className="login-maindiv-container">
            <div>
              <motion.img
                initial={{ left: "-100px" }}
                whileInView={{ left: "0px" }}
                transition={transition}
                style={{
                  width: "150px",
                  marginLeft: "20px",
                  position: "relative",
                }}
                src="https://brihaspathi.com/img/logo/logo.png"
                alt=""
              />
            </div>
            <motion.div
              className="login-header-container"
              initial={{ left: "-450px" }}
              whileInView={{ left: "0px" }}
              transition={{ ...transition, duration: 2 }}
              style={{ position: "relative" }}
            >
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/home"
              >
                Home
              </Link>
              <span>About Us</span>
              <span>Freatures</span>
              <span>Pricing</span>
              <div className="header__login__and__ul">
                <button>
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "white",
                      fontFamily: "Arial",
                      fontWeight: "600",
                    }}
                    to="login"
                  >
                    Log In
                  </Link>
                </button>
                <button>
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "white",
                      fontFamily: "Arial",
                      fontWeight: "600",
                    }}
                    to="signup"
                  >
                    SIgn Up
                  </Link>
                </button>
              </div>
            </motion.div>
          </div>

          <div className="login-middle-div">
            <div className="login-homeleftside-con">
              <motion.h1
                initial={{ left: "-500px" }}
                whileInView={{ left: "0px" }}
                transition={transition}
                id="heading"
                style={{
                  width: "600px",
                  fontSize: "50px",
                  position: "relative",
                }}
              >
                Make your workplace Safe &Secure
              </motion.h1>
              <motion.p
                initial={{ left: "-450px" }}
                whileInView={{ left: "0px" }}
                transition={{ ...transition, duration: 5 }}
                style={{ position: "relative" }}
              >
                The safety of your employees and the enivornment in which they
                operate is paramount.The future of modern offices will be
                check-ins.
              </motion.p>
              {isShowMore && (
                <p>
                  Employees and guests can check in safely with the Visitor
                  Management System,Lowering the risk of infection
                </p>
              )}

              <button
                className="loginvisitor-read-more-less"
                onClick={toggleReadMoreLess}
              >
                {isShowMore ? "Read Less..." : "Read More...  "}
              </button>
            </div>
            <div
              style={{
                width: "45%",
                // height: "350px",
              }}
            >
              <motion.img
                initial={{ left: "-500px" }}
                whileInView={{ left: "0px" }}
                transition={{ ...transition, duration: 5 }}
                style={{
                  width: "100%",
                  backgroundImage: "cover",
                  borderRadius: "15px 50px",
                  backgroundSize: "cover",
                  position: "relative",
                }}
                src="https://trotons.com/wp-content/uploads/2020/12/Visitor-Management-Software.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />;
    </>
  );
};

export default Login;
