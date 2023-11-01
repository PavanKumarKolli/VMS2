import "./ReceptionList.css";
import { FiUsers } from "react-icons/fi";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { BsEmojiSmile } from "react-icons/bs";
import { AiOutlineDatabase } from "react-icons/ai";
import { Link } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";

const ResceptionList = ({ reception }) => {
  return (
    <div>
      <div>
        <div className="Receptionlist-header-container">
          <div>
            <Link to="/">
              <img
                style={{ width: "150px", marginLeft: "20px" }}
                src="https://brihaspathi.com/img/logo/logo.png"
                alt=""
              />
            </Link>
          </div>
          <div className="Receptionlist-header-options-container">
            <span>Home</span>

            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/visitorlist"
            >
              Vistor List
            </Link>

            <span>My Profile</span>
            {/* <span>View ResceptionList</span> */}
            <button>Logout</button>
          </div>
        </div>
        <div className="Receptionlist-vistor-menu">
          <div className="Receptionlist-vistors">
            <FiUsers size={60} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: "24px",
              }}
            >
              <span>Vistors</span>
              <span>Total:9</span>
            </div>
          </div>
          <div className="Receptionlist-Business">
            <MdOutlineBusinessCenter size={60} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: "24px",
              }}
            >
              <span>Business </span>
              <span>Total:9</span>
            </div>
          </div>
          <div className="Receptionlist-Personal">
            <BsEmojiSmile size={60} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: "24px",
              }}
            >
              <span>Personal</span>
              <span>Total:9</span>
            </div>
          </div>
          <div className="Receptionlist-jobsvisit">
            <AiOutlineDatabase size={60} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: "24px",
              }}
            >
              <span>Job Visit</span>
              <span>Total:9</span>
            </div>
          </div>
        </div>
        <div className="Receptionlist-Appcontainer">
          <div className="Receptionlist-classification-header">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              {" "}
              <h1>Reception List</h1>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/Addreceptionlist"
              >
                <button className="Receptionlist-addbutton ">
                  <span>
                    <IoMdAdd size={20} style={{ color: "white" }} />
                  </span>{" "}
                  Add ReceptionList
                </button>
              </Link>
            </div>
            <div
              style={{
                overflowY: "scroll",
                height: "350px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <table className="Receptionlist-table-container">
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Gender</th>
                  <th>Username</th>
                  <th>Userroles</th>

                  <th>Action</th>
                </tr>
                {reception.map((i) => (
                  <tr>
                    <td>{i.id}</td>
                    <td>{i.name}</td>
                    <td>{i.Phone}</td>
                    <td>{i.Gender}</td>
                    <td>{i.Username}</td>
                    <td>{i.Userroles}</td>

                    <th>
                      <span>
                        {" "}
                        <button>
                          <Link
                            style={{ textDecoration: "none", color: "white" }}
                            to="/Editreceptionlist"
                          >
                            Edit
                          </Link>
                        </button>
                        <button>Delete</button>
                      </span>
                    </th>
                  </tr>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ResceptionList;
