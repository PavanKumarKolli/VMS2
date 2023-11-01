import "./Headerform.css";
import { Link } from "react-router-dom";

const Headerform = () => {
  return (
    <div>
      <div className="Headerform-header-container">
        <div>
          <Link to="/">
            <img
              style={{ width: "150px", marginLeft: "20px" }}
              src="https://brihaspathi.com/img/logo/logo.png"
              alt=""
            />
          </Link>
        </div>
        <div className="Headerform-header-options-container">
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
  );
};
export default Headerform;
