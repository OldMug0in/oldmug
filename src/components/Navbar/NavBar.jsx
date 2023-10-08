import React, { useState, useRef } from "react";
import "./NavBar.css";

function NavBar() {
  const [hambtn, setHambtn] = useState(false);

  const expandMenu = useRef(null);
  const expandMid = useRef(null);
  const hamBtn = useRef(null);

  const expand = () => {
    setHambtn(!hambtn);
    const win = window.innerWidth;
    if (hambtn === true) {
      if (win <= 800) {
        expandMid.current.classList.add("expand");
      } else {
        expandMenu.current.classList.add("expand");
      }
      hamBtn.current.classList.add("close-btn");
    } else {
      expandMenu.current.classList.remove("expand");
      expandMid.current.classList.remove("expand");
      hamBtn.current.classList.remove("close-btn");
    }
  };
  return (
    <>
      <nav>
        <div className="hamburger-btn" ref={hamBtn} onClick={expand}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
        <div className="logo">
          <h2>OldMug.in</h2>
        </div>
        <div className="mid" ref={expandMid}>
          <div className="menu" ref={expandMenu}>
            <ul>
              <li className="line-effect">
                <a href="/">HOME</a>
              </li>
              <li className="line-effect">
                <a href="/">SHOP</a>
              </li>
              <li className="line-effect">
                <a href="/">CONTACT</a>
              </li>
              <li className="line-effect">
                <a href="/">ABOUT</a>
              </li>
            </ul>
          </div>

          <div className="form-area">
            <form action="" className="search-field">
              <input
                type="text"
                className="inp-field"
                placeholder="Search Products"
              />
              <button className="search-btn" type="submit">
                SEARCH
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
