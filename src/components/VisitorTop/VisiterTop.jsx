import { useEffect, useRef, useState } from "react";
import "./VisiterTop.css";
import { FiUsers } from "react-icons/fi";
import { Link } from "react-router-dom";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { BsEmojiSmile } from "react-icons/bs";
import { AiOutlineDatabase } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";
import VistorDetails from "../VistorDetails/VistorDetails";
// import { XLSX } from "xlsx";
// import { useDownloadExcel } from "react-export-table-to-excel";

import { customer } from "../../data/dummy_data";

const ExcelJS = require("exceljs");

const vistors = [
  {
    name: "visitor",
    total: 0,
    icon: <FiUsers size={60} />,
    id: 1,
  },
  {
    name: "Business",
    total: 0,
    icon: <MdOutlineBusinessCenter size={60} />,
    id: 2,
  },
  {
    name: "Personal",
    total: 0,
    icon: <BsEmojiSmile size={60} />,
    id: 3,
  },
  {
    name: "Job",
    total: 0,
    icon: <AiOutlineDatabase size={60} />,
    id: 4,
  },
];

export const VisiterTop = () => {
  // let visitor = customer.filter((item) => item.Purpose === "visitor");
  const [time, setTime] = useState(new Date());

  const [popupData, setpopupData] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = time.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  vistors[0]["total"] = customer.length;

  let Business = customer.filter((item) => item.Purpose === "Business");

  vistors[1]["total"] = Business.length;

  let Personal = customer.filter((item) => item.Purpose === "Personal");

  vistors[2]["total"] = Personal.length;

  let Job = customer.filter((item) => item.Purpose === "Job");

  vistors[3]["total"] = Job.length;

  const [newFiltterData, setNewFilterData] = useState(customer);
  const fltterdata = (value) => {
    if (value === "visitor") {
      setNewFilterData(customer);

      return;
    }
    let data = customer.filter((item) => item.Purpose === value);

    setNewFilterData(data);
  };

  const [popup, setPopup] = useState(false);

  const vistordetails = (id) => {
    let ss = customer.filter((each) => each.id === id);
    setPopup(true);
    setpopupData(ss);

    console.log(vistordetails);
  };
  const closePopup = () => {
    setPopup(false);
  };
  const tableRef = useRef(null);

  // Export to Excel
  const excelChangeValue = () => {
    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet("My Sheet");
    sheet.properties.defaultRowHeight = 30;

    sheet.columns = [
      {
        header: "id",
        key: "id",
        width: 10,
      },
      {
        header: "name",
        key: "name",
        width: 30,
      },
      {
        header: "age",
        key: "age",
        width: 20,
      },
      {
        header: "gender",
        key: "gender",
        width: 20,
      },
      {
        header: "email",
        key: "email",
        width: 25,
      },
      {
        header: "phone",
        key: "phone",
        width: 30,
      },
      {
        header: "purpose",
        key: "purpose",
        width: 20,
      },
      {
        header: "to_meet",
        key: "to_meet",
        width: 30,
      },
      {
        header: "date_of_visit",
        key: "date_of_visit",
        width: 20,
      },
      {
        header: "intime",
        key: "intime",
        width: 20,
      },
      {
        header: "outtime",
        key: "outtime",
        width: 20,
      },
    ];

    newFiltterData.map((each) => {
      return sheet.addRow({
        id: each.id,
        name: each.name,
        age: each.Age,
        gender: each.Gender,
        email: each.Email,
        phone: each.Phone,
        purpose: each.Purpose,
        to_meet: each.Tomeet,
        date_of_visit: each.DateofVisit,
        intime: each.InTime,
        outtime: each.OutTime,
      });
    });

    workbook.xlsx.writeBuffer().then((newFiltterData) => {
      const blob = new Blob([newFiltterData], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheet.sheet",
      });
      const url = window.URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = "download.xlsx";
      anchor.click();
      window.URL.revokeObjectURL(url);
    });
  };

  //Download excel sheets

  return (
    <>
      <div
        style={{
          filter: popup && "blur(70px)",
        }}
      >
        <div>
          <div className="VisiterTop-container">
            <div>
              <Link to="/">
                <img
                  style={{ width: "150px", marginLeft: "20px" }}
                  src="https://brihaspathi.com/img/logo/logo.png"
                  alt=""
                />
              </Link>
            </div>
            <div>
              <label style={{ color: "white" }}>{formattedTime}</label>
            </div>
            <div className="VisiterTop-options-container">
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/home"
              >
                Home
              </Link>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/Addreceptionlist"
              >
                Add New Visitor{" "}
              </Link>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/viewreceptionlist"
              >
                View Receptionlist
              </Link>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/home"
              >
                My Profile
              </Link>
              <button>Logout</button>
            </div>
          </div>
        </div>
        <div className="VisiterTop-vistor-menu">
          {vistors.map((item) => (
            <div
              className="VisiterTop-vistors"
              onClick={() => fltterdata(item.name)}
              style={{
                background:
                  item.id === 1
                    ? "rgb(170, 51, 130"
                    : item.id === 2
                    ? "rgb(66, 123, 230"
                    : item.id === 3
                    ? "rgb(194, 118, 55"
                    : "rgb(231, 75, 75",
              }}
            >
              {item.icon}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  fontSize: "24px",
                  textDecoration: "none",
                }}
              >
                <span>{item.name}</span>
                <span>{item.total}</span>
              </div>
            </div>
          ))}
        </div>
        {/* tabel */}
        <div className="Visitor-classification-header">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <h1>Visitors</h1>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                width: "220px",
              }}
            >
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/Addvisitor"
              >
                <button className="visitor-addbutton ">
                  <span>
                    <IoMdAdd size={20} style={{ color: "white" }} />
                  </span>
                  Add Visitor
                </button>
              </Link>
              <div>
                <button
                  onClick={excelChangeValue}
                  className="visitor-addbutton "
                >
                  Export to Excel
                </button>
              </div>
            </div>
          </div>

          <div
            style={{
              overflowY: "scroll",
              height: "350px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {" "}
            <table ref={tableRef} className="vistior-table-container">
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Image</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Purpose</th>
                <th>To Meet</th>
                <th>Date Of Visit</th>
                <th> InTime</th>
                <th>Out Time</th>
                <th>Action</th>
              </tr>
              {newFiltterData.map((i) => (
                <tr>
                  <td>{i.id}</td>
                  <td>{i.name}</td>

                  <td>
                    <img
                      onClick={() => vistordetails(i.id)}
                      style={{
                        width: "70px",
                        borderRadius: "50%",
                        height: "70px",
                        cursor: "pointer",
                      }}
                      src={i.Image}
                      alt=""
                    />
                  </td>

                  <td>{i.Age}</td>
                  <td>{i.Gender}</td>
                  <td>{i.Email}</td>
                  <td>{i.Phone}</td>
                  <td>{i.Purpose}</td>
                  <td>{i.Tomeet}</td>
                  <td>{i.DateofVisit}</td>
                  <td>{i.InTime}</td>
                  <td>{i.OutTime}</td>
                  <th>
                    <span>
                      {" "}
                      <button>
                        <Link
                          style={{ textDecoration: "none", color: "white" }}
                          to="/Editdetails"
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
      {/*  */}
      <div className="openpop">
        {popup && (
          <VistorDetails closePopup={closePopup} popupData={popupData} />
        )}
      </div>
    </>
  );
};
