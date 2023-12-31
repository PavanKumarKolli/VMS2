import "./Footer.css";
import { AiOutlineArrowRight } from "react-icons/ai";
const Footer = () => {
  return (
    <div>
      <div className="footer-main-divcontainer">
        <div className="footer-down-logoi">
          <h4>More About VMS</h4>
          <span>It provides security</span>
        </div>
        <div className="footer-sidelines-container">
          <div className="footer-sidelines-containerdiv">
            <span>USEFULL LINKS</span>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                color: "#white",
              }}
            >
              <AiOutlineArrowRight />
              Home
            </span>
          </div>
          <div className="footer-sidelines-containerdiv">
            <span>OUR SERVICES</span>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                color: "white",
              }}
            >
              {" "}
              <AiOutlineArrowRight />
              Web Design
            </span>
          </div>
          <div className="footer-sidelines-containerdiv">
            <span>CONTACT US</span>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                color: "white",
              }}
            >
              <AiOutlineArrowRight />
              A10 Audits
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
