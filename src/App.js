import "./App.css";
import LayoutDashboard from "./layout/layout";
import "@fontsource/roboto";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import Login from "./halamanAwal/Login";
import LForm from "./halamanAwal/FormLogin"
import SignUp from "./halamanAwal/SignUp"
import Filtering from "./UserManagement/UM";
import Mstaff from "./Mstaff/Mstaff";
import Mstudent from "./mstudent/student";
import ManajemenDepartment from "./mDepartment/manajemenD";

function App() {
  return (
    <Router>
      <div className="App wrapper">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/LForm" > <LForm /></Route>
          <Route exact path="/SignUp" component={SignUp} />
          
            <LayoutDashboard>
            <Route exact path="/muser" component={Filtering} />
            <Route exact path="/mstaff" component={Mstaff} />
            <Route exact path="/mstudent" component={Mstudent} />
            <Route exact path="/mdepartment" component={ManajemenDepartment} />
            </LayoutDashboard>
            
        </Switch>
      </div>
    </Router>
  );
}

export default App;
