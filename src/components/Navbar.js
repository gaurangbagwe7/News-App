import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Navbar extends Component {
  render() {
    return (
    <>
        <nav className="navbar navbar-expand-lg bg-dark border-bottom fixed-top">
            <div className="container-fluid">
                {/* Brand Logo and Title */}
                <a className="navbar-brand text-light" href="/">
                    <img src="./logo192.png" alt="Brand Logo" width="30" height="30" className="d-inline-block align-text-top me-2"/>
                    Speed News
                </a>

                <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-center" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        {/* <li className="nav-item">
                            <Link className="nav-link text-light" aria-current="page" to="/">Home</Link>
                        </li> */}
                        {/* <li className="nav-item">
                            <Link className="nav-link text-light" to="/about">About</Link>
                        </li> */}
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/">General</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/entertainment">Entertainment</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/business">Business</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/science">Science</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/technology">Technology</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/health">Health</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/sports">Sports</Link>
                        </li>
                    </ul>
                </div>

                {/* <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item mb-2">
                            <a className="btn btn-outline-primary me-2" href="/">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="btn btn-primary text-white" href="/">Signup</a>
                        </li>
                    </ul>
                </div> */}
            </div>
        </nav>
    </>
    )
  }
}

export default Navbar
