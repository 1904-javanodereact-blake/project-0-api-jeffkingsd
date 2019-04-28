import React from 'react';
import { Link } from 'react-router-dom';
import freddylogo from '../../assets/freddylogo.png';

export class NavComponent extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-toggleable-md navbar-expand-lg navbar-light bg-light display-front nav-pad">
        <div className="navbar-header c-pointer shift-left">
          <Link to="/home" className="unset-anchor">
            <img className="img-adjust-position rev-logo" src={freddylogo} alt="revature" />
          </Link>
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarsExample04">
          <ul className="navbar-nav ml-auto margin-nav">
            <li className="nav-item active">
              <Link to="/home" className="unset-anchor nav-link">Home</Link>
            </li>
            <li className="nav-item active">
              <Link to="/sign-in" className="unset-anchor nav-link">Sign In</Link>
            </li>
            <li className="nav-item active dropdown">
            <a className="nav-link dropdown-toggle pointer" id="examples-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="">ERS</a>
              <div className="dropdown-menu" aria-labelledby="ERS-dropdown">
                <div className="dropdown-item"><Link to="/claims" className="unset-anchor nav-link active">Your Claims</Link></div>
                <div className="dropdown-item"><Link to="/claims/user" className="unset-anchor nav-link active">View Claims</Link></div>
                <div className="dropdown-item"><Link to="/claims/new" className="unset-anchor nav-link active">Submit Claim</Link></div>
                <div className="dropdown-item"><Link to="/claims/update" className="unset-anchor nav-link active">Update claims</Link></div>
                <div className="dropdown-item"><Link to="/claims/ban" className="unset-anchor nav-link active">Block users</Link></div>
              </div>
            </li>
            <li className="nav-item active">
              <Link to="/second" className="unset-anchor nav-link">Profile</Link>
            </li>
            <li className="nav-item active">
              <Link to="/clicker" className="unset-anchor nav-link">Clicker</Link>
            </li>
            <li className="nav-item active dropdown">
              <a className="nav-link dropdown-toggle pointer" id="examples-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="">Examples</a>
              <div className="dropdown-menu" aria-labelledby="examples-dropdown">
                <div className="dropdown-item"><Link to="/movies" className="unset-anchor nav-link active">Movies</Link></div>
                <div className="dropdown-item"><Link to="/clicker" className="unset-anchor nav-link active">Clicker Game</Link></div>
                <div className="dropdown-item"><Link to="/tic-tac-toe" className="unset-anchor nav-link active">Tic Tac Toe Game</Link></div>
                <div className="dropdown-item"><Link to="/chuck-norris" className="unset-anchor nav-link active">Chuck Norris Jokes</Link></div>
                <div className="dropdown-item"><Link to="/pokemon" className="unset-anchor nav-link active">Pokemon</Link></div>
              </div>
            </li>
            <li className="nav-item active">
              <Link to="/reimbursement" className="unset-anchor nav-link">Nested</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}