import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { BsSearch, BsFilter } from "react-icons/bs";
import logo from "../assets/logo.png"; // Update with your logo path

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-secondary p-3">

            <div className="container-fluid">
                {/* Logo */}
                <a className="navbar-brand d-flex align-items-center" href="#">
                    <img src={logo} alt="Logo" width="40" height="40" className="me-2" />
                    <span className="fw-bold fs-4">HolidayHub</span>
                </a>

                {/* Navbar Toggler for Mobile */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar Items */}
                <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link fs-4 text-white fw-bold" href="#">Dashboard</a>
                        </li>
                        <li  style={{marginLeft:"30px",marginTop:"10px"}} className="nav-item ml-5">
                            <a  style={{backgroundColor:"white"}} className="nav-link text-black fw-bold bg-" href="#">
                                <BsSearch className="me-1" /> Search Passenger
                            </a>
                        </li>
                    </ul>

                    {/* Filter Dropdown */}
                    <div  style ={{marginRight:"700px"}}className="dropdown ">
                        <button
                            className="btn btn-light dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <BsFilter className="me-1" /> Filter
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">By Name</a></li>
                            <li><a className="dropdown-item" href="#">By Gender</a></li>
                        </ul>
                    </div>

                    {/* Profile Icon */}
                    <div>
                        <FaUserCircle size={35} className="text-white ms-3" />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
