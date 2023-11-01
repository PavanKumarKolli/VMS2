import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import Openpage from "./components/Openpage/Openpaje";
import Signuppage from "./components/Signuppage/Signuppage";
import Newcustomer from "./components/Newcustomer/Newcustomer";
import { VisiterTop } from "./components/VisitorTop/VisiterTop";
import Reception from "./components/ReceptionLogin/Reception";
import Receptionsignup from "./components/ReceptionSignup/Receptionsignup";
import UpdateuserDetails from "./components/UpdateUserDetails/UpdateUserDetails";
import EditDetails from "./components/EditDetails/EditDetails";
import ResceptionList from "./components/ReceptionList/ReceptionList";
import AddReceptionlist from "./components/AddReceptionlist/AddReceptionlist";
import EditReceptionlist from "./components/EditReceptionlist/EditReceptionlist";
import Footer from "./components/Footer/Footer";
import VistorDetails from "./components/VistorDetails/VistorDetails";

const reception = [
  {
    id: "1",
    name: "Sruthi",
    Phone: "1234567890",
    Gender: "Female",
    Username: "xxx@hdhs",
    Userroles: "Receptionist",
  },
];

function App() {
  return (
    <div className="App">
      <Routers>
        <div className="main">
          <Routes>
            {/* <Footer /> */}
            <Route
              path="/"
              element={
                <>
                  <Login />
                  <Footer />
                  <VistorDetails />
                  {/* <Reception />
                  <Receptionsignup /> */}
                  {/* <UpdateuserDetails /> */}
                  {/* <Headerform /> */}
                </>
              }
            />
            <Route path="/home" element={<Openpage />} />
            <Route path="/signup" element={<Signuppage />} />
            <Route path="/login" element={<Newcustomer />} />
            <Route path="/Receptionsignin" element={<Reception />} />
            <Route path="receptionsignup" element={<Receptionsignup />} />
            <Route path="/Addvisitor" element={<UpdateuserDetails />} />
            <Route path="/Editdetails" element={<EditDetails />} />
            <Route
              path="/viewreceptionlist"
              element={<ResceptionList reception={reception} />}
            />
            <Route path="/Editreceptionlist" element={<EditReceptionlist />} />
            <Route path="/Addreceptionlist" element={<AddReceptionlist />} />

            <Route path="/visitorlist" element={<VisiterTop />} />
          </Routes>
        </div>
      </Routers>
    </div>
  );
}

export default App;
