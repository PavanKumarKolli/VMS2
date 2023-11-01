import "./VistorDetails.css";
import { MdOutlineCancel } from "react-icons/md";

const VistorDetails = ({ closePopup, popupData }) => {
  const iconsSubmit = (e) => {
    closePopup();
  };
  const handlePrint = () => {
    window.print(VistorDetails);
  };
  return (
    <div>
      {popupData?.map((event) => (
        <div className="vistior-details-collediv">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
              borderRadius: "6px",
              width: "300px",
              height: "70vh",
              background: "white",
            }}
          >
            <div>
              <img
                style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: "50%",
                }}
                src={event.Image}
                alt=""
              />
            </div>
            <div className="visitor-gri9d-details">
              <div className="visitor-gri9d-column">
                <span>VisitorId:</span>
                <span>Name:</span>
                <span>Gender:</span>
                <span>Email:</span>
                <span>Contact:</span>
                <span>Purpose:</span>
                <span>In Time:</span>
                <span>Out Time:</span>
                <span>DateofVisit:</span>
              </div>

              <div className="visitor-gri9d-column1">
                <span>{event.id}</span>
                <span>{event.name}</span>
                <span>{event.Gender}</span>
                <span>{event.Email}</span>
                <span>{event.Phone}</span>
                <span>{event.Purpose} </span>
                <span>{event.InTime}</span>
                <span>{event.OutTime}</span>
                <span>{event.DateofVisit}</span>
              </div>
            </div>
            {/* <div className="vistor-detailsscanner-container">
              <img
                style={{ width: "100px", height: "100px" }}
                src="https://pngimg.com/d/qr_code_PNG5.png"
                alt=" "
              />
            </div> */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              <button onClick={handlePrint} className="vistor-print-details">
                Print
              </button>
            </div>
            <div className="xcrossdetails-button" onClick={iconsSubmit}>
              <MdOutlineCancel size={25} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VistorDetails;
