import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
const Navigation = () =>{
    return(<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <label className="navbar-brand mx-2">SaveXP</label>
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item active">
          <Link className="nav-link" to="/">Home</Link>
        </li>
      </ul>
      <ul className="navbar-nav ">
        <li className="nav-item ">
            <Link className="nav-link" to="/Analytics">Analytics</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/Expenditure">Expenditures</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/Savings">Savings</Link>
        </li>
      </ul>
    </div>
  </nav>
  );
}
export default Navigation;