import React from "react";
import "./navbar.css";
import Logo from "../../images/logo-1.2.png";
import { useState } from "react";
import { Link } from "react-scroll"; // Import from react-scroll
// To navigate to pages thorugh link import from react-router-dom
import { useNavigate } from "react-router-dom";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';



const Navbar = ({ type }) => {


  const [selectedItem, setSelectedItem] = useState("Home");
  const [showOptions, setShowOptions] = useState(false);
  const [showOptionsonHover,setShowOptionsonHover] = useState(false);
  const navigate = useNavigate();

  const handleItemClick = (itemName) => {
    setSelectedItem(itemName);
    // itemName === "Info" && navigate("/info");
    // setSelectClicked(true);
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="navBar">
      <div className="navContainer">
        <div className="logo">
          <img
            src={Logo}
            alt="logo"
            style={{ cursor: "pointer" }}
            onClick={() => { navigate("/") }} />
        </div>

        <div className="navItems">
          {type === "notFarming" &&
            <>

              <div className="items home">
                <span
                  className={selectedItem === "Home" ? "activeNavItem" : ""}
                // onClick={() => handleItemClick("Home")}
                >
                  <Link
                    to="header"
                    spy={true}
                    smooth={true}
                    offset={-70} // Adjust this offset as needed
                    duration={700}
                    // activeClass={selectedItem === "Home" ? "activeNavItem" : ""}
                    onMouseOver={() => setShowOptions(false)}
                    onClick={() => {
                      handleItemClick("Home");
                      setShowOptions(false);
                    }}
                  >
                    Home
                  </Link>
                </span>
              </div>
              <div className="items">
                <span
                  className={selectedItem === "About Us" ? "activeNavItem" : ""}
                >
                  <Link
                    to="aboutUs"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={700}
                    onMouseOver={() => setShowOptions(false)}
                    onClick={() => {
                      handleItemClick("About Us");
                      setShowOptions(false);
                    }}
                  >
                    About us
                  </Link>
                </span>
              </div>
              <div className="items">
                <span
                  className={selectedItem === "Info" ? "activeNavItem" : ""}
                  onMouseOver={() => setShowOptionsonHover(true)}
                  onMouseLeave={() => setShowOptionsonHover(false)}
                  onClick={() => {
                    handleItemClick("Info");
                    setShowOptions(!showOptions);
                  }}
                >
                  Farming <ArrowDropDownIcon style={{ fontSize: "small" }} />
                </span>
                {(showOptions || showOptionsonHover) && <div className="Farminglist" onMouseOver={() => setShowOptions(true)}>
                  <div className="options" onClick={() => { navigate("/farming") }}>Vertical</div>
                  <div className="options" onClick={() => { navigate("/farming") }}>Organic</div>
                  <div className="options" onClick={() => { navigate("/farming") }}>Precision</div>
                </div>

                }

              </div>
              <div className="items">
                <span
                  className={selectedItem === "Contact Us" ? "activeNavItem" : ""}
                >
                  <Link
                    to="contactUs"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onMouseOver={() => setShowOptions(false)}
                    onClick={() => {
                      handleItemClick("Contact Us");
                      setShowOptions(false);
                    }}
                  >
                    Contact us
                  </Link>
                </span>
              </div>

            </>
          }
        </div>


        <div className="navbtn">
          <div className="Btn">
            <button
              onClick={() => handleLogin()}
            >
              Start Here
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Navbar;