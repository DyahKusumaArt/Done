import "./App.css";
import "@fontsource/roboto";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import Login from "./halamanAwal/Login";
import LForm from "./halamanAwal/FormLogin"
import SignUp from "./halamanAwal/SignUp"
import Filtering from "./UserManagement/UM";
import Mstaff from "./Mstaff/Mstaff";
import Mstudent from "./mstudent/student";
import Manreport from "./manajemenReport/manReport";
import ManajemenKategori from "./ManKategori/Mkategori";
import Department from "./mDepartment/manajemenD";
import Forget from "./halamanAwal/ForgetPassword";

function App() {
  return (
    <Router>
      <div className="App wrapper">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/LForm" > <LForm /></Route>
          <Route exact path="/forget" component={Forget}></Route>
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="/muser" component={Filtering} />
          <Route exact path="/mstaff" component={Mstaff} />
          <Route exact path="/mstudent" component={Mstudent} />
          <Route exact path="/manreport" component={Manreport} />
          <Route exact path="/mkategori" component={ManajemenKategori}/>
          <Route exact path="/mdepartment" component={Department} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
