import "./Header.css";
import { Link } from "react-router-dom";
const pages = ["Home", "About us", "Contact us"];
const links = ["/", "about", "contact"];

const Header = () => {
  //
  const spheronLink = "https://chaindrive-1073aa.spheron.app/";

  return (
    // <div className="nav-bar-parent">
    <div className="nav-bar">
      <Link
        className="nav-bar-list-link"
        style={{ textDecoration: "none" }}
        to={links[0]}
      >
        CHAIN DRIVE <span>[PROTOTYPE DESIGN]</span>
      </Link>

      <div className="nav-bar-list-parent">
        <ul className="nav-bar-list">
          {/* {pages.map((page) => {
              return <li>{page}</li>;
            })} */}

          <li>
            {/* <Link
              className="nav-bar-list-link"
              style={{ textDecoration: "none" }}
              to={links[0]}
              >
              {pages[0]}
            </Link> */}
            <a
              className="nav-bar-list-link"
              style={{ textDecoration: "none" }}
              href={spheronLink}
            >
              {pages[0]}
            </a>
          </li>
          <li>
            <Link
              className="nav-bar-list-link"
              style={{ textDecoration: "none" }}
              to={links[1]}
            >
              {pages[1]}
            </Link>
          </li>
          <li>
            <Link
              className="nav-bar-list-link"
              style={{ textDecoration: "none" }}
              to={links[2]}
            >
              {pages[2]}
            </Link>
          </li>
        </ul>
      </div>
    </div>
    // </div>
  );
};

export default Header;

// import React from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.css";

// function Navbar() {
//   return (
//     <>
//     <nav>
//         <a>
//             {/* logo svg */}
//         </a>

//         <div>
//             <ul id="navbar">
//                 <li><a>Home</a></li>
//                 <li><a>Share</a></li>
//                 <li><a>About us</a></li>
//             </ul>

//         </div>
//     </nav>
//     </>
//   )
// }

// export default Navbar;
